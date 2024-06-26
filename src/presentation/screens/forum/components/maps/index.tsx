import axios from "axios";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import {
  Address,
  getCurrentLocation,
  getLocationUrl,
  GOOGLE_PLACES_API_KEY,
  Location,
} from "../../utils";

const fetchPlaceAutocomplete = async (query: string) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_PLACES_API_KEY}&language=en`;
  try {
    const response = await axios.get(url);
    return response.data.predictions;
  } catch (error) {
    console.error("Error fetching place autocomplete: ", error);
    return [];
  }
};

const fetchPlaceDetails = async (placeId: string) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_PLACES_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching place details: ", error);
    return null;
  }
};

export const MapSelector: FunctionComponent<{
  visible: boolean;
  onClose: () => void;
  onLocationSelect: (address: Address) => void;
}> = ({ visible, onClose, onLocationSelect }) => {
  const [region, setRegion] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [address, setAddress] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (visible) {
      goToCurrentLocation();
    }
  }, [visible]);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      const results = await fetchPlaceAutocomplete(text);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = async (placeId: string) => {
    const details = await fetchPlaceDetails(placeId);
    if (details) {
      const newLocation: Location = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
      setSelectedLocation(newLocation);
      setRegion(newLocation);
      const addressInfo = await getLocationUrl(
        newLocation.latitude,
        newLocation.longitude
      );
      setAddress(addressInfo.address);
      setSuggestions([]);
      setQuery(details.formatted_address);

      if (mapRef.current) {
        mapRef.current.animateToRegion(newLocation as any, 1000);
      }
    }
  };

  const goToCurrentLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      if (currentLocation) {
        const updatedRegion = {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        setRegion(updatedRegion);
        setSelectedLocation(updatedRegion);
        const addressInfo = await getLocationUrl(
          currentLocation.latitude,
          currentLocation.longitude
        );
        setAddress(addressInfo.address);

        if (mapRef.current) {
          mapRef.current.animateToRegion(updatedRegion, 1000);
        }
      } else {
        Alert.alert("Error", "Unable to fetch current location.");
      }
    } catch (error) {
      console.error("Error getting the current location: ", error);
      Alert.alert("Error", "Failed to fetch current location.");
    }
  };

  const confirmLocation = async () => {
    if (selectedLocation) {
      const addressInfo = await getLocationUrl(
        selectedLocation.latitude,
        selectedLocation.longitude
      );
      setAddress(addressInfo.address);
      onLocationSelect(addressInfo);
      onClose();
    } else {
      Alert.alert(
        "No location selected",
        "Please select a location on the map."
      );
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Autocomplete
            data={suggestions}
            defaultValue={query}
            onChangeText={handleSearch}
            placeholder="Search for places..."
            containerStyle={styles.autocompleteContainer}
            inputContainerStyle={styles.inputContainer}
            listContainerStyle={styles.suggestionsList}
            flatListProps={{
              keyExtractor: (item) => item.place_id,
              renderItem: ({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectSuggestion(item.place_id)}
                >
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </View>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          region={region as any}
          onRegionChangeComplete={setRegion}
          provider={PROVIDER_GOOGLE}
          onPress={(e) => {
            const newLocation = {
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            };
            setSelectedLocation(newLocation);
            setRegion(newLocation);
          }}
        >
          {selectedLocation && <Marker coordinate={selectedLocation} />}
        </MapView>
        <View>
          <Button title="Go to My Location" onPress={goToCurrentLocation} />
          <Button title="Confirm Location" onPress={confirmLocation} />
          <Button title="Close" onPress={onClose} />
          {address ? (
            <ResultLocation>Selected Address: {address}</ResultLocation>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  inputContainer: {
    borderWidth: 0,
  },
  suggestionsList: {
    maxHeight: 200,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

const ResultLocation = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

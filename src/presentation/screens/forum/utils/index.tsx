import axios from "axios";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { Alert } from "react-native";

export const GOOGLE_PLACES_API_KEY = "AIzaSyBTGOdz5HRvO6FpqzsUwXzwqWBXzuIGT-M";

export interface Address {
  address: string;
  googleMapsUrl: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export const getLocationUrl = async (
  latitude: number,
  longitude: number
): Promise<Address> => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`;
  try {
    const response = await axios.get(url);
    const address = response.data.results[0]?.formatted_address || "";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return { address, googleMapsUrl };
  } catch (error) {
    console.error("Error fetching location URL: ", error);
    return { address: "", googleMapsUrl: "" };
  }
};

export const getCurrentLocation = async (): Promise<Location | null> => {
  try {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return null;
    }
    const location = await getCurrentPositionAsync({});
    return location.coords;
  } catch (error) {
    console.error("Error getting location: ", error);
    Alert.alert("Error getting location");
    return null;
  }
};

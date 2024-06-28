import { useState } from "react";
import { Address } from "../../../utils";

const useLocationSelect = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedMapUrl, setSelectedMapUrl] = useState("");

  const handleLocationSelect = (addressInfo: Address) => {
    setSelectedAddress(addressInfo.address);
    setSelectedMapUrl(addressInfo.googleMapsUrl);
    setIsMapVisible(false);
  };

  return {
    isMapVisible,
    setIsMapVisible,
    selectedAddress,
    selectedMapUrl,
    setSelectedAddress,
    handleLocationSelect,
  };
};

export default useLocationSelect;

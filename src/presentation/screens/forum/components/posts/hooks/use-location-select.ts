import { useState } from 'react';
import { Address } from '../../../utils';

const useLocationSelect = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleLocationSelect = (addressInfo: Address) => {
    setSelectedAddress(addressInfo.address);
    setIsMapVisible(false);
  };

  return {
    isMapVisible,
    setIsMapVisible,
    selectedAddress,
    handleLocationSelect,
  };
};

export default useLocationSelect;

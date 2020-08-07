import { Address } from '../../../modules/order/pages/LocationDetails/index';

interface AddAddressProps {
  type: string;
  address: Address;
}

export function addAddressToOrder(address: Address): AddAddressProps {
  return {
    type: '@/ADD_ADDRESS',
    address,
  };
}

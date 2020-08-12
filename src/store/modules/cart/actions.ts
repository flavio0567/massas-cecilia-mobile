import { Address } from '../../../modules/order/pages/LocationDetails/index';

interface Product {
  amount: number;
  code: number;
  id: string;
  name: string;
  sales_price: number;
  unit: string;
}

interface AddProductProps {
  type: string;
  product: Product;
}

interface RemoveProductProps {
  type: string;
  id: string;
}

interface UpdateProductAmountProps {
  type: string;
  id: string;
  amount: number;
}

interface AddAddressProps {
  type: string;
  deliveryAddress: Address;
}

interface AddDateTimeProps {
  type: string;
  deliveryDateTime: string;
}

export function addToCart(product: Product): AddProductProps {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function addAddressToCart(deliveryAddress: Address): AddAddressProps {
  return {
    type: '@cart/ADD_ADDRESS',
    deliveryAddress,
  };
}

export function addDateTimeToCart(deliveryDateTime: string): AddDateTimeProps {
  return {
    type: '@cart/ADD_DATE_TIME',
    deliveryDateTime,
  };
}

export function removeFromCart(id: string): RemoveProductProps {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(
  id: string,
  amount: number,
): UpdateProductAmountProps {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

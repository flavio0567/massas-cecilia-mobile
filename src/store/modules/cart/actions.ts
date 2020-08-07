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

export function addToCart(product: Product): AddProductProps {
  return {
    type: '@cart/ADD',
    product,
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

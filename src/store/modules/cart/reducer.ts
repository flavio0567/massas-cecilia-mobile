type ReducerProps = {
  reducer: string;
};

interface Product {
  name: string;
  sales_price: number;
}

type StateProp = Array<{
  type: string;
  product: Product;
}>;

export default function cart(state = [], action: StateProp): ReducerProps[] {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.product, amount: 1 }];
    default:
      return state;
  }
}

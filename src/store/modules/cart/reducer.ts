import produce from 'immer';

type ReducerProps = {
  reducer: string;
};

type StateProp = Array<{
  type: string;
  payload: any;
}>;

export default function cart(state = [], action: StateProp): ReducerProps[] {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/ADD_ADDRESS':
      return produce(state, (draft) => {
        draft.push({
          ...action.order,
          deliveryAddress,
        });
      });
    case '@cart/ADD_DATE_TIME':
      return produce(state, (draft) => {
        draft.push({
          ...action.order,
          deliveryDateTime,
        });
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0 || action.amount >= 99) {
        return state;
      }

      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}

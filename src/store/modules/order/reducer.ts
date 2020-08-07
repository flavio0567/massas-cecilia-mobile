import produce from 'immer';

import { Address } from '../../../modules/order/pages/LocationDetails/index';

type ReducerProps = {
  reducer: string;
};

interface StateProp {
  type: string;
  address: Address;
}

export default function order(state = [], action: StateProp): ReducerProps[] {
  switch (action.type) {
    case '@order/ADD_ADDRESS':
      return produce(state, (draft) => {
        draft.push({
          ...action.order,
          address,
        });
      });

    default:
      return state;
  }
}

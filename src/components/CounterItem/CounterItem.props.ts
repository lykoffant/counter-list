import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { ICounter } from '../../models/counter.models';

export interface ICounterItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  counter: ICounter;
  deleteCounter: (id: ICounter['id']) => void;
  incCounterValue: (id: ICounter['id']) => void;
  decCounterValue: (id: ICounter['id']) => void;
}

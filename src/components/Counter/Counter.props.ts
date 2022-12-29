import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { CounterId, ICounter } from '../../models';

export interface ICounterProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  counter: ICounter;
  deleteCounter: (id: CounterId) => void;
  incCounterValue: (id: CounterId) => void;
  decCounterValue: (id: CounterId) => void;
}

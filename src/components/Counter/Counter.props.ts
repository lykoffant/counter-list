import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { ICounter } from '../../models';

export interface ICounterProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  counter: ICounter;
  deleteCounter: (id: number) => void;
  incCounterValue: (id: number) => void;
  decCounterValue: (id: number) => void;
}

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ICounter } from '../../models/counter.models';

export interface ICounterListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  counters: ICounter[];
  deleteCounter: (id: ICounter['id']) => void;
  incCounterValue: (id: ICounter['id']) => void;
  decCounterValue: (id: ICounter['id']) => void;
}

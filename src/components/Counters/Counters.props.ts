import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CounterList } from '../../models';

export interface ICountersProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  counters: CounterList;
  deleteCounter: (id: number) => void;
  incCounterValue: (id: number) => void;
  decCounterValue: (id: number) => void;
}

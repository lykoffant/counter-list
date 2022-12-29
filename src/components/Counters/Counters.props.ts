import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CounterId, CounterList } from '../../models';

export interface ICountersProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  counters: CounterList;
  deleteCounter: (id: CounterId) => void;
  incCounterValue: (id: CounterId) => void;
  decCounterValue: (id: CounterId) => void;
}

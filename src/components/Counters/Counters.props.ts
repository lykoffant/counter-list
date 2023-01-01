import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CounterId, ICounter } from '../../models/counter.models';

export interface ICountersProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  counters: ICounter[];
  deleteCounter: (id: CounterId) => void;
  incCounterValue: (id: CounterId) => void;
  decCounterValue: (id: CounterId) => void;
}

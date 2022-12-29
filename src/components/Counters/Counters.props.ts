import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { T_Counters } from '../../types/T_Counters';

export interface I_CountersProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  counters: T_Counters;
  deleteCounter: (id: number) => void;
  incCounterValue: (id: number) => void;
  decCounterValue: (id: number) => void;
}

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { I_Counter } from '../../interfaces/I_Counter';

import { T_Counters } from '../../types/T_Counters';

export interface I_ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  counters: T_Counters;
  addCounter: (counter: I_Counter) => void;
  incCounterValue: (id: number) => void;
  decCounterValue: (id: number) => void;
}

import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { I_Counter } from '../../interfaces/I_Counter';

export interface I_AddCounterForm
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  addCounter: (counter: I_Counter) => void;
}

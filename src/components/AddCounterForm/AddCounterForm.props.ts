import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { ICounter } from '../../models/counter.models';

export interface IAddCounterFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  addCounter: (counter: ICounter) => void;
}

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cn from 'classnames';

import { FormEvent, useState } from 'react';

import styles from './AddCounterForm.module.css';

import { IAddCounterFormProps } from './AddCounterForm.props';

import { ICounter } from '../../models/counter.models';

function AddCounterForm({
  className,
  addCounter,
  ...props
}: IAddCounterFormProps) {
  const [counterName, setCounterName] = useState<ICounter['name']>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clearedCounterName = counterName.trim().replace(/\s{2,}/g, ' ');

    if (clearedCounterName) {
      addCounter(clearedCounterName);
      setCounterName('');
    }
  };

  return (
    <form
      className={cn(className, styles['parent'])}
      onSubmit={submitHandler}
      {...props}
    >
      <input
        className={styles['input']}
        type='text'
        placeholder='Counter name'
        value={counterName}
        autoFocus
        onChange={(e) => setCounterName(e.target.value)}
      ></input>

      <button
        className={styles['button']}
        type='submit'
        aria-label='add counter'
        disabled={!counterName.trim()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export { AddCounterForm };

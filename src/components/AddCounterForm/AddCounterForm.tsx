import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cn from 'classnames';

import { FormEvent, useState } from 'react';

import styles from './AddCounterForm.module.css';
import { IAddCounterFormProps } from './AddCounterForm.props';

function AddCounterForm({
  className,
  addCounter,
  ...props
}: IAddCounterFormProps) {
  const [counterName, setCounterName] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (counterName.length > 0) {
      addCounter(counterName);
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
        disabled={!counterName}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export { AddCounterForm };

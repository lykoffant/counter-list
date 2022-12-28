import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cn from 'classnames';

import { FormEvent, useState } from 'react';

import styles from './AddCounterForm.module.css';
import { I_AddCounterForm } from './AddCounterForm.props';

function AddCounterForm({ className, addCounter, ...props }: I_AddCounterForm) {
  const [counterName, setCounterName] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    counterName &&
      addCounter({
        id: new Date().valueOf(),
        name: counterName,
        value: 0,
      });

    setCounterName('');
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

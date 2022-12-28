import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cn from 'classnames';

import styles from './Counter.module.css';

import { I_CounterProps } from './Counter.props';

function Counter({
  className,
  counter,
  incCounterValue,
  decCounterValue,
  ...props
}: I_CounterProps) {
  return (
    <li className={cn(className, styles['parent'])} {...props}>
      <span className={styles['name']}>{counter.name}</span>

      <div className={styles['actions']}>
        <button
          className={cn(styles['button'], styles['button_decrement'])}
          type='button'
          aria-label='decrement'
          disabled={counter.value === 0}
          onClick={() => decCounterValue(counter.id)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>

        <span className={styles['value']}>{counter.value}</span>

        <button
          className={cn(styles['button'], styles['button_increment'])}
          type='button'
          aria-label='increment'
          onClick={() => incCounterValue(counter.id)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
}

export { Counter };

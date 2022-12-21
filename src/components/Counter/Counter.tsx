import cn from 'classnames';

import Icon from 'react-icons-kit';

import { plus, minus } from 'react-icons-kit/fa';

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
    <li className={cn(className, styles['root'])} {...props}>
      <span className={styles['name']}>{counter.name}</span>

      <div className={styles['actions']}>
        <button
          className={cn(styles['btn'], styles['btn_decrement'])}
          type='button'
          aria-label='decrement'
          onClick={() => decCounterValue(counter.id)}
        >
          <Icon icon={minus} size={24} />
        </button>

        <span className={styles['value']}>{counter.value}</span>

        <button
          className={cn(styles['btn'], styles['btn_increment'])}
          type='button'
          aria-label='increment'
          onClick={() => incCounterValue(counter.id)}
        >
          <Icon icon={plus} size={24} />
        </button>
      </div>
    </li>
  );
}

export { Counter };

import cn from 'classnames';

import styles from './CounterList.module.css';

import { ICounterListProps } from './CounterList.props';

import { CounterItem } from '../CounterItem/CounterItem';

function CounterList({
  className,
  counters,
  deleteCounter,
  incCounterValue,
  decCounterValue,
  ...props
}: ICounterListProps) {
  return (
    <ul className={cn(className, styles['parent'])} {...props}>
      {counters.map((counter) => (
        <CounterItem
          key={counter.id}
          className={styles['counter']}
          counter={counter}
          deleteCounter={deleteCounter}
          incCounterValue={incCounterValue}
          decCounterValue={decCounterValue}
        />
      ))}
    </ul>
  );
}

export { CounterList };

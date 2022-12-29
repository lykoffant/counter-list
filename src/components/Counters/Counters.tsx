import cn from 'classnames';

import styles from './Counters.module.css';

import { ICountersProps } from './Counters.props';

import { Counter } from '../Counter/Counter';

function Counters({
  className,
  counters,
  deleteCounter,
  incCounterValue,
  decCounterValue,
  ...props
}: ICountersProps) {
  return (
    <ul className={cn(className, styles['parent'])} {...props}>
      {counters.map((counter) => (
        <Counter
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

export { Counters };

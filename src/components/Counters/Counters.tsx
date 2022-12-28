import cn from 'classnames';

import styles from './Counters.module.css';

import { I_CountersProps } from './Counters.props';

import { Counter } from '../Counter/Counter';

function Counters({
  className,
  counters,
  incCounterValue,
  decCounterValue,
  ...props
}: I_CountersProps) {
  return (
    <ul className={cn(className, styles['parent'])} {...props}>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          className={styles['counter']}
          counter={counter}
          incCounterValue={incCounterValue}
          decCounterValue={decCounterValue}
        />
      ))}
    </ul>
  );
}

export { Counters };

import cn from 'classnames';

import styles from './Content.module.css';

import { I_ContentProps } from './Content.props';

import { AddCounterForm } from '../AddCounterForm/AddCounterForm';
import { Counters } from '../Counters/Counters';

function Content({
  className,
  counters,
  addCounter,
  incCounterValue,
  decCounterValue,
  ...props
}: I_ContentProps) {
  return (
    <main className={cn(className, styles['root'])} {...props}>
      <h1 className='visually-hidden'>Counter list</h1>

      <div className={styles['container']}>
        <AddCounterForm
          className={styles['add-counter-form']}
          addCounter={addCounter}
        />

        <Counters
          className={styles['counters']}
          counters={counters}
          incCounterValue={incCounterValue}
          decCounterValue={decCounterValue}
        />
      </div>
    </main>
  );
}

export { Content };

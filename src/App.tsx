import { useState } from 'react';

import styles from './App.module.css';

import { AddCounterForm, Counters } from './components';

import { I_Counter } from './interfaces/I_Counter';
import { T_Counters } from './types/T_Counters';

function App() {
  const [counters, setCounters] = useState<T_Counters>([]);

  const addCounter = (counter: I_Counter) =>
    setCounters((prevList) => [counter, ...prevList]);

  const incCounterValue = (id: number) => {
    setCounters((prevList) =>
      prevList.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter,
      ),
    );
  };

  const decCounterValue = (id: number) => {
    setCounters((prevList) =>
      prevList.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter,
      ),
    );
  };

  return (
    <main className={styles['parent']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>Counter List</h1>
        <AddCounterForm className={styles['form']} addCounter={addCounter} />
        <Counters
          className={styles['list']}
          counters={counters}
          incCounterValue={incCounterValue}
          decCounterValue={decCounterValue}
        />
      </div>
    </main>
  );
}

export default App;

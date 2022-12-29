import { useState } from 'react';

import styles from './App.module.css';

import { AddCounterForm, Counters } from './components';

import { ICounter, CounterList } from './models';

function App() {
  const [counters, setCounters] = useState<CounterList>([]);

  const addCounter = (counter: ICounter) =>
    setCounters((prevList) => [counter, ...prevList]);

  const deleteCounter = (counterId: number) =>
    setCounters((prevList) =>
      prevList.filter((counter) => counter.id !== counterId),
    );

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
          deleteCounter={deleteCounter}
          incCounterValue={incCounterValue}
          decCounterValue={decCounterValue}
        />
      </div>
    </main>
  );
}

export default App;

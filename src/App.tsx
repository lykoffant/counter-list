import { useState } from 'react';

import styles from './App.module.css';

import { AddCounterForm, CounterList } from './components';

import { ICounter } from './models/counter.models';

function App() {
  const [counters, setCounters] = useState<ICounter[]>([]);

  const addCounter = (counter: ICounter) =>
    setCounters((prevList) => [counter, ...prevList]);

  const deleteCounter = (counterId: ICounter['id']) =>
    setCounters((prevList) =>
      prevList.filter((counter) => counter.id !== counterId),
    );

  const incCounterValue = (id: ICounter['id']) => {
    setCounters((prevList) =>
      prevList.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter,
      ),
    );
  };

  const decCounterValue = (id: ICounter['id']) => {
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
        <CounterList
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

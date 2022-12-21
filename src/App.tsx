import { useState } from 'react';

import styles from './App.module.css';

import { Content, TopBar } from './components/';
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
    <div className={styles['root']}>
      <TopBar />
      <Content
        className={styles['content']}
        counters={counters}
        addCounter={addCounter}
        incCounterValue={incCounterValue}
        decCounterValue={decCounterValue}
      />
    </div>
  );
}

export default App;

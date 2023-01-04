import { useState } from 'react';

import { ICounter } from '../models/counter.models';

function useCounters(initialCounters: ICounter[]) {
  const [counters, setCounters] = useState<ICounter[]>(initialCounters);

  const addCounter = (name: ICounter['name']) => {
    const counter = {
      id: Date.now(),
      name,
      value: 0,
    };

    setCounters((prevList) => [counter, ...prevList]);
  };

  const deleteCounter = (id: ICounter['id']) =>
    setCounters((prevList) => prevList.filter((counter) => counter.id !== id));

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

  return {
    counters,
    addCounter,
    deleteCounter,
    incCounterValue,
    decCounterValue,
  };
}

export { useCounters };

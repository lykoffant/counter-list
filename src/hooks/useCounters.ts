import { useEffect, useState } from 'react';

import { ICounter } from '../models/counter.models';

function getInitialCounters(key: string): ICounter[] {
  const countersFromLocalStorage = localStorage.getItem(key);

  if (countersFromLocalStorage) {
    return JSON.parse(countersFromLocalStorage) as ICounter[];
  }

  const initialCounters: ICounter[] = [];
  localStorage.setItem(key, JSON.stringify(initialCounters));
  return initialCounters;
}

function useCounters() {
  const countersKey = 'counters';
  const [counters, setCounters] = useState<ICounter[]>(
    getInitialCounters(countersKey),
  );

  useEffect(
    () => localStorage.setItem(countersKey, JSON.stringify(counters)),
    [counters],
  );

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

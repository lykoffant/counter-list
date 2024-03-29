import GithubCorner from 'react-github-corner';

import styles from './App.module.css';

import { AddCounterForm, CounterList } from './components';

import { useCounters } from './hooks/useCounters';

function App() {
  const {
    counters,
    addCounter,
    deleteCounter,
    incCounterValue,
    decCounterValue,
  } = useCounters();

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
      <GithubCorner
        href='https://github.com/lykoffant/counter-list'
        size={60}
      />
    </main>
  );
}

export default App;

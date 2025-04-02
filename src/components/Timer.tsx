import { useEffect, useState } from 'react';
import useGameStore from '../store/store';

function Timer() {
  const GameStore = useGameStore();

  const [timer, setTimer] = useState(20);

  useEffect(() => {
    if (
      GameStore.restartMode === false &&
      GameStore.timesUpMode === false &&
      GameStore.gameCompleteMode === false
    ) {
      if (timer !== 0) {
        setTimeout(() => {
          setTimer((timer) => timer - 1);
        }, 1000);
      } else {
        GameStore.timesUp();
        setTimer(20);
      }
    } else {
      setTimer(20);
    }
  }, [
    GameStore.restartMode,
    timer,
    GameStore.timesUpMode,
    GameStore.gameCompleteMode,
  ]);

  return (
    <>
      <p className='mt-4'>{timer}</p>
    </>
  );
}

export default Timer;

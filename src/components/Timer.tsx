import { useEffect, useState } from 'react';
import useGameStore from '../store/store';

function Timer() {
  const GameStore = useGameStore();

  const [timer, setTimer] = useState(60);

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
        setTimer(60);
      }
    } else {
      setTimer(60);
    }
  }, [
    GameStore.restartMode,
    timer,
    GameStore.timesUpMode,
    GameStore.gameCompleteMode,
  ]);

  return (
    <>
      {timer < 10 ? (
        <p className='font-semibold text-right'>00:0{timer}</p>
      ) : (
        <p className='font-semibold text-right'>00:{timer}</p>
      )}
    </>
  );
}

export default Timer;

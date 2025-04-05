import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';
import useGameStore from '../store/store.ts';
import PrimaryBtn from './PrimaryBtn.tsx';
import ProgressBar from './ProgressBar.tsx';
import Timer from './Timer.tsx';
import { useEffect, useState } from 'react';

function GameStart() {
  const GameStore = useGameStore();

  const [randomizeAnswers, setRandomizeAnswers] = useState(['']);

  useEffect(() => {
    const shuffledAnswers = [...GameStore.currentOptions].sort(
      () => Math.random() - 0.5
    );

    setRandomizeAnswers(shuffledAnswers);
  }, [GameStore.currentOptions]);

  return (
    <main className='flex flex-col items-center gap-4 p-4 justify-center bg-background text-text'>
      <div className='flex flex-col w-full md:max-w-[500px]'>
        <Timer />
        <div className='flex justify-between mt-4 mb-1 '>
          <h3 className='text-text-600'>
            Question: {GameStore.currentQuestionIndex + 1}/{questions.length}
          </h3>
          <h3 className=''>
            Score: <strong>{GameStore.score}</strong>
          </h3>
        </div>

        <ProgressBar
          progressValue={
            (GameStore.currentQuestionIndex / (questions.length - 1)) * 100
          }
        />
      </div>

      <h2 className='mt-8 font-bold text-center text-2xl'>
        {GameStore.currentQuestion}
      </h2>

      {GameStore.restartMode ? (
        <div className='flex flex-col justify-center items-center gap-4'>
          <h3 className='text-center'>
            Correct answer: <strong>{GameStore.correctAnswer}</strong>
          </h3>
          <h3 className='text-center'>
            Final score: <strong>{GameStore.score}</strong>
            <strong> / {questions.length}</strong>
          </h3>
          <PrimaryBtn text='Restart' onClick={GameStore.restartGame} />
          <PrimaryBtn text='Menu' onClick={GameStore.goToStartScreen} />
        </div>
      ) : GameStore.gameCompleteMode ? (
        <div className='flex flex-col justify-center items-center gap-4'>
          <h3 className='text-center'>
            Final score: <strong>{GameStore.score}</strong>
            <strong> / {questions.length}</strong>
          </h3>
          <PrimaryBtn text='Play again' onClick={GameStore.restartGame} />
          <PrimaryBtn text='Menu' onClick={GameStore.goToStartScreen} />
        </div>
      ) : GameStore.timesUpMode ? (
        <div className='flex flex-col justify-center items-center gap-4'>
          <h3 className='text-center'>
            Final score: <strong>{GameStore.score}</strong>
            <strong> / {questions.length}</strong>
          </h3>
          <PrimaryBtn text='Restart' onClick={GameStore.restartGame} />
          <PrimaryBtn text='Menu' onClick={GameStore.goToStartScreen} />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4 mt-4 w-full md:max-w-2xl'>
          {randomizeAnswers.map((option, index) => (
            <AnswerBtn answer={option} key={index} />
          ))}
        </div>
      )}
    </main>
  );
}

export default GameStart;

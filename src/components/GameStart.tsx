import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';
import useGameStore from '../store/store.ts';

function GameStart() {
  const GameStore = useGameStore();

  return (
    <main className='flex flex-col items-center gap-4 justify-center h-screen bg-background text-text'>
      <h3 className='text-text-600'>
        Progress: {GameStore.currentQuestionIndex + 1}/{questions.length}
      </h3>
      <h3 className=''>Score: {GameStore.score}</h3>
      <h2 className='font-bold text-center text-4xl'>
        {GameStore.currentQuestion}
      </h2>
      {GameStore.restartMode ? (
        <div>
          <h3 className='text-center'>
            Correct answer: {GameStore.correctAnswer}
          </h3>
          <button
            className='p-8 mt-8 min-w-80 bg-secondary text-text rounded-full font-semibold text-2xl hover:bg-secondary/80  transition duration-200 ease-in-out cursor-pointer active:scale-95 hover:scale-105'
            onClick={GameStore.restartGame}
          >
            Restart
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4 mt-8'>
          {GameStore.currentOptions.map((option, index) => (
            <AnswerBtn answer={option} key={index} />
          ))}
        </div>
      )}
    </main>
  );
}

export default GameStart;

import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';
import useGameStore from '../store/store.ts';

function GameStart() {
  const GameStore = useGameStore();

  return (
    <main className='flex flex-col items-center justify-center h-screen bg-background text-text'>
      {/* <h2 className='font-bold text-4xl'>{currentQuestion.question}</h2>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {currentQuestion.options.map((option, index) => (
          <AnswerBtn answer={option} key={index} />
        ))}
      </div> */}

      <div>
        <p>Count: {GameStore.score}</p>
        <button onClick={GameStore.increment}>Add one</button>
        <button onClick={GameStore.decrement}>Remove one</button>
      </div>
    </main>
  );
}

export default GameStart;

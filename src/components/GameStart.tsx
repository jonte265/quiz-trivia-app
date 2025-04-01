import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';
import useGameStore from '../store/store.ts';

function GameStart() {
  const GameStore = useGameStore();

  return (
    <main className='flex flex-col items-center gap-4 justify-center h-screen bg-background text-text'>
      <h3 className='font-semibold'>Count: {GameStore.score}</h3>
      <h3 className='font-semibold'>
        Progress: {GameStore.currentQuestionIndex}/{questions.length}
      </h3>
      <h2 className='font-bold text-4xl'>{GameStore.currentQuestion}</h2>

      <div className='grid grid-cols-2 gap-4 mt-8'>
        {GameStore.currentOptions.map((option, index) => (
          <AnswerBtn answer={option} key={index} />
        ))}
      </div>
    </main>
  );
}

export default GameStart;

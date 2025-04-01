import useGameStore from '../store/store.ts';

function AnswerBtn({ answer }) {
  const GameStore = useGameStore();

  return (
    <button
      onClick={() => GameStore.nextAnswer(answer)}
      className='p-8 min-w-80 bg-primary text-text rounded-full font-semibold text-2xl hover:bg-primary/80  transition duration-200 ease-in-out cursor-pointer active:scale-95 hover:scale-105'
    >
      {answer}
    </button>
  );
}

export default AnswerBtn;

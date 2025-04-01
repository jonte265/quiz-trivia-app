import useGameStore from '../store/store.ts';

type AnswerBtnProps = {
  answer: string;
};

function AnswerBtn({ answer }: AnswerBtnProps) {
  const GameStore = useGameStore();

  return (
    <button
      onClick={() => GameStore.nextAnswer(answer)}
      className='p-6 sm:p-8 text-center text-2xl font-semibold bg-primary text-text rounded-full hover:bg-primary/80  transition duration-200 ease-in-out cursor-pointer active:scale-95 hover:scale-105'
    >
      {answer}
    </button>
  );
}

export default AnswerBtn;

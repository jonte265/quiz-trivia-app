import useGameStore from '../store/store.ts';

type AnswerBtnProps = {
  answer: string;
};

function AnswerBtn({ answer }: AnswerBtnProps) {
  const GameStore = useGameStore();

  return (
    <button
      onClick={() => GameStore.nextAnswer(answer)}
      className='py-4 font-semibold bg-text text-background rounded-full hover:bg-text/80  transition duration-200 ease-in-out cursor-pointer active:scale-98 hover:scale-102'
    >
      {answer}
    </button>
  );
}

export default AnswerBtn;

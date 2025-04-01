function AnswerBtn({ answer }) {
  return (
    <button className='p-8 bg-primary text-text rounded-4xl font-semibold text-2xl hover:bg-primary/80  transition duration-200 ease-in-out cursor-pointer active:scale-95 hover:scale-105'>
      {answer}
    </button>
  );
}

export default AnswerBtn;

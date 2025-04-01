import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';

function GameStart() {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-background text-text'>
      <h2 className='font-bold text-4xl'>{questions[0].question}</h2>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {questions[0].options.map((options, index) => (
          <AnswerBtn answer={options} key={index} />
        ))}
      </div>
    </main>
  );
}

export default GameStart;

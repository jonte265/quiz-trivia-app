import AnswerBtn from './AnswerBtn';
import questions from '../data/questions.json';
import { useState } from 'react';

function GameStart() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  function checkAnswer(answer) {
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! Your score is ${score}`);

      setCurrentQuestionIndex(0);
      setScore(0);
    }
  }

  return (
    <main className='flex flex-col items-center justify-center h-screen bg-background text-text'>
      <h2 className='font-bold text-4xl'>{currentQuestion.question}</h2>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {currentQuestion.options.map((option, index) => (
          <AnswerBtn answer={option} key={index} />
        ))}
      </div>
      <p>Score: {score}</p>
    </main>
  );
}

export default GameStart;

import { create } from 'zustand';
import questions from '../data/questions.json';

type GameStoreType = {
  score: number;
  currentQuestionIndex: number;
  currentQuestion: string;
  currentOptions: string[];
  correctAnswer: string;

  restartMode: boolean;
  nextAnswer: () => void;
  restartGame: () => void;
};

const useGameStore = create<GameStoreType>((set) => ({
  score: 0,
  currentQuestionIndex: 0,

  currentQuestion: questions[0].question,
  currentOptions: questions[0].options,
  correctAnswer: questions[0].answer,

  restartMode: false,

  nextAnswer: (answer: string) =>
    set((state) => {
      // Check if no more questions
      if (state.currentQuestionIndex >= questions.length - 1) {
        return { currentQuestion: 'No more questions' };
      }

      // Check correct answer
      const isCorrect = answer === state.correctAnswer;
      const nextIndex = state.currentQuestionIndex + 1;

      if (isCorrect) {
        return {
          currentQuestionIndex: nextIndex,

          score: state.score + 1,

          currentQuestion: questions[nextIndex].question,
          currentOptions: questions[nextIndex].options,
          correctAnswer: questions[nextIndex].answer,
        };
      } else {
        return {
          currentQuestion: 'Wrong, Game over',
          restartMode: true,
        };
      }
    }),

  restartGame: () =>
    set(() => ({
      score: 0,
      currentQuestionIndex: 0,
      currentQuestion: questions[0].question,
      currentOptions: questions[0].options,
      correctAnswer: questions[0].answer,
      restartMode: false,
    })),
}));

export default useGameStore;

import { create } from 'zustand';
import questions from '../data/questions.json';

type GameStoreType = {
  score: number;
  currentQuestionIndex: number;
  currentQuestion: string;
  currentOptions: string[];
  correctAnswer: string;

  restartMode: boolean;
  nextAnswer: (answer: string) => void;
  restartGame: () => void;
};

const useGameStore = create<GameStoreType>((set) => ({
  score: 0,
  currentQuestionIndex: 0,

  currentQuestion: questions[0].question,
  currentOptions: questions[0].options,
  correctAnswer: questions[0].answer,

  restartMode: false,

  nextAnswer: (answer) =>
    set((state) => {
      // Check correct answer
      const isCorrect = answer === state.correctAnswer;
      const nextIndex = state.currentQuestionIndex + 1;

      if (isCorrect) {
        // Check if no more questions
        if (state.currentQuestionIndex >= questions.length - 1) {
          return {
            score: state.score + 1,
            currentQuestion: 'No more questions',
          };
        }

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

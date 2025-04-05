import { create } from 'zustand';
import questions from '../data/questions.json';

// Function to mix questions json
function shuffleQuestions() {
  return [...questions].sort(() => Math.random() - 0.5);
}

type GameStoreType = {
  score: number;
  currentQuestionIndex: number;
  currentQuestion: string;
  currentOptions: string[];
  correctAnswer: string;
  restartMode: boolean;
  gameCompleteMode: boolean;
  timesUpMode: boolean;
  homeScreen: boolean;
  nextAnswer: (answer: string) => void;
  restartGame: () => void;
  timesUp: () => void;
  homeScreenStartGame: () => void;
};

const useGameStore = create<GameStoreType>((set) => {
  const shuffledQuestions = shuffleQuestions();

  return {
    score: 0,
    currentQuestionIndex: 0,

    currentQuestion: shuffledQuestions[0].question,
    currentOptions: shuffledQuestions[0].options,
    correctAnswer: shuffledQuestions[0].answer,

    restartMode: false,
    gameCompleteMode: false,
    timesUpMode: false,
    homeScreen: true,

    nextAnswer: (answer) =>
      set((state) => {
        // Check correct answer
        const isCorrect = answer === state.correctAnswer;
        const nextIndex = state.currentQuestionIndex + 1;

        if (isCorrect) {
          // Check if no more questions
          if (nextIndex >= shuffledQuestions.length) {
            return {
              score: state.score + 1,
              currentQuestion: 'Game Complete! 🎉',
              gameCompleteMode: true,
            };
          }

          return {
            currentQuestionIndex: nextIndex,
            score: state.score + 1,
            currentQuestion: shuffledQuestions[nextIndex].question,
            currentOptions: shuffledQuestions[nextIndex].options,
            correctAnswer: shuffledQuestions[nextIndex].answer,
          };
        } else {
          return {
            currentQuestion: 'Wrong answer! Game Over ❌',
            restartMode: true,
          };
        }
      }),

    restartGame: () =>
      set(() => {
        const newShuffledQuestions = shuffleQuestions();

        return {
          score: 0,
          currentQuestionIndex: 0,
          currentQuestion: newShuffledQuestions[0].question,
          currentOptions: newShuffledQuestions[0].options,
          correctAnswer: newShuffledQuestions[0].answer,
          restartMode: false,
          gameCompleteMode: false,
          timesUpMode: false,
        };
      }),

    timesUp: () =>
      set(() => {
        return {
          currentQuestion: 'Times up! Game Over 🚨',
          timesUpMode: true,
        };
      }),

    homeScreenStartGame: () =>
      set(() => {
        return {
          homeScreen: false,
        };
      }),
  };
});

export default useGameStore;

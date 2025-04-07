import { create } from 'zustand';
import questions from '../data/questions.json';
import food from '../data/food.json';
import general from '../data/general.json';
import movies from '../data/movies.json';
import music from '../data/music.json';
import sports from '../data/sports.json';

// Function to mix questions json
function shuffleQuestions(cat) {
  let newShuffle;
  if (cat === 'food') {
    return (newShuffle = food);
  } else if (cat === 'movies') {
    return (newShuffle = movies);
  } else if (cat === 'general') {
    return (newShuffle = general);
  } else if (cat === 'music') {
    return (newShuffle = music);
  } else if (cat === 'sports') {
    return (newShuffle = sports);
  } else {
  }
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
  categoryPicked: string;
  nextAnswer: (answer: string) => void;
  pickCategory: (answer: string) => void;
  restartGame: () => void;
  timesUp: () => void;
  homeScreenStartGame: () => void;
  goToStartScreen: () => void;
};

const useGameStore = create<GameStoreType>((set) => {
  const shuffledQuestions = shuffleQuestions('food');

  return {
    score: 0,
    currentQuestionIndex: 0,
    categoryPicked: 'Not picked',

    currentQuestion: shuffledQuestions[0].question,
    currentOptions: shuffledQuestions[0].options,
    correctAnswer: shuffledQuestions[0].answer,

    restartMode: false,
    gameCompleteMode: false,
    timesUpMode: false,
    homeScreen: true,

    pickCategory: (category) =>
      set(() => {
        return {
          categoryPicked: category,
        };
      }),

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
        const newShuffledQuestions = shuffleQuestions('music');

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

    //Home screen start game and restart settings
    homeScreenStartGame: () =>
      set(() => {
        const newShuffledQuestions = shuffleQuestions('sports');

        return {
          homeScreen: false,

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

    goToStartScreen: () =>
      set(() => {
        return {
          homeScreen: true,
        };
      }),
  };
});

export default useGameStore;

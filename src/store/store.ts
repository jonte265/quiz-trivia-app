import { create } from 'zustand';

type GameStoreType = {
  score: number;
  increment: () => void;
  decrement: () => void;
};

const useGameStore = create<GameStoreType>((set) => ({
  score: 0,
  increment: () => set((state) => ({ score: state.score + 1 })),

  decrement: () => set((state) => ({ score: state.score - 1 })),
}));

export default useGameStore;

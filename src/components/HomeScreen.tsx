import PrimaryBtn from './PrimaryBtn';
import useGameStore from '../store/store.ts';

function HomeScreen() {
  const GameStore = useGameStore();

  return (
    <main className='flex flex-col items-center gap-4 p-4 justify-center bg-background text-text'>
      <h1 className='font-bold text-center text-2xl'>
        Answer 10 questions, beat the timer, and check your score!
      </h1>
      <PrimaryBtn text='Start Now' onClick={GameStore.homeScreenStartGame} />
    </main>
  );
}

export default HomeScreen;

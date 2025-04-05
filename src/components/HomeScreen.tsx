import PrimaryBtn from './PrimaryBtn';
import useGameStore from '../store/store.ts';
import categories from '../data/categories.json';

function HomeScreen() {
  const GameStore = useGameStore();

  return (
    <main className='flex flex-col items-center gap-4 p-4 justify-center bg-background text-text'>
      <h1 className='font-bold text-center text-2xl'>
        Answer 10 questions, beat the timer, and check your score!
      </h1>
      <h2>Pick a category:</h2>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => GameStore.pickCategory(category.id)}
            className='py-4 w-full font-semibold bg-text text-background rounded-full hover:bg-text/80  transition duration-200 ease-in-out cursor-pointer active:scale-98 hover:scale-102'
          >
            {category.name}
          </button>
        ))}
      </div>

      <PrimaryBtn text='Start Now' onClick={GameStore.homeScreenStartGame} />
    </main>
  );
}

export default HomeScreen;

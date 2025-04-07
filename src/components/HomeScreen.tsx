import PrimaryBtn from './PrimaryBtn';
import useGameStore from '../store/store.ts';
import categories from '../data/categories.json';
import { useState } from 'react';

function HomeScreen() {
  const GameStore = useGameStore();

  const [selectedCategory, setSelectedCategory] = useState<string>();

  function handleSelect(e) {
    const category = e.target.value;
    setSelectedCategory(category);
    GameStore.pickCategory(category);
  }

  return (
    <main className='flex flex-col items-center gap-4 p-4 justify-center bg-background text-text'>
      <h1 className='font-bold text-center text-2xl'>
        Answer 10 questions, beat the timer, and check your score!
      </h1>
      <h2>Pick a category:</h2>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <select
          onChange={handleSelect}
          className='py-2 px-4 font-semibold bg-text text-background
  rounded-full hover:bg-text/80 transition duration-200 ease-in-out
  cursor-pointer'
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <p>{selectedCategory}</p>
      </div>

      <PrimaryBtn text='Start Now' onClick={GameStore.homeScreenStartGame} />
    </main>
  );
}

export default HomeScreen;

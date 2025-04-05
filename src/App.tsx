import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import GameStart from './components/GameStart';
import useGameStore from './store/store.ts';
import HomeScreen from './components/HomeScreen.tsx';

function App() {
  const GameStore = useGameStore();

  return (
    <>
      <NavHeader />
      {GameStore.homeScreen ? <HomeScreen /> : <GameStart />}

      <Footer />
    </>
  );
}

export default App;

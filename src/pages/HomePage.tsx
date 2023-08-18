import Game from "../components/Game";
import Header from "../components/Header";
import Rules from "../components/Rules";

const HomePage = () => {
  return (
    <main className="p-[1rem]">
      <Header />
      <Game />
      <Rules />
    </main>
  );
};

export default HomePage;

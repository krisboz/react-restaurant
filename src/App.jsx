import "./App.scss";
import FoodSection from "./components/FoodSection";
import Header from "./components/Header";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <FoodSection category={"pizzas"} />
        <FoodSection category={"snacks"} />
        <FoodSection category={"salads"} />
        <FoodSection category={"deserts"} />
        <FoodSection category={"drinks"} />
      </main>
    </div>
  );
}

export default App;

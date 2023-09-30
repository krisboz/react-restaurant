import "./App.scss";
import FoodSection from "./components/FoodSection";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div id="app">
        <Header />
        <main>
          <FoodSection category={"pizzas"} />
          <FoodSection category={"snacks"} />
          <FoodSection category={"salads"} />
          <FoodSection category={"deserts"} />
          <FoodSection category={"drinks"} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

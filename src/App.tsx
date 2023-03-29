import { Cart } from "components/Cart";
import { Header } from "components/Layout/Header";
import { Hero } from "components/Layout/Hero";
import { Meals } from "components/Meals";
import { useState } from "react";
import CartContextProvider from "store/CartContextProvider";



const App = () => {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  const showCartHandler = () => {
    setCartIsVisible(!cartIsVisible)
  }
  const closeCartHandler = () => {
    setCartIsVisible(false)
  }


  return (
    <div className="App">
      <CartContextProvider>
        <Header showCartHandler={showCartHandler} />
        <main>
          <Hero />
          <Meals />
          {cartIsVisible && <Cart closeCartHandler={closeCartHandler} />}
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;

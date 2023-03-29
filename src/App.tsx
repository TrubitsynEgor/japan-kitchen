import { Cart } from "components/Cart";
import { Header } from "components/Layout/Header";
import { Hero } from "components/Layout/Hero";
import { Meals } from "components/Meals";
import { Modal } from "components/UI/Modal";



const App = () => {

  return (
    <div className="App">
      <Header className='AppHeader' />
      <Hero className='AppHero' />
      <Meals className="AppMeals" />
      <Modal>
        <Cart />
      </Modal>
    </div>
  );
}

export default App;

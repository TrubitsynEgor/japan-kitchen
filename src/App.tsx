import { Header } from "components/Layout/Header";
import { Hero } from "components/Layout/Hero";
import { Meals } from "components/Meals";



const App = () => {

  return (
    <div className="App">
      <Header className='AppHeader' />
      <Hero className='AppHero' />
      <Meals className="AppMeals" />
    </div>
  );
}

export default App;

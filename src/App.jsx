import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import FourOhFour from "./views/FourOhFour";
import PizzaMenu from "./views/PizzaMenu";
import PizzaDetails from "./views/PizzaDetails";
import Cart from "./views/Cart";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='*' element={ <FourOhFour /> }/>
        <Route path='/pizza' element={ <PizzaMenu />} />
        <Route path='/pizza/:id' element={ <PizzaDetails />} />
        <Route path='/carrito' element={ <Cart />} />
      </Routes>
    </>
  )
}

export default App

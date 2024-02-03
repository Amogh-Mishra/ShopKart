import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
        <AppContext>
          <Header/>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/product/:id" element={<SingleProduct/>}/>
          </Routes>
        </AppContext>
    </BrowserRouter>
  );
}

export default App;

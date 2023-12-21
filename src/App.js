import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./home/Home";
import Browse from "./browse/Browse";
import Error from "./404/Error";
import Cart from "./cart/Cart";
import ItemDetail from "./browse/detail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="browse/:itemId" element={<ItemDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

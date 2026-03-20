import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<Info />} />
            <Route path="/prodotti" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SuccessfulSubscribe from "./pages/SuccessfulSubscribe"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/successful-subscribe" element={<SuccessfulSubscribe/>} />
    </Routes>
  )
}

export default App

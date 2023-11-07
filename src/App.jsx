import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Todo from "./pages/todo"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App

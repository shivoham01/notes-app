import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import SavedNotes from "./pages/SavedNotes";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-notes" element={<SavedNotes/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
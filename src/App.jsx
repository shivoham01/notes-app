import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import HomePage from "./components/HomePage";
import PinnedNotes from "./pages/PinnedNotes";
import About from "./pages/About";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pinned-notes" element={<PinnedNotes/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
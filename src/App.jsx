import { BookmarkProvider } from "./context/BookmarkContext";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import SavedPage from './pages/SavedPage';
import JobDetailPage from "./pages/JobDetailPage";

const App = () => {
    return (
        <div>
        <BookmarkProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/saved" element={<SavedPage />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
            </Routes>
        </BookmarkProvider>
        </div>
    )
}

export default App;
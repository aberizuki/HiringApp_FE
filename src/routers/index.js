import {BrowserRouter as Router, Routes, Route, Navigate, redirect} from 'react-router-dom';
import Home from 'src/pages/Home';
import ProfilePortofolio from 'src/pages/Pofile-Portofolio';
import Hire from 'src/pages/Hire';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile-portofolio" element={<ProfilePortofolio/>}/>
                <Route path="/hire-page" element={<Hire/>}/>
            </Routes>
        </Router>
    )
}


export default App;
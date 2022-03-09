import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Other from '../pages/Other';
import Project from '../pages/Project';


const Content = () => {
    return(
        <main id='main' className="Content">
            <div className="content-wrap">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/other" element={<Other />} />
                </Routes>
            </div>
        </main>
    );
};

export default Content;
import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Other from '../pages/Other';
import Project from '../pages/Project';
import ProjectView from '../pages/ProjectView';

export const ProjectListContext = React.createContext();

const Content = () => {
    const [data, setData] = useState("");

    const getData = async() => {
        const response = await fetch('https://my-json-server.typicode.com/yeooji/Portfolio_DB/project').then((res) => res.json());
        
        setData(response);
    };

    useEffect(() => {
        getData();
    },[]);

    return(
        <ProjectListContext.Provider value={data}>
        <main id='main' className="Content">
            <div className="content-wrap">
                <Routes>
                    <Route path="/" exact={true} element={<Home />} />
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route exact path='/project/:id' element={<ProjectView />} />
                    <Route path="/other" element={<Other />} />
                </Routes>
            </div>
        </main>
        </ProjectListContext.Provider>
    );
};

export default Content;
import ProjectList from './ProjectList';

const Project = () => {
    return(
        <div className="Project">
            <div className="page-info">
                <h2 className="main-title">Project</h2>
                <em className="sub-title">My Recent Works</em>
            </div>
            <ProjectList />
        </div>
    );
};

export default Project;
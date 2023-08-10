import { getPortfolio, getProjects } from "../api/api";
import ProjectsSection from "../components/ProjectsSection";
import React from "react";

function Home() {
    const [projects, setProjects] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjects();
            setProjects(projectsData);
        }
        fetchData();
    }, []);

    return (
        <ProjectsSection projects={projects} />
    );
}

export default Home;

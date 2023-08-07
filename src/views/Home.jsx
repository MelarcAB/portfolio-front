import { getPortfolio, getProjects } from "../api/api";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/ProjectsSection";
import React from "react";



function Home() {
    const [portfolio, setPortfolio] = React.useState(null);
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const portfolioData = await getPortfolio();
            const projectsData = await getProjects();

            setPortfolio(portfolioData);
            setProjects(projectsData);
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4">

            <Header portfolio={portfolio} />

            <AboutMe portfolio={portfolio} />
            <ProjectsSection projects={projects} />
        </div>
    );
}

export default Home;

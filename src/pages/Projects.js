import { useState, useEffect } from "react";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
    const [projectsHTML, setProjectsHTML] = useState(null)

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect (() => {
    getProjectsData()
  }, [])

  const dataToHTML = () =>{
    return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
    ))
  }

  useEffect(() =>{
    if (projects) {
        setProjectsHTML(dataToHTML())
    }
  }, [projects])

  return projects ? projectsHTML : <h1>Loading...</h1> 
}

export default Projects;

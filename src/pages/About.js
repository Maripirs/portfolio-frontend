import { useEffect, useState } from "react";

const About = (props) => {
  const [about, setAbout] = useState(null);
  const [aboutHTML, setAboutHTML] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const dataToHTML = () => {
    return (
      <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    );
  };

  useEffect(() => {
    if (about) {
        setAboutHTML(dataToHTML())
    }
  }, [about]);

  return about ? aboutHTML : <h1>Loading...</h1>;

}

export default About;

import { useEffect, useState } from 'react';
import axios from 'axios';
//Icons
import { BiLinkExternal } from "react-icons/bi";
//Components
import RepoCard from '../Components/RepoCard';
//Css
import '../Styles/Containers/Projects.css';
//Animation
import { Slide } from "react-awesome-reveal";

const Projects = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://api.github.com/users/emrekaraa/repos');
        setData(response.data);
    }




    useEffect(() => {
        getData();
    }, [])


    return (
        <div className='bg-primary' id='projects'>
            <div className='projects-container'>
                <div className='flex justify-between'>
                    <h2 className='text-4xl text-textColor2 font-bold text-center mb-3'>Projects </h2>
                    <a href="https://github.com/emrekaraa" target="_blank" rel="noreferrer" className='flex items-center text-textColor1'>See more <BiLinkExternal className='ml-2' /></a>
                </div>
                <Slide triggerOnce>
                    <div className="repos">
                        {data?.filter(
                            x =>
                                x.id === 442891439 ||
                                x.id === 436012913 ||
                                x.id === 434198125 ||
                                x.id === 438756592 ||
                                x.id === 437356394 ||
                                x.id === 422259079,
                        ).map(repo => (
                            <RepoCard key={repo.id} name={repo.name} desc={repo.description} url={repo.html_url} stars={repo.stargazers_count} language={repo.language} forks={repo.forks_count} topics={repo.topics} />
                        ))}
                    </div>
                </Slide>
            </div>
        </div>
    )
};

export default Projects;

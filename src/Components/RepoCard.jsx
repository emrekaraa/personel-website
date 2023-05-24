//Css
import '../Styles/Components/RepoCard.css';
//Icons
import { BiGitRepoForked } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
//Animations
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';

const RepoCard = ({ name, desc, url, stars, language, forks, topics }) => {

    return (
        <>
            <a href={`${url}`} className='repo-card'>
                <h3 className={`text-lg font-bold flex items-center text-textColor4`}>{name}<span className='ml-2'><GoLinkExternal /></span></h3>
                <p className='text-sm mt-2 lg:min-h-[45px]'>{desc}</p>
                <div className='mt-2 flex flex-wrap'>{topics.map((topic) => {
                    return <span key={topic} className='topic'>{topic}</span>
                })}</div>

                <div className='flex items-center mt-10'>
                    <p className='flex items-center mr-2.5'><span className={`circle ${language === "JavaScript" ? "bg-yellow-400" : language === "CSS" || "SCSS" ? "bg-pink-500" : "bg-blue-500"}`}></span>{language}</p>
                    <span className='flex items-center mr-2.5'><span className='mr-0.5'><AiOutlineStar /></span>{stars}</span>
                    <span className='flex items-center mr-2.5'><span className='mr-0.5'><BiGitRepoForked /></span>{forks}</span>

                    <div className='flex flex-auto justify-end items-center'>
                        <span className='border rounded-full p-1'>
                            <UseAnimations animation={github} size={26} strokeColor="white" autoPlay={true} loop={true} />
                        </span>
                    </div>
                </div>
            </a>


        </>
    )
};

export default RepoCard;


// Css
import "../Styles/Containers/TechStack.css";
// Animations
import { JackInTheBox } from "react-awesome-reveal";

// Icons
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiReact,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div className="bg-secondary" id="tech-stack">
      <div className="container lg:px-48 py-14">
        <h2 className="text-4xl text-textColor2 font-bold text-center">
          Tech Stack
        </h2>
        <ul className="tech-items">
          <JackInTheBox triggerOnce duration={1000}>
            <li className="tech-item">
              <span>
                <IoLogoHtml5 className="text-red-500 mr-2" />
              </span>
              HTML5
            </li>
            <li className="tech-item">
              <span>
                <IoLogoCss3 className="text-blue-400 mr-2" />
              </span>
              CSS3
            </li>
            <li className="tech-item">
              <span>
                <IoLogoSass className="text-pink-400 mr-2" />
              </span>
              Sass
            </li>
            
            <li className="tech-item">
              <span>
                <SiTailwindcss className="text-blue-400 mr-2" />
              </span>
              Tailwind
            </li>

            <li className="tech-item">
              <span>
                <IoLogoJavascript className="text-yellow-300 mr-2" />
              </span>
              JavaScript
            </li>
            <li className="tech-item">
              <span>
                <SiTypescript className="text-cyan-600 mr-2 text-xl" />
              </span>
              TypeScript
            </li>
            <li className="tech-item">
              <span>
                <SiReact className="text-sky-500 mr-2" />
              </span>
              React.js
            </li>
            <li className="tech-item">
              <span>
                <SiNextdotjs className="text-white mr-2 text-xl" />
              </span>
              NextJs
            </li>
            <li className="tech-item">
              <span>
                <SiRedux className="text-purple-400 mr-2 text-xl" />
              </span>
              Redux
            </li>
            <li className="tech-item">
              <span>
                <SiReact className="text-sky-500 mr-2" />
              </span>
              React Native
            </li>
            <li className="tech-item">
              <span>
                <SiNodedotjs className="text-green-400 mr-2 text-xl" />
              </span>
              Node.js
            </li>
            <li className="tech-item">
              <span>
                <SiMongodb className="text-green-400 mr-2 text-xl" />
              </span>
              MongoDb
            </li>
          </JackInTheBox>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;

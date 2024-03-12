//import Html from "../assets/html-5.png";
import Js from "../assets/js.png";
//import Css from "../assets/social.png";
import Node from "../assets/node-js.png";
import Physics from "../assets/physics.png";
//import Vs from "../assets/visual-studio.png";
import Rd from "../assets/responsive-design.png";
import Bootstrap from "../assets/bootstrap.png";
import Api from "../assets/api.png";
import MoongoDb from "../assets/mongodb.png";
import Next from "../assets/next-jj.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Bulma from "../assets/bulma.png";

const Skills = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-6 skill_set_img">
                <img src={Physics} alt="React" className="mx-auto p-2.5 rounded-md" />
                <img src={Next} alt="Next.js" className="mx-auto p-2.5 rounded-md" />
                <img src={Js} alt="Java Script" className="mx-auto p-2.5 rounded-md" />
                <img src={Redux} alt="Redux" className="mx-auto p-2.5 rounded-md" />
                <img src={Node} alt="Node and Express" className="mx-auto p-2.5 rounded-md" />
                <img src={Api} alt="Api" className="mx-auto p-2.5 rounded-md" />
                <img src={MoongoDb} alt="MongoDb" className="mx-auto p-2.5 rounded-md" />
                <img src={Github} alt="Git & Github" className="mx-auto p-2.5 rounded-md" />
                <img src={Rd} alt="Responsive Desgin" className="mx-auto p-2.5 rounded-md" />
                <img src={Tailwind} alt="Tailwinds Css" className="mx-auto p-2.5 rounded-md" />
                <img src={Bootstrap} alt="Bootstrap" className="mx-auto p-2.5 rounded-md" />
                <img src={Bulma} alt="Bulma Css" className="mx-auto p-2.5 rounded-md" />
            </div>

        </>
    )
}

export default Skills
import Html from "../assets/html-5.png";
import Js from "../assets/js.png";
import Css from "../assets/social.png";
import Node from "../assets/node-js.png";
import Physics from "../assets/physics.png";
import Vs from "../assets/visual-studio.png";
import Rd from "../assets/responsive-design.png";
import Bootstrap from "../assets/bootstrap.png";

const Skills = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-6 skill_set_img">
                <img src={Html} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Css} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Js} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Physics} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Rd} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Node} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Vs} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Bootstrap} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Rd} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Node} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Vs} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                <img src={Bootstrap} alt="Html" className="w-18 mx-auto p-2.5 rounded-md" />
                
            </div>

        </>
    )
}

export default Skills
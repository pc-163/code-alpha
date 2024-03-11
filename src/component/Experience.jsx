import Html from "../assets/html-5.png";
import Js from "../assets/js.png";
import Css from "../assets/social.png";
import Node from "../assets/node-js.png";
import Physics from "../assets/physics.png";
import Vs from "../assets/visual-studio.png";
import Rd from "../assets/responsive-design.png";
import Bootstrap from "../assets/bootstrap.png";

const Experience = () => {

    return (
        <section className="section_0002 py-2">
            <div className="container mx-auto px-32">
                <div className="grid grid-cols-12">
                    <div className="col-span-2 inline-flex items-center">
                        <p className="text-white text-7xl font-semibold">2</p>
                        <p className="text-2xl pl-3 set_style uppercase">YEARS OF<br />EXPERIENCE</p>
                    </div>
                    <div className="col-span-4 inline-flex items-center">
                        <p className="text-white text-7xl font-semibold">12</p>
                        <p className="text-2xl pl-3 set_style uppercase">Projects Completed<br />Around The World</p>
                    </div>
                    <div className="col-span-6 inline-flex items-center justify-between">
                        <img src={Html} alt="Html" className="w-12"/>
                        <img src={Css} alt="Html" className="w-12"/>
                        <img src={Js} alt="Html" className="w-12"/>
                        <img src={Physics} alt="Html" className="w-12"/>
                        <img src={Rd} alt="Html" className="w-12"/>
                        <img src={Node} alt="Html" className="w-12"/>
                        <img src={Vs} alt="Html" className="w-12"/>
                        <img src={Bootstrap} alt="Html" className="w-12"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
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
        <section className="section_0002 py-4 lg:py-2">
            <div className="container mx-auto px-4 sm:px-4 md:px-20 lg:px-20 2xl:px-32">
                <div className="sm:grid sm:grid-cols-12">
                    <div className="sm:col-span-4 lg:col-span-3 xl:col-span-2 inline-flex items-center">
                        <p className="text-white text-7xl font-semibold">2</p>
                        <p className="text-2xl pl-3 set_style uppercase">YEARS OF<br />EXPERIENCE</p>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-5 xl:col-span-4 inline-flex items-center">
                        <p className="text-white text-7xl font-semibold">12</p>
                        <p className="text-2xl pl-3 set_style uppercase">Projects Completed<br />Around The World</p>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-4 xl:col-span-6 inline-flex items-center sm:justify-between pt-6 lg:pt-0 gap-2 sm:gap-0">
                        <img src={Html} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Css} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Js} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Physics} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Rd} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Node} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Vs} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                        <img src={Bootstrap} alt="Html" className="w-8 sm:w-12 md:w-6 xl:w-12"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
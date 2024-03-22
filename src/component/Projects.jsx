import imgUrl1 from '../../public/image-1.png'
import imgUrl2 from '../../public/cars.png'
import ecommerce from '../../public/ecommerce-app.png'
import expenseTracker from '../../public/expense-tracker.png'
import taskify from '../../public/taskify.png'
import todoapp from '../../public/todoapp.png'
import movieflix from '../../public/Movieflix-Clone.png'
import carrent from '../../public/car-rental.png'
import dashboard from '../../public/dashboard.png'


import { FiGithub } from "react-icons/fi";
// import Html from "../assets/html-5.png";
// import Js from "../assets/js.png";
// import Css from "../assets/social.png";
import Node from "../assets/node-js.png";
import Physics from "../assets/physics.png";
// import Vs from "../assets/visual-studio.png";
// import Rd from "../assets/responsive-design.png";
import Bootstrap from "../assets/bootstrap.png";
import Next from "../assets/next-jj.png";
import MoongoDb from "../assets/mongodb.png";
import Api from "../assets/api.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import Vite from "../assets/vite.png";
import Bulma from "../assets/bulma.png";
import sass from "../assets/sass.png";


const Projects = () => {
    return (
        <section className="section_0004 pt-10 lg:pt-14 xl:pt-20" id='projects'>
            <div className="container mx-auto px-4 lg:px-20 2xl:px-32">
                <h4 className='text-3xl font-bold'>My Projects 💻</h4>
                <p className='pt-4 pb-5 text-1xl sm:text-2xl'>Some Things I've built so far</p>
                <div className="sm:grid grid-cols-12 gap-8">
                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={carrent} alt="Template 7" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Car Rental Web App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Bootstrap} alt="Bootstrap" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/car-rental">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={movieflix} alt="Template 6" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Movie Web App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Api} alt="Api" className="w-10 border rounded-md p-1" />
                            <img src={sass} alt="sass" className="w-10 border rounded-md p-1" />
                            <img src={Bulma} alt="Bulma" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/movie-flix">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={imgUrl1} alt="Template 1" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Paragliding Booking App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Next} alt="Next" className="w-10 border rounded-md p-1" />
                            <img src={Api} alt="Api" className="w-10 border rounded-md p-1" />
                            <img src={MoongoDb} alt="MoongoDb" className="w-10 border rounded-md p-1" />
                            <img src={Bootstrap} alt="Bootstrap" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/team-dashboard">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={dashboard} alt="Daily Expenses Tracker" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Social Media Dashboard</p>
                        <p className='text-sm pb-4'>A Simple Static social media template (fb, insta, twitter).</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Next} alt="Next" className="w-10 border rounded-md p-1" />
                            <img src={Tailwind} alt="Tailwind" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/social-media-page">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={ecommerce} alt="Template 3" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Ecommerce App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Api} alt="Api" className="w-10 border rounded-md p-1" />
                            <img src={Bootstrap} alt="Bootstrap" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/react-ecommerce-app">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={expenseTracker} alt="Daily Expenses Tracker" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Daily Expenses Tracker</p>
                        <p className='text-sm pb-4'>A daily expenses tracker for daily expenses.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Vite} alt="Vite" className="w-10 border rounded-md p-1" />
                            <img src={Tailwind} alt="Tailwind" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/expenses-tracker">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={imgUrl2} alt="Template 2" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Cars Collection App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Node} alt="Node" className="w-10 border rounded-md p-1" />
                            <img src={MoongoDb} alt="MoongoDb" className="w-10 border rounded-md p-1" />
                            <img src={Tailwind} alt="Tailwind" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/dashboard-practice">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="mb-5 sm:mb-0 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={taskify} alt="Template 4" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>Signup/Login Forms</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Bootstrap} alt="Bootstrap" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/taskify">
                            <FiGithub /> View Code
                        </a>
                    </div>

                    <div className="sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer  p-2 rounded-md project-boxes">
                        <img src={todoapp} alt="Template 5" className='rounded-md pb-3' />
                        <p className='font-bold uppercase text-base pb-2'>To Do App</p>
                        <p className='text-sm pb-4'>A full-stack e-commerce platform built for users/clients.</p>
                        <div className="inline-flex items-center gap-3 pb-5 w-full">
                            <img src={Physics} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Vite} alt="React" className="w-10 border rounded-md p-1" />
                            <img src={Redux} alt="Redux" className="w-10 border rounded-md p-1" />
                            <img src={Tailwind} alt="Tailwind" className="w-10 border rounded-md p-1" />
                        </div>

                        <a className="text-white p-2 w-full justify-center rounded-md font-medium text-base inline-flex items-center sm:gap-2 target-btn" href="https://github.com/pc-163/redux-todolist">
                            <FiGithub /> View Code
                        </a>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Projects
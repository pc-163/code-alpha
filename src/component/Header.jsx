import imgUrl from '../assets/mypicture.png'
import { FaTwitter, FaDiscord, FaLinkedinIn } from "react-icons/fa";

import { FiGithub } from "react-icons/fi";

const Header = () => {

  return (
    <section className="section_bg pt-16">
      <div className="container mx-auto px-32">
        <div className="grid grid-cols-2">
          <div>
            <p className='text-black text-3xl font-semibold pb-3'>Hello &#128075;,</p>
            <h1 className='text-8xl font-bold' id='title_color'>I'm a web Developer </h1>
            <p id='text_color' className='pt-10 pb-5 italic'>Welcome to my personal portfolio! I'm John Doe, a passionate software developer with a keen interest in creating meaningful applications that solve real-world problems. Below you'll find some of my projects, skills, and my resume.</p>
            <div className='flex gap-4' id='main_icons'>
              <a href="#" target="_blank" className='rounded-full'>
                <FaTwitter />
              </a>
              <a href="#" target="_blank" className='rounded-full'>
                <FiGithub />
              </a>
              <a href="#" target="_blank" className='rounded-full'>
                <FaLinkedinIn />
              </a>
              <a href="#" target="_blank" className='rounded-full'>
                <FaDiscord />
              </a>

            </div>
          </div>
          <div>
            <img src={imgUrl} alt="PC Dev" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
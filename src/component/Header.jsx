import imgUrl from '../assets/mypicture.png'
import { FaTwitter, FaDev, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Header = () => {

  return (
    <section className="section_bg pt-10 sm:pt-14 lg:pt-20 xl:pt-24">
      <div className="container mx-auto px-4 sm:px-4 lg:px-20 2xl:px-32">
        <div className="grid md:grid-cols-2 items-end">
          <div className='pb-16 md:pb-8 lg:pb-16'>
            <p className='text-black text-3xl font-semibold pb-3'>Hello &#128075;,</p>
            <h1 className='text-6xl leading-12 xl:text-8xl font-bold' id='title_color'>I'm a web Developer </h1>
            <p id='text_color' className='pt-6 sm:pt-10 pb-5 italic'>Welcome to my personal portfolio! I'm Prakash Thakur, a passionate software developer with a keen interest in creating meaningful applications that solve real-world problems. Below you'll find some of my projects, skills, and my resume.</p>
            <div className='flex gap-4' id='main_icons'>
              <a href="https://github.com/pc-163/" target="_blank" className='rounded-full'>
                <FiGithub />
              </a>
              <a href="https://app.daily.dev/pc163" target="_blank" className='rounded-full'>
                <FaDev />
              </a>
              <a href="https://www.linkedin.com/in/pc163/" target="_blank" className='rounded-full'>
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/pc____g" target="_blank" className='rounded-full'>
              <FaTwitter />
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
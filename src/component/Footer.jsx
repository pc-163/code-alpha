import imgUrl from '../assets/pcdev.png'
import { FaTwitter, FaDev, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className="container mx-auto px-4 sm:px-32">
        <img src={imgUrl} alt="PC Dev Logo" className="h-6 mx-auto" />
        <p className='text-white text-sm sm:text-base pt-3 pb-4 text-center'>Designed and built by <a href="/" className='text-blue'>PcDev</a> with Love & Coffee</p>
        <div className='flex gap-4 mx-auto justify-center' id='main_icons'>
          <a href="https://github.com/pc-163/" target="_blank" className='rounded-full bg-white'>
            <FiGithub />
          </a>
          <a href="https://app.daily.dev/pc163" target="_blank" className='rounded-full bg-white'>
            <FaDev />
          </a>
          <a href="https://www.linkedin.com/in/pc163/" target="_blank" className='rounded-full bg-white'>
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/pc____g" target="_blank" className='rounded-full bg-white'>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
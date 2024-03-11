import { Link } from "react-router-dom";
import imgUrl from '../assets/pcdev.png'
import { MdMarkEmailRead } from "react-icons/md";

const NavBar = () => {

  return (
    <>
      <header>
        <div className="container mx-auto px-32">
          <div className="h-14 flex items-center">
            <Link className="flex items-center justify-center" to="/">
              <img src={imgUrl} alt="PC Dev Logo" className="h-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="m-auto flex gap-4 sm:gap-14">
              <Link className="text-base font-medium hover:underline underline-offset-4 text-white" href="#">
                Home
              </Link>
              <a className="text-base font-medium hover:underline underline-offset-4 text-white" href="#about">
                About
              </a>
              <a className="text-base font-medium hover:underline underline-offset-4 text-white" href="#skills">
                Skills
              </a>
              <a className="text-base font-medium hover:underline underline-offset-4 text-white" href="#projects">
                Projects
              </a>

            </nav>
            <Link className="font-medium text-base inline-flex items-center bg-white hire_btn sm:gap-2" href="#">
              <MdMarkEmailRead /> Hire Me
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar
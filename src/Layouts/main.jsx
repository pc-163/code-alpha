import Footer from "../component/Footer";
import NavBar from "../component/NavBar"
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer/>
    </>
  )
}

import NavBar from "../component/NavBar"
import { Outlet } from 'react-router-dom';


export const Main = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <p>footer</p>
    </>
  )
}

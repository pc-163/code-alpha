import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from "../component/NotFound";
//import Contact from "../pages/Contact";
import { Main } from "../Layouts/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            // {
            //   path: "/contacts",
            //   element: <Contact />,
            // },
          ],
    },
   
]);

export default router
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Works } from "./Works";
import { About } from "./About";
import { Home } from "./Home";
import { ContactsList } from "../components";
import { Resume } from "./Resume";

export const router = createBrowserRouter([
  {
    path: "/CatPortfolio/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/contacs",
        element: <ContactsList />,
      },
    ],
  },
  {
    path: '/CatPortfolio/resume',
    element: <Resume />
  }
]);

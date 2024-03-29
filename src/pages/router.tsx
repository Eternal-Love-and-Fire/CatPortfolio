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
        path: "/CatPortfolio/",
        element: <Home />,
      },
      {
        path: "/CatPortfolio/about",
        element: <About />,
      },
      {
        path: "/CatPortfolio/works",
        element: <Works />,
      },
      {
        path: "/CatPortfolio/contacs",
        element: <ContactsList />,
      },
    ],
  },
  {
    path: '/CatPortfolio/resume',
    element: <Resume />
  }
]);

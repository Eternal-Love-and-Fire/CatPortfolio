import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Works } from "./Works";
import { About } from "./About";
import { Home } from "./Home";
import { ContactsList } from "../components";
import { Resume } from "./Resume";

export const router = createBrowserRouter([
  {
    path: "/",
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
    path: '/resume',
    element: <Resume />
  }
]);

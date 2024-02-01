import { createBrowserRouter } from "react-router-dom";

import { Battle } from "../features/battle/page";
import { Home } from "../features/home/page";
import { Select } from "../features/select/page";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/battle",
    element: <Battle />,
  },
]);

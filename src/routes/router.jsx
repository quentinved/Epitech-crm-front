import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Callback from "./callback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/callback/*",
    element: <Callback />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

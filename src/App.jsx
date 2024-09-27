import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import FavoritePage from "./pages/FavoritePage";
import DetailPage from "./pages/DetailPage";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
      {
        path: "*", //Error handling
        element: <ErrorPage />,
      },
      {
        path: "/detail/:id", 
        element: <DetailPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

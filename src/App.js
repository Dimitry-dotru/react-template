import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page from "./components/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: Page('', false),
  },
  {
    path: '/laptops',
    element: Page('category/laptops', false),
  },
  {
    path: '/smartphones',
    element: Page('category/smartphones', false),
  },
  {
    path: '/motorcycle',
    element: Page('category/motorcycle', false),
  },
  {
    path: '*',
    element: Page('', true),
  }
]);

export default function App() {
  return <RouterProvider router={router}/>
};

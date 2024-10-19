import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";

const App = () => {
  return (
    <>
      <div>
        <Provider store={appStore}>
          <RouterProvider router={appRouter} />
        </Provider>
      </div>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/task1",
        element: <Task1 />,
      },
      {
        path: "/task2",
        element: <Task2 />,
      },
    ],
  },
]);
export default App;

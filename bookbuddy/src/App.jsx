import Account from "./components/Account";
import Home from "./components/Home";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const routes = [
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Books />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'account',
          element: <Account />
        },
        {
          path: 'books/:bookId',
          element: <SingleBook />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ]
  const router = createBrowserRouter(routes)
 
  return <RouterProvider router={router} />
}

export default App;

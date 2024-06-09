import { FC } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import SignIn from './SignIn';
import App from './App';

const RootApp: FC = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Navigate to="/sign-in" replace />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/app',
      element: <App />,
      children: [
        {
          path: '',
          element: <Navigate to="dashboard" replace />,
        },
        {
          path: 'dashboard',
          element: <h1>Dashboard</h1>,
        },
        {
          path: 'users',
          element: <h1>Users</h1>,
        },
        {
          path: 'projects',
          element: <h1>Projects</h1>,
        },
        {
          path: '*',
          element: <h1>Not found</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootApp;

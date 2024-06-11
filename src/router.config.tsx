import { Navigate, createBrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import App from './App';
import { projectsLoader } from './pages/projectsLoader';
import ProjectsList from './pages/ProjecsList';

export const router = createBrowserRouter([
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
        loader: projectsLoader,
        element: <ProjectsList />,
      },
      {
        path: '*',
        element: <h1>Not found</h1>,
      },
    ],
  },
]);

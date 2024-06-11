import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.config';

const RootApp: FC = () => {
  return <RouterProvider router={router} />;
};

export default RootApp;

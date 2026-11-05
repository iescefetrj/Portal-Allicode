import { createBrowserRouter } from 'react-router-dom';
import { CoursesPage } from '../pages/CoursesPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RootLayout } from './RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cursos', element: <CoursesPage /> },
      { path: 'login', element: <LoginPage /> },
      // Qualquer rota não mapeada cai aqui
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

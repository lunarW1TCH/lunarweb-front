import React from 'react';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles';
import { THEME } from './styles/globalStyles';
import { ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import ContactPage from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'skills', element: <SkillsPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider theme={THEME}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

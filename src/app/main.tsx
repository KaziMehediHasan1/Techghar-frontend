import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'src/assets/styles/global.css';
import { router } from '@/app/router';
import { Providers } from '@/app/Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);

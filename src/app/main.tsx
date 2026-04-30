import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import '@/assets/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "@/components/layout/providers";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);

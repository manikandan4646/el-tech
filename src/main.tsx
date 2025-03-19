import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "aos/dist/aos.css";
import PopupProvider from './context/AppProvider.tsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PopupProvider>
            <Toaster />
            <App />
        </PopupProvider>
    </StrictMode>,
)

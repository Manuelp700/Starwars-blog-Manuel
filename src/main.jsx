import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from './hooks/useGlobalReducer';
import Loader from './components/Loader.jsx'

const Main = () => {
    return (
        <React.StrictMode>
            <Loader>
                <StoreProvider>
                    <RouterProvider router={router}>
                    </RouterProvider>
                </StoreProvider>
            </Loader>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
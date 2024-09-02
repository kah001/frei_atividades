
import Inicio from "./pages/inicio"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Navegacao() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
            </Routes>

        </BrowserRouter>
    )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './pages/BasePage';
import { Home } from './pages/Home';
import { NotasAdicionadas } from './pages/NotasAdicionadas';
import { NotasExcluidas } from './pages/NotasExcluidas';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
               0    <Route index element={<Home />} />
                    <Route path="/notas-adicionadas" element={<NotasAdicionadas currentPage="adicionadas" />} />
                    <Route path="/notas-excluidas" element={<NotasExcluidas currentPage="excluidas" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
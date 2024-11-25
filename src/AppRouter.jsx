import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Pokemons from "./pages/Pokemons";
import {routes} from "./Routes"
import Pokemon from "./components/Pokemon";
import Tipos from "./pages/Tipos";
import Tipo from "./components/Tipo";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.app} element={<App />}>
            <Route path={routes.pokemons} element={<Pokemons />}>
                <Route path={routes.pokemon} element={<Pokemon />}/>
            </Route>
            <Route path={routes.tipos} element={<Tipos />}>
                <Route path={routes.tipo} element={<Tipo />}>
                    <Route path={routes.tipopokemon} element={<Pokemon />}/>
                </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

 
import { Outlet } from 'react-router-dom';
import './App.css';

export default function App () {

  return (
    <main>
      <h1>Bienvenido a la Poke Api 😎</h1>
      <Outlet />
    </main>
  );
};



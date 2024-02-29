import { useState } from 'react';

import './App.css';

import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-theme="cupcake">
    {/* <ThemeSwitcher/> */}
    {/* <HomePage/> */}
    <Outlet/>
    </div>
  )
}

export default App

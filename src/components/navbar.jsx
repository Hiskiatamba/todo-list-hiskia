import { NavLink } from "react-router-dom";

function Navbar() {
  return (

      <header className="flex flex-col w-full justify-between items-center bg-teal-400 text-white">
        <div className="bg-teal-800 w-full p-[10px] flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Hiskia Tamba</h1>
        <h1 className="text-yellow-500">Todo-List-App</h1>
        </div>
        <nav>
          <ul className="flex gap-[100px] p-[10px]">
            <NavLink className="text-blue-800 hover:text-black font-bold" to="/todo">Todo</NavLink>
          </ul>
        </nav>
      </header>

  );
}

export default Navbar;

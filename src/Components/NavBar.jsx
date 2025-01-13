import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div className=" flex sticky top-0 z-50 items-center justify-around bg-slate-200 border border-slate-700-300 shadow-2xl py-2  h-20">
        <div className=" ">
            <Link to="/" className=" transform hover:scale-150 ease-in duration-300">NEXTFLIX</Link>
        </div>

            <div className="flex justify-center gap-10 text-red-500 ">
            <Link to="/" className="transform hover:scale-150 ease-in duration-300">Home</Link>
            <Link to="/favorites" className="hover:scale-150 ease-out duration-300">Favorites</Link>
            <Link to="/about" className="hover:scale-150 ease-out duration-300">About</Link>
            </div>
      </div>
    </>
  )
}

export default NavBar

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-white">
          Task<span className="text-cyan-400">Forge</span>
        </h1>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
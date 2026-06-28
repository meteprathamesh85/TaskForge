import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Task<span className="text-cyan-400">Forge</span>
            </h2>

            <p className="text-slate-400 mt-5 leading-8">
              Organize your work, track your progress,
              and achieve your goals with TaskForge.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                to="/login"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Register
              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-3xl text-slate-400">

              <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
              <FaInstagram className="hover:text-cyan-400 cursor-pointer transition" />

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500">

          © 2026 TaskForge. Built with React, Node.js, Express & MongoDB.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
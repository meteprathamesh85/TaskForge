import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Features from "../sections/Features";
import DashboardPreview from "../sections/DashboardPreview";
import Footer from "../sections/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-72 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[180px] rounded-full"></div>

      {/* Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-sm">
            ⚒️ Build Better Habits
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Manage Tasks.
            <br />
            <span className="text-cyan-400">
              Track Progress.
            </span>
            <br />
            Achieve Goals.
          </h1>

          <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-xl leading-9">
            TaskForge helps developers and students
            organize tasks, track progress,
            build habits and stay productive
            every single day.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-900 font-bold hover:scale-105 transition">
              Start Free
            </button>

            <button className="px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-900 transition">
              Live Demo
            </button>

          </div>

        </motion.div>

      </section>
      <Features />
      <DashboardPreview />
      <Footer />

    </div>
  );
}

export default Home;
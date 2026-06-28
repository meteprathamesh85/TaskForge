function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Dashboard Preview
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Everything you need to manage tasks, monitor progress,
            and stay productive.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden">

          {/* Top Bar */}
          <div className="border-b border-white/10 px-8 py-5 flex justify-between items-center">
            <h3 className="text-white font-semibold text-xl">
              Welcome back 👋
            </h3>

            <div className="w-10 h-10 rounded-full bg-cyan-400"></div>
          </div>

          {/* Dashboard */}
          <div className="grid lg:grid-cols-4">

            {/* Sidebar */}
            <div className="border-r border-white/10 p-6 space-y-5">

              <p className="text-cyan-400">Dashboard</p>
              <p className="text-slate-400">Tasks</p>
              <p className="text-slate-400">Analytics</p>
              <p className="text-slate-400">Profile</p>
              <p className="text-slate-400">Settings</p>

            </div>

            {/* Main */}
            <div className="lg:col-span-3 p-8">

              {/* Cards */}
              <div className="grid md:grid-cols-4 gap-5">

                <div className="bg-cyan-400/10 rounded-2xl p-5">
                  <p className="text-slate-400">Tasks</p>
                  <h3 className="text-3xl font-bold text-white mt-2">24</h3>
                </div>

                <div className="bg-green-500/10 rounded-2xl p-5">
                  <p className="text-slate-400">Completed</p>
                  <h3 className="text-3xl font-bold text-white mt-2">16</h3>
                </div>

                <div className="bg-yellow-500/10 rounded-2xl p-5">
                  <p className="text-slate-400">Pending</p>
                  <h3 className="text-3xl font-bold text-white mt-2">6</h3>
                </div>

                <div className="bg-red-500/10 rounded-2xl p-5">
                  <p className="text-slate-400">Overdue</p>
                  <h3 className="text-3xl font-bold text-white mt-2">2</h3>
                </div>

              </div>

              {/* Graph Placeholder */}
              <div className="mt-8 rounded-2xl bg-slate-800 h-64 flex items-center justify-center text-slate-500 text-xl">
                Analytics Chart (Coming in Dashboard)
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
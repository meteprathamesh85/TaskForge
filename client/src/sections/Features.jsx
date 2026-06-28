import {
  FaTasks,
  FaChartLine,
  FaLock,
  FaBolt,
  FaMobileAlt,
  FaBullseye,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTasks size={32} />,
    title: "Task Management",
    description: "Create, update, organize and complete tasks effortlessly.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Analytics",
    description: "Visualize your productivity with powerful dashboards.",
  },
  {
    icon: <FaLock size={32} />,
    title: "Secure",
    description: "Authentication and data protection built from day one.",
  },
  {
    icon: <FaBolt size={32} />,
    title: "Lightning Fast",
    description: "Built using modern React architecture for blazing speed.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Responsive",
    description: "Looks beautiful on desktop, tablet and mobile.",
  },
  {
    icon: <FaBullseye size={32} />,
    title: "Productivity",
    description: "Track your goals and maintain your daily streak.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container mx-auto px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to help students and developers stay productive every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 p-8"
            >
              <div className="text-cyan-400 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;
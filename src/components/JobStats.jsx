
import { BuildingComplex, BriefcaseBusiness, Star, UserSearch } from 'lucide-react';


const stats = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    value: "50K",
    label: "Active Jobs",
  },
  {
    id: 2,
    icon: BuildingComplex,
    value: "12K",
    label: "Companies",
  },
  {
    id: 3,
    icon: UserSearch,
    value: "2M",
    label: "Job Seekers",
  },
  {
    id: 4,
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function JobStats() {
  return (
    <section className="relative z-20 bg-black py-24 ">
      {/* Globe Background */}
      <div
        className="absolute overflow-hidden  inset-0 bg-center bg-no-repeat bg-cover opacity-90"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute  inset-0 bg-black/60" />

      <div className="relative  top-50 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl md:text-5xl  max-w-3xl mx-auto">
            Assisting over{" "}
            <span className="text-violet-400">15,000</span> job seekers
            <br /> find their dream positions.
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-6
                  hover:border-violet-500/50
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={18}
                  className="text-gray-300 mb-8"
                />

                <h3 className="text-white text-4xl font-bold mb-2">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
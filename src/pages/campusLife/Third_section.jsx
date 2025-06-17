import { Building2, Users2, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Hostel Exemption Office Orders",
    subtitle: "(Click Here)",
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    tag: "New",
    bg: "bg-white",
    iconBg: "bg-red-100",
    tagColor: "bg-red-500",
    tagText: "text-white",
  },
  {
    title: "Online Hostel Management System",
    subtitle: "(OHMS)",
    icon: <Users2 className="w-8 h-8 text-blue-600" />,
    bg: "bg-white",
    iconBg: "bg-blue-100",
  },
  {
    title: "Primary Hostel Exemption Interface",
    subtitle: "(PHI)",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-200",
    iconBg: "bg-blue-100",
  },
];

export default function CardSection() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-sm border border-transparent transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-blue-300 ${card.bg}`}
          >
            <div
              className={`w-14 h-14 rounded-md flex items-center justify-center mb-4 ${card.iconBg}`}
            >
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-black text-center">
              {card.title}
            </h3>

            {card.tag && (
              <div
                className={`text-xs px-2 py-0.5 mt-2 w-fit mx-auto rounded ${card.tagColor} ${card.tagText}`}
              >
                {card.tag}
              </div>
            )}

            <p className="text-sm text-center text-gray-500 mt-2">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

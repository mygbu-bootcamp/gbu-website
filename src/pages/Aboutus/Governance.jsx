const OrgNodeHorizontal = ({ node }) => (
  <div className="flex flex-col items-center relative min-w-[140px] md:min-w-[200px]">
    <div
      className={`rounded-xl border-2 shadow-lg px-3 py-2 md:px-6 md:py-4 mb-2 transition-all duration-300
        ${node.color} hover:scale-105 hover:shadow-2xl`}
      style={{
        minWidth: 120,
        minHeight:140,
        width: 120,
        zIndex: 10,
        boxShadow: '0 2px 12px 0 rgba(80,80,180,0.10)'
      }}
    >
      <div className="flex items-center gap-1 md:gap-2 mb-1">
        {/* {node.icon} */}
        <span className="font-semibold text-xs md:text-base text-gray-800">{node.name}</span>
      </div>
      <div className="text-gray-700 font-medium text-xs md:text-base">{node.person}</div>
    </div>
  </div>
);

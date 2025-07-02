import React from 'react';

// 🟢 Basic Card components
const Card = ({ children, className = '' }) => (
  <div className={`bg-card border rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// 🟢 Basic Tabs components
const Tabs = ({ children, defaultValue, className = '' }) => {
  const [active, setActive] = React.useState(defaultValue);
  const triggers = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TabsList'
  );
  const contents = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TabsContent'
  );

  return (
    <div className={className}>
      {React.cloneElement(triggers[0], { active, setActive })}
      {contents.map((content, idx) =>
        React.cloneElement(content, { active, key: idx })
      )}
    </div>
  );
};

const TabsList = ({ children, active, setActive, className = '' }) => (
  <div className={`flex ${className}`}>{React.Children.map(children, (child) =>
    React.cloneElement(child, { active, setActive })
  )}</div>
);

const TabsTrigger = ({ value, children, active, setActive, className = '' }) => (
  <button
    onClick={() => setActive(value)}
    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors
      ${active === value
        ? 'border-primary text-primary'
        : 'border-transparent hover:text-primary'}
    ${className}`}
  >
    {children}
  </button>
);

const TabsContent = ({ value, active, children, className = '' }) => {
  if (value !== active) return null;
  return <div className={className}>{children}</div>;
};

import TenderRow from './TenderRow'; 

// 🟢 Sample data
const sampleTenders = [
  {
    id: 1,
    title: "Supply of IT Equipment and Software Licenses",
    description:
      "Procurement of computers, servers, and enterprise software licenses for government offices",
    closingDate: "2025-07-15",
    documentUrl: "/documents/tender-001.pdf",
  },
  {
    id: 2,
    title: "Construction of Municipal Water Treatment Plant",
    description:
      "Design, construction and commissioning of water treatment facility with 50ML/day capacity",
    closingDate: "2025-07-22",
    documentUrl: "/documents/tender-002.pdf",
  },
  {
    id: 3,
    title: "Maintenance Services for Public Transportation Fleet",
    description:
      "Comprehensive maintenance and repair services for city bus fleet including spare parts",
    closingDate: "2025-06-30",
    documentUrl: "/documents/tender-003.pdf",
  },
  {
    id: 4,
    title: "Digital Infrastructure Upgrade Project",
    description:
      "Upgrade of fiber optic network and installation of 5G infrastructure across the city",
    closingDate: "2025-08-10",
    documentUrl: "/documents/tender-004.pdf",
  },
  {
    id: 5,
    title: "Renewable Energy Solar Panel Installation",
    description:
      "Installation of solar panels on government buildings with total capacity of 2MW",
    closingDate: "2025-07-05",
    documentUrl: "/documents/tender-005.pdf",
  },
];

// 🟢 Table component
const TenderTable = ({ tenders }) => (
  <Card className="w-full">
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Serial No.
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Brief Description
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Closing Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Document
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tenders.map((tender) => (
              <TenderRow key={tender.id} tender={tender} />
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

// 🟢 Main Component
const TendersTable = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="w-full mb-6 flex flex-row justify-between border-b">
          <TabsTrigger value="current" className=" rounded-xl w-1/2 hover:bg-black  hover:text-white">
            Current Opportunities
          </TabsTrigger>
          <TabsTrigger value="archived" className="w-1/2 hover:bg-black hover:text-white rounded-xl">
            Archived Opportunities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-0">
          <TenderTable tenders={sampleTenders} />
        </TabsContent>

        <TabsContent value="archived" className="mt-0">
          <TenderTable tenders={sampleTenders} />
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-muted-foreground">
            <p className="text-sm text-muted-foreground italic">
              These tenders are no longer active and are shown for reference purposes.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TendersTable;

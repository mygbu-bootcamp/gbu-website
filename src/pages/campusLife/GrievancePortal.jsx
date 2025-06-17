export default function ChancellorSection() {
  return (
    <section className="py-14 flex justify-center bg-white">
      <div className="w-full max-w-5xl space-y-16 px-4">
        {/* Chancellor & Vice-Chancellor */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <ProfileCard
            role="CHANCELLOR'S"
            name="Prof. Anil Singh"
            title="Hon'ble Chancellor"
            quote="Welcome to GBU. We are committed to providing world-class education and facilities. Our hostels are designed to support your academic journey and personal development in a safe and nurturing environment."
          />
          <ProfileCard
            role="VICE-CHANCELLOR'S"
            name="Dr. Priya Sharma"
            title="Hon'ble Vice-Chancellor"
            quote="At Gautam Buddha University, we believe in holistic development. Our modern hostel facilities provide the perfect balance of comfort, security, and academic support for our students."
            imgUrl="https://imgs.search.brave.com/oXPSdPgvWWpQBZzPQooQdfT7t8J3QucTRqKGSHw5wCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM1LmFscGhhY29k/ZXJzLmNvbS8xMzYv/dGh1bWJiaWctMTM2/MDY1NS53ZWJw"
          />
        </div>

        {/* Notices and Events */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <CardSection title="📋 Latest Notices" viewAllLink="#">
            <ListItem
              title="Hostel Fee Payment Deadline"
              date="15 Dec 2024"
              badge="Important"
              color="bg-red-100 text-red-600"
            />
            <ListItem
              title="New Security Guidelines"
              date="10 Dec 2024"
              badge="Notice"
              color="bg-blue-100 text-blue-600"
            />
            <ListItem
              title="Mess Menu Update"
              date="8 Dec 2024"
              badge="Info"
              color="bg-green-100 text-green-600"
            />
          </CardSection>

          <CardSection title="🎉 Latest Events" viewAllLink="#">
            <ListItem
              title="Inter-Hostel Sports Meet"
              date="20 Dec 2024"
              badge="Sports"
              color="bg-orange-100 text-orange-600"
            />
            <ListItem
              title="Cultural Night"
              date="18 Dec 2024"
              badge="Cultural"
              color="bg-purple-100 text-purple-600"
            />
            <ListItem
              title="Hostel Committee Meeting"
              date="16 Dec 2024"
              badge="Meeting"
              color="bg-gray-100 text-gray-600"
            />
          </CardSection>
        </div>
      </div>
    </section>
  );
}
function ProfileCard({ role, name, title, quote, imgUrl }) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
          <img
            src={imgUrl || "https://imgs.search.brave.com/oXPSdPgvWWpQBZzPQooQdfT7t8J3QucTRqKGSHw5wCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM1LmFscGhhY29k/ZXJzLmNvbS8xMzYv/dGh1bWJiaWctMTM2/MDY1NS53ZWJw"}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">{role}</p>
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="mt-4 italic text-sm text-gray-700">"{quote}"</p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
        View Profile
      </button>
    </div>
  );
}

function CardSection({ title, children, viewAllLink }) {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <div className="space-y-4">{children}</div>
      <a
        href={viewAllLink}
        className="text-sm text-blue-600 hover:underline mt-4 inline-block"
      >
        View All →
      </a>
    </div>
  );
}

function ListItem({ title, date, badge, color }) {
  return (
    <div className="flex justify-between items-start border-l-4 border-blue-500 pl-3">
      <div>
        <h5 className="text-sm font-medium">{title}</h5>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${color}`}>{badge}</span>
    </div>
  );
}

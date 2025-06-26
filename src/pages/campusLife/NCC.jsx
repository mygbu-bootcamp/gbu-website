import React, { useState } from 'react';
import { Shield, Users, Award } from 'lucide-react';
// Tabs, TabsContent, TabsList, TabsTrigger components defined locally

const Tabs = ({ value, onValueChange, children, className }) => {
  const [active, setActive] = useState(value);

  React.useEffect(() => {
    setActive(value);
  }, [value]);

  const handleChange = (val) => {
    setActive(val);
    if (onValueChange) onValueChange(val);
  };

  // Clone children to inject props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type.displayName === 'TabsList') {
      return React.cloneElement(child, { active, onChange: handleChange });
    }
    if (child.type.displayName === 'TabsContent') {
      return React.cloneElement(child, { active });
    }
    return child;
  });

  return (
    <div className={className}>
      {childrenWithProps}
    </div>
  );
};

const TabsList = ({ children, className, active, onChange }) => {
  // Clone children to inject active and onChange
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      isActive: child.props.value === active,
      onSelect: () => onChange(child.props.value),
    });
  });
  return (
    <div className={className}>
      {childrenWithProps}
    </div>
  );
};
TabsList.displayName = 'TabsList';

const TabsTrigger = ({ children, value, className, isActive, onSelect }) => (
  <button
    type="button"
    className={
      `${className} transition-colors duration-200 rounded-md focus:outline-none ` +
      (isActive
        ? 'bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold shadow'
        : 'bg-transparent text-gray-700 hover:bg-orange-100')
    }
    onClick={onSelect}
    aria-selected={isActive}
    tabIndex={isActive ? 0 : -1}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ children, value, active }) => {
  if (value && value !== active) return null;
  return <div>{children}</div>;
};
TabsContent.displayName = 'TabsContent';
import NCCIntroduction from '../../components/ncc/NCCIntroduction';
import NCCStructure from '../../components/ncc/NCCStructure';
import NCCTraining from '../../components/ncc/NCCTraining';
import NCCRegistration from '../../components/ncc/NCCRegistration';
import NCCEvents from '../../components/ncc/NCCEvents';
import NCCAchievements from '../../components/ncc/NCCAchievements';
import NCCResources from '../../components/ncc/NCCResources';
import NCCGallery from '../../components/ncc/NCCGallery';
import NCCSocialMedia from '../../components/ncc/NCCSocialMedia';

const NCC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">National Cadet Corps</h1>
          <p className="text-2xl font-light mb-6">"Unity and Discipline"</p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>300+ Cadets</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span>25+ Camps</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6" />
              <span>100+ Certificates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9 h-auto p-1">
              <TabsTrigger value="overview" className="text-xs lg:text-sm py-3">Overview</TabsTrigger>
              <TabsTrigger value="structure" className="text-xs lg:text-sm py-3">Structure</TabsTrigger>
              <TabsTrigger value="training" className="text-xs lg:text-sm py-3">Training</TabsTrigger>
              <TabsTrigger value="register" className="text-xs lg:text-sm py-3">Register</TabsTrigger>
              <TabsTrigger value="events" className="text-xs lg:text-sm py-3">Events</TabsTrigger>
              <TabsTrigger value="achievements" className="text-xs lg:text-sm py-3">Achievements</TabsTrigger>
              <TabsTrigger value="resources" className="text-xs lg:text-sm py-3">Resources</TabsTrigger>
              <TabsTrigger value="gallery" className="text-xs lg:text-sm py-3">Gallery</TabsTrigger>
              <TabsTrigger value="social" className="text-xs lg:text-sm py-3">Social</TabsTrigger>
            </TabsList>

            <div className="py-8">
              <TabsContent value="overview">
                <NCCIntroduction />
              </TabsContent>

              <TabsContent value="structure">
                <NCCStructure />
              </TabsContent>

              <TabsContent value="training">
                <NCCTraining />
              </TabsContent>

              <TabsContent value="register">
                <NCCRegistration />
              </TabsContent>

              <TabsContent value="events">
                <NCCEvents />
              </TabsContent>

              <TabsContent value="achievements">
                <NCCAchievements />
              </TabsContent>

              <TabsContent value="resources">
                <NCCResources />
              </TabsContent>

              <TabsContent value="gallery">
                <NCCGallery />
              </TabsContent>

              <TabsContent value="social">
                <NCCSocialMedia />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NCC;

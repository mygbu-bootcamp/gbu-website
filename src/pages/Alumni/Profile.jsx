
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';
import ProfileEditor from '@/components/ProfileEditor';

import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const Profile = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-8">
        <ProfileEditor />
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default Profile;

import { ReactNode, useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, logout } from '../firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';
import '../styles/Layout.css';

interface UserProfile extends User {
  age?: string;
  gender?: string;
  mobile?: string;
}

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    mobile: ''
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const storedData = localStorage.getItem(`userProfile_${currentUser.uid}`);
        const profileData = storedData ? JSON.parse(storedData) : {};
        
        setUser({
          ...currentUser,
          ...profileData
        } as UserProfile);

        setFormData({
          name: currentUser.displayName || '',
          email: currentUser.email || '',
          age: profileData.age || '',
          gender: profileData.gender || '',
          mobile: profileData.mobile || ''
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowProfile(false);
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
      setShowProfile(false);
      setIsEditing(false);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setShowProfile(false);
      setIsEditing(false);
    }
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowProfile(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    if (user) {
      const profileData = {
        age: formData.age,
        gender: formData.gender,
        mobile: formData.mobile
      };

      localStorage.setItem(`userProfile_${user.uid}`, JSON.stringify(profileData));

      setUser(prev => {
        if (!prev) return null;
        return {
          ...prev,
          ...profileData
        };
      });

      setIsEditing(false);
    }
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/quiz', label: 'Career Quiz', icon: '📝' },
    { path: '/insights', label: 'Insights', icon: '🔍' },
    { path: '/skills', label: 'Skills', icon: '🎯' },
    { path: '/planning', label: 'Planning', icon: '🗺️' },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">
          <h1>CareerPath</h1>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <div className="user-icon-container" ref={dropdownRef}>
          <div className="user-icon" onClick={handleIconClick}>
            <div className="guest-icon">👤</div>
          </div>
          {showDropdown && (
            <div className="profile-dropdown">
              {!showProfile ? (
                <div className="dropdown-menu">
                  <button className="menu-item" onClick={handleProfileClick}>
                    <span className="menu-icon">👤</span>
                    Profile
                  </button>
                  <button className="menu-item logout" onClick={handleLogout}>
                    <span className="menu-icon">🚪</span>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="profile-section">
                  <div className="profile-info">
                    <div className="profile-header">
                      <h3>User Details</h3>
                      {!isEditing && (
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>
                          ✏️ Edit
                        </button>
                      )}
                    </div>
                    {isEditing ? (
                      <div className="profile-form">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <label>Age</label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter age"
                          />
                        </div>
                        <div className="form-group">
                          <label>Gender</label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="form-input"
                          >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter mobile number"
                          />
                        </div>
                        <div className="form-actions">
                          <button className="save-btn" onClick={handleSaveProfile}>
                            Save
                          </button>
                          <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="profile-details">
                        <p><span className="label">Name:</span> {formData.name || 'Not set'}</p>
                        <p><span className="label">Email:</span> {formData.email || 'Not set'}</p>
                        <p><span className="label">Age:</span> {formData.age || 'Not set'}</p>
                        <p><span className="label">Gender:</span> {formData.gender || 'Not set'}</p>
                        <p><span className="label">Mobile:</span> {formData.mobile || 'Not set'}</p>
                      </div>
                    )}
                    {!isEditing && (
                      <button className="back-btn" onClick={() => setShowProfile(false)}>
                        Back
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="content-wrapper fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 
import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Career Quiz',
      description: 'Take our comprehensive quiz to discover careers that match your personality and skills.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      action: () => navigate('/quiz'),
      icon: '📝'
    },
    {
      title: 'Career Insights',
      description: 'Explore detailed information about various careers, including salary, growth potential, and required skills.',
      image: 'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8193.jpg',
      action: () => navigate('/insights'),
      icon: '📊'
    },
    {
      title: 'Skill Development',
      description: 'Find resources and courses to develop the skills needed for your dream career.',
      image: 'https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg',
      action: () => navigate('/skills'),
      icon: '🎯'
    },
    {
      title: 'Career Path Planning',
      description: 'Create a personalized career development plan with actionable steps and milestones.',
      image: 'https://img.freepik.com/free-vector/business-strategy-concept-illustration_114360-8144.jpg',
      action: () => navigate('/planning'),
      icon: '🗺️'
    }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome to Your Career Journey</h1>
          <p>Discover your perfect career path and take the first step towards your dream job</p>
        </div>
        <div className="header-image">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Career Journey" 
          />
        </div>
      </header>

      <section className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" onClick={feature.action}>
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
              <div className="feature-icon">{feature.icon}</div>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        ))}
      </section>

      <section className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Career Growth</h3>
            <p>Track your progress and see how far you've come</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div className="stat-content">
            <h3>Learning Resources</h3>
            <p>Access curated learning materials for your career path</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🤝</div>
          <div className="stat-content">
            <h3>Community</h3>
            <p>Connect with others on similar career paths</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

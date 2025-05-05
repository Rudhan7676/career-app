import { useLocation, useNavigate } from 'react-router-dom';
import { Career } from '../data/careerData';
import '../styles/Results.css';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topCareers } = location.state as { topCareers: Career[] };

  const handleRestart = () => {
    navigate('/quiz');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const getCareerImage = (careerId: string) => {
    const imageMap: { [key: string]: string } = {
      'engineer': 'https://images.unsplash.com/photo-1551434678-e076c313a71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'doctor': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'entrepreneur': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'teacher': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'default': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
    return imageMap[careerId] || imageMap.default;
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your Career Matches</h1>
        <p className="subtitle">Based on your answers, here are the careers that best match your personality and skills</p>
      </div>
      
      <div className="career-list">
        {topCareers.map((career, index) => (
          <div key={career.id} className="career-card">
            <div className="career-card-header">
              <div className="career-rank">{index + 1}</div>
              <h2>{career.title}</h2>
            </div>
            
            <div className="career-content">
              <div className="career-image">
                <img 
                  src={getCareerImage(career.id)} 
                  alt={career.title}
                />
              </div>
              
              <div className="career-info">
                <p className="career-description">{career.description}</p>
                
                <div className="career-details">
                  <div className="detail-group">
                    <h4>Required Skills</h4>
                    <div className="skills-list">
                      {career.requiredSkills.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-group">
                    <h4>Personality Traits</h4>
                    <div className="traits-list">
                      {career.personalityTraits.map(trait => (
                        <span key={trait} className="trait-tag">{trait}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-group">
                    <h4>Education & Requirements</h4>
                    <p>{career.education}</p>
                  </div>
                  
                  <div className="detail-group">
                    <h4>Salary & Growth</h4>
                    <div className="salary-growth">
                      <div className="salary">
                        <span className="label">Salary Range:</span>
                        <span className="value">{career.salaryRange}</span>
                      </div>
                      <div className="growth">
                        <span className="label">Growth Potential:</span>
                        <span className="value">{career.growthPotential}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="detail-group">
                    <h4>Work Environment</h4>
                    <p>{career.workEnvironment}</p>
                  </div>
                  
                  <div className="detail-group">
                    <h4>Related Careers</h4>
                    <div className="related-careers">
                      {career.relatedCareers.map(related => (
                        <span key={related} className="related-tag">{related}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="results-actions">
        <button onClick={handleRestart} className="btn btn-primary">
          Take Quiz Again
        </button>
        <button onClick={handleDashboard} className="btn btn-secondary">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Results; 
import { useState } from 'react';
import '../styles/Planning.css';

const Planning = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const careerPaths = [
    {
      id: 'tech',
      title: 'Technology & Software',
      roles: [
        {
          level: 'Entry Level',
          roles: ['Junior Developer', 'QA Engineer', 'Technical Support'],
          timeframe: '0-2 years',
          skills: ['Programming Basics', 'Version Control', 'Testing'],
          certifications: ['AWS Cloud Practitioner', 'CompTIA A+']
        },
        {
          level: 'Mid Level',
          roles: ['Senior Developer', 'DevOps Engineer', 'Technical Lead'],
          timeframe: '3-5 years',
          skills: ['System Design', 'CI/CD', 'Team Leadership'],
          certifications: ['AWS Solutions Architect', 'PMP']
        },
        {
          level: 'Senior Level',
          roles: ['Solution Architect', 'Engineering Manager', 'CTO'],
          timeframe: '6+ years',
          skills: ['Enterprise Architecture', 'Strategic Planning', 'Executive Leadership'],
          certifications: ['TOGAF', 'AWS Professional']
        }
      ]
    },
    {
      id: 'data',
      title: 'Data Science & Analytics',
      roles: [
        {
          level: 'Entry Level',
          roles: ['Data Analyst', 'Business Intelligence Analyst', 'Research Associate'],
          timeframe: '0-2 years',
          skills: ['SQL', 'Python', 'Data Visualization'],
          certifications: ['Google Data Analytics', 'IBM Data Science']
        },
        {
          level: 'Mid Level',
          roles: ['Data Scientist', 'ML Engineer', 'Analytics Manager'],
          timeframe: '3-5 years',
          skills: ['Machine Learning', 'Deep Learning', 'Big Data'],
          certifications: ['TensorFlow Developer', 'Azure Data Scientist']
        },
        {
          level: 'Senior Level',
          roles: ['Lead Data Scientist', 'AI Architect', 'Chief Data Officer'],
          timeframe: '6+ years',
          skills: ['AI Strategy', 'Research Leadership', 'Enterprise Solutions'],
          certifications: ['AWS Machine Learning', 'Google Cloud Professional Data Engineer']
        }
      ]
    },
    {
      id: 'management',
      title: 'Business & Management',
      roles: [
        {
          level: 'Entry Level',
          roles: ['Business Analyst', 'Project Coordinator', 'Operations Associate'],
          timeframe: '0-2 years',
          skills: ['Business Analysis', 'Project Management', 'Communication'],
          certifications: ['CAPM', 'Six Sigma Green Belt']
        },
        {
          level: 'Mid Level',
          roles: ['Project Manager', 'Product Manager', 'Operations Manager'],
          timeframe: '3-5 years',
          skills: ['Leadership', 'Strategy', 'Stakeholder Management'],
          certifications: ['PMP', 'Scrum Master']
        },
        {
          level: 'Senior Level',
          roles: ['Program Director', 'COO', 'CEO'],
          timeframe: '6+ years',
          skills: ['Executive Leadership', 'Corporate Strategy', 'Business Development'],
          certifications: ['Executive MBA', 'Six Sigma Black Belt']
        }
      ]
    }
  ];

  const actionItems = [
    {
      title: 'Self Assessment',
      description: 'Evaluate your current skills, interests, and values',
      steps: [
        'Complete personality and aptitude tests',
        'Identify your strengths and weaknesses',
        'Define your career values and priorities',
        'Research industry trends and demands'
      ]
    },
    {
      title: 'Goal Setting',
      description: 'Set SMART career goals for different timeframes',
      steps: [
        'Define short-term goals (1 year)',
        'Plan medium-term objectives (2-3 years)',
        'Envision long-term aspirations (5+ years)',
        'Create measurable milestones'
      ]
    },
    {
      title: 'Skill Development',
      description: 'Create a learning and development plan',
      steps: [
        'Identify skill gaps for target roles',
        'Find relevant courses and certifications',
        'Join professional communities',
        'Practice through projects and internships'
      ]
    }
  ];

  const handlePathClick = (pathId: string) => {
    setSelectedPath(selectedPath === pathId ? null : pathId);
  };

  return (
    <div className="planning-container">
      <header className="planning-header">
        <h1>Career Path Planning</h1>
        <p className="subtitle">Design your career journey with structured pathways and actionable steps</p>
      </header>

      <section className="career-paths">
        <h2>Career Pathways</h2>
        <div className="paths-grid">
          {careerPaths.map((path) => (
            <div key={path.id} className={`path-card ${selectedPath === path.id ? 'selected' : ''}`}>
              <div className="path-header">
                <h3>{path.title}</h3>
                <button 
                  className="btn btn-secondary"
                  onClick={() => handlePathClick(path.id)}
                >
                  {selectedPath === path.id ? 'Hide Pathway' : 'View Pathway'}
                </button>
              </div>
              {selectedPath === path.id && (
                <div className="progression-timeline">
                  {path.roles.map((level, index) => (
                    <div key={index} className="level-card">
                      <h4>{level.level}</h4>
                      <div className="timeframe">{level.timeframe}</div>
                      <div className="roles-list">
                        <h5>Potential Roles:</h5>
                        <ul>
                          {level.roles.map((role, roleIndex) => (
                            <li key={roleIndex}>{role}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="skills-list">
                        <h5>Key Skills:</h5>
                        <ul>
                          {level.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="certifications">
                        <h5>Recommended Certifications:</h5>
                        <ul>
                          {level.certifications.map((cert, certIndex) => (
                            <li key={certIndex}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="action-plan">
        <h2>Action Plan</h2>
        <div className="action-grid">
          {actionItems.map((item, index) => (
            <div key={index} className="action-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="steps-list">
                <h4>Key Steps:</h4>
                <ul>
                  {item.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="planning-tools">
        <h2>Career Planning Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Career Timeline</h3>
            <p>Create a visual timeline of your career milestones and goals</p>
            <button className="btn btn-primary">Create Timeline</button>
          </div>
          <div className="tool-card">
            <h3>Skills Gap Analysis</h3>
            <p>Identify skills needed for your target role and plan your learning</p>
            <button className="btn btn-primary">Analyze Skills</button>
          </div>
          <div className="tool-card">
            <h3>Mentor Connect</h3>
            <p>Connect with industry mentors for guidance and advice</p>
            <button className="btn btn-primary">Find Mentor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planning; 
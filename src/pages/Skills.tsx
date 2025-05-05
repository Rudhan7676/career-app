import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        {
          name: 'Programming',
          courses: [
            { 
              title: 'Web Development Bootcamp', 
              provider: 'Udemy', 
              duration: '12 weeks', 
              level: 'Beginner',
              link: 'https://www.udemy.com/course/the-web-developer-bootcamp/'
            },
            { 
              title: 'Full Stack Development', 
              provider: 'Coursera', 
              duration: '6 months', 
              level: 'Intermediate',
              link: 'https://www.coursera.org/specializations/full-stack-react'
            },
            { 
              title: 'Advanced JavaScript', 
              provider: 'Frontend Masters', 
              duration: '8 weeks', 
              level: 'Advanced',
              link: 'https://frontendmasters.com/courses/deep-javascript-v3/'
            }
          ]
        },
        {
          name: 'Data Analysis',
          courses: [
            { 
              title: 'Data Science Fundamentals', 
              provider: 'DataCamp', 
              duration: '10 weeks', 
              level: 'Beginner',
              link: 'https://www.datacamp.com/tracks/data-scientist-with-python'
            },
            { 
              title: 'Machine Learning Basics', 
              provider: 'Coursera', 
              duration: '4 months', 
              level: 'Intermediate',
              link: 'https://www.coursera.org/learn/machine-learning'
            },
            { 
              title: 'Advanced Data Analytics', 
              provider: 'Udacity', 
              duration: '16 weeks', 
              level: 'Advanced',
              link: 'https://www.udacity.com/course/data-analyst-nanodegree--nd002'
            }
          ]
        }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        {
          name: 'Communication',
          courses: [
            { 
              title: 'Business Communication', 
              provider: 'LinkedIn Learning', 
              duration: '4 weeks', 
              level: 'Beginner',
              link: 'https://www.linkedin.com/learning/topics/business-communication'
            },
            { 
              title: 'Public Speaking', 
              provider: 'Coursera', 
              duration: '6 weeks', 
              level: 'Intermediate',
              link: 'https://www.coursera.org/learn/public-speaking'
            },
            { 
              title: 'Leadership Communication', 
              provider: 'Harvard Online', 
              duration: '8 weeks', 
              level: 'Advanced',
              link: 'https://online-learning.harvard.edu/course/leadership-communication'
            }
          ]
        },
        {
          name: 'Project Management',
          courses: [
            { 
              title: 'Project Management Basics', 
              provider: 'PMI', 
              duration: '6 weeks', 
              level: 'Beginner',
              link: 'https://www.pmi.org/learning/courses'
            },
            { 
              title: 'Agile Project Management', 
              provider: 'Scrum Alliance', 
              duration: '8 weeks', 
              level: 'Intermediate',
              link: 'https://www.scrumalliance.org/courses-events/search'
            },
            { 
              title: 'Advanced PM Certification', 
              provider: 'PMI', 
              duration: '12 weeks', 
              level: 'Advanced',
              link: 'https://www.pmi.org/certifications/project-management-pmp'
            }
          ]
        }
      ]
    }
  ];

  const learningPaths = [
    {
      title: 'Software Development',
      description: 'Master programming and software engineering skills',
      duration: '12 months',
      skills: ['JavaScript', 'React', 'Node.js', 'Database Management'],
      link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
    },
    {
      title: 'Data Science',
      description: 'Learn data analysis and machine learning',
      duration: '9 months',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
      link: 'https://www.coursera.org/professional-certificates/ibm-data-science'
    },
    {
      title: 'Digital Marketing',
      description: 'Develop marketing and analytics expertise',
      duration: '6 months',
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
      link: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
    }
  ];

  return (
    <div className="skills-container">
      <header className="skills-header">
        <h1>Skill Development</h1>
        <p className="subtitle">Enhance your professional skills with curated learning resources</p>
      </header>

      <section className="learning-paths">
        <h2>Recommended Learning Paths</h2>
        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <div key={index} className="path-card">
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <div className="path-duration">
                <span className="label">Duration:</span>
                <span className="value">{path.duration}</span>
              </div>
              <div className="path-skills">
                <h4>Key Skills:</h4>
                <div className="skills-list">
                  {path.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <a href={path.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start Learning</a>
            </div>
          ))}
        </div>
      </section>

      <section className="skill-categories">
        <h2>Available Courses by Category</h2>
        {skillCategories.map((category, index) => (
          <div key={index} className="category-section">
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <h4>{skill.name}</h4>
                  <div className="courses-list">
                    {skill.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="course-item">
                        <h5>{course.title}</h5>
                        <div className="course-details">
                          <span className="provider">{course.provider}</span>
                          <span className="duration">{course.duration}</span>
                          <span className="level">{course.level}</span>
                        </div>
                        <a href={course.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Enroll</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="skill-tracking">
        <h2>Skill Tracking</h2>
        <div className="tracking-features">
          <div className="feature-card">
            <h3>Progress Dashboard</h3>
            <p>Track your learning progress and skill development</p>
            <button className="btn btn-primary">View Progress</button>
          </div>
          <div className="feature-card">
            <h3>Skill Assessment</h3>
            <p>Take assessments to identify skill gaps</p>
            <button className="btn btn-primary">Start Assessment</button>
          </div>
          <div className="feature-card">
            <h3>Learning Analytics</h3>
            <p>Get insights into your learning patterns</p>
            <button className="btn btn-primary">View Analytics</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 
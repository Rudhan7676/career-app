import '../styles/Insights.css';
import SalaryCalculator from '../components/SalaryCalculator';

const Insights = () => {
  const industryTrends = [
    {
      industry: 'Information Technology',
      growth: '15.5%',
      topRoles: ['Full Stack Developer', 'Data Scientist', 'Cloud Solutions Architect'],
      avgSalary: '₹8,50,000',
      description: 'India\'s IT sector continues to grow with increasing demand for digital transformation, AI/ML expertise, and cloud services.'
    },
    {
      industry: 'Healthcare & Pharma',
      growth: '17%',
      topRoles: ['Clinical Research Analyst', 'Healthcare Administrator', 'Pharmaceutical Researcher'],
      avgSalary: '₹7,00,000',
      description: 'Healthcare sector in India is experiencing rapid growth with focus on telemedicine, biotechnology, and medical research.'
    },
    {
      industry: 'E-commerce & Digital Retail',
      growth: '19%',
      topRoles: ['Digital Marketing Manager', 'Supply Chain Analyst', 'E-commerce Operations Manager'],
      avgSalary: '₹6,50,000',
      description: 'E-commerce sector in India is booming with increasing digital adoption and innovative retail solutions.'
    }
  ];

  const careerStats = [
    {
      title: 'Digital Workforce',
      value: '52%',
      description: 'of India\'s workforce expected to be digitally skilled by 2024'
    },
    {
      title: 'Startup Growth',
      value: '12,500+',
      description: 'active startups in India creating new job opportunities'
    },
    {
      title: 'Remote Jobs',
      value: '41%',
      description: 'increase in remote work opportunities in India post-pandemic'
    }
  ];

  return (
    <div className="insights-container">
      <header className="insights-header">
        <h1>Career Insights - India</h1>
        <p className="subtitle">Stay informed about industry trends, salary data, and career opportunities in India</p>
      </header>

      <section className="industry-trends">
        <h2>Industry Growth Trends in India</h2>
        <div className="trends-grid">
          {industryTrends.map((trend, index) => (
            <div key={index} className="trend-card">
              <h3>{trend.industry}</h3>
              <div className="trend-stats">
                <div className="stat">
                  <span className="label">Growth Rate</span>
                  <span className="value">{trend.growth}</span>
                </div>
                <div className="stat">
                  <span className="label">Average Salary</span>
                  <span className="value">{trend.avgSalary}</span>
                </div>
              </div>
              <div className="top-roles">
                <h4>Top Roles</h4>
                <ul>
                  {trend.topRoles.map((role, roleIndex) => (
                    <li key={roleIndex}>{role}</li>
                  ))}
                </ul>
              </div>
              <p className="trend-description">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-statistics">
        <h2>Indian Job Market Statistics</h2>
        <div className="stats-grid">
          {careerStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-resources">
        <h2>Career Development Resources</h2>
        <div className="resources-grid">
          <div className="resource-card salary-calculator-card">
            <h3>Salary Calculator</h3>
            <SalaryCalculator />
          </div>
          <div className="resource-card">
            <h3>Industry Reports</h3>
            <p>Download NASSCOM and industry-specific reports</p>
            <a href="https://nasscom.in/knowledge-center" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Reports</a>
          </div>
          <div className="resource-card">
            <h3>Career Guides</h3>
            <p>Access comprehensive guides for different career paths in India</p>
            <a href="https://www.naukri.com/career-guidance" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Browse Guides</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights; 
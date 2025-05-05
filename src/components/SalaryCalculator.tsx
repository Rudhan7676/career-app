import React, { useState } from 'react';
import '../styles/SalaryCalculator.css';

interface SalaryRange {
  min: number;
  max: number;
}

interface JobRole {
  id: string;
  title: string;
  baseSalary: SalaryRange;
}

interface Location {
  id: string;
  name: string;
  multiplier: number;
}

const jobRoles: JobRole[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    baseSalary: { min: 400000, max: 800000 }
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    baseSalary: { min: 500000, max: 1000000 }
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    baseSalary: { min: 800000, max: 1500000 }
  },
  {
    id: 'ui-designer',
    title: 'UI/UX Designer',
    baseSalary: { min: 400000, max: 900000 }
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    baseSalary: { min: 500000, max: 1200000 }
  },
  {
    id: 'full-stack',
    title: 'Full Stack Developer',
    baseSalary: { min: 500000, max: 1000000 }
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    baseSalary: { min: 400000, max: 900000 }
  },
  {
    id: 'system-architect',
    title: 'System Architect',
    baseSalary: { min: 1200000, max: 2500000 }
  }
];

const locations: Location[] = [
  { id: 'bangalore', name: 'Bangalore', multiplier: 1.2 },
  { id: 'mumbai', name: 'Mumbai', multiplier: 1.15 },
  { id: 'delhi', name: 'Delhi NCR', multiplier: 1.1 },
  { id: 'hyderabad', name: 'Hyderabad', multiplier: 1.05 },
  { id: 'pune', name: 'Pune', multiplier: 1.0 },
  { id: 'chennai', name: 'Chennai', multiplier: 1.0 },
  { id: 'kolkata', name: 'Kolkata', multiplier: 0.95 },
  { id: 'other', name: 'Other Cities', multiplier: 0.9 }
];

const experienceMultipliers = {
  '0-2': 1,
  '2-5': 1.5,
  '5-8': 2.0,
  '8-12': 2.5,
  '12+': 3.0
};

const SalaryCalculator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [calculatedSalary, setCalculatedSalary] = useState<string | null>(null);

  const roles = [
    { id: 'software', name: 'Software Engineer' },
    { id: 'data', name: 'Data Scientist' },
    { id: 'product', name: 'Product Manager' },
    { id: 'designer', name: 'UI/UX Designer' },
    { id: 'devops', name: 'DevOps Engineer' },
    { id: 'fullstack', name: 'Full Stack Developer' },
    { id: 'mobile', name: 'Mobile Developer' },
    { id: 'architect', name: 'System Architect' }
  ];

  const locations = [
    { id: 'bangalore', name: 'Bangalore', multiplier: 1.2 },
    { id: 'mumbai', name: 'Mumbai', multiplier: 1.15 },
    { id: 'delhi', name: 'Delhi NCR', multiplier: 1.1 },
    { id: 'hyderabad', name: 'Hyderabad', multiplier: 1.05 },
    { id: 'pune', name: 'Pune/Chennai', multiplier: 1.0 },
    { id: 'kolkata', name: 'Kolkata', multiplier: 0.95 },
    { id: 'other', name: 'Other Cities', multiplier: 0.9 }
  ];

  const experienceLevels = [
    { id: 'entry', name: '0-2 years', multiplier: 1.0 },
    { id: 'mid', name: '2-5 years', multiplier: 1.5 },
    { id: 'senior', name: '5-8 years', multiplier: 2.0 },
    { id: 'lead', name: '8-12 years', multiplier: 2.5 },
    { id: 'expert', name: '12+ years', multiplier: 3.0 }
  ];

  const baseSalaries: Record<string, number> = {
    'software': 600000,
    'data': 800000,
    'product': 900000,
    'designer': 700000,
    'devops': 750000,
    'fullstack': 700000,
    'mobile': 650000,
    'architect': 1200000
  };

  const calculateSalary = () => {
    if (!role || !location || !experience) {
      alert('Please select all fields');
      return;
    }

    const baseSalary = baseSalaries[role];
    const locationMultiplier = locations.find(loc => loc.id === location)?.multiplier || 1;
    const experienceMultiplier = experienceLevels.find(exp => exp.id === experience)?.multiplier || 1;

    const calculated = baseSalary * locationMultiplier * experienceMultiplier;
    setCalculatedSalary(new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(calculated));
  };

  return (
    <div className="salary-calculator">
      <div className="calculator-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>Salary Calculator</h3>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
      
      {isExpanded && (
        <div className="calculator-content">
          <div className="calculator-form">
            <div className="form-group">
              <label htmlFor="role">Job Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience Level</label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Select Experience</option>
                {experienceLevels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>

            <button className="calculate-btn" onClick={calculateSalary}>
              Calculate Salary
            </button>

            {calculatedSalary && (
              <div className="result">
                <h4>Estimated Salary Range</h4>
                <p className="salary">{calculatedSalary}</p>
                <p className="note">Note: This is an estimated range based on industry standards and may vary based on company policies and individual qualifications.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator; 
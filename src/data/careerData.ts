export interface Question {
  id: number;
  text: string;
  category: 'personality' | 'skills' | 'interests' | 'work_environment' | 'values';
  options: {
    text: string;
    score: { [key: string]: number };
  }[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  salaryRange: string;
  growthPotential: string;
  education: string;
  personalityTraits: string[];
  workEnvironment: string;
  relatedCareers: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to work?",
    category: "work_environment",
    options: [
      {
        text: "Independently, with minimal supervision",
        score: { "entrepreneur": 5, "researcher": 4, "artist": 4, "programmer": 3 }
      },
      {
        text: "In a team, collaborating with others",
        score: { "manager": 5, "teacher": 4, "nurse": 4, "sales": 3 }
      },
      {
        text: "In a structured environment with clear guidelines",
        score: { "accountant": 5, "engineer": 4, "lawyer": 4, "administrator": 3 }
      },
      {
        text: "In a dynamic, fast-paced setting",
        score: { "entrepreneur": 4, "sales": 5, "marketing": 4, "event_planner": 3 }
      }
    ]
  },
  {
    id: 2,
    text: "What type of problems do you enjoy solving?",
    category: "skills",
    options: [
      {
        text: "Technical or mathematical problems",
        score: { "engineer": 5, "programmer": 5, "data_scientist": 4, "researcher": 3 }
      },
      {
        text: "Creative or artistic challenges",
        score: { "artist": 5, "designer": 5, "writer": 4, "architect": 3 }
      },
      {
        text: "People-related issues",
        score: { "psychologist": 5, "teacher": 4, "nurse": 4, "social_worker": 3 }
      },
      {
        text: "Business or organizational problems",
        score: { "manager": 5, "entrepreneur": 4, "consultant": 4, "analyst": 3 }
      }
    ]
  },
  {
    id: 3,
    text: "What is your ideal work schedule?",
    category: "work_environment",
    options: [
      {
        text: "Regular 9-5 hours",
        score: { "accountant": 5, "teacher": 4, "administrator": 4, "engineer": 3 }
      },
      {
        text: "Flexible hours that I can set myself",
        score: { "entrepreneur": 5, "freelancer": 5, "writer": 4, "artist": 3 }
      },
      {
        text: "Shift work or irregular hours",
        score: { "nurse": 5, "doctor": 4, "police": 4, "firefighter": 3 }
      },
      {
        text: "Long hours with high intensity",
        score: { "lawyer": 5, "investment_banker": 5, "surgeon": 4, "consultant": 3 }
      }
    ]
  },
  {
    id: 4,
    text: "What subjects did you enjoy most in school?",
    category: "interests",
    options: [
      {
        text: "Math and Science",
        score: { "engineer": 5, "scientist": 5, "programmer": 4, "doctor": 3 }
      },
      {
        text: "Arts and Humanities",
        score: { "artist": 5, "writer": 5, "historian": 4, "teacher": 3 }
      },
      {
        text: "Social Sciences",
        score: { "psychologist": 5, "sociologist": 4, "lawyer": 4, "social_worker": 3 }
      },
      {
        text: "Business and Economics",
        score: { "entrepreneur": 5, "accountant": 4, "analyst": 4, "manager": 3 }
      }
    ]
  },
  {
    id: 5,
    text: "How do you handle stress?",
    category: "personality",
    options: [
      {
        text: "I remain calm and analytical",
        score: { "doctor": 5, "engineer": 4, "programmer": 4, "scientist": 3 }
      },
      {
        text: "I use creativity to find solutions",
        score: { "designer": 5, "artist": 4, "writer": 4, "architect": 3 }
      },
      {
        text: "I rely on my social support network",
        score: { "teacher": 5, "nurse": 4, "social_worker": 4, "psychologist": 3 }
      },
      {
        text: "I take charge and make decisions",
        score: { "manager": 5, "entrepreneur": 4, "lawyer": 4, "consultant": 3 }
      }
    ]
  },
  {
    id: 6,
    text: "What type of impact do you want to make?",
    category: "values",
    options: [
      {
        text: "Technological advancement",
        score: { "engineer": 5, "programmer": 5, "scientist": 4, "researcher": 3 }
      },
      {
        text: "Artistic or cultural contribution",
        score: { "artist": 5, "writer": 5, "designer": 4, "architect": 3 }
      },
      {
        text: "Helping others directly",
        score: { "doctor": 5, "teacher": 5, "nurse": 4, "social_worker": 3 }
      },
      {
        text: "Business or economic impact",
        score: { "entrepreneur": 5, "manager": 4, "consultant": 4, "analyst": 3 }
      }
    ]
  },
  {
    id: 7,
    text: "How do you prefer to communicate?",
    category: "personality",
    options: [
      {
        text: "Through writing or technical documentation",
        score: { "writer": 5, "programmer": 4, "researcher": 4, "analyst": 3 }
      },
      {
        text: "Through visual or artistic expression",
        score: { "artist": 5, "designer": 5, "architect": 4, "photographer": 3 }
      },
      {
        text: "Through direct personal interaction",
        score: { "teacher": 5, "sales": 4, "psychologist": 4, "nurse": 3 }
      },
      {
        text: "Through presentations and public speaking",
        score: { "lawyer": 5, "manager": 4, "consultant": 4, "entrepreneur": 3 }
      }
    ]
  },
  {
    id: 8,
    text: "What type of work environment do you prefer?",
    category: "work_environment",
    options: [
      {
        text: "Office or corporate setting",
        score: { "accountant": 5, "manager": 4, "analyst": 4, "consultant": 3 }
      },
      {
        text: "Creative or artistic space",
        score: { "artist": 5, "designer": 5, "writer": 4, "architect": 3 }
      },
      {
        text: "Healthcare or service environment",
        score: { "doctor": 5, "nurse": 5, "teacher": 4, "social_worker": 3 }
      },
      {
        text: "Laboratory or research facility",
        score: { "scientist": 5, "engineer": 4, "researcher": 4, "programmer": 3 }
      }
    ]
  }
];

export const careers: Career[] = [
  {
    id: "engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software applications and systems. Work on creating efficient and scalable solutions for various industries.",
    requiredSkills: ["Programming", "Problem-solving", "System Design", "Algorithms"],
    salaryRange: "₹6,00,000 - ₹15,00,000",
    growthPotential: "High",
    education: "Bachelor's in Computer Science or related field",
    personalityTraits: ["Analytical", "Detail-oriented", "Logical", "Innovative"],
    workEnvironment: "Office or remote, collaborative team setting",
    relatedCareers: ["Data Scientist", "DevOps Engineer", "Systems Architect"]
  },
  {
    id: "doctor",
    title: "Medical Doctor",
    description: "Diagnose and treat medical conditions, provide patient care, and contribute to medical research and public health.",
    requiredSkills: ["Medical Knowledge", "Diagnosis", "Patient Care", "Communication"],
    salaryRange: "₹12,00,000 - ₹30,00,000",
    growthPotential: "High",
    education: "Medical Degree (MD or DO)",
    personalityTraits: ["Compassionate", "Detail-oriented", "Analytical", "Patient"],
    workEnvironment: "Hospitals, clinics, private practice",
    relatedCareers: ["Surgeon", "Specialist", "Medical Researcher"]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description: "Start and manage your own business, identify market opportunities, and create innovative solutions.",
    requiredSkills: ["Leadership", "Business Planning", "Marketing", "Financial Management"],
    salaryRange: "Varies widely",
    growthPotential: "Unlimited",
    education: "Business degree or equivalent experience",
    personalityTraits: ["Risk-taking", "Innovative", "Persistent", "Visionary"],
    workEnvironment: "Variable, often dynamic and challenging",
    relatedCareers: ["Business Consultant", "Startup Founder", "Investor"]
  },
  {
    id: "teacher",
    title: "Educator",
    description: "Teach and mentor students, develop curriculum, and contribute to educational development.",
    requiredSkills: ["Teaching", "Communication", "Curriculum Development", "Classroom Management"],
    salaryRange: "₹3,00,000 - ₹8,00,000",
    growthPotential: "Moderate",
    education: "Bachelor's in Education, Teaching Certification",
    personalityTraits: ["Patient", "Communicative", "Organized", "Passionate"],
    workEnvironment: "Schools, educational institutions",
    relatedCareers: ["Educational Consultant", "Curriculum Developer", "School Administrator"]
  },
  {
    id: "artist",
    title: "Creative Professional",
    description: "Create visual, performing, or literary art, express ideas through various media, and contribute to cultural development.",
    requiredSkills: ["Creativity", "Technical Skills", "Visual Communication", "Artistic Expression"],
    salaryRange: "Varies widely",
    growthPotential: "Moderate to High",
    education: "Formal training or self-taught",
    personalityTraits: ["Creative", "Expressive", "Innovative", "Passionate"],
    workEnvironment: "Studio, gallery, or freelance",
    relatedCareers: ["Designer", "Art Director", "Creative Director"]
  },
  {
    id: "lawyer",
    title: "Attorney",
    description: "Provide legal advice, represent clients in court, and ensure legal compliance in various matters.",
    requiredSkills: ["Legal Knowledge", "Research", "Communication", "Analytical Thinking"],
    salaryRange: "₹6,00,000 - ₹20,00,000",
    growthPotential: "High",
    education: "Law Degree (JD)",
    personalityTraits: ["Analytical", "Persuasive", "Detail-oriented", "Ethical"],
    workEnvironment: "Law firms, corporate legal departments",
    relatedCareers: ["Legal Consultant", "Judge", "Legal Analyst"]
  },
  {
    id: "scientist",
    title: "Research Scientist",
    description: "Conduct scientific research, analyze data, and contribute to scientific knowledge in various fields.",
    requiredSkills: ["Research", "Data Analysis", "Scientific Method", "Technical Writing"],
    salaryRange: "₹4,50,000 - ₹12,00,000",
    growthPotential: "High",
    education: "PhD in relevant field",
    personalityTraits: ["Curious", "Analytical", "Patient", "Detail-oriented"],
    workEnvironment: "Laboratories, research institutions",
    relatedCareers: ["Research Director", "Data Scientist", "Academic Professor"]
  },
  {
    id: "psychologist",
    title: "Clinical Psychologist",
    description: "Assess and treat mental health conditions, provide therapy, and conduct psychological research.",
    requiredSkills: ["Counseling", "Assessment", "Research", "Communication"],
    salaryRange: "₹5,00,000 - ₹12,00,000",
    growthPotential: "High",
    education: "Doctorate in Psychology",
    personalityTraits: ["Empathetic", "Analytical", "Patient", "Good Listener"],
    workEnvironment: "Private practice, hospitals, clinics",
    relatedCareers: ["Counselor", "Therapist", "Mental Health Consultant"]
  }
]; 
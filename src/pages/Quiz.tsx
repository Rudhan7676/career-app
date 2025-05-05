import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, careers, Question, Career } from '../data/careerData';
import '../styles/Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [careerScores, setCareerScores] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [topCareers, setTopCareers] = useState<Career[]>([]);

  useEffect(() => {
    // Initialize career scores
    const initialScores: { [key: string]: number } = {};
    careers.forEach(career => {
      initialScores[career.id] = 0;
    });
    setCareerScores(initialScores);
  }, []);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    const newAnswers = { ...answers, [questionId]: optionIndex };
    setAnswers(newAnswers);

    // Calculate career scores
    const question = questions.find(q => q.id === questionId);
    if (question) {
      const selectedOption = question.options[optionIndex];
      const newCareerScores = { ...careerScores };

      Object.entries(selectedOption.score).forEach(([careerId, score]) => {
        newCareerScores[careerId] = (newCareerScores[careerId] || 0) + score;
      });

      setCareerScores(newCareerScores);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    // Sort careers by score
    const sortedCareers = careers
      .map(career => ({
        ...career,
        score: careerScores[career.id] || 0
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    setTopCareers(sortedCareers);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCareerScores({});
    setShowResults(false);
    setTopCareers([]);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-card fade-in">
          <h2>Your Career Matches</h2>
          <div className="career-list">
            {topCareers.map((career, index) => (
              <div key={career.id} className="career-card">
                <h3>{index + 1}. {career.title}</h3>
                <p className="career-description">{career.description}</p>
                <div className="career-details">
                  <div className="detail-group">
                    <h4>Required Skills</h4>
                    <ul>
                      {career.requiredSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-group">
                    <h4>Personality Traits</h4>
                    <ul>
                      {career.personalityTraits.map(trait => (
                        <li key={trait}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-group">
                    <h4>Education</h4>
                    <p>{career.education}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Salary Range</h4>
                    <p>{career.salaryRange}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Growth Potential</h4>
                    <p>{career.growthPotential}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Work Environment</h4>
                    <p>{career.workEnvironment}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Related Careers</h4>
                    <ul>
                      {career.relatedCareers.map(related => (
                        <li key={related}>{related}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="quiz-actions">
            <button onClick={handleRestart} className="btn btn-primary">
              Take Quiz Again
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn btn-secondary">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card fade-in">
        <div className="quiz-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>

        <h2 className="question-text">{currentQuestion.text}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${answers[currentQuestion.id] === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion.id, index)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="quiz-actions">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              className="btn btn-secondary"
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

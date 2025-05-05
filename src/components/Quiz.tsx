import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  
  // Define your quiz questions
  const questions = [
    { question: "What interests you the most?", options: ["Technology", "Medical", "Business", "Arts"] },
    { question: "Which subject do you like the most?", options: ["Math", "Biology", "Economics", "Design"] },
    { question: "What kind of work do you enjoy?", options: ["Coding", "Helping People", "Managing Teams", "Creative Work"] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // Handle answer selection
  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results", { state: { answers } });
    }
  };

  return (
    <div>
      <h1>Career Quiz</h1>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)} style={{ display: "block", margin: "10px 0" }}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;

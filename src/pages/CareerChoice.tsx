import { useNavigate } from "react-router-dom";

const CareerChoice = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz"); // ✅ Redirect to quiz
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Choose Your Career Path</h1>
      <button
        onClick={handleStartQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Let's Decide Career
      </button>
    </div>
  );
};

export default CareerChoice;

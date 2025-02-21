import React, { useState, useEffect } from 'react';
import { getQuizHistory } from '../services/indexedDB';
import { useNavigate } from 'react-router-dom';  

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getQuizHistory();
      setQuizHistory(history);
    };
    fetchHistory();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg p-6 rounded-md w-96 max-h-80 overflow-y-auto border">
        <h2 className="text-lg font-bold mb-3 text-center">Quiz History</h2>
        
        {quizHistory.length > 0 ? (
          <ul>
            {quizHistory.map((entry, index) => (
              <li key={index} className="p-3 border-b last:border-none text-center">
                <p className="font-semibold">Score: {entry.score} / {entry.totalQuestions}</p>
                <p className="text-gray-600">Completed: {new Date(entry.completedAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No history available.</p>
        )}

      
        <button
          onClick={() => navigate('/')} 
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuizHistory;

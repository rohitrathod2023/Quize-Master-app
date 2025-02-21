import React, { useState, useEffect } from 'react';

const IntegerQuestion = ({ question, selectedAnswer, onAnswer }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    setInputValue('');
    setIsSubmitted(false);
  }, [question]);

  useEffect(() => {
    if (selectedAnswer !== undefined && selectedAnswer !== null) {
      setInputValue(selectedAnswer.toString());
      setIsSubmitted(true);
    }
  }, [selectedAnswer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(inputValue);
    if (!isNaN(answer)) {
      onAnswer(answer);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.question}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSubmitted}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          placeholder="Enter your answer"
        />
        <button
          type="submit"
          disabled={isSubmitted || !inputValue}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      </form>
      
      {isSubmitted && (
        <div className={`mt-4 p-4 rounded-lg ${
          parseInt(inputValue) === question.correctAnswer 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {parseInt(inputValue) === question.correctAnswer 
            ? "Correct!" 
            : `Incorrect. The correct answer is ${question.correctAnswer}`}
        </div>
      )}
    </div>
  );
};

export default IntegerQuestion;

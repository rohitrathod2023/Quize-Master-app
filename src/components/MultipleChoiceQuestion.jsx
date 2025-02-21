import React from 'react';

const MultipleChoiceQuestion = ({ question, selectedAnswer, onAnswer }) => {
  const isAnswered = selectedAnswer !== null && selectedAnswer !== undefined;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              isAnswered
                ? index === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : index === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className={`mt-4 p-4 rounded-lg ${
          selectedAnswer === question.correctAnswer 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {selectedAnswer === question.correctAnswer 
            ? "Correct!" 
            : `Incorrect. The correct answer is ${String.fromCharCode(65 + question.correctAnswer)}`}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
import React, { useState } from 'react';
import Timer from '../components/Timer';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import IntegerQuestion from '../components/IntegerQuestion';
import { quizData } from '../data/quizData';
import { saveQuizResult } from '../services/indexedDB';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(30);

  const allQuestions = [
    ...quizData.sections[0].questions,
    ...quizData.sections[1].questions
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

 
  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionTimer(30);
    }
  };


  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setQuestionTimer(30);
    }
  };


  const handleSubmit = async () => {
    if (quizComplete) return; 
    setQuizComplete(true); 

    const score = Object.entries(answers).reduce((acc, [questionId, answer]) => {
      const question = allQuestions.find(q => q.id === parseInt(questionId));
      return acc + (answer === question.correctAnswer ? 1 : 0);
    }, 0);

    await saveQuizResult({
      score,
      totalQuestions: allQuestions.length,
      answers,
      completedAt: new Date().toISOString()
    });
  };


  const handleTimeUp = () => {
    const currentQuestion = allQuestions[currentQuestionIndex];
    if (!answers[currentQuestion.id]) {
      handleAnswer(currentQuestion.id, null);
    }
    handleNext();
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
    setQuestionTimer(30);
  };

  
  if (quizComplete) {
    const totalScore = Object.entries(answers).reduce((acc, [questionId, answer]) => {
      const question = allQuestions.find(q => q.id === parseInt(questionId));
      return acc + (answer === question.correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>

          <div className="flex flex-col items-center justify-center bg-gray-200 p-6 rounded-lg mb-6">
            <p className="text-xl font-semibold text-gray-700">Your Score</p>
            <span className="text-4xl font-bold text-blue-600">
              {totalScore} / {allQuestions.length}
            </span>
            <p className="text-lg font-medium text-green-600 mt-2">
              {((totalScore / allQuestions.length) * 100).toFixed(1)}% Correct
            </p>
          </div>

          
          <button
            onClick={resetQuiz}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Repeat Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = allQuestions[currentQuestionIndex];

  return (
    <div className="pt-20">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6 flex flex-row justify-between items-center">
          <div className="mt-4 text-center text-gray-600">
            Question {currentQuestionIndex + 1} / {allQuestions.length}
          </div>
          <Timer 
            seconds={questionTimer} 
            onTimeUp={handleTimeUp}
          />
        </div>

        {currentQuestion.type === 'multiple-choice' ? (
          <MultipleChoiceQuestion
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          />
        ) : (
          <IntegerQuestion
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          />
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:bg-gray-300"
          >
            Previous
          </button>

          {currentQuestionIndex === allQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

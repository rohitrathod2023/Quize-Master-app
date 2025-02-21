// src/data/quizData.js
export const quizData = {
  instructions: {
    title: "Sample Quiz Instructions",
    points: [
      "For multiple-choice questions, select the one best answer (A, B, C, or D).",
      "For integer-type questions, write your numerical answer clearly.",
      "No calculators unless specified.",
      "You have 30 minutes to complete this quiz.",
      "Each question has a 30-second time limit."
    ],
    totalTime: 30
  },
  sections: [
    {
      title: "Multiple-Choice Questions",
      description: "(5 Questions)",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Mercury", "Earth", "Mars"],
          correctAnswer: 1,
          timeLimit: 30
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
          options: ["Stack", "Queue", "Tree", "Graph"],
          correctAnswer: 1,
          timeLimit: 30
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "Which of the following is primarily used for structuring web pages?",
          options: ["Python", "Java", "HTML", "C++"],
          correctAnswer: 2,
          timeLimit: 30
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "Which chemical symbol stands for Gold?",
          options: ["Au", "Gd", "Ag", "Pt"],
          correctAnswer: 0,
          timeLimit: 30
        },
        {
          id: 5,
          type: "multiple-choice",
          question: "Which of these processes is not typically involved in refining petroleum?",
          options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"],
          correctAnswer: 3,
          timeLimit: 30
        }
      ]
    },
    {
      title: "Integer-Type Questions",
      description: "(5 Questions)",
      questions: [
        {
          id: 6,
          type: "integer",
          question: "What is the value of 12 + 28?",
          correctAnswer: 40,
          timeLimit: 30
        },
        {
          id: 7,
          type: "integer",
          question: "How many states are there in the United States?",
          correctAnswer: 50,
          timeLimit: 30
        },
        {
          id: 8,
          type: "integer",
          question: "In which year was the Declaration of Independence signed?",
          correctAnswer: 1776,
          timeLimit: 30
        },
        {
          id: 9,
          type: "integer",
          question: "What is the value of pi rounded to the nearest integer?",
          correctAnswer: 3,
          timeLimit: 30
        },
        {
          id: 10,
          type: "integer",
          question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
          correctAnswer: 120,
          timeLimit: 30
        }
      ]
    }
  ]
};
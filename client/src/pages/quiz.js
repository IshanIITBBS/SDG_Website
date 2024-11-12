// Quiz.js

import React, { useState,useEffect } from 'react';
import './quiz.css'; // Import the CSS file
import { useGlobalContext } from '../globalcontext';
// // Sample quiz data
// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: {
//             a: "Berlin",
//             b: "Madrid",
//             c: "Paris",
//             d: "Lisbon",
//         },
//         answer: "c",
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: {
//             a: "Earth",
//             b: "Mars",
//             c: "Jupiter",
//             d: "Saturn",
//         },
//         answer: "b",
//     },
//     {
//         question: "What is the largest ocean on Earth?",
//         options: {
//             a: "Atlantic Ocean",
//             b: "Indian Ocean",
//             c: "Arctic Ocean",
//             d: "Pacific Ocean",
//         },
//         answer: "d",
//     },
//     {
//         question: "Who wrote 'To Kill a Mockingbird'?",
//         options: {
//             a: "Harper Lee",
//             b: "Mark Twain",
//             c: "Ernest Hemingway",
//             d: "F. Scott Fitzgerald",
//         },
//         answer: "a",
//     },
// ];

const Quiz = () => {
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [quizData,setQuizData]=useState([]) ;
    var [userAnswers, setUserAnswers] = useState([]);
    const { globalVariable, setGlobalVariable } = useGlobalContext();

  useEffect(() => {
    fetch(`${globalVariable}/quiz`)
      .then((response) => response.json() )
      .then(data=>
        {
            setQuizData(data) ;
            userAnswers=Array(quizData.length).fill('');
        })
      .catch(error => console.error('Error fetching notices:', error));
  }, []);
  
  
    const handleOptionChange = (questionIndex, option) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = option;
        setUserAnswers(updatedAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedScore = userAnswers.reduce((total, answer, index) => {
            return answer === quizData[index].answer ? total + 1 : total;
        }, 0);
        setScore(calculatedScore);
        setSubmitted(true);
    };

    return (
        <div className='quiz-body'>
        <div className="quiz-container">
            <h1>Quiz</h1>
            {submitted && <h2 className='quiz-score'>Your Score: {score} out of {quizData.length}</h2>}
            
            <form onSubmit={handleSubmit} className="quiz-form">
                {quizData.map((item, index) => (
                    <div key={index} className="question">
                        <h3>{item.question}</h3>
                        {Object.entries(item.options).map(([key, option]) => {
                            const isCorrectAnswer = key === item.answer;
                            const isSelectedAnswer = userAnswers[index] === key;
                            const answerClass = submitted ? 
                                (isCorrectAnswer ? 'correct' : isSelectedAnswer ? 'incorrect' : '') : '';

                            return (
                                <label 
                                    key={key} 
                                    className={`option-label ${answerClass}`}
                                >
                                    <input
                                        type="radio"
                                        value={key}
                                        checked={userAnswers[index] === key}
                                        onChange={() => handleOptionChange(index, key)}
                                        disabled={submitted}
                                        className="option-input"
                                    />
                                    <span className="option-text">{option}</span>
                                </label>
                            );
                        })}
                        {submitted && (
                            <div className="answer-reveal">
                                Correct Answer: {item.options[item.answer]}
                            </div>
                        )}
                    </div>
                ))}
                {!submitted && (
                    <button type="submit" className="submit-button">Submit</button>
                )}
            </form>
        </div>
        </div>
    );
};

export default Quiz;

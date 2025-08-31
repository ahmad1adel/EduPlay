

import React, { useEffect, useState } from "react";
import "./QuizQuestion.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Courses/Sidebar";

const QuizQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({ score: 0, points: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const courseId = localStorage.getItem("selectedCourseId");
    const studentId = JSON.parse(localStorage.getItem("user"))?._id;
  
    const fetchQuestions = async () => {
      try {
        setLoading(true);
  
        const res = await fetch(`http://localhost:5000/api/questions/course/${courseId}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setQuestions(data);
  
        const resultRes = await fetch(`http://localhost:5000/api/exam-results/${studentId}`);
        const results = await resultRes.json();
  
        const examForCourse = results.find(r => r.courseId === courseId);
        if (examForCourse) {
          const submittedAns = {};
          examForCourse.answers.forEach(ans => {
            submittedAns[ans.questionId] = ans.selected;
          });
  
          setAnswers(submittedAns);
          setScore({ score: examForCourse.totalScore, points: examForCourse.answers.reduce((acc, a) => acc + (a.points || 0), 0) });
          setSubmitted(true);
        }
  
        setError(null);
      } catch (error) {
        console.error("Failed to fetch questions or exam result:", error);
        setError("Failed to load data. Please check your server connection.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, []);
  
  

  const handleAnswerChange = (questionId, choice) => {
    setAnswers({ ...answers, [questionId]: choice });
  };

  const handleSubmit = async () => {
    let totalScore = 0;
    let totalPoints = 0;

    const submittedAnswers = questions.map((q) => {
      const selected = answers[q._id];
      const isCorrect = selected === q.correct;
      const points = isCorrect ? parseInt(q.score || 0) : 0;

      if (isCorrect) totalScore += points;
      totalPoints += parseInt(q.score || 0); 

      return {
        questionId: q._id,
        selected,
        isCorrect,
        points,
      };
    });

    const resultData = {
      studentId: JSON.parse(localStorage.getItem("user"))._id,
      courseId: localStorage.getItem("selectedCourseId"),
      answers: submittedAnswers,
      totalScore,
    };

    try {
      await fetch("http://localhost:5000/api/exam-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resultData),
      });
    } catch (err) {
      console.error("Error submitting result:", err);
    }

    setScore({ score: totalScore, points: totalPoints });
    setSubmitted(true);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page">
            <div className="card"><p>Loading questions...</p></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page">
            <div className="card"><p style={{ color: "red" }}>{error}</p></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page">
          <div className="card">
            {questions.length === 0 ? (
              <p>No questions available. Please create some questions first.</p>
            ) : (
              questions.map((q, index) => (
                <div className="quiz-question" key={q._id}>
                  <h3>Q{index + 1}: {q.text}</h3>
                  <div className="options">
                    {q.choices.map((choice, i) => {
                      const label = ["A", "B", "C", "D"][i];
                      return (
                        <div key={label} className="option-row">
                          <input
                            type="radio"
                            id={`${q._id}-${label}`}
                            name={`question-${q._id}`}
                            disabled={submitted}
                            checked={answers[q._id] === label}
                            onChange={() => handleAnswerChange(q._id, label)}
                          />
                          <label htmlFor={`${q._id}-${label}`}>
                            {label}. {choice}
                          </label>
                          {submitted && q.correct === label && (
                            <span className="correct-text">✓ Correct Answer</span>
                          )}
                          {submitted &&
                            answers[q._id] === label &&
                            q.correct !== label && (
                              <span className="wrong-text">✗ Wrong</span>
                            )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}

            {!submitted && (
              <div style={{ textAlign: "left", marginTop: "30px" }}>
                <button className="save-button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}

            {submitted && (
              <div className="result-box">
                <h2>Quiz Results</h2>
                <p>Your Score: {score.score}</p>
                <p>Total Points: {score.points}</p>
                <p>
                  Correct Answers:{" "}
                  {
                    questions.filter((q) => answers[q._id] === q.correct).length
                  }{" "}
                  / {questions.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;

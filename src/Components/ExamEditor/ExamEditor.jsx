import React, { useState, useEffect } from 'react';
import './ExamEditor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Courses/Sidebar';

function ExamEditor() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correct: '',
      score: '',
      points: ''
    }
  ]);

  const [examTitle, setExamTitle] = useState('Midterm');
  const [duration, setDuration] = useState('50 mins');
  const [courseId, setCourseId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const selectedCourseId = localStorage.getItem('selectedCourseId');
    if (!selectedCourseId) {
      setModalMessage('No course selected. Redirecting...');
      setShowModal(true);
      setTimeout(() => navigate('/exams'), 2000);
    } else {
      setCourseId(selectedCourseId);
    }
  }, [navigate]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: '',
      choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
      correct: '',
      score: '',
      points: ''
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (qIndex, choiceIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].choices[choiceIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectChoice = (qIndex, choice) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correct = choice;
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handlePublish = async () => {
    const invalidQuestions = questions.filter(q =>
      !q.text.trim() ||
      !q.correct ||
      !q.score ||
      !q.points ||
      q.choices.some(choice => !choice.trim())
    );

    if (invalidQuestions.length > 0) {
      setModalMessage("Please fill in all required fields for all questions.");
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          courseId,
          examTitle,
          duration,
          questions
        })
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setModalMessage(data.message || "Questions published successfully!");
      setShowModal(true);
      setTimeout(() => navigate("/exams"), 1500);
    } catch (err) {
      console.error("Error publishing exam:", err);
      setModalMessage("Error publishing exam. Please check your server connection.");
      setShowModal(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="exam-editor">
          <div className="exam-info">
            <label>
              Exam Title:{" "}
              <input type="text" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} />
            </label>
            <label>
              Duration:{" "}
              <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </label>
          </div>

          {questions.map((q, index) => (
            <div className="question-card" key={q.id}>
              <div className="question-header">
                <span>☰ Question ({index + 1}):</span>
                <textarea
                  value={q.text}
                  onChange={(e) => handleQuestionChange(index, "text", e.target.value)}
                  placeholder="Enter question..."
                />
                <button className="edit-btn" onClick={() => handleDeleteQuestion(index)}>
                  <FontAwesomeIcon icon={faPen} style={{ color: "#434343" }} />{" "}
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#434343" }} />
                </button>
              </div>

              <div className="question-body">
                <div className="choices">
                  {["A", "B", "C", "D"].map((label, i) => (
                    <label key={i}>
                      {label}:{" "}
                      <input
                        type="text"
                        value={q.choices[i]}
                        onChange={(e) => handleChoiceChange(index, i, e.target.value)}
                        placeholder={`Enter choice ${label}`}
                      />
                    </label>
                  ))}
                </div>

                <div className="correct-choice">
                  <span>Correct Choice:</span>
                  {["A", "B", "C", "D"].map((choice, i) => (
                    <label key={choice}>
                      <input
                        type="radio"
                        name={`correct-${q.id}`}
                        checked={q.correct === choice}
                        onChange={() => handleCorrectChoice(index, choice)}
                      />{" "}
                      {choice}
                    </label>
                  ))}
                </div>

                <div className="score-points">
                  <label>
                    Score:{" "}
                    <input
                      type="number"
                      value={q.score}
                      onChange={(e) => handleQuestionChange(index, "score", e.target.value)}
                      placeholder="Enter score"
                    />
                  </label>
                  <label>
                    Points:{" "}
                    <input
                      type="number"
                      value={q.points}
                      onChange={(e) => handleQuestionChange(index, "points", e.target.value)}
                      placeholder="Enter points"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          <button className="add-question" onClick={handleAddQuestion}>
            + Add Question
          </button>

          <div className="actions">
            <button className="publish" onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExamEditor;

import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const QUESTIONS = [
  {
    id: 1,
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "Home Tool Markup Language"
    ],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language. It provides the structure of web pages."
  },
  {
    id: 2,
    category: "CSS",
    question: "Which CSS property changes the text color?",
    options: ["font-style", "text-decoration", "color", "background-color"],
    answer: 2,
    explanation: "The color property sets the foreground color of text."
  },
  {
    id: 3,
    category: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "define"],
    answer: 1,
    explanation: "Use let for a block-scoped variable whose value may be reassigned."
  },
  {
    id: 4,
    category: "React",
    question: "What is JSX commonly used for in React?",
    options: [
      "Writing SQL queries",
      "Styling only with CSS",
      "Describing UI using HTML-like syntax in JavaScript",
      "Creating a server database"
    ],
    answer: 2,
    explanation: "JSX lets you describe UI with a familiar HTML-like syntax inside JavaScript."
  },
  {
    id: 5,
    category: "React",
    question: "Which React hook is used to manage state in a function component?",
    options: ["useFetch", "useState", "useRoute", "useStyle"],
    answer: 1,
    explanation: "useState adds state to function components and returns the current value and a setter."
  },
  {
    id: 6,
    category: "HTML",
    question: "Which HTML element creates a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<hyper>"],
    answer: 2,
    explanation: "The anchor element, <a>, creates a hyperlink. Its href attribute specifies the destination."
  },
  {
    id: 7,
    category: "CSS",
    question: "Which layout system is designed for arranging items in one dimension?",
    options: ["Flexbox", "SQL", "DOM", "JSON"],
    answer: 0,
    explanation: "CSS Flexbox is designed for one-dimensional layouts: a row or a column."
  },
  {
    id: 8,
    category: "JavaScript",
    question: "What does === check in JavaScript?",
    options: [
      "Only whether two values are equal after conversion",
      "Whether two variables have the same name",
      "Strict equality without type coercion",
      "Whether a value is undefined"
    ],
    answer: 2,
    explanation: "The strict equality operator checks value equality without converting operand types."
  },
  {
    id: 9,
    category: "React",
    question: "Why are keys used when rendering lists in React?",
    options: [
      "To encrypt list items",
      "To help React identify items between renders",
      "To make every item clickable",
      "To replace component props"
    ],
    answer: 1,
    explanation: "Stable keys help React track which list items were added, removed, or changed."
  },
  {
    id: 10,
    category: "Web basics",
    question: "What does responsive web design aim to do?",
    options: [
      "Make a site work only on desktop",
      "Automatically write JavaScript",
      "Remove all images from a page",
      "Adapt a layout to different screen sizes"
    ],
    answer: 3,
    explanation: "Responsive design adapts content and layout for phones, tablets, and larger screens."
  }
];

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const paths = {
    sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    x: <><path d="m18 6-12 12"/><path d="m6 6 12 12"/></>,
    trophy: <><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M5.5 9a7 7 0 0 1 11.6-2L20 12M4 12l2.9 5a7 7 0 0 0 11.6-2"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H20"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>
  };

  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function Button({ children, onClick, variant = "primary", type = "button", disabled = false }) {
  return (
    <button className={`button button-${variant}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Brand() {
  return (
    <div className="brand">
      <span className="brand-mark"><Icon name="sparkles" size={21} /></span>
      <span>quizzy<span className="brand-dot">.</span></span>
    </div>
  );
}

function StartScreen({ onStart, totalQuestions }) {
  return (
    <main className="screen start-screen">
      <div className="welcome-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> YOUR QUICK KNOWLEDGE CHECK</div>
        <h1>Small quiz.<br /><span>Big brain energy.</span></h1>
        <p className="lead">A little challenge to sharpen your web development skills. Take a breath, trust what you know, and let's begin.</p>
        <div className="start-stats">
          <div className="stat-item"><span className="stat-icon purple"><Icon name="book" /></span><span><strong>{totalQuestions} questions</strong><small>Multiple choice</small></span></div>
          <div className="stat-item"><span className="stat-icon peach"><Icon name="clock" /></span><span><strong>20 seconds</strong><small>Per question</small></span></div>
        </div>
        <Button onClick={onStart}>Start the quiz <Icon name="arrow" size={18} /></Button>
        <p className="tiny-note">No pressure. Just progress. ✦</p>
      </div>
      <div className="hero-art" aria-label="Quiz illustration">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="floating-star star-one">✦</div>
        <div className="floating-star star-two">✳</div>
        <div className="quiz-illustration">
          <div className="illustration-top"><span className="window-dots"><i /><i /><i /></span><span className="mini-label">YOUR QUIZ</span></div>
          <div className="illustration-body">
            <span className="question-pill">QUESTION 01</span>
            <div className="fake-line line-wide" /><div className="fake-line line-short" />
            <div className="fake-option selected"><span>A</span><i /></div>
            <div className="fake-option"><span>B</span><i /></div>
            <div className="fake-option"><span>C</span><i /></div>
            <div className="fake-option"><span>D</span><i /></div>
            <div className="fake-progress"><span /></div>
          </div>
        </div>
        <div className="floating-score"><span className="score-spark">✦</span><span><strong>You're doing great!</strong><small>One question at a time</small></span></div>
        <div className="floating-check"><Icon name="check" size={25} /></div>
      </div>
    </main>
  );
}

function QuizProgress({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div className="progress-wrap">
      <div className="progress-label"><span>YOUR PROGRESS</span><strong>{current} <i>/</i> {total}</strong></div>
      <div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total}>
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Option({ letter, text, selected, correct, showFeedback, onClick, disabled }) {
  let status = "";
  if (showFeedback && correct) status = " option-correct";
  else if (showFeedback && selected && !correct) status = " option-wrong";
  else if (selected) status = " option-selected";

  return (
    <button className={`option${status}`} onClick={onClick} disabled={disabled} aria-pressed={selected}>
      <span className="option-letter">{letter}</span>
      <span className="option-text">{text}</span>
      <span className="option-status">
        {showFeedback && correct ? <Icon name="check" size={18} /> : showFeedback && selected ? <Icon name="x" size={18} /> : <Icon name="chevron" size={18} />}
      </span>
    </button>
  );
}

function QuestionCard({ question, questionNumber, totalQuestions, selectedAnswer, onSelect, onNext, timeLeft, showFeedback }) {
  const letters = ["A", "B", "C", "D"];
  const isLast = questionNumber === totalQuestions;
  return (
    <section className="question-card">
      <div className="question-meta">
        <span className="category-pill">{question.category}</span>
        <span className={`timer ${timeLeft <= 5 ? "timer-low" : ""}`}><Icon name="clock" size={16} /> 00:{String(timeLeft).padStart(2, "0")}</span>
      </div>
      <h2>{question.question}</h2>
      <p className="choose-hint">Choose the best answer from the options below.</p>
      <div className="options-list">
        {question.options.map((option, index) => (
          <Option
            key={`${question.id}-${option}`}
            letter={letters[index]}
            text={option}
            selected={selectedAnswer === index}
            correct={question.answer === index}
            showFeedback={showFeedback}
            disabled={showFeedback}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      {showFeedback && <div className={`explanation ${selectedAnswer === question.answer ? "explanation-good" : "explanation-review"}`}>
        <span className="explanation-icon"><Icon name={selectedAnswer === question.answer ? "check" : "book"} size={17} /></span>
        <p><strong>{selectedAnswer === question.answer ? "That's correct!" : selectedAnswer === null ? "Time's up!" : "Not quite!"}</strong> {question.explanation}</p>
      </div>}
      <div className="question-footer">
        <span className="keyboard-hint">{showFeedback ? "Nice work — keep going!" : "Select an answer to continue"}</span>
        <Button onClick={onNext} disabled={!showFeedback && selectedAnswer === null}>{isLast ? "See results" : "Next question"} <Icon name="arrow" size={17} /></Button>
      </div>
    </section>
  );
}

function ResultScreen({ questions, answers, onRestart }) {
  const correctCount = questions.filter((question, index) => answers[index] === question.answer).length;
  const incorrectCount = questions.length - correctCount;
  const percentage = Math.round((correctCount / questions.length) * 100);
  const message = percentage === 100 ? "Perfect score. You're a star!" : percentage >= 70 ? "Look at you go!" : percentage >= 40 ? "Good start. Keep learning!" : "Every expert starts somewhere.";
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <main className="results-screen">
      <div className="result-heading">
        <span className="result-icon"><Icon name="trophy" size={27} /></span>
        <div className="eyebrow"><span className="eyebrow-dot" /> QUIZ COMPLETED</div>
        <h1>{message}</h1>
        <p>You showed up and gave it a go. Here's how you did.</p>
      </div>
      <div className="result-score-card">
        <div className="score-ring" style={{ "--score": `${percentage}%` }}>
          <div className="score-ring-inner"><strong>{percentage}<span>%</span></strong><small>YOUR SCORE</small></div>
        </div>
        <div className="score-details">
          <span className="score-caption">YOUR FINAL SCORE</span>
          <h2>{correctCount} <span>/ {questions.length}</span></h2>
          <p>questions answered correctly</p>
          <div className="score-breakdown">
            <span className="breakdown-good"><Icon name="check" size={16} /> {correctCount} correct</span>
            <span className="breakdown-bad"><Icon name="x" size={16} /> {incorrectCount} incorrect</span>
          </div>
        </div>
      </div>
      <div className="result-actions">
        <Button onClick={onRestart}><Icon name="refresh" size={17} /> Try again</Button>
        <Button variant="secondary" onClick={() => setReviewOpen(!reviewOpen)}>{reviewOpen ? "Hide answer review" : "Review answers"} <Icon name="arrow" size={17} /></Button>
      </div>
      {reviewOpen && <section className="review-section">
        <div className="review-title"><h2>Answer review</h2><span>{questions.length} questions</span></div>
        {questions.map((question, index) => {
          const isCorrect = answers[index] === question.answer;
          return <article className="review-item" key={question.id}>
            <div className={`review-number ${isCorrect ? "review-number-good" : "review-number-bad"}`}>{String(index + 1).padStart(2, "0")}</div>
            <div className="review-content">
              <h3>{question.question}</h3>
              <p className={isCorrect ? "review-answer-good" : "review-answer-bad"}>{answers[index] === null || answers[index] === undefined ? "Your answer: Not answered" : `Your answer: ${question.options[answers[index]]}`}</p>
              {!isCorrect && <p className="correct-answer">Correct answer: {question.options[question.answer]}</p>}
              <p className="review-explanation">{question.explanation}</p>
            </div>
            <span className={`review-result ${isCorrect ? "result-good" : "result-bad"}`}>{isCorrect ? "Correct" : "Incorrect"}</span>
          </article>;
        })}
      </section>}
      <p className="results-footnote"><Icon name="sparkles" size={16} /> Keep learning. You're building something good.</p>
    </main>
  );
}

export default function App() {
  const [stage, setStage] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const currentQuestion = QUESTIONS[currentIndex];

  useEffect(() => {
    if (stage !== "quiz" || showFeedback) return undefined;
    const timerId = window.setInterval(() => {
      setTimeLeft((remaining) => {
        if (remaining <= 1) {
          window.clearInterval(timerId);
          setShowFeedback(true);
          setAnswers((previous) => ({ ...previous, [currentIndex]: null }));
          return 0;
        }
        return remaining - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [stage, currentIndex, showFeedback]);

  function startQuiz() {
    setCurrentIndex(0);
    setAnswers({});
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(20);
    setStage("quiz");
  }

  function selectAnswer(index) {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setAnswers((previous) => ({ ...previous, [currentIndex]: index }));
  }

  function submitAnswer() {
    if (!showFeedback) {
      if (selectedAnswer === null) return;
      setShowFeedback(true);
      return;
    }
    if (currentIndex === QUESTIONS.length - 1) {
      setStage("results");
      return;
    }
    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(20);
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <Brand />
        <div className="header-right"><span className="header-tag"><span /> WEB DEVELOPMENT</span><span className="header-divider" /><span className="header-task">DEVCAMP 2.0 <b>·</b> TASK 02</span></div>
      </header>
      {stage === "start" && <StartScreen onStart={startQuiz} totalQuestions={QUESTIONS.length} />}
      {stage === "quiz" && <main className="quiz-screen">
        <div className="quiz-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> LET'S GET INTO IT</div><h1>Think you know your stuff?</h1></div><span className="quiz-chip"><Icon name="target" size={16} /> Focus mode</span></div>
        <QuizProgress current={currentIndex + 1} total={QUESTIONS.length} />
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={QUESTIONS.length}
          selectedAnswer={selectedAnswer}
          onSelect={selectAnswer}
          onNext={submitAnswer}
          timeLeft={timeLeft}
          showFeedback={showFeedback}
        />
      </main>}
      {stage === "results" && <ResultScreen questions={QUESTIONS} answers={answers} onRestart={startQuiz} />}
      <footer className="site-footer"><span>Made for curious minds <span className="footer-heart">♥</span></span><span>LEARN · PLAY · GROW</span></footer>
    </div>
  );
}

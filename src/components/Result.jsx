import { questions } from "./Questions.jsx";

export const Result = ({setStep, correct, setCorrect}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="image"/>
            <h2>You guessed {correct} {correct === 1 ? 'time' : "times"} out of {questions.length}!</h2>
            <button onClick={() => {
                setStep(0);
                setCorrect(0);
            }}>Попробовать снова</button>
        </div>
    );
}
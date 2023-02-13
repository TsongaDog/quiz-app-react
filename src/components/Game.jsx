import { questions } from "./Questions.jsx";

export const Game = ({step, question, handleClick}) => {
    const percentage = Math.round(step / questions.length * 100);
    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{ question.title }</h1>
            <ul>
                {
                    question.variants.map( (variant, index) =>
                        <li onClick={() => handleClick(index)} key={index}>{variant}</li> )
                }
            </ul>
        </div>
    );
}
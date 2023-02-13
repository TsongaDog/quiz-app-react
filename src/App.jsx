import { useState } from 'react'
import { questions } from "./components/Questions.jsx";
import { Game } from "./components/Game.jsx";
import { Result } from "./components/Result.jsx";


const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const handleClick = (index) => {
      index === question.correct
          ? setCorrect(correct + 1)
          : setCorrect(correct)
      setStep(step + 1);
  }

  return (
    <div className="App">
        {
            step === questions.length
                ? <Result step={step} setStep={setStep} correct={correct} setCorrect={setCorrect}/>
                :  <Game step={step} setStep={setStep} question={question} handleClick={handleClick}/>
        }
    </div>
  )
}

export default App

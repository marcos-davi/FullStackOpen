import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = (props) => <h1>{props.text}</h1>
  const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
  const Static = (props) => <p>{props.text} {props.state} </p>
  
  const handleClick = (state, setState) => {
    const setToState = () => {
       setState(state + 1)    }
   return setToState
  }

  return (
    <div>
     <Title text='give feedback' />
     <Button handleClick={handleClick(good, setGood)} text='good' />
     <Button handleClick={handleClick(neutral, setNeutral)} text='neutral' />
     <Button handleClick={handleClick(bad, setBad)} text='bad' />
     <Title text='statics' />
     <Static text='good' state={good} />
     <Static text='neutral' state={neutral} />
     <Static text='bad' state={bad} />
    </div>
  )
}

export default App
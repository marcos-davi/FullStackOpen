import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Title = (props) => <h1>{props.text}</h1>;

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );
  const StatisticLine = (props) => (
    <>
      <tr>
        <td>{props.text} </td>
        <td>{props.state}{" "}</td>
      </tr>

    </>
  );

  const Statistics = (props) => {
    if (all === 0) {
      return <div>No feedback given</div>;
    }
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text="good" state={props.good} />
            <StatisticLine text="neutral" state={props.neutral} />
            <StatisticLine text="bad" state={props.bad} />
            <StatisticLine text="all" state={props.all} />
            <StatisticLine text="average" state={props.average} />
            <StatisticLine text="positive" state={props.positive} />
          </tbody>
        </table>
      </>
    );
  };

  const handleClick = (state, setState) => {
    const setToState = () => {
      setState(state + 1);
    };
    return setToState;
  };
  const all = good + bad + neutral;
  const average = () => (good - bad) / all;
  const positive = () => (good / all) * 100 + "%";

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleClick(good, setGood)} text="good" />
      <Button handleClick={handleClick(neutral, setNeutral)} text="neutral" />
      <Button handleClick={handleClick(bad, setBad)} text="bad" />
      <Title text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average()}
        positive={positive()}
      />
    </div>
  );
};

export default App;

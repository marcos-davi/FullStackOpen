import { useState } from "react";
const Header = (props) => {
  return <h1>{props.text}</h1>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = (props) => {
  return (
    <div>
      {props.anecdotes}
      <br />
      has {props.points} votes
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [maxVoted, setMaxVoted] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * (anecdotes.length - 0) + 0);
    setSelected(randomNum);
    calcMostVoted();
  };
  const calcMostVoted = () => {
    let max = 0;
    for (const point in points) {
      if (points[point] > max) {
        max = points[point];
        setMaxVoted(point);
      }
    }
   
  };
  const handleVote = () => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints(newPoints);
    calcMostVoted();
  };

  return (
    <>
      <Header text="Anecdote of the day" />
      <Display anecdotes={anecdotes[selected]} points={points[selected]} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text="next anedocte" />
      <Header text="Anecdote with most votes" />
      <Display anecdotes={anecdotes[maxVoted]} points={points[maxVoted]} />
    </>
  );
};

export default App;

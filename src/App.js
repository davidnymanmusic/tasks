import { useState, useEffect } from 'react';
import './App.css';


function App() {
  let tasks = [
    'Play with pets',
    'Clean pantry 15 minutes',
    'Check for recycling',
    'Organize couch',
    'Vacuum',
    'Break down boxes',
    'Weed',
    'Check Trello',
    'Wipe counters',
    'Compost',
    'Brush teeth',
    'Pick up clothes',
    'Make a list',
    'Work on a playlist',
    'Clean toilet'
  ];

  let allTasks = tasks;


  const [activeTask, setactiveTask] = useState(0);
  const [style, setStyle] = useState('.null');


  const randomTask = () => {
    const len = tasks.length;
          setStyle('strike');
    setTimeout(() => {
  setactiveTask(Math.floor(Math.random() * len));
      setStyle('.null');
}, 1000);

  };
  const nope = () => {
    const index = tasks[activeTask];

    tasks = tasks.filter((item) => item !== index);

    console.log(tasks);
  };

  const reset = () => {
    tasks = allTasks;
  };
  return (
    <>
      <div class={style} >{tasks[activeTask]}</div>
      <button onClick={randomTask}> not now</button>

    </>
  );
}

export default App;

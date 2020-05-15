import React from 'react';
import ReactDOM from 'react-dom';

/*Define a component responsible for formatting a single course called Course.  */

const Course = ( {course} ) => {

  return (
    <div>
      <h1>{course.name}</h1>
      
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(
    <App />
  , document.getElementById('root')
);
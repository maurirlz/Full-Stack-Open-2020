import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name= {course.name}/>
      <Content informationOfParts = {course.parts}/>
      <Total arrayOfExercises={course.parts}/>
    </div>
  )
}

const Header = (props) => {

  return (
    <h1>
    {props.name}
    </h1>
  )
}

const Content = (props) => {

  let part1Info = {
    title: props.informationOfParts[0].name ,
    exercises: props.informationOfParts[0].exercises
  }

  let part2Info = {
    title: props.informationOfParts[1].name ,
    exercises: props.informationOfParts[1].exercises
  }

  let part3Info = {
    title: props.informationOfParts[2].name ,
    exercises: props.informationOfParts[2].exercises
  }

  return (
    <>
      <Part partInfo = {part1Info}/>
      <Part partInfo = {part2Info}/>
      <Part partInfo = {part3Info}/>
    </>
  )
}

const Part = (props) => {

  return (

    <p>
      {props.partInfo.title} {props.partInfo.exercises}
    </p>
  )
}

const Total = (props) => {

  let part1Exercises = (props.arrayOfExercises[0].exercises);
  let part2Exercises = (props.arrayOfExercises[1].exercises);
  let part3Exercises = (props.arrayOfExercises[2].exercises);

  return (
    <p>Number of exercises {part1Exercises + part2Exercises + part3Exercises}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
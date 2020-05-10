import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name= {course}/>
      <Content firstName= {part1} firstPartExercises= {exercises1} secondName= {part2} secondPartExercises= {exercises2} thirdName= {part3} thirdPartExercises= {exercises3}/>
      <Total exercises1= {exercises1} exercises2={exercises2} exercises3={exercises3}/>
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

  return (
    <>
      <Part name= {props.firstName} numberExercises= {props.firstPartExercises}/>
      <Part name= {props.secondName} numberExercises= {props.secondPartExercises}/>
      <Part name= {props.thirdName} numberExercises= {props.thirdPartExercises}/>
    </>
  )
}

const Part = (props) => {

  return (

    <p>
      {props.name} {props.numberExercises}
    </p>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
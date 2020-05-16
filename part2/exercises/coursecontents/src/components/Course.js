import React from 'react';
import Part from './Part';
import Header from './Header';
import TotalExercises from './TotalExercises';

const Course = ({ course }) => {

    let exercises = course.parts.reduce((total, part) => total + part.exercises, 0)

    return (
      <div>
        <Header name={course.name}/>
        {course.parts.map(part =>
        <Part key={part.id} name= {part.name} exercises= {part.exercises}/>
        )}
        <TotalExercises total={exercises} />
      </div>
    )
}

export default Course;
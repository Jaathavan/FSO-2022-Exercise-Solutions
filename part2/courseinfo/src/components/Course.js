const Course = ( {courses} ) => {
    return (
      <div>
          {courses.map(course =>
            <div>
              <Header key={course.id} course={course.name} />
              <Content key={course.id+=3} parts={course.parts} />
              <Total key={course.id+=5} parts={course.parts} />
            </div>
          )}
      </div>
    )
}
const Header = ( {course} ) => {
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
}
  
const Part = ( {part, exercises} ) => {
    return (
      <div>
        <p>
          {part} {exercises}
        </p>
      </div>
    )
}
  
const Content = ( {parts} ) => {
    return (
      <div>
        {parts.map(part => 
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
      </div>
    )
}
  
const Total = ( {parts} ) => {
    const total = parts.reduce((sum, num) => sum + num.exercises, 0)
    return (
      <div>
        <p><strong>Total of {total} exercises</strong></p>
      </div>
    )
}

export default Course
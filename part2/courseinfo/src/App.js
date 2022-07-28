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

const Part2 = ( {part2, exercises2} ) => {

  return (
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  )
}

const Part3 = ( {part3, exercises3} ) => {

  return (
    <div>
      <p>
        {part3} {exercises3}
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

const Course = ( {courses} ) => {

  return (
    <div>
        {courses.map((course, index) =>
          <div>
            <Header key={course.id} course={course.name} />
            <Content key={course.id+=3} parts={course.parts} />
            <Total key={course.id+=5} parts={course.parts} />
          </div>
        )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <div>
    <h1>Web Development Curriculum</h1>
    <Course courses={courses} />
  </div>
  )
}

export default App
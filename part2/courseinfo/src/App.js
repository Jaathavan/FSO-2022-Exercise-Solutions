const Header = ( {course} ) => {

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part1 = (props) => {

  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {

  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {

  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
      <Part2 part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
      <Part3 part3={props.parts[2].name} exercises3={props.parts[2].exercises} />
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

const Course = ( {course} ) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

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

  return <Course course={course} />
}

export default App
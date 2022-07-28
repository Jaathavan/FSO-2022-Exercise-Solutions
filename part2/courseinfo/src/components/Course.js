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

export default Course
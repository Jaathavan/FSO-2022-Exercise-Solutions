const Person = ( { name, number} ) => {
    return (
        <div>
            {name}: {number + " "}  
            <button>Delete</button>
        </div>
    )
}

export default Person
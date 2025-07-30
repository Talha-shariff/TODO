export function Todos({todos}){
    //the {todos} is == const todos = props.todo
    return <div>
        {todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "completed" :"mark as complete"}</button>
</div>
})}
    </div>
}
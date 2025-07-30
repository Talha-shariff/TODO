import { useState } from "react"

export function CreateTodo(){
//states
    const[title, setTitle] = useState(" ");
    const[description, setDesc] = useState(" ");

    return <div>
        <input style={{
           padding : 10,
           margin : 10,
        }}type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /> <br />
        <input style={{
           padding : 10,
           margin : 10 
        }}type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDesc(e.target.value);
        }} /> <br />
        <button onClick={() =>{
            fetch("http://localhost:3000/todos",{ 
                method : "POST",
                //axios used stringify
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                "content-type":"application/json"

            })
            .then(async function (res) {
                const json = await res.json();
                alert("todo added")
            
            })
        }} style={{
           padding : 10,
           margin : 10 
        }}>Add todo </button><br />
    </div>
}
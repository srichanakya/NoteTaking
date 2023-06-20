import React from "react";



function Note(props){
// console.log(props);

function handleNote(event){
    props.onDelete(event.target.id);
}

    return(
        <div className="Note">
            <h1 id="title">{props.title}</h1>
            <p>{props.body}</p>
        
            <button id = {props.idno} className = "delBtn" onClick={handleNote}>delete</button>
        </div>
    )


}


export default Note;
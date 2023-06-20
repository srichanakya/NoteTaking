import React, {useState} from "react";
import Note from "./Note";


function NoteInputs(){

    var c = 0
    const [cnt, SetCNT] = useState(0)
    const [Note1, Setnote1] = useState("");
    const [Note2, Setnote2] = useState("");
    const [title, SetNote1] = useState([]);
    const [body, SetNote2] = useState([]);
    const [data , SetData] = useState([{
        count : -1,
        title : "",
        body : ""
    }])

    function handleChange(event){
        var {name, value} = event.target;
        if (name === "title"){
            Setnote1(value);
        }
        else{
            Setnote2(value);
        }
    }

    function displayValues(event){
        SetNote1((prev) => { return [...prev , Note1]});
        SetNote2((prev) => {return [...prev, Note2]});
        SetCNT(cnt + 1);
        Setnote1("");
        Setnote2("");
        SetData((prev)=> {return ([...prev,{count : cnt, title : Note1, body:Note2}])})
        
        event.preventDefault();
        
    }

    function delnote(id){
        console.log(typeof(parseInt(id)));
      SetData(current => {return current.filter((title, index) => 
        
        {
            console.log("id "+id)
            console.log("count "+index);
            return index !== parseInt(id)})})
    }
   
    return(
        <div className="noteinput">
        <div className="formContainer">
        <form onSubmit={displayValues} >
            <input type='text' name = "title" onChange={handleChange} required="required" placeholder="Title" value={Note1} /> 
            <textarea cols="24" rows="9" type='text' name = "body" onChange ={handleChange} placeholder="Notes" required = "required" value={Note2} />
            <button  id="addbtn" type="submit">Add</button>
        </form>
        </div>
        <div className="NoteDisplayTag">
        {data.map((dis, index) => {
            console.log(index)
            return(
               (dis.count<0)? "":  <Note key = {index} idno = {index} title={dis.title} body = {dis.body} onDelete={delnote}/>
            )
        })}
        </div>

        
        </div>
    )

}


export default NoteInputs;
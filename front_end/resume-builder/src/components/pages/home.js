import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const [fv,setfv]=useState({"fname": "", "Exp": "", "fexp": "", "fed": ""})
    const handleValueChange =(e)=> { 
       console.log('guru')
       console.log(e)
       var a ={...fv}
       console.log(a)
       var b =e.target.name
       console.log(b)
       a[String(b)]=e.target.value
       console.log(a)
       setfv(a)
    }
    const submit=  ()=>{
        var obj = {"fname": "guru", "Exp": "4", "fexp": "data scientist", "fed": "CSE"}
        console.log(obj)
        fetch('http://localhost:8080/resume', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(obj)
            })
            .then(response => response.json())
            .then(response =>{
                console.log(response)
            }
        
            )   
            
        }     
    return (
        <div className="">
            <h1 className="">Hi welcome to Quick Resume builder</h1>
                <label >First name:</label>
                <input type="text" id="fname" name="fname" onChange={(e)=>handleValueChange(e)}/><br/>
                <br/>
                <label> Year of Experience </label>
                <input type="text" id="Exp" name="Exp" onChange={(e)=>handleValueChange(e)}/><br/>
                <br/>
                <label> Field of Experience </label>
                <input type="text" id="Fexp" name="fexp" onChange={(e)=>handleValueChange(e)}/><br/>
                <br/>
                <label> Field of Education </label>
                <input type="text" id="fed" name="fed" onChange={(e)=>handleValueChange(e)}/><br/>
                <br/>
                <label> Submit </label>
                <input type="button" id="fed" name="fed" onClick={submit}/><br/>
        </div>
    )
}
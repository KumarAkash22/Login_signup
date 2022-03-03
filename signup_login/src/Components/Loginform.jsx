import { useState } from 'react';
import styled from 'styled-components' 
import { useNavigate} from "react-router-dom"
import axios from 'axios'
import { Alert } from 'antd';
export function Login(){
const [data ,setData] = useState({
    email : '',
    password : ''

})
const[err,setErr] = useState(false)
let nav = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
    //    console.log("handleSubmit",e.target)
        axios.post("http://127.0.0.1:3001/login",data) 
        .then((data)=>{
           // console.log(data.status)
            
             nav("/userData")
        })
        .catch((e)=>{
            // alert("User not found")
         setErr(true)
        })
    }
const handleChange =(e)=>{
    setErr(false)
    console.log("handle change target",e.target)
     const {name,value} = e.target
    // console.log(value)
    setData({
        ...data,
        [name] : value
    })
}
console.log("data",data)
    return (
        <>
        {err===true?(   <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />):null}
        <H1>Login Page</H1>
        <Form onSubmit={(e)=>{handleSubmit(e)}}>

           <label for="Email">Email</label>
            <input type="text" name="email" placeholder="Enter your email address"  onChange={(e)=>handleChange(e)}/>
            <label for="Password" >Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>handleChange(e)} />
           <Button type="Submit"/>
        </Form>
        
        </>
    )
}
const Form = styled.form`
    background: teal;
    display: flex;
    flex-direction: column;
    width: 300px;
    //align-items: center;
    margin:  auto;
    height: 200px;
    justify-content: space-between;
    font-size:17px;
    border: 2px solid black;
`
const Button = styled.input`
    background-color: rgb(226, 21, 56);
`
const H1 = styled.h1`
  text-align: center
`
import { Form, Input, Button, Checkbox} from 'antd';
import axios from 'axios';
 import 'antd/dist/antd.css';
import styled from 'styled-components' 
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



export const Userform = () => {
  let navigate = useNavigate()
 const [user, setUser] = useState({});
 const [ record, setRecord ] = useState([])

  useEffect(()=>{
    getData()
  },[])
  const onFinish = (values) => {
    delete values.remember
   // console.log('Success kartik:', values);
    axios.post('http://localhost:3001/signup', values)
    .then((data) => {
        getData()
        
    });  
  };
  
  const getData =()=>{

      axios.get("http://localhost:3001/user")
      .then(({data})=>{
          //console.log("kkk",data);
          setUser(data)
          setRecord([...record, data])
      })
  } 
  //console.log("record",record[0].Status)
  //console.log("user",user)

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
<>
    <H1>Sign Up Page</H1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 5,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={()=>{}} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div>
      {record[0].Status && record[0].Status.map((list)=><div>
        <p>{list.username}</p>
      </div>)}
    </div>
    </>
  );
};
const H1 = styled.h1`
  text-align: center
`
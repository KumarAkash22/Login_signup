import { Form, Input, Button, Checkbox} from 'antd';
import axios from 'axios';
 import 'antd/dist/antd.css';
import styled from 'styled-components' 
import { useNavigate } from 'react-router-dom';


export const SignInForm = () => {
  let navigate = useNavigate()
 
  const onFinish = (values) => {
    delete values.remember
   // console.log('Success kartik:', values);
    axios.post('http://localhost:3001/signup', values)
    .then((data) => {
        console.log('post req:', data);
    navigate('/login')
        
    });

  };

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
    </>
  );
};
const H1 = styled.h1`
  text-align: center
`
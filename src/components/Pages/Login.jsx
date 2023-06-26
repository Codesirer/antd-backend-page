import React from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../network/getajax'
import bg from '../assets/NIO.jpg'

const Login = () => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onFinish = (values) => {
    if (values.password === '123456') {
      postLogin(values).then((res) => {
        if (res.desc === '成功') {
          localStorage.setItem('token', 'sdfasjfuisjdfsldjfu8s7ywea')
          navigate('/')
        } else {
          console.log('login error')
        }
      })
    } else {
      console.log('error')
    }
  }

  const navigate = useNavigate()

  const clickHandler = (e) => {
    console.log(e)
  }

  return (
    <Row style={{ height: '100vh' }}>
      <Col span={18}>
        <div
          className="login-bg"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={bg} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Col>
      <Col span={6}>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
              width: '80%',
              background: '#ffffff',
              padding: '50px 20px 20px 20px',
              borderRadius: '5px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={clickHandler} style={{ width: '100%' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default Login

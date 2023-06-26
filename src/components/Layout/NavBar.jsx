import { Layout, Col, Row } from 'antd'
import UserInfo from './UserInfo'
import UserInfo1 from './UserInfo1'

import Logo from './Logo'

const { Header } = Layout

const NavBar = () => {
  return (
    <>
      <Header
        style={{
          backgroundColor: '#FFFFFF',
          height: '64px',
          width: '100%',
          position: 'fixed',
          top: '0',
          zIndex: '9',
          paddingLeft:'300px',
          paddingRight: '0',
        }}
      >
        <Row>
          <Col xs={24} xl={3} >
            123
          </Col>
          <Col xs={24} xl={18}>
            456
          </Col>
          <Col xs={24} xl={3} style={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}>
            <UserInfo1 />
          </Col>
        </Row>
      </Header>
    </>
  )
}

export default NavBar

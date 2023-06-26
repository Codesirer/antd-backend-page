// import { useRoutes } from 'react-router-dom'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { useContext } from "react"
import { AppContext } from '../../redux/context'


const { Content } = Layout

const ContentHolder = () => {

  // context cusumer

  return (
    <Content
      style={{
        width: '100%',
        padding: '72px 8px 8px 208px',
      }}
    >
      <Outlet />
    </Content>
  )
}

export default ContentHolder

import { Layout } from 'antd'
import React from 'react'
import NavBar from './Layout/NavBar'
import SiderMenu from './Layout/SiderMenu'
import ContentHolder from './Layout/ContentHolder'
// const { Header, Footer, Sider, Content } = Layout

const Main = () => {
  return (
    <Layout>
      <SiderMenu/>
      <Layout>
        <NavBar />
        <ContentHolder />
      </Layout>
    </Layout>
  )
}
export default Main

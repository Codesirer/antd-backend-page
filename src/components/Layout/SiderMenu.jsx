import FunctionMenu from './FunctionMenu'
import Logo from './Logo'
import { Layout } from 'antd'
const { Sider } = Layout

const SiderMenu = () => {
  return (
    <Sider
      width={300}
      breakpoint="md"
      collapsedWidth="0"
      collapsible="true"
      style={{
        backgroundColor: '#eff1f3',
        zIndex: '10',
        position: 'fixed',
        width: '200px',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <Logo />
      <FunctionMenu />
    </Sider>
  )
}

export default SiderMenu

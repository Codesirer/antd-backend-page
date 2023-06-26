import { AppstoreOutlined, AreaChartOutlined, SettingOutlined, HistoryOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [
  {
    label: 'Overview',
    key: '/',
    icon: <AreaChartOutlined />,
  },
  {
    label: 'Monitoring',
    key: '/monitoring',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'History',
    key: '/dashboard',
    icon: <HistoryOutlined />,
    children: [
      {
        label: 'Summary',
        key: '/detail',
      },
      {
        label: 'Point Trace',
        key: '/detail',
      },
      {
        label: 'Point Chart',
        key: '/detail1',
      },
    ],
  },
  {
    label: 'Analysis',
    key: '/details',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Forcast',
        key: '/detail',
      },
      {
        label: 'Abnormal',
        key: '/detail1',
      },
    ],
  },
]

const FunctionMenu = () => {
  let url = useLocation()
  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
  }
  return <Menu onClick={onClick} selectedKeys={url.pathname} items={items} />
}

export default FunctionMenu

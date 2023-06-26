import Overview from '../components/Pages/overview/Overview'
import Monitoring from '../components/Pages/monitoring/Monitoring'
import Detail02 from '../components/Pages/history/Detail02'
import Detail03 from '../components/Pages/analysis/Detail03'
import Main from '../components/Main'
import Login from '../components/Pages/Login'



const routes = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'monitoring', element: <Monitoring /> },
      { path: 'detail', element: <Detail02 /> },
      { path: 'dashboard', element: <Detail03 /> },
    ],
  },
]

export default routes

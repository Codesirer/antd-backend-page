import { ConfigProvider } from 'antd'
import { useRoutes } from 'react-router-dom'
import { AppContextProvider } from './redux/context'
import AuthRouter from './routes/authRouter'
import routes from './routes/index'
import './index.css'


function App() {

  const element = useRoutes(routes)

  return (
    <AuthRouter>
      <AppContextProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#00b3be',
              },
            }}
          >
            {element}
          </ConfigProvider>
      </AppContextProvider>
    </AuthRouter>
  )
}

export default App

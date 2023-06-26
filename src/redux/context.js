import { createContext, useReducer } from 'react'

//import reducer and let return value manage by context
import { renderContentReducer } from '../redux/reducer'

// step1 : create a context hold the variable tobe export
export const AppContext = createContext(null)

// step2 : create a provider that warp it children component, so that children can accress the context
export const AppContextProvider = ({ children }) => {
  // reduce state init value
  const initialTasks = { ok: false, req: { node: 1, urlPath: '/overview' }, resp: {} }

  // get return value of renderContentReducer
  const [state, dispatch] = useReducer(renderContentReducer, initialTasks)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

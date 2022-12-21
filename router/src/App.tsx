import { Dashboard } from './pages/Private'
import { Login } from './pages/login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'
import { RoutesWithNotFound } from './utilities'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RoutesWithNotFound>
        <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
        <Route path='*' element={<>NOT FOUND</>} />
        <Route path={PublicRoutes.LOGIN} element={<Login/>} />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
        </Route>
      </RoutesWithNotFound>
      
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { RoutesWithNotFound } from "../../utilities"
import { Home } from "./Home"


function Dashboard ()  {
  return (
  <RoutesWithNotFound>
    <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    <Route path={PrivateRoutes.HOME} element={<Home />} />
  </RoutesWithNotFound>
  )
}
export default Dashboard
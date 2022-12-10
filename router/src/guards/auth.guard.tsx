import {useSelector} from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { AppStore } from "../redux/store"

export const AuthGuard = () => {
    const useState = useSelector((store: AppStore) => store.user);
    return  useState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard;
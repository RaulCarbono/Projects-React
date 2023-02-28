import {createContext, useState} from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    // estados de prueba button

const [openCreateRole, setOpenCreateRole] = useState(false);
const [type, setType] = useState()

    return( 
        <AuthContext.Provider 
            value={{
                openCreateRole, 
                setOpenCreateRole,
                type,
                setType
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
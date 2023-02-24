import {createContext, useState} from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    // estados de prueba button

const [openCreateRole, setOpenCreateRole] = useState(false);

    return( 
        <AuthContext.Provider 
            value={{
                openCreateRole, 
                setOpenCreateRole
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
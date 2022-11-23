import React, {FC} from "react";

export const AppContext = React.createContext({});

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    const init = {
        id: 498817,
        name: 'Saint Petersburg',
        country: 'RU',
        coord: {
            "lon": 30.264168,
            "lat": 59.894444
        }
    }
    return (
        <AppContext.Provider value={init}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
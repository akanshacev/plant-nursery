import React, { createContext, useState } from 'react'

export const addPlantResponseContext = createContext()
export const editPlantResponseContext = createContext()

function Contextapi({ children }) {
    const [addPlantResponse, setAddPlantResponse] = useState("")
    const [editPlantResponse, setEditPlantResponse] = useState("")


    return (
        <>
            <addPlantResponseContext.Provider value={{ addPlantResponse, setAddPlantResponse }}>
                <editPlantResponseContext.Provider value={{editPlantResponse,setEditPlantResponse}}>
                    {children}
                </editPlantResponseContext.Provider>
            </addPlantResponseContext.Provider>
        </>
    )
}

export default Contextapi
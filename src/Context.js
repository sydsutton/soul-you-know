import React, {useState} from "react"

const Context = React.createContext()

const ContextProvider = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Context.Provider value={{isModalOpen, setIsModalOpen}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
import React, { useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import Resume from "./components/resume";
import GlobalStyle from "./styles/global";

const App = () =>{
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data? JSON.parse(data) : []
    )


    return(
        <>
            <Header/>
            <Resume/>
            <Form/>
            <GlobalStyle/>
        </>
    )
}

export default App;
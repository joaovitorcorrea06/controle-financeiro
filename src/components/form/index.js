import React, { useState } from 'react'
import * as C from './style'

const Form = () => {
    const [Desc, setDesc] = useState("");
    const [Amount, setAmount] = useState("");
    const [isExpense, setisExpense] = useState(false);
  return (
    <div>Form</div>
  )
}

export default Form
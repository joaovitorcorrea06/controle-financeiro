import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
  } from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value='1100'/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value='1030'/>
        <ResumeItem title="Total" Icon={FaDollarSign} value='1001'/>
    </C.Container>
  )
}

export default Resume
import React from 'react'
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";
import { Slide } from "react-awesome-reveal";
import BulkSMSUploader from '../comp/sendsms/sms';
const add = () => {
  return (
    <>
    
     <Navbar />
    <S_nav />
    <Slide>
    <BulkSMSUploader />
    </Slide>
    </>
  )
}

export default add

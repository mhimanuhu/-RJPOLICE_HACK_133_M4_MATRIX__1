import React from 'react'
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";
import { Fade } from "react-awesome-reveal";
import BulkSMSUploader from '../comp/sendsms/sms';
const add = () => {
  return (
    <>
    <Fade>
     <Navbar />
    <S_nav />
    <BulkSMSUploader />
    </Fade>
    </>
  )
}

export default add

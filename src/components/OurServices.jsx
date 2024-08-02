import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { OUR_SERVICES } from '../utilities/ourServices';
import OurService from './OurService';
import Reveal from './Reveal';
import '../layout/ourServices.css'

export default function OurServices() {

    const [ services, setServices ] = useState(OUR_SERVICES); 

    if( !services.length ) return <div> Loading Services </div>

  return (
    <Reveal>
        <motion.div className='services_form'>
            {services.map((item, index) => <OurService key={index} item={item}/>)}
        </motion.div>
    </Reveal>
  )
}

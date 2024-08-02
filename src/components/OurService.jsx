import React from 'react'
import '../layout/ourService.css';

export default function OurService( { item } ) {
  return (
    <div className='service_form'>
        <h3> {item?.title} </h3>
        <span> {item?.content} </span>
    </div>
  )
}

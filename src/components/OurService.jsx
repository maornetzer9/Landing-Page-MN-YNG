import React from 'react'
import '../layout/ourService.css';

const generateGradientColor = (index) => { 
    const colors = [
        'linear-gradient(to right, red, yellow)',
        'linear-gradient(to right, blue, green)',
        'linear-gradient(to right, purple, pink)',
        'linear-gradient(to right, orange, cyan)',
        'linear-gradient(to right, teal, magenta)',
    ]; 

    return colors[index % colors.length];
}



export default function OurService( { item, index } ) {


    const gradient = generateGradientColor(index);

  return (
    <div className='service_form'>
        <h3 style={{ 
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'

         }}
         > 
            {item?.title} 
        </h3>
        <span> {item?.content} </span>
    </div>
  )
}

import React, { useState } from 'react';

function Test() {

  const products =[

    {name: 'Iphone 14'},
    {price: 2500},
    {qty: 50}
  ]

  

  return (
    <ul>
    {
    
      products.map((item) => (
        <li>
          {item.name}
          {item.price}
          {item.qty}
        </li>
      ))
    
    }
  </ul>
  );
}

export default Test;
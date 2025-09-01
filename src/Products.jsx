import React from 'react'

export default function Products() {
    const products = [
        { title: 'Cabbage' },
        { title: 'Garlic'},
        { title: 'Apple' },
    ];

    const listItems = products.map((product,key) => (
        <li key={key}>{product.title}</li>
    ));
  return (
    <>
        <ul>{listItems}</ul>
    </>
  )
}

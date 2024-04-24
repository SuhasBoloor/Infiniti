import React from 'react'
const prodItems={
    img:"./Images/Watch.webp",
    title:"MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! NO RESERVE!",
    price:(Math.random()*20).toFixed(2),
    timeLeftDay: Math.floor(Math.random()*10),
    timeLeftDHour: Math.floor(Math.random()*24),
    timeLeftSeconds: Math.floor(Math.random()*60),
    bids:Math.floor(Math.random()*15),
    shippingCharges:Math.floor(Math.random()*25)
}
function ProdItem() {
  return (
    <div className='prodItems'>
        <img height={100} width={100}  src={prodItems.img} alt='image'/>
        <h5>{prodItems.title}</h5>
        <h5>${prodItems.price}</h5>
        <p>Time left</p>
        <h5 style={{ color: 'red' }}>{prodItems.timeLeftDay}d {prodItems.timeLeftDHour}h {prodItems.timeLeftSeconds}s</h5> 
        <p >{prodItems.bids} bids</p>
        <p>+{prodItems.bids} Shipping</p>
    </div>
  )
}

export default ProdItem

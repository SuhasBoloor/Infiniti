import React from 'react'

function CatItem(props) {
    const handleOpt = () => {
        props.setIsCat(false);
        props.setIsOpt(true);
        props.setCatName(props.title)
    }
  return (
    <div onClick={handleOpt} className='CatItem btn'>
      {props.image}
      <p>{props.title}</p>
    </div>
  )
}

export default CatItem

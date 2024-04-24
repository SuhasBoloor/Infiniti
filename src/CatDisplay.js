import React from 'react'

function CatDisplay(props) {
    const handleback = () => {
            props.setIsOpt(false)
        props.setIsCat(true)
    }

    const handleLevel = (e) => {
        props.setIsL3(true)
        props.setIsOpt(false)
        props.setProdName(e.target.value)

    }

    return (
        <div className='optContainer'>
            <div className='catContainer'>
                <i class="fa-solid fa-chevron-left" onClick={handleback}></i>
                <h3>{props.catName}</h3>
            </div>

            {Object.entries(props.product).map(([key, value]) => {
                return(<>
                <select key={key} name={key} className='catOptions' onChange={handleLevel}>
                    <option value={key} disabled selected hidden>{key}</option>
                    <option value={key} >Level 3</option>
                    <option value={key} >Level 3</option>
                    <option value={key} >Level 3</option>
                    <option value={key} >Level 3</option>
                    <option value={key} >Level 3</option>
                    </select>
                </>

            )})}
    </div >
  )
}

export default CatDisplay

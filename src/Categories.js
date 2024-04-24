import React from 'react'
import CatItem from './CatItem'

function Categories(props) {

    const handleCats = () => {
        props.setIsCat(false);
    }
    return (
        <div >
            <div className='catContainer'>
                <i class="fa-solid fa-chevron-left btn" onClick={handleCats} ></i>
                <form>
                    <div className='searchContainer'>

                        <input type='text' id='searchInput' placeholder='Search Category for insights' />
                        <i class="fa-solid fa-magnifying-glass" className='btn'></i>
                    </div>
                </form>
            </div>

            <h5>Recent</h5>
            <div className='Categories'>
                <CatItem className='btn' setCatName={props.setCatName} setIsCat={props.setIsCat} setIsOpt={props.setIsOpt} image={<i class="fa-solid fa-city"></i>} title={"Facility Management"} />
                <CatItem className='btn' setCatName={props.setCatName} setIsCat={props.setIsCat} setIsOpt={props.setIsOpt} image={<i class="fa-solid fa-truck-fast"></i>} title={"Logistics"} />
            </div>
            <h5>All Categories</h5>
            <div className='Categories'>
                {Object.entries(props.product).map((item) => {
                    return (<CatItem className='btn' setCatName={props.setCatName} setIsCat={props.setIsCat} setIsOpt={props.setIsOpt} image={item[1]} title={item[0]} />);
                })}
            </div>
        </div>
    )

}

export default Categories

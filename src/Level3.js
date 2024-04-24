import React from 'react'
import ProdItem from './ProdItem'

function Level3(props) {
    const handleBack = () => {
        props.setIsOpt(true);
        props.setIsCat(false);
        props.setIsL3(false);
    }
    return (
        <div>
            <nav>
                <i class="fa-solid fa-bars" onClick={handleBack}></i>
                <form>

                    <div className='searchContainer'>
                        <select name='product' id='products'>
                            <option value="" disabled selected>Products</option>
                            {Object.entries(props.product).map(([key, value]) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                        <input type='text' id='searchInput' placeholder='Search by Products & Services' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </form>
            </nav>
            <div style={{textAlign : 'center'}}>
            <h5 >{props.catName} &gt; {props.prodName} &gt; Level 3 </h5>
            </div>
            <div className='optionContainer'>
            <p className='roundContainer btn' key="all" value="All" >All</p>
            {Object.entries(props.product).map(([key, value]) => (
                                <p className='roundContainer btn' key={key} value={key}>{key}</p>
                            ))}
            </div>
            <div className='optionContainer'>
                <p style={{marginRight:"auto"}}>{Math.round(Math.random()*1000000)}+ results </p>
                <i class="fa-solid fa-list"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p><i class="fa-solid fa-sort" ></i> Sort</p>
                <p><i class="fa-solid fa-arrow-down-wide-short"></i> Filter</p>
            </div>
            <div className='L3Title'>
                <div className='L3Item btn'>ALL</div>
                <div className='L3Item btn'>Auction</div>
                <div className='L3Item btn'>Buy it Now</div>
            </div>
            <div className='ProductList'>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
                <ProdItem/>
            </div>
        </div>
    )
}

export default Level3

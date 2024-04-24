import React from 'react'

function NavBar(props) {
    const handleCats = () => {
        props.setIsCat(true);
    }
    return (
        <div>
            <nav>
                <i onClick={handleCats} className='btn' class="fa-solid fa-bars"></i>
                <form>

                    <div className='searchContainer'>
                        <select name='product' id='products'>
                            <option value="" disabled selected>Products</option>
                            {Object.entries(props.product).map(([key, value]) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                        <input type='text' id='searchInput' placeholder='Search by Products & Services' />
                        <i className='btn'  class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </form>
                <p><i class="fa-solid fa-arrow-down-wide-short"></i> Filter</p>

            </nav>
        </div>
    )
}

export default NavBar

import React, { useState } from 'react';
import NavBar from './NavBar';
import CatItem from './CatItem';
import ProdItem from './ProdItem';
import Event from './Event';
import Categories from './Categories';
import CatDisplay from './CatDisplay';
import Level3 from './Level3';
import Carousel from './Carousel'

function Home() {
    const product = {
        "Consumer Electronics": <i className="fa-solid fa-headphones-simple"></i>,
        "Agriculture": <i className="fa-solid fa-wheat-awn"></i>,
        "Apparel": <i className="fa-solid fa-shirt"></i>,
        "Beauty & personal care": <i className="fa-regular fa-face-smile"></i>,
        "Business Services": <i className="fa-solid fa-business-time"></i>,
        "Chemicals": <i className="fa-solid fa-flask"></i>,
        "Commercial services": <i className="fa-solid fa-suitcase"></i>,
        "Construction & Real Estate": <i className="fa-solid fa-house"></i>,
        "Electronic Equipments": <i className="fa-solid fa-plug"></i>,
        "Electronic Components": <i className="fa-solid fa-microchip"></i>,
        "Environment": <i className="fa-solid fa-seedling"></i>,
        "Fabric & Raw materials": <i className="fa-solid fa-scroll"></i>,
        "Fabrication Services": <i className="fa-solid fa-suitcase"></i>,
        "Fashion Accessories": <i className="fa-solid fa-hat-cowboy"></i>,
        "Food & Beverages": <i className="fa-solid fa-mug-hot"></i>,
        "Furniture": <i className="fa-solid fa-chair"></i>,
        "Gifts & Crafts": <i className="fa-solid fa-gift"></i>,
        "Health & Medical": <i className="fa-solid fa-kit-medical"></i>,
        "Home & Garden": <i className="fa-solid fa-sun-plant-wilt"></i>,
        "Homes & Textile": <i className="fa-solid fa-shirt"></i>,
        "Lights & Lightings": <i className="fa-solid fa-lightbulb"></i>,
        "Luggage, Bags & Cases": <i className="fa-solid fa-suitcase-rolling"></i>,
        "Machinery": <i className="fa-solid fa-tractor"></i>,
        "Material Handling": <i className="fa-solid fa-truck-ramp-box"></i>,
        "Metals & Alloys": <i className="fa-solid fa-medal"></i>,
        "Office and School Equipments": <i className="fa-solid fa-medal"></i>,
        "Packaging & Printing": <i className="fa-solid fa-box"></i>,
        "Power Transmission": <i className="fa-solid fa-tower-cell"></i>,
        "Renewable Energy": <i className="fa-solid fa-solar-panel"></i>
    };
    const [isCat, setIsCat] = useState(false);
    const [isOpt, setIsOpt] = useState(false);
    const [isL3, setIsL3] = useState(false)
    const [catName, setCatName] = useState("");
    const [prodName, setProdName] = useState("")



    return (
        isL3
            ?
            <Level3 prodName={prodName} catName={catName} setIsL3={setIsL3} setIsCat={setIsCat} setIsOpt={setIsOpt} product={product} />
            :
            isOpt
                ?
                <CatDisplay setIsL3={setIsL3} catName={catName} setProdName={setProdName} setIsCat={setIsCat} setIsOpt={setIsOpt} product={product} />
                :
                isCat
                    ? <Categories setCatName={setCatName} setIsCat={setIsCat} setIsOpt={setIsOpt} product={product} />
                    : (

                        <div>
                            <NavBar setIsCat={setIsCat} product={product} />
                            <section className='accessContainer'>
                                <div className='quickAccess'>
                                    Request anything
                                </div>
                                <div className='quickAccess'>
                                    Create Events
                                </div>
                                <div className='quickAccess'>
                                    Auction Items
                                </div>
                            </section>
                            <Carousel/>
                            <div className=''>
                                <div className='sideContainer'>
                                <h3 style={{marginRight:"auto"}}>Explore Popular Catergories</h3>
                                <p className='btn' style={{color:"#0D4DF1"}} onClick={()=>setIsCat(true)}>View All</p>
                                </div>
                                <div className='catScroll'>
                                    <div></div>
                                    <CatItem className='btn' setCatName={setCatName} setIsCat={setIsCat} setIsOpt={setIsOpt} image={<i class="fa-solid fa-city"></i>} title={"Facility Management"} />

                                    {Object.entries(product).map((item) => {
                                        <hr />
                                        return (<CatItem setCatName={setCatName} setIsOpt={setIsOpt} setIsCat={setIsCat} image={item[1]} title={item[0]} />);
                                    })}
                                </div>
                            </div>
                            <div className='section'>
                                <div className='sideContainer'>
                                <h3 style={{marginRight:"auto"}}>Trending Auctions</h3>
                                <p className='btn' style={{color:"#0D4DF1"}} onClick={()=>setIsCat(true)}>View All</p>
                                </div>
                                <p>See what's popular across thousand of auction</p>
                                <hr />
                                <div className='catScroll'>
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />

                                </div>
                            </div>
                            <div className='section'>
                                <hr />
                                <div className='sideContainer'>
                                <h3 style={{marginRight:"auto"}}>Featured Products</h3>
                                <p className='btn' style={{color:"#0D4DF1"}} onClick={()=>setIsCat(true)}>View All</p>
                                </div>
                                <p>See what's popular across thousand of Products</p>
                                <hr />
                                <div className='catScroll'>
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />

                                </div>
                            </div>
                            <div className='section'>
                                <hr />
                                <h3>Featured Services</h3>
                                <p>See what's popular across thousand of Products</p>
                                <hr />
                                <div className='catScroll'>
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />
                                    <ProdItem />

                                </div>
                            </div>

                            <div className='section'>
                                <hr />
                                <h3>Featured Events</h3>
                                <p>See what's popular across thousand of auctions</p>
                                <hr />

                                <div className='catScroll'>
                                    <Event />
                                    <Event />
                                    <Event />
                                    <Event />


                                </div>
                            </div>
                            <div className='footer'>
                                <p>You can call out center, we are open on weekdays from  weekends from 9:00AM to 1:00PM and on weekends from 9:00AM to 8:00PM</p>
                                <p>Phone: +1-340-618-7841</p>
                                <p>Email: hello-bidpro@mail.com</p>
                                <h4>Useful Links</h4>

                                    <div>
                                        <a href='https://www.linkedin.com/in/suhas-boloor-2112201a9/'>About Us</a>
                                        <a href='https://www.linkedin.com/in/suhas-boloor-2112201a9/'>Shop</a>
                                        <a href='suhasboloormlr@gmail.com'>Contact Us</a>
                                        <a href='https://www.linkedin.com/in/suhas-boloor-2112201a9/'>Cart</a>
                                        <a href='https://www.linkedin.com/in/suhas-boloor-2112201a9/'>Privacy Policy</a>
                                    </div>
                            </div>
                        </div>
                    )
    );
}


export default Home

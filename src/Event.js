import React from 'react'

function Event() {
    const highlight = {
        color: "white",
        backgroundColor: '#2398F6'

    }
    return (
        <div className='event'>
            <div>

                <div className='sideContainer'>
                    <p style={highlight}>New</p>
                    <p style={highlight}>Scheduled</p>
                </div>
                <div className='sideContainer'>
                <p><strong>Requirements for 2000 Diodes at Nashik plant</strong></p>
                <div>
                    <p style={highlight}>Nov</p>
                    <p style={{ color: '#2398F6' }}>18</p>
                </div>
                </div>
                
            </div>
            <div>
                <p>Sat, 02:00PM Onwards</p>
                <div>
                    <p>Andrew Smith</p>
                    <p>Global Foundaries</p>
                </div>
                <p style={{ color: '#2398F6' }}>one on one</p>
            </div>

        </div>
    )
}

export default Event

import React from 'react'
import "./List.css"

function List(props) {
    return (
            <div className='list--item' style={{
                    background:`${props.background}`
                }}>
                <div className='list--heading' style={{
                        color:`${props.color}`,
                        backgroundColor:`${props.background}`
                    }}>
                    <img 
                        src={props.src}
                        alt={props.alt}
                        className="hero"
                        />
                    <h3>{props.name}</h3>
                </div>
                <div className='value__container'>
                    <h4 className='value'>{props.value} /</h4> <span className='span__100'>100</span>
                </div>
            </div>
    )
}

export default List
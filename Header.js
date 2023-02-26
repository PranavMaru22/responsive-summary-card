import React from 'react'
import List from './List'
import "./Header.css"
const {REACTION,VERBAL,MEMORY,VISUAL} = require("./SVGImports");


function Header() {
    return (
        <div className='header--container'>
            <div className='header'>
                <div className='blue--column'>
                    <h2>Your Result</h2>
                    <div className='blue__circle'>
                        <span className='span__76'>76</span>
                        <span className="span__100">of 100</span>
                    </div>
                    <div className='blue__content'>
                        <h2>Great</h2>
                        <p>You scored higher than 65% of the people who have taken these tests.</p>
                    </div>
                </div>
                <div className='white--column'>
                    <h2>Summary</h2>
                    <List 
                        name={"Reaction"}
                        value={80}
                        src={REACTION}
                        alt={"svg-"}
                        color={"red"}
                        background={"#ffb3c1"}
                        />
                    <List 
                        name={"Memory"}
                        value={92}
                        src={MEMORY}
                        alt={"svg--"}
                        background={"#fff2b2"}
                        color={"#fdb833"}
                        />
                    <List 
                        name={"Verbal"}
                        value={61}
                        src={VERBAL}
                        alt={"svg---"}
                        background={"#b7e4c7"}
                        color={"#40916c"}
                        />
                    <List 
                        name={"Visual"}
                        value={72}
                        src={VISUAL}
                        alt={"svg----"}
                        background={"#caf0f8"}
                        color={"#0077b6"}
                        />
                    <button className='continue__btn'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Header
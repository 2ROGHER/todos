import React, { JSX } from 'react'
import "./StageComponent.scss";

const StageComponent = ({ title = "", rprColor = "#0AFAF2", i = 3, iBg = "#306CC7" }): JSX.Element => {
    return (
        <section className='stage'>
            <div className="rpr-color" style={{ background: rprColor, width: "10px", height: "10px", borderRadius: "50%" }}></div>
            <div className="stage-title">
                {title}
            </div>
            <div className="stage-items" style={{background: iBg}}>
                {i}
            </div>
        </section>
    )
}

export default StageComponent
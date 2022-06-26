import React, { useEffect, useState }from 'react'
import { connect } from 'react-redux'
//Actions 
import * as actions from '../state/action-creators'


function Wheel(props) {
 
  const [ state, setState ] = useState({
    currentCircle: [0,1,2,3,4,5]
  })
  return (
    <div id="wrapper">
      <div id="wheel"> 
        {state.currentCircle.map(idx => (
          <div key={idx} className={`cog${idx === props.wheel ? ' active': ''}`} style={{ "--i": idx }}>
            {idx === props.wheel ? 'B' : null}
          </div>
        ))
      }

        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
        <div id="keypad">
          <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise(1)}>Counter clockwise</button>
          <button id="clockwiseBtn" onClick={() => props.moveClockwise(1)}>Clockwise</button>
        </div> 
    </div>
  )
}
// const mapStateToProps = (state) =>{

// }
export default connect(state => state, actions)(Wheel);
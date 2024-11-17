import React from 'react'
import {prizeMoney} from '../data/data'

function Money({questionNumber}) {
  return (
    <div className="pyramid">
    <div className="money">
      <div className="money-list">
      <ul>
{prizeMoney.map((item) => (
<li key={item.id} className={questionNumber === item.id ? "item active" : "item"}>
<h5 className="amount">{item.amount}</h5>
</li>
))}
</ul>
      </div>
    </div>
  </div>
  )
}

export default Money
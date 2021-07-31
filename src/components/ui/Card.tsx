import React from "react"

import "../../assets/scss/ui/Card.scss"

function Card(props) {
  return <div className="card">{props.children}</div>
}

export default Card

import React from 'react'

const Header = (props) => {
  return (
    <div className="container">
      <div className="jumbotron my-3">
        <h1 className="display-4 text-center">{props.title}</h1>
        <p className="lead text-center">{props.subTitle}</p>
      </div>
    </div>
  )
}

export default Header
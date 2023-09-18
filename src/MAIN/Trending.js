import React from 'react'

const Trending = (props) => {
  return (
    <div style={{display:"flex",padding:"0px 10px 10px 10px"}}>
      <div className="part1">
        <img 
        style={{width:"100px",height:"100px"}}
        src={props.img} alt="loaded" />
      </div>
      <div className="part2" style={{margin:"24px"}}>
        <p>{props.catgroius} / {props.date}</p>
        <a style={{fontSize:"15px"}} href="/">{props.heading}</a>
      </div>
    </div>
  )
}

export default Trending
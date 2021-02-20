import React from "react";
import './index.css';


function Card(props)
{
	return (
	<>

		<div className="big">
			<div className="ibig">
				<img src={props.imgsrc} alt="pic" className="image"/>
				<div className="info">
					<h2 className="title">{props.fname}</h2>
					<a href={props.link} target="_blank">
						<button> Watch Now </button>
					</a>
				</div>
			</div>
		</div>
	</>
  );
}
export default Card;
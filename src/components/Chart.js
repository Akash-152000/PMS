import React from 'react'
import '../App.css'

const Chart = () => {
  return (
	<div className='chart'>
		<div className="monthly-wrapper">
			<div className="month month1" style={{width:"20px",height:"50px"}}></div>
			<p>Oct</p>
		</div>
		<div className="monthly-wrapper">
			<div className="month month2" style={{width:"20px",height:"50px"}}></div>
			<p>Nov</p>
		</div>
		<div className="monthly-wrapper">
			<div className="month month3" style={{width:"20px",height:"50px"}}></div>
			<p>Jan</p>
		</div>
		<div className="monthly-wrapper">
			<div className="month month4" style={{width:"20px",height:"50px"}}></div>
			<p>Feb</p>
		</div>
		<div className="monthly-wrapper">
			<div className="month month5" style={{width:"20px",height:"50px"}}></div>
			<p>Apr</p>
		</div>
		<div className="monthly-wrapper">
			<div className="month month6" style={{width:"20px",height:"50px"}}></div>
			<p>Mar</p>
		</div>

	</div>
  )
}

export default Chart
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var Body = React.createClass({
	render: function() {
		return(
			<div>
			<Banner />
			<div id='main-body'><MainBody /></div>
			<ScrollBar />
			</div>
		)
	}
})
//?

var Banner = React.createClass({
	render: function() {
		return(
			<div>
			<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" id='skyline'/>
  			<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" id='logo'/>
  			</div>
		)
	}
})

var MainBody = React.createClass({
	render: function() {
		return(
			<div>
				<LeftCol />
				<RightCol />
			</div>
		)
	}
})

var LeftCol = React.createClass({
	render: function() {
		return(
			<div id='col-one'>
      		<h4>THE IRON YARD | HOUSTON</h4>
      		<p id='gray-text'>Happenings and Updates for The Iron Yard in Houston,TX</p>
      		<p id='search'>SEARCH</p>
      		<input type='search' placeholder='Search Keywords'/>
    		</div>
		)
	}
})

var RightCol = React.createClass({
	render: function() {
		return(
			<div id='col-two'>
      		<h2>September 22 Starts a New Class of the Iron Yard Houston Students</h2>
      		<p id='italisized'><em>By Brian Dorton, Campus Director at <a href="http://www.theironyard.com/locations/houston.html">The Iron Yard</a> Houston</em></p>
      		<div id='img-crop'>
        	<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" id='classroom'/>
      		</div>
      		<p id='main-text'> Unicorn experiental human-centered design entrepreneur lette agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000 and</p>
    		</div>
		)
	}
})

var ScrollBar = React.createClass({
	render: function() {
		return(
			<div id='scrolling-bar'>
    		<p id='top-scroll'><strong>Never miss a post!</strong></p>
    		<div id='bottom-scroll'>
      		<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" id='logo2'/>
      		<div id="bottom-scroll-text">
        	<div id="tiy"><strong>tiyhouston</strong></div>
        	<div id="tiy2">The Iron Yard | Houston</div>
      		</div>
      		<button id='like-button'>
        	+ Follow
      		</button>
    		</div>
  			</div>
		)
	}
})

var app = function() {
	var libraryName = 'react'
	ReactDOM.render(<Body/>,document.querySelector('.container'))
}



// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
var Navbar = React.createClass({
	getInitialState: function() {
	    return {
	        height: 60
	    };
	},
	getScrollToCoords: function(destination){
		return $("#" + destination).offset().top - this.state.height;
	},
	render: function(){
		var navbarStyle = {
			height: this.state.height + "px",
			width: "100vw",
			position: "fixed",
			padding: " 10px 5vw",
			zIndex: "10",
			color: "#aaa",
			lineHeight: "40px",
			backgroundColor: "transparent",
			borderBottom: "1px solid #aaa"
		};

		var self = this;

		return (			
			<div id="navbar-element" style={navbarStyle}>
				<NavbarButton scrollTo={this.getScrollToCoords('landing')} _float="left" fontSize="24px">
					<span style={{
						fontFamily: "'Handlee' !important",
    					fontStyle: "normal"
					}}>
						ejlorenzo
					</span>
				</NavbarButton>

				<NavbarButton scrollTo={this.getScrollToCoords('contacto')} _float="right">
					Contacto
				</NavbarButton>

				<NavbarButton scrollTo={this.getScrollToCoords('cloud')} _float="right">
					Cloud
				</NavbarButton>
			</div>
		)
	}
});
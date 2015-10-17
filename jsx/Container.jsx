var Container = React.createClass({
	getInitialState: function() {
	    return {
	        bgColor: this.props.bgColor ? this.props.bgColor : "transparent",
	        foreColor: this.props.foreColor ? this.props.foreColor : "black",
	        bgImage: this.props.bgImage ? "url("+this.props.bgImage+")" : "none",
	        bgSize: this.props.bgSize ? this.props.bgSize : "cover",
	        bgPosition: this.props.bgPosition ? this.props.bgPosition : "0 0",
	        textAlign: this.props.textAlign ? this.props.textAlign : "center",
	    };
	},

	render: function(){
		var padding = {
			topBot: this.props.padTopBot ? this.props.padTopBot : 10,
			rightLeft: this.props.padRightLeft ? this.props.padRightLeft : 15
		}

		var containerStyle = {
			backgroundColor: this.state.bgColor,
			backgroundImage: this.state.bgImage,
			backgroundSize: this.state.bgSize,
			backgroundPosition: this.state.bgPosition,
			backgroundRepeat: "no-repeat",
			color: this.state.foreColor,

			width: '100vw',
			height: this.props.height ? this.props.height : '100vh',
			padding: padding.topBot + "vh " + padding.rightLeft + "vw",
			textAlign: this.state.textAlign
		};

		return (
			<div style={containerStyle} id={this.props.id}>
				{this.props.children}
			</div>
		)
	}
});

var SocialNetworkButton = React.createClass({
	render: function(){
		var style = {
			cursor: "pointer",
			backgroundImage: "url(img/social.png)",
			backgroundPosition: (-15 - 40*this.props.x) + "px " + (-15 - 40*this.props.y) + "px",
			width: "30px",
			height: "30px",
			marginRight: "2.5px",
			marginLeft: "2.5px",
			border: "1px solid #aaa",
			borderRadius: "5px",
			"float": "left"
		};

		return (			
			<a href={this.props.href} target={"_blank"}>
				<div style={style}></div>
			</a>
		)
	}
});
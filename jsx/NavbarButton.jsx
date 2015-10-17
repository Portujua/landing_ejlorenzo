var NavbarButton = React.createClass({
	scrollTo: function()
	{
		var sto = this.props.scrollTo; //$("#" + this.props.scrollTo).offset().top;
		var height = parseInt($(".ps-scrollbar-y-rail").css("height"));

		//console.log("Scrolleando hacia " + this.props.scrollTo)

		if (sto < height)
		{
			$("body").css("background-image", "url(img/night-sky-stars-blur.jpg)");
		}
		else
		{
			$("body").css("background-image", "url(img/black-wood.jpg)");
		}



	    $('#landing').animate({
	        scrollTop: sto
	    }, 500);

	    $("#landing").perfectScrollbar('update');

		if (sto >= 110)
		{
			$("#navbar-element").css({
				backgroundColor: "#ddd",
				color: "#111"
			});
		}
		else
		{
			$("#navbar-element").css({
				backgroundColor: "transparent",
				color: "#aaa"
			});
		}
	},
	render: function(){
		var style = {
			"float": this.props._float ? this.props._float : "left",
			fontSize: this.props.fontSize ? this.props.fontSize : "14px",
			cursor: "pointer",
			padding: "0px 15px"
		};

		var self = this;

		return (
			<div style={style} onClick={this.scrollTo}>
				{this.props.children}
			</div>
		)
	}
});

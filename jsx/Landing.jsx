var Landing = React.createClass({
	getLandingText: function(){
		var lang = getCookie("lang").length > 0 ? getCookie("lang") : "es";

		if (lang == "es")
			return {
				my_name : "Eduardo Lorenzo",
				profession : "Programador Junior",
				knowledge_title : "Con conocimientos en:",
				my_knowledge : "Desarrollo Web (HTML, HTML5, CSS, CSS3, LESS, Bootstrap, PHP, JavaScript, jQuery, AngularJS, ReactJS, JSX, AJAX), Bases de Datos (MySQL, Postgresql, ORACLE), Desarrollo de Aplicaciones (C#, C++, Pascal, Python, Java), Redes Neuronales, Algoritmos Genéticos, Redes",

				cloud_title : "Servicio Cloud Gratis",
				cloud_unlimited_space : "¡Almacenamiento ilimitado!",

				contact_me : "Contáctame",
			};
		else if (lang == "en")
			return {
				my_name : "Eduardo Lorenzo",
				profession : "Junior Programmer",
				knowledge_title : "Experienced in:",
				my_knowledge : "Web development (HTML, HTML5, CSS, CSS3, LESS, Bootstrap, PHP, JavaScript, jQuery, AngularJS, ReactJS, JSX, AJAX), Databases (MySQL, Postgresql, ORACLE), App development (C#, C++, Pascal, Python, Java), Neural networks, Genetic algorithms, Networks",

				cloud_title : "Free Cloud Service",
				cloud_unlimited_space : "Unlimited storage!",

				contact_me : "Contact me",
			};
	},
	componentDidMount: function(){
		$("#landing").perfectScrollbar({
			useKeyboard: true,
			useSelectionScroll: true
		});

		$(document).on('ps-scroll-y', function () {
			var offset = parseInt($(".ps-scrollbar-y-rail").css("top"));
			var height = parseInt($(".ps-scrollbar-y-rail").css("height"));
			//console.log(offset)

			if (offset >= 110)
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

			// Parallax
			// 650 pequeño, 800 el resto
			if (offset < height)
			{
				$("body").css("background-image", "url(img/night-sky-stars-blur.jpg)");
			}
			else
			{
				$("body").css("background-image", "url(img/black-wood.jpg)");
			}
		})
	},
	setSpanish: function(){
		setCookie("lang", "es", 30);
		location.reload();
	},
	setEnglish: function(){
		setCookie("lang", "en", 30);
		location.reload();
	},
	render: function(){
		var landing = this.getLandingText();
		console.log(landing)

		return (
			<div>
				<Container id="firstContainer" foreColor="#ccc" padTopBot="30" padRightLeft="25">
					<h1 style={{fontSize: "42px"}}>{ landing.my_name }</h1>
					<h3>{ landing.profession }</h3>
					<hr/>
					<h5>{ landing.knowledge_title }</h5>
					<h6>{ landing.my_knowledge }</h6>
				</Container>

				<Container id="cloud" height="100vh" foreColor="#ddd" bgColor="rgb(1, 0, 10)" bgImage="img/clouds.png" bgSize="contain" bgPosition="center" padTopBot="45">
					<a href="http://cloud.ejlorenzo.com.ve" style={{textDecoration: "none"}}>
						<h1>{ landing.cloud_title }</h1>
					</a>
					<h4>{ landing.cloud_unlimited_space }</h4>
				</Container>

				<Container id="contacto" height="650px !important" padRightLeft="20" foreColor="#ddd" textAlign="left">
					<h1>{ landing.contact_me }</h1>

					<ContactForm />
				</Container>

				<Container id="footer" height="340px" foreColor="#ddd" bgImage="img/footer.png" bgPosition="center" padTopBot="10">
					<p>desarrollo@ejlorenzo.com.ve / ejlorenzo19@gmail.com</p>
					<p>+58 (412) 555-8283</p>
					<div style={{width: "105px", margin: "0 auto", marginBottom: "55px"}}>
						<SocialNetworkButton x="3" y="2" href="https://www.facebook.com/AxlSM" />
						<SocialNetworkButton x="4" y="7" href="https://twitter.com/AxlSM" />
						<SocialNetworkButton x="3" y="4" href="https://ve.linkedin.com/in/ejlorenzo" />
					</div>
					<div style={{width: "80px", margin: "0 auto", fontSize: "11px"}}><span style={{cursor: "pointer"}} title="Español" onClick={this.setSpanish}>ES</span> - <span style={{cursor: "pointer"}} title="English" onClick={this.setEnglish}>EN</span></div>
				</Container>
			</div>
		)
	}
});

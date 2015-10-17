var Landing = React.createClass({
	render: function(){
		return (			
			<div>
				<Container id="firstContainer" foreColor="#ccc" padTopBot="30" padRightLeft="25">
					<h1 style={{fontSize: "42px"}}>Eduardo Lorenzo</h1>
					<h3>Programador Junior</h3>
					<hr/>
					<h5>Con conocimientos en:</h5>
					<h6>
						Desarrollo Web (HTML, HTML5, CSS, CSS3, LESS, Bootstrap, PHP, JavaScript, jQuery, AngularJS, ReactJS, JSX, AJAX), Bases de Datos (MySQL, Postgresql, ORACLE), Desarrollo de Aplicaciones (C#, C++, Pascal, Python, Java), Redes Neuronales, Algoritmos Genéticos, Redes
					</h6>
				</Container>

				<Container id="cloud" height="100vh" foreColor="#ddd" bgColor="#202020" bgImage="img/clouds.png" bgSize="contain" bgPosition="center" padTopBot="45">
					<a href="http://cloud.ejlorenzo.com.ve" style={{textDecoration: "none"}}>
						<h1>Servicio Cloud Gratis</h1>
					</a>
					<h4>¡Almacenamiento ilimitado!</h4>
				</Container>

				<Container id="contacto" height="650px !important" padRightLeft="20" foreColor="#ddd" textAlign="left">
					<h1>Contáctame</h1>

					<ContactForm />
				</Container>

				<Container id="footer" height="340px" foreColor="#ddd" bgImage="img/footer.png" bgPosition="center" padTopBot="10">
					<p>desarrollo@ejlorenzo.com.ve / ejlorenzo19@gmail.com</p>
					<p>+58 (412) 555-8283</p>
					<div style={{width: "105px", margin: "0 auto", marginBottom: "35px"}}>
						<SocialNetworkButton x="3" y="2" href="https://www.facebook.com/AxlSM" />
						<SocialNetworkButton x="3" y="7" href="https://twitter.com/AxlSM" />
						<SocialNetworkButton x="3" y="4" href="https://ve.linkedin.com/in/ejlorenzo" />
					</div>
				</Container>
			</div>
		)
	}
});
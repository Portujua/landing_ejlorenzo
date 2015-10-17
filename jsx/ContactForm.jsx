var ContactForm = React.createClass({
	getInitialState: function() {
	    return {
	        notification: false,
	        notificationColor: "#fff",
	        canSubmit: true
	    };
	},
	validateEmail: function(email){
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	},
	submitForm: function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		if (name.length == 0 || email.length == 0 || message.length == 0)
		{
			this.setState({
				notification: "Debes llenar todos los campos",
				notificationColor: "#FE2E2E"
			});

			return;
		}

		if (!this.validateEmail(email))
		{
			this.setState({
				notification: "Debes escribir un correo válido",
				notificationColor: "#FE2E2E"
			});

			return;			
		}
		
		this.setState({
			notification: "Enviando correo...",
			notificationColor: "#31B404",
			canSubmit: false
		});

		var self = this;

		$.ajax({
	        type:"POST",
	        url:"sendemail.php",
	        data:{name:name, email:email, message:message},
	        success:function(data){
	            self.setState({
					notification: "Listo! Gracias por tu comentario",
					notificationColor: "#31B404",
					canSubmit: false
				});
	        }
	    });
	},
	render: function(){
		var style = {
			padding: "10px 10px",
			marginTop: "20px",
			background: "repeating-linear-gradient(-45deg, #EFC1CB , #EFC1CB 30px, #F2F2F2 30px, #F2F2F2 40px, #C2E8F5 40px, #C2E8F5 70px,#F2F2F2 70px, #F2F2F2 80px)",
			borderRadius: "10px"
		}

		return (
			<div style={style}>
				<div style={{
					backgroundColor: "white",
					padding: "60px 40px"
				}}>
					<div className="row">
						<div className="col-sm-6" style={{marginBottom: "20px"}}>
							<input type="text" id="name" name="name" placeholder="Nombre.." style={{
								width: "100%"
							}} />
						</div>
						<div className="col-sm-6" style={{marginBottom: "20px"}}>
							<input type="text" id="email" name="email" placeholder="Correo.." style={{
								width: "100%"
							}} />
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12" style={{marginBottom: "25px"}}>
							<textarea id="message" name="message" placeholder="Mensaje.." style={{
								width: "100%",
								resize: "none"
							}}></textarea>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12">
							<button onClick={this.submitForm} disabled={!this.state.canSubmit}>enviar</button>
							&nbsp;&nbsp;&nbsp;
							{ this.state.notification &&
								<span style={{color: this.state.notificationColor}}>{this.state.notification}</span>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Home</title>
	<link rel="icon" type="image/png" href="img/logoSolo.png"/>

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>

	<!-- ReactJS -->
	<script type="text/javascript" src="js/react.js"></script>
	<script type="text/javascript" src="js/JSXTransformer.js"></script>

	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css" />
	<script type="text/javascript" src="js/bootstrap.js"></script>

	<!-- Scroll -->
	<script type="text/javascript" src="js/perfect-scrollbar.jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="css/perfect-scrollbar.css" />

	<!-- Componentes ReactJS -->
	<script type="text/jsx" src="jsx/Container.jsx"></script>
	<script type="text/jsx" src="jsx/Landing.jsx"></script>
	<script type="text/jsx" src="jsx/Navbar.jsx"></script>
	<script type="text/jsx" src="jsx/NavbarButton.jsx"></script>
	<script type="text/jsx" src="jsx/SocialNetworkButton.jsx"></script>
	<script type="text/jsx" src="jsx/ContactForm.jsx"></script>

	<!-- Otros -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link href='https://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'/>

	<script type="text/javascript" src="js/utils.js"></script>
</head>
<body>
	<div id="navbar"></div>
	<div id="landing"></div>

	<script type="text/jsx">
		React.render(<Landing />, document.getElementById('landing'));
		React.render(<Navbar />, document.getElementById('navbar'));		
	</script>

	<script>
		function addScrollbar()
		{
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
					$("body").css("background-image", "url(img/fondoMesa.jpg)");
				}
			})
		}

		setTimeout('addScrollbar()', 250);




		<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"http://ejlorenzo.com.ve/img/fondoMesa.jpg"
			)
		//--><!]]>
	</script>
</body>
</html>
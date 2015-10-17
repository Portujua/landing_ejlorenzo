<?php

	include_once("php/utils.php");

	if (isset($_POST['email']))
		$mail = array(
			"to" => $_POST['email'],
			"name" => $_POST['name'],
			"message" => $_POST['msg']
		);
	else
		$mail = array(
			"to" => "Test email",
			"name" => "Nombre prueba",
			"message" => "Test"
		);

	echo sendEmail($mail);

?>
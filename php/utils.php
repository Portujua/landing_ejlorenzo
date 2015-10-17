<?php 

    function sendEmail($email)
    {
        require "PHPMailer/PHPMailerAutoload.php";
        
        $mail = new PHPMailer;

        //$mail->isSMTP();
        $mail->Timeout = 3;
        $mail->SMTPDebug = 1;
        $mail->Host = 'cloud.8ssi.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contacto@ejlorenzo.com.ve';
        $mail->Password = '21115476';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 465;

        $mail->From = 'contacto@ejlorenzo.com.ve';
        $mail->FromName = $email['name'];
        $mail->addAddress("desarrollo@ejlorenzo.com.ve", $email['name']);

        $mail->isHTML(true);

        $mail->Subject = 'Mensaje de ' . $email['name'];
        $mail->Body = '
            <b>'.$email['name'].' ('.$email['to'].')</b> dice:<br><br>
            '.$email['message'].'
        ';
        $mail->AltBody = '
            '.$email['name'].' ('.$email['to'].') dice:.
            "'.$email['message'].'"
        ';

        if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            echo "Message has been sent";
        }
    }



?>
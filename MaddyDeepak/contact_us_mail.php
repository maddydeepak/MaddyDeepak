<?php
/* subject and Email Variable */
	
	$admin_email_subject = 'Email - Maddy Deepak Photography';
	$admin_email = 'maddheshiya.deepak@gmail.com';

	/* Gathering Data Variable */
	$name = $_POST['fname'];
	$client_email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	/* If e-mail is not valid show error message */
	if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $client_email))
	{
	show_error("Invalid e-mail address");
	}
	
	$admin_body = <<<EOD
	<br><hr><br>
	{$name} has sent you a message using your contact form:<br>
	<br>
	Name: {$name}<br>
	Email: {$client_email}<br>
	Mobile: {$mobile}<br>
	Message:<br>
	{$message}
EOD;
	
	//Sending mail to admin
	$admin_header = "From: $client_email\r\n";
	$admin_header .= "Content-type: text/html\r\n";

	mail($admin_email, $admin_email_subject, $admin_body, $admin_header);

?>


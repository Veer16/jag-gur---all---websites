<?php

$recipient = "your@email.com";
$name_reserv = $_POST['name_reserv'];
$email_reserv = $_POST['email_reserv'];
$datepicker = $_POST['datepicker'];
$time_reserv = $_POST['time_reserv'];
$persons_reserv = $_POST['persons_reserv'];
$phone_reserv = $_POST['phone_reserv'];
$message_reserv = $_POST['message_reserv'];

if (isset($_POST['email_reserv'])) {	
	if (preg_match('(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})', $_POST['email_reserv'])) {
		$msg = 'E-mail address is valid';
	} else {
		$msg = 'Invalid email address';
	}

  $ip = getenv('REMOTE_ADDR');
  $host = gethostbyaddr($ip);	
  $mess = "Name: ".$name_reserv."\n";
  $mess .= "Email: ".$email_reserv."\n";
  $mess .= "Date: ".$datepicker."\n";
  $mess .= "Time: ".$time_reserv."\n";
  $mess .= "Number of persons: ".$persons_reserv."\n";
  $mess .= "Phone: ".$phone_reserv."\n";
  $mess .= "Message: ".$message_reserv."\n\n";
  $mess .= "IP:".$ip." HOST: ".$host."\n";
  
  $headers = "TAB: <".$email_reserv.">\r\n"; 
  $title = "Table Reservation";

  $sent = mail($recipient, $title, $mess, $headers); 
  

$text = "Thanks for contacting us! We will check your message within a few minutes.";
	
echo '<xml>	<someText>'.$text.'</someText> </xml>';

} else {
	die('Invalid entry!');
}


?>
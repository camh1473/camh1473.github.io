<?php
if(isset($_POST['submit'])){
	$name=$_POST['name']
	$email=$_POST['email']
	$subject=$_POST['subject']
	$msg=$_POST['message']

	$to='camh1473@gmail.com';
	$subject="Form Submission";
	$message="Name: ".$name."/n"."Phone: ".$phone."/n". "Wrote the following: "."/n/n".$msg; 
	$headers="From: ".$email;

	if(mail($to, $subject, $message, $headers)){
		echo "<h1> Sent Successfully! Thank you!"." ".$name.", We will contact you shortly!</h1>"
	}
	else{
		echo "Something went wrong!";
	}
}

 ?>
<?php
	$name=$_POST['name'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	$msg=$_POST['message'];
	$to="camh1473@gmail.com";
	mail($email, $subject, $msg) or die("Error!");
	echo "Thank You! Email has been sent!";

// if(isset($_POST['submit'])){
// 	$name=$_POST['name']
// 	$email=$_POST['email']
// 	$subject=$_POST['subject']
// 	$msg=$_POST['message']

// 	$to='camh1473@gmail.com';
// 	$subject="Form Submission";
// 	$msg="Name: ".$name."/n"."Phone: ".$phone."/n". "Wrote the following: "."/n/n".$msg; 
// 	$headers="From: ".$email;

// 	if(mail($to, $email, $subject, $message)){
// 		echo "<h1> Sent Successfully! Thank you!"." ".$name.", We will contact you shortly!</h1>"
// 	}
// 	else{
// 		echo "Something went wrong!";
// 	}
// }

 ?>
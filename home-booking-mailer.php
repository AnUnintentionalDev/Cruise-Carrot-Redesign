<?php

    $from =  "sales@cruisecarrot.com";
    
    
    $name = $_REQUEST['full_name'];
    $email = $_REQUEST['email'];
    $destinations = $_REQUEST['destinations'];
    $ship_name = $_REQUEST['ship'];
    $sailing_date = $_REQUEST['sailing_date'];
    $no_of_pax = $_REQUEST['no_of_pax'];
    $copy_of_booking = $_REQUEST['copy_of_booking'];
    
    $to = 'srrexsharma@gmail.com, sales@cruisecarrot.com';

    $headers = "From: $from";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $from\n";
    $headers .= "Cc: $email\n "; 
    $headers .= "Reply-To: $email";
    
    $subject = "You have received a new booking enquiry from homepage of Cruise Carrot Website";
   
    $htmlContent = file_get_contents('home-booking-email-template.php');
    $htmlContent = str_replace('{{name}}', $name, $htmlContent);
    $htmlContent = str_replace('{{email}}', $email, $htmlContent);
    $htmlContent = str_replace('{{destinations}}', $destinations, $htmlContent);
    $htmlContent = str_replace('{{ship}}', $ship_name, $htmlContent);
    $htmlContent = str_replace('{{sailing_date}}', $sailing_date, $htmlContent);
    $htmlContent = str_replace('{{no_of_pax}}', $no_of_pax, $htmlContent);
	
    mail($to, $subject, $htmlContent, $headers);

?>

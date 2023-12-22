<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Perform any additional processing or validation here

    // Email details
    $to = 'samueldivine2021@gmail.com';  // Replace with your company's email address
    $subject = 'New Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Email body
    $email_body = "User Name: $username\n" .
                  "User Email: $email\n" .
                  "Phone: $phone\n" .
                  "Message: $message\n" 

    // Send the email
    $mail_success = mail($to, $subject, $email_body, $headers);

    // Check if the email was sent successfully
    if ($mail_success) {
        echo "Email sent successfully!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}    
?>

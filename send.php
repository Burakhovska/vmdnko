<?php
// Configuration
$to = 'vmdnk@outlook.com';
$subject = 'Замовлення розрахунку - VMDNKO';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $phone = htmlspecialchars(strip_tags(trim($_POST['phone'])));
    $type = htmlspecialchars(strip_tags(trim($_POST['type'])));
    $size = htmlspecialchars(strip_tags(trim($_POST['size'])));
    $comment = htmlspecialchars(strip_tags(trim($_POST['comment'])));

    // Validate required fields
    if (empty($name) || empty($phone)) {
        http_response_code(400);
        echo "Будь ласка, заповніть обов'язкові поля.";
        exit;
    }

    // Create email message
    $message = "
    <html>
    <head>
        <title>Замовлення розрахунку</title>
    </head>
    <body>
        <h2>Нове замовлення розрахунку</h2>
        <p><strong>Ім'я:</strong> $name</p>
        <p><strong>Телефон:</strong> $phone</p>";
    
    if (!empty($type)) {
        $message .= "<p><strong>Тип дверей:</strong> $type</p>";
    }
    
    if (!empty($size)) {
        $message .= "<p><strong>Розміри:</strong> $size</p>";
    }
    
    if (!empty($comment)) {
        $message .= "<p><strong>Коментар:</strong> $comment</p>";
    }
    
    $message .= "
        <hr>
        <p><em>Це повідомлення було відправлено з форми замовлення розрахунку на сайті VMDNKO</em></p>
    </body>
    </html>";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: VMDNKO Website <noreply@vmdnko.com.ua>" . "\r\n";
    $headers .= "Reply-To: $to" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "success";
    } else {
        http_response_code(500);
        echo "Помилка відправки повідомлення. Спробуйте пізніше.";
    }
} else {
    http_response_code(405);
    echo "Метод не дозволено.";
}
?>

<?php
function createEmailTemplate($request) {
    $visit_us = "omis.com";
    $website_name = "OMIS";
    $website_footer = date('Y').' Powered by OMIS Enterprise';
    $mail_content = "
    <!DOCTYPE html>
    <html lang = 'en'>
        <head>
            <title>Customer Inquiry</title>
            <meta charset = 'UTF-8'/>
            <meta name = 'viewport' content = 'width=device-width, initial-scale=1'/>
        </head>
        <body>
            <h3> Customer Inquiry from {$website_name}</h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Package</th>
                        <th>Address</th>
                        <th>Address (Second)</th>
                        <th>City</th>
                        <th>Region</th>
                        <th>Postal</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{$request->firstName}</td>
                        <td>{$request->lastName}</td>
                        <td>{$request->email}</td>
                        <td>{$request->phone}</td>
                        <td>{$request->package}</td>
                        <td>{$request->addressOne}</td>
                        <td>{$request->addressTwo}</td>
                        <td>{$request->city}</td>
                        <td>{$request->region}</td>
                        <td>{$request->postal}</td>
                        <td>{$request->country}</td>
                    </tr>
                </tbody>
            </table>
            <p>Customer Inquiry</p>
            <p><a href = '{$visit_us}'> Visit Us </a> </p>
            <div>
                <h5>{$website_name}</h5>
                <h6>{$website_footer}</h6>
            </div>
        </body>
    </html>
    ";
}

function sendEmail($from="khan.photon@gmail.com", $to="khan.photon@gmail.com", $subject="Customer Inquiry", $requestsObject) {
    $message = createEmailTemplate($requestsObject);
    $headers = "From:" . $from."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    if(mail($to, $subject, $message, $headers)):
        return true;
    else:
        return false;
    endif;
}
?>
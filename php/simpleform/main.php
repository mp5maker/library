<?php
header('Content-Type: application/json');
require_once('validation.php');
require_once('email.php');

/**
 * Packages Type
 */
$packages = [
    [
        "name" => "Hotel Management System",
        "enum" => 1
    ],
    [
        "name" => "Pharmacy Solution",
        "enum" => 2
    ],
    [
        "name" => "Diagnostic Management System",
        "enum" => 3
    ],
];

/**
 * The validators needed for the validation
 */
$formValidators = [
    "firstName" => 'notEmpty',
    "lastName" => 'notEmpty',
    "email" => 'notRequired',
    "phone" => 'phone',
    "package" => 'integer',
    "addressOne" => 'notEmpty',
    "addressTwo" => 'notRequired',
    "city" => 'notEmpty',
    "region" => 'notEmpty',
    "postal" => 'notEmpty',
    "country" => 'notEmpty',
];

/**
 * Checks if the request is post or not
 */
if ($_SERVER['REQUEST_METHOD'] == 'POST'):
    $postdata = file_get_contents("php://input");
    $requests = json_decode($postdata);
    $requestsArray = [];
    $requestsObject = new stdClass();
    // Sanitizes the $requests
    foreach ($requests as $key => $value):
        $requestsArray[$key] = filter_var($value, FILTER_SANITIZE_STRING); // Request Array
        $requestsObject->$key = filter_var($value, FILTER_SANITIZE_STRING); // Request Object
    endforeach;
    // Validation takes in array only
    $validator = new Validation($requestsArray, $formValidators);
    $validationResult = $validator->getValidationResult();

    // Checks if all the value of the form fields are valid or not
    $formWithNoErrors = true;
    $problematicFormFields = new stdClass();
    foreach($validationResult as $key => $value):
        if ($value !== true):
            $formWithNoErrors = false;
            $problematicFormFields->$key = $value;
        endif;
    endforeach;

    // Creating a response with status 200 or 400 header
    if ($formWithNoErrors):
        $requestsObject->success = "The form has been successfully submitted";
        // Send Email
        $from="khan.photon@gmail.com";
        $to="khan.photon@gmail.com";
        $subject="Customer Inquiry";
        if (sendEmail($from, $to, $subject, $requestsObject)):
            http_response_code(200);
            echo json_encode($requestsObject);
            return;
        else:
            http_response_code(400);
            $problematicFormFields->overall = ["message" => "Email cannot be sent"];
            echo json_encode($problematicFormFields);
            return;
        endif;
    endif;
    http_response_code(400);
    echo json_encode($problematicFormFields);
endif;
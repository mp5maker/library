<?php
header('Content-Type: application/json');
require_once('settings.php');
require_once('utils.php');
require_once('validation.php');
require_once('email.php');

/**
 * The validators needed for the validation
 */
$formValidators = [
    "formType" => [
        "required" => "notEmpty"
    ],
    "firstName" => [
        "required" => "notEmpty"
    ],
    "lastName" => [
        "required" => "notEmpty"
    ],
    "email" => [
        "notRequired" => ["notEmpty", "email"]
    ],
    "phone" => [
        "required" => "phone"
    ],
    "package" => [
        "required" => "integer"
    ],
    "addressOne" => [
        "required" => "notEmpty"
    ],
    "addressTwo" => [
        "notRequired" => "notEmpty"
    ],
    "city" => [
        "required" => "notEmpty"
    ],
    "region" => [
        "required" => "notEmpty"
    ],
    "postal" => [
        "required" => "notEmpty"
    ],
    "country" => [
        "required" => "notEmpty"
    ],
];

$fieldsRemovalListForInquiry = [
    'package',
    'addressOne',
    'addressTwo',
    'city',
    'region',
    'postal',
    'country',
];

/**
 * Checks if the request is post or not
 */
if ($_SERVER['REQUEST_METHOD'] == 'POST'):
    $postdata = file_get_contents("php://input");
    $requests = json_decode($postdata);
    $requestsArray = json_decode($postdata, true);
    if ($requestsArray['formType'] == $formTypes['INQUIRIES']['slug']):
        foreach($fieldsRemovalListForInquiry as $key => $value):
            unset($formValidators[$value]);
            $isInquiryPage = true;
        endforeach;
    endif;
    return createResponse($requests, $formValidators);
endif;
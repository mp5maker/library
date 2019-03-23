<?php
$formValidators = [
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
$requestsArray = [
    "firstName" => "asdf",
    "lastName" => "asdf",
    "email" => "sadf",
    "phone" => "0981234",
    "package" => "asdf",
    "addressOne" => "sdf",
    "addressTwo" => "asdf",
    "city" => "asdf",
    "region" => "sadf",
    "postal" => "sadf",
    "country" => "sadf"
];

// $validator = new Validation($requestsArray, $formValidators);
// var_dump($validator->getValidationResult());
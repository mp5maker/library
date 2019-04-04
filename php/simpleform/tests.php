<?php
// header('Content-Type: application/json');
// require_once('settings.php');
// require_once('utils.php');
// require_once('validation.php');
// require_once('email.php');

// $formValidators = [
//     "formType" => [
//         "required" => "notEmpty"
//     ],
//     "firstName" => [
//         "required" => "notEmpty"
//     ],
//     "firstName" => [
//         "required" => "notEmpty"
//     ],
//     "lastName" => [
//         "required" => "notEmpty"
//     ],
//     "email" => [
//         "notRequired" => ["notEmpty", "email"]
//     ],
//     "phone" => [
//         "required" => "phone"
//     ],
//     "package" => [
//         "required" => "integer"
//     ],
//     "addressOne" => [
//         "required" => "notEmpty"
//     ],
//     "addressTwo" => [
//         "notRequired" => "notEmpty"
//     ],
//     "city" => [
//         "required" => "notEmpty"
//     ],
//     "region" => [
//         "required" => "notEmpty"
//     ],
//     "postal" => [
//         "required" => "notEmpty"
//     ],
//     "country" => [
//         "required" => "notEmpty"
//     ],
// ];

// $requestsArray = [
//     "formType" => "asdf",
//     "firstName" => "asdf",
//     "lastName" => "asdf",
//     "email" => "khan.photon@gmail.com",
//     "phone" => "0981234",
//     "package" => "asdf",
//     "addressOne" => "sdf",
//     "addressTwo" => "asdf",
//     "city" => "asdf",
//     "region" => "sadf",
//     "postal" => "sadf",
//     "country" => "sadf"
// ];

// $validator = new Validation($requestsArray, $formValidators);
// var_dump($validator->getValidationResult());
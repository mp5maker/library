<?php

/**
 * Email Settings
 */
$from="khan.photon@gmail.com";
$to="khan.photon@gmail.com";
$subject="Customer Inquiry";

/**
 * Packages Type
 */
$packages = [
    [
        "name" => "Hospital Management System",
        "enumValue" => 1
    ],
    [
        "name" => "Pharmacy Solution",
        "enumValue" => 2
    ],
    [
        "name" => "Diagnostic Management System",
        "enumValue" => 3
    ],
];

$formTypes = [
    'SUBSCRIPTION_FORM' => [
        "name" => "Subscription Form",
        "slug" => 'subscription-form'
    ],
    'DEMO_REQUEST_FORM' => [
        "name" => "Subscription Form",
        "slug" => "demo-request-form"
    ],
    'INQUIRIES' => [
        "name" => "Inquiries",
        "slug" => "inquiries"
    ]
];

$isInquiryPage = false;
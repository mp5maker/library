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


/**
 * Get the Enum Values converted to string
 *
 * @param array $collection
 * @param integer $enumValue
 * @return void
 */
function getEnumValue($collection, $enumValue) {
    foreach ($collection as $key => $item):
        if ($item['enumValue'] == $enumValue):
            return $item['name'];
        endif;
    endforeach;
    return;
}
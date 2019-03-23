<?php
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

/**
 * Creates Response
 *
 * @param object $requests
 * @param array $formValidators
 * @return void
 */
function createResponse($requests, $formValidators) {
    global $from, $to, $subject;
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
        if ($value !== false):
            $formWithNoErrors = false;
            $problematicFormFields->$key = $value;
        endif;
    endforeach;

    // Creating a response with status 200 or 400 header
    if ($formWithNoErrors):
        $requestsObject->success = "The form has been successfully submitted";
        // Send Email
        if (sendEmail($from, $to, $subject, $requestsObject)):
            http_response_code(200);
            echo json_encode($requestsObject, JSON_PRETTY_PRINT);
            return;
        else:
            http_response_code(400);
            $problematicFormFields->overall = ["message" => "Email cannot be sent"];
            echo json_encode($problematicFormFields, JSON_PRETTY_PRINT);
            return;
        endif;
    endif;
    http_response_code(400);
    echo json_encode($problematicFormFields, JSON_PRETTY_PRINT);
}
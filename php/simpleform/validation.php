<?php

/**
 * Validation Class
 */
class Validation {
    protected $requestsArray = [];
    protected $formValidators = [];
    protected $validationResult = [];

    /**
     * Takes the request and the required validators
     *
     * @param array $requestsArray
     * @param array $formValidators
     */
    public function __construct($requestsArray, $formValidators) {
        $this->requestsArray = $requestsArray;
        $this->formValidators = $formValidators;
        $this->performValidation();
    }

    public function checkForSpecificErrors($requestsArray, $formValidators, $field, $type="required") {
        $fieldErrors = [];
        if (is_array($formValidators[$field][$type])):
            $perFieldErrorArray = [];
            foreach($formValidators[$field][$type] as $key => $type):
                $perFieldErrorArray[] = $this->chooseValidators($type, $this->requestsArray[$field], $field);
            endforeach;
            $returnFirstError = [];
            foreach($perFieldErrorArray as $key => $value):
                if (is_array($value)):
                    $returnFirstError[] = $value;
                endif;
            endforeach;
            return $returnFirstError ? $returnFirstError : false;
        endif;
        return $this->chooseValidators($this->formValidators[$field][$type], $this->requestsArray[$field]);
    }

    /**
     * Performs Validations on all the fields
     *
     * @return void
     */
    private function performValidation() {
        $errorFields = [];
        foreach($this->formValidators as $field => $value):
            // Required Fields
            if (isset($this->formValidators[$field]['required'])):
                $errorFields[$field] = $this->checkForSpecificErrors($this->requestsArray, $this->formValidators, $field, 'required');
            endif;
            // Not Required Fields
            $formFieldArrayNotEmpty = is_array($this->requestsArray[$field]) && !empty($this->requestsArray[$field]) ? true : false;
            $formFieldNotEmpty = !empty($this->requestsArray[$field]) ? true : false;
            $showErrorsForNotRequired = $formFieldArrayNotEmpty || $formFieldNotEmpty;
            if (isset($this->formValidators[$field]['notRequired']) && $showErrorsForNotRequired):
                $errorFields[$field] = $this->checkForSpecificErrors($this->requestsArray, $this->formValidators, $field, 'notRequired');
            endif;
            // Default
            if (!isset($this->formValidators[$field]['required']) && !isset($this->formValidators[$field]['notRequired'])):
                $errorFields[$field] = false;
            endif;
        endforeach;
        $this->validationResult = $errorFields;
        return $errorFields;
    }

    /**
     * Chooses Which field should use which validator
     *
     * @param string $type
     * @param string|integer|array $value
     * @param string $field
     * @return void
     */
    private function chooseValidators($type, $value) {
        switch($type) {
            case 'email':
                return $this->checkEmail($value);
            case 'phone':
                return $this->checkPhone($value);
            case 'notEmpty':
                return $this->checkNotEmpty($value);
            case 'password':
                return $this->checkPassword($value);
            case 'integer':
                return $this->checkInteger($value);
            case 'notRequired':
                return $this->checkNotRequired($value);
            default: return;
        }
    }

    /**
     * Validation for Email
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkEmail($value) {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            return [
                "message" => "Invalid email format"
            ];
        }
        return false;
    }

    /**
     * Matches the regular expression for the field
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkPhone($value) {
        if (!preg_match("/^[0-9,.'-+]+$/", $value)) {
            return [
                "message" => "Only numbers are allowed"
            ];
        }
        return false;
    }

    /**
     * Check if the field is empty or not
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkNotEmpty($value) {
        if (!preg_match("/^[0-9a-zA-Z@ ,.'-]+$/", $value)) {
            return [
                "message" => "Only letters and white space allowed"
            ];
        }
        return false;
    }

    /**
     * Checks the regex pattern for the password
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkPassword($value) {
        if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/", $value)) {
            return [
                "message" => "Only letters and white space allowed"
            ];
        }
        return false;
    }

    /**
     * Check Integer
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkInteger($value) {
        if (!is_int((int)$value)) {
            return [
                "message" => "It cannot be empty"
            ];
        }
        return false;
    }

    /**
     * Check not required
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkNotRequired($value) {
        return false;
    }

    /**
     * Get the reqeust value [Needed for Debugging purpose]
     *
     * @return void
     */
    public function getRequests() {
        return $this->requestsArray;
    }

    /**
     * Get the validators [Needed for debugging purpose]
     *
     * @return void
     */
    public function getValidators() {
        return $this->formValidators;
    }

    /**
     * Get the validation result
     *
     * @return void
     */
    public function getValidationResult() {
        return $this->validationResult;
    }
}
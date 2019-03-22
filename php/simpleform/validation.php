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
        return;
    }

    /**
     * Performs Validations on all the fields
     *
     * @return void
     */
    private function performValidation() {
        $validationResult = [];
        foreach($this->requestsArray as $field => $value):
            $validationResult[$field] = $this->chooseValidators($this->formValidators[$field], $value, $field);
        endforeach;
        $this->validationResult = $validationResult;
        return;
    }

    /**
     * Chooses Which field should use which validator
     *
     * @param string $type
     * @param string|integer|array $value
     * @param string $field
     * @return void
     */
    private function chooseValidators($type, $value, $field) {
        switch($type) {
            case 'email':
                return $this->checkEmail($value, $field);
            case 'phone':
                return $this->checkPhone($value, $field);
            case 'notEmpty':
                return $this->checkNotEmpty($value, $field);
            case 'password':
                return $this->checkPassword($value, $field);
            case 'integer':
                return $this->checkInteger($value, $field);
            case 'notRequired':
                return $this->checkNotRequired($value, $field);
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
    public function checkEmail($value, $field) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return [
                "message" => "Invalid email format"
            ];
        }
        return true;
    }

    /**
     * Matches the regular expression for the field
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkPhone($value, $field) {
        if (!preg_match("/^[0-9,.'-+]+$/", $value)) {
            return [
                "message" => "Only numbers are allowed"
            ];
        }
        return true;
    }

    /**
     * Check if the field is empty or not
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkNotEmpty($value, $field) {
        if (!preg_match("/^[a-zA-Z ,.'-]+$/", $value)) {
            return [
                "message" => "Only letters and white space allowed"
            ];
        }
        return true;
    }

    /**
     * Checks the regex pattern for the password
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkPassword($value, $field) {
        if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/", $value)) {
            return [
                "message" => "Only letters and white space allowed"
            ];
        }
        return true;
    }

    /**
     * Check Integer
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkInteger($value, $field) {
        if (!is_int((int)$value)) {
            return [
                "message" => "It cannot be empty"
            ];
        }
        return true;
    }

    /**
     * Check not required
     *
     * @param string $value
     * @param string $field
     * @return void
     */
    public function checkNotRequired($value, $field) {
        return true;
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
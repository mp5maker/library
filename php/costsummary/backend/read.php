<?php
header('Content-Type: application/json');
require_once 'db.php';

CostSummaryDatabase::createDatabase();

if ($_SERVER['REQUEST_METHOD'] == 'GET'):
    $success = CostSummaryDatabase::fetchAll();
    if ($success):
        http_response_code(200);
        echo json_encode(["data" => $success], JSON_PRETTY_PRINT);
    endif;
else:
    http_response_code(400);
    echo json_encode(["error" => "Please use GET request only"], JSON_PRETTY_PRINT);
endif;
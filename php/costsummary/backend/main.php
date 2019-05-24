<?php
require 'rb-sqlite.php';

R::setup();
R::useFeatureSet('novice/latest');

// Create the Table
$costSummaryTable = R::dispense('costsummary');

// Remove all the dat from the table
// R::trash($costSummaryTable);

// Add Test Cost Summary
// $costSummaryTable->quantity = 20;
// $costSummaryTable->unit = 5;
// $costSummaryTable->totalPrice = 100;
// $costSummaryTable->grandTotalId = 1;
// $id = R::store($costSummaryTable);

// Retrieve all the data
$allCostSummary = R::findAll('costsummary');
$allCostSummaryArray = [];
foreach($allCostSummary as $perCostSummary):
    $allCostSummaryArray[] = $perCostSummary;
endforeach;
echo json_encode($allCostSummaryArray, JSON_PRETTY_PRINT);

// Retrieve using ID
$retrieveCostSummaryById = R::load('costsummary', 1);

// Dump the data
echo "<pre>";
var_dump($retrieveCostSummaryById->id);
var_dump($retrieveCostSummaryById->quantity);
var_dump($retrieveCostSummaryById->unit);
var_dump($retrieveCostSummaryById->totalPrice);
echo "</pre>";
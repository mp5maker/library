<?php
require_once '../vendor/autoload.php';
require_once 'utils.php';
use RedBeanPHP\Facade as R;

class CostSummaryDatabase {
    public static function createDatabase() {
        try {
            $host = config('host');
            $conn = new PDO("mysql:host=$host", config('user'), config('pwd'));
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "CREATE DATABASE IF NOT EXISTS costsummary";
            $conn->exec($sql);
            $conn = null;
        } catch(PDOException $error) {
            echo $error->getMessage();
        }
    }

    public static function createData($data=null) {
        try {
            $host = config('host');
            $db = config('db');
            R::setup("mysql:host=$host;dbname=$db", config('user'), config('pwd'));
            R::useFeatureSet('novice/latest');
            // R::fancyDebug(TRUE); // For Debugging

            $transactions = $data['transaction'];
            $grand_total = $data['grandTotal'];

            R::commit();
            if (!empty($transactions)) {
                $grand_table =  R::dispense('grand');
                foreach($transactions as $key => $transaction):
                    $cost_summary_table =  R::dispense('cost');
                    $cost_summary_table->quantity = $transaction['quantity'];
                    $cost_summary_table->unit = $transaction['unit'];
                    $cost_summary_table->total = $transaction['totalPrice'];
                    $id =  R::store($cost_summary_table);
                    if ($key == 0) {
                        $grand_table->first_transaction_id = $id;
                    }
                    if ($key == (sizeOf($transactions) - 1)) {
                        $grand_table->last_transaction_id = $id;
                    }
                endforeach;
                $grand_table->amount = $grand_total;
                $id = R::store($grand_table);
            }
            R::close();
            return true;
        } catch(Exception $e) {
            R::rollback();
            echo $e->getMessage();
            R::close();
            return false;
        }
    }

    public static function fetchAll() {
        $host = config('host');
        $db = config('db');
        R::setup("mysql:host=$host;dbname=$db", config('user'), config('pwd'));
        R::useFeatureSet('novice/latest');
        // R::fancyDebug(TRUE); // For Debugging

        $all_cost_summary = [];
        $grand_tables = R::findAll('grand');
        foreach($grand_tables as $grand_table):
            $first_transaction_id = $grand_table['first_transaction_id'];
            $last_transaction_id = $grand_table['last_transaction_id'];
            $transactions = R::findAll("cost", "WHERE id BETWEEN $first_transaction_id and $last_transaction_id");
            $all_cost_summary[] = ["transactions" => $transactions, "grandTotal" => $grand_table['amount']];
        endforeach;
        return !empty($all_cost_summary) ? $all_cost_summary : [];
    }
}
<?php
require_once '../vendor/autoload.php';
use RedBeanPHP\Facade as R;

class CostSummaryDatabase {
    public static $host = "localhost";
    public static $user = "root";
    public static $pwd = "";
    public static $db = "costsummary";

    public static function createDatabase() {
        try {
            $host = self::$host;
            $conn = new PDO("mysql:host=$host", self::$user, self::$pwd);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "CREATE DATABASE IF NOT EXISTS costsummary";
            $conn->exec($sql);
        } catch(PDOException $error) {
            echo $error->getMessage();
        }
    }

    public static function create($data=null) {
        try {
            $host = self::$host;
            $db = self::$db;
            R::setup("mysql:host=$host;dbname=$db", self::$user, self::$pwd);
            R::useFeatureSet('novice/latest');
            R::fancyDebug(TRUE);

            R::commit();

            $cost_summary_table =  R::dispense('cost');
            $grand_table =  R::dispense('grand');

            $cost_summary_table->quantity = 5;
            $cost_summary_table->unit = 5;
            $cost_summary_table->total = 25;
            $id =  R::store($cost_summary_table);
            $grand_table->first_transation_id = $id;

            $cost_summary_table =  R::dispense('cost');
            $cost_summary_table->quantity = 6;
            $cost_summary_table->unit = 6;
            $cost_summary_table->total = 36;
            $id =  R::store($cost_summary_table);
            $grand_table->last_transaction_id = $id;
            $id = R::store($grand_table);

            echo "<pre>";
                $test =  R::load('cost', 2);
                $test =  R::load('grand', 2);
                var_dump($test);
                var_dump($grand);
            echo "</pre>";
        } catch(Exception $e) {
            R::rollback();
            echo $e->getMessage();
        }
    }
}
<?php

class Db  {
    public static $host = "localhost";
    public static $username = "root";
    public static $password = "password";
    public static $db = "costsummary";
    public static $conn;

    public static function connect() {
        $servername = "localhost";
        $username = "root";
        $password = "password";
        $db = "costsummary";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "CREATE DATABASE IF NOT EXISTS costsummary";
            $conn->execute($sql);
            echo "Connected successfully";
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public static function createDB() {
        try {
            $host = self::$host;
            $sql = "CREATE DATABASE IF NOT EXISTS costsummary";
            $conn = new PDO("mysql:host=$host", $username, $password);
            $conn->execute($sql);
            $conn = null;
        } catch(PDOException $error) {
            echo $e->message;
        }
    }


    public function close() {
        self::$conn = null;
    }

}
<?php
$simple_data = [
    [
        "id" => "1",
        "title" => "Post One",
        "body" =>  "This is post one",
    ],
    [
        "id" => "2",
        "title" => "Post Two",
        "body" =>  "This is post two",
    ]
];
echo json_encode($simple_data);
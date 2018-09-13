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
if($_GET):
    echo json_encode(['data' => 
                            [$simple_data, $_GET['id']]
                    ]);
endif;
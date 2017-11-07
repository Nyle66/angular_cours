<?php
header("Access-Control-Allow-Origin: *");
$array = [
    [
        "id" => 1,
        "title" => "Test 1",
        "name" => "name 1",
        "adress" => "adress 1",
        "content" => "content 1"
    ],
    [
        "id" => 2,
        "title" => "Test 2",
        "name" => "name 2",
        "adress" => "adress 2",
        "content" => "name 2"
    ],
    [
        "id" => 3,
        "title" => "Test 3",
        "name" => "name 3",
        "adress" => "adress 3",
        "content" => "content 3"
    ]
];
echo json_encode($array);
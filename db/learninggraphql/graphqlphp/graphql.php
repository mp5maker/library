<?php
require_once "vendor/autoload.php";
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\GraphQL;
use GraphQL\Type\Schema;

$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'echo' => [
            'type' => Type::string(),
            'args' => [
                'message' => Type::nonNull(Type::string()),
            ],
            'resolve' => function ($root, $args) {
                return $root['prefix'] . $args['message'];
            }
        ],
    ],
]);

$schema = new Schema([
    'query' => $queryType
]);

$rawInput = file_get_contents('db.json');
$input = json_decode($rawInput, true);
var_dump($input);
// $query = $input['query'];
// $variableValues = isset($input['variables']) ? $input['variables'] : null;

// try {
//     $rootValue = ['prefix' => 'You said: '];
//     $result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variableValues);
//     $output = $result->toArray();
// } catch (\Exception $e) {
//     $output = [
//         'errors' => [
//             [
//                 'message' => $e->getMessage()
//             ]
//         ]
//     ];
// }
// header('Content-Type: application/json');
// echo json_encode($output);
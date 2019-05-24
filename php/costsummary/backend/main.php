<?php
require_once '../vendor/autoload.php';
use RedBeanPHP\Facade as R;

R::setup('sqlite:/tmp/dbfile.db');
R::useFeatureSet('novice/latest');

// $post = R::dispense('post');
// $post->text = 'Hello World';
// $id = R::store($post);

$post = R::load('post', 1);
var_dump($post);
// R::trash( $post ); //delete
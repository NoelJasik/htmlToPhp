<?php

require_once 'vendor/autoload.php';

use Medoo\Medoo;
use Twig\Environment;
use Twig\Loader\ArrayLoader;
use Twig\Loader\FilesystemLoader;

// Connect the database.
$database = new Medoo([
    'type' => 'mysql',
    'host' => 'localhost',
    'database' => 'gameslist',
    'username' => 'root',
    'password' => ''
]);

$data = $database->select("gamelist", '*');

$loader = new FilesystemLoader('twig');
$twig = new Environment($loader);
echo $twig->render('index.html.twig', [
    "data" => $data
]);



?>

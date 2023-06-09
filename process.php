<?php

$errors = [];
$data = [];


$users = [["id" => 1, "name" => "Stepan", "email" => "step.rus.f@gmail.com"], ["id" => 1, "name" => "Kirill", "email" => "admin@admin.com"]];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['surname'])) {
    $errors['surname'] = 'Surname is required.';
}

foreach ($users as $user){
    if ($user['email'] == $_POST['email']){
        $errors['email'] = 'This email is already in use';
    }
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}
if (!str_contains($_POST['email'], "@")) {
    $errors['email'] = 'Email is invalid';
}

if (empty($_POST['password'])) {
    $errors['password'] = 'Password is required.';
}

if ($_POST['password'] != $_POST['repeatPassword']) {
    $errors['repeatPassword'] = "Passwords do not match";
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
    $log = "ERROR: " . date('Y-m-d H:i:s') . ' ' . print_r($data['errors'],true);
    file_put_contents(__DIR__ . '/log.txt',$log,FILE_APPEND | LOCK_EX);
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
    $log = "SUCCESS: " . date('Y-m-d H:i:s') . ' ' . print_r($data['success'],true);
    file_put_contents(__DIR__ . '/log.txt',$log,FILE_APPEND | LOCK_EX);
}

echo json_encode($data);
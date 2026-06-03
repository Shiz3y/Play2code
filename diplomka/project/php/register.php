<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $avatar = 'default.png';

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)");
        $stmt->execute([$username, $email, $password, $avatar]);
        
        $user_id = $pdo->lastInsertId();
        
        $init = $pdo->prepare("INSERT INTO progress (user_id, language, level_id, status) VALUES (?, 'python', 1, 'active')");
        $init->execute([$user_id]);

        $_SESSION['user_id'] = $user_id;
        $_SESSION['username'] = $username;
        $_SESSION['avatar'] = $avatar;
        $_SESSION['xp'] = 0;
        
        header("Location: ../index.html");
    } catch (Exception $e) {
        echo "<script>alert('Ошибка: " . $e->getMessage() . "'); window.location.href='../register.html';</script>";
    }
}
?>
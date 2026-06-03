<?php
require 'db.php';
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['logged_in' => false]);
    exit;
}

$user_id = $_SESSION['user_id'];
$stmt = $pdo->prepare("SELECT username, xp, avatar FROM users WHERE id = ?");
$stmt->execute([$user_id]);
$user = $stmt->fetch();

if ($user) {
    echo json_encode([
        'logged_in' => true,
        'username' => $user['username'],
        'xp' => $user['xp'] ?? 0,
        'avatar' => $user['avatar'] ?? 'default.png'
    ]);
} else {
    echo json_encode(['logged_in' => false]);
}
?>
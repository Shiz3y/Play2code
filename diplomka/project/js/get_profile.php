<?php
require 'db.php';
if (isset($_SESSION['user_id'])) {
    $stmt = $pdo->prepare("SELECT username, xp, avatar FROM users WHERE id = ?");
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch();
    echo json_encode([
        'logged_in' => true,
        'username' => $user['username'],
        'xp' => $user['xp'],
        'avatar' => $user['avatar']
    ]);
} else {
    echo json_encode(['logged_in' => false]);
}
?>
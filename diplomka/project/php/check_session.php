<?php
require 'db.php';

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'logged_in' => true,
        'username' => $_SESSION['username'],
        'avatar' => $_SESSION['avatar'] ?? 'default.png',
        'xp' => $_SESSION['xp'] ?? 0
    ]);
} else {
    echo json_encode(['logged_in' => false]);
}
?>
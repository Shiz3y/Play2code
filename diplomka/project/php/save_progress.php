<?php
require 'db.php';
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$user_id = $_SESSION['user_id'];
$lang = $data['language'] ?? 'python';
$level = $data['level'] ?? 1;
$xp_gain = $data['xp'] ?? 50;

try {
    $stmt = $pdo->prepare("UPDATE progress SET status = 'completed', stars = 3 WHERE user_id = ? AND language = ? AND level_id = ?");
    $stmt->execute([$user_id, $lang, $level]);

    $next_level = $level + 1;
    $check = $pdo->prepare("SELECT id FROM progress WHERE user_id = ? AND language = ? AND level_id = ?");
    $check->execute([$user_id, $lang, $next_level]);
    
    if (!$check->fetch()) {
        $insert = $pdo->prepare("INSERT INTO progress (user_id, language, level_id, status) VALUES (?, ?, ?, 'active')");
        $insert->execute([$user_id, $lang, $next_level]);
    }

    $updateXp = $pdo->prepare("UPDATE users SET xp = xp + ? WHERE id = ?");
    $updateXp->execute([$xp_gain, $user_id]);
    $_SESSION['xp'] += $xp_gain;

    echo json_encode(['success' => true, 'new_xp' => $_SESSION['xp']]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
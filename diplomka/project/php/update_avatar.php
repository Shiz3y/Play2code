<?php
require 'db.php';
checkAuth();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['avatar'])) {
    $user_id = $_SESSION['user_id'];
    $uploadDir = '../assets/images/avatars/';
    
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileExt = strtolower(pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION));
    $allowed = ['jpg', 'jpeg', 'png', 'gif'];
    
    if (in_array($fileExt, $allowed)) {
        $newFileName = 'user_' . $user_id . '.' . $fileExt;
        $targetPath = $uploadDir . $newFileName;
        
        if (move_uploaded_file($_FILES['avatar']['tmp_name'], $targetPath)) {
            $stmt = $pdo->prepare("UPDATE users SET avatar = ? WHERE id = ?");
            $stmt->execute([$newFileName, $user_id]);
            $_SESSION['avatar'] = $newFileName;
            
            header("Location: ../profile.html?success=1");
        } else {
            echo "Ошибка загрузки файла";
        }
    } else {
        echo "Недопустимый формат файла";
    }
}
?>
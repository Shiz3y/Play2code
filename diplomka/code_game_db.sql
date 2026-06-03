-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 13 2026 г., 11:56
-- Версия сервера: 10.8.4-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `code_game_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `game_questions`
--

CREATE TABLE `game_questions` (
  `id` int(11) NOT NULL,
  `language` varchar(20) NOT NULL,
  `question_text` varchar(255) NOT NULL,
  `correct_answer` varchar(100) NOT NULL,
  `difficulty` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `game_questions`
--

INSERT INTO `game_questions` (`id`, `language`, `question_text`, `correct_answer`, `difficulty`) VALUES
(1, 'python', 'Как вывести текст на экран?', 'print', 1),
(2, 'python', 'Ключевое слово для условия если?', 'if', 1),
(3, 'python', 'Ключевое слово для условия иначе?', 'else', 1),
(4, 'python', 'Цикл для перебора последовательности?', 'for', 2),
(5, 'python', 'Цикл пока истинно условие?', 'while', 2),
(6, 'python', 'Объявление функции?', 'def', 2),
(7, 'python', 'Возврат значения из функции?', 'return', 2),
(8, 'python', 'Тип данных список?', 'list', 1),
(9, 'python', 'Тип данных строка?', 'str', 1),
(10, 'python', 'Тип данных целое число?', 'int', 1),
(11, 'python', 'Логический тип данных?', 'bool', 1),
(12, 'python', 'Значение пустоты?', 'none', 1),
(13, 'python', 'Импорт библиотеки?', 'import', 2),
(14, 'python', 'Прерывание цикла?', 'break', 2),
(15, 'python', 'Пропуск итерации?', 'continue', 2),
(16, 'html', 'Тег для самого крупного заголовка?', 'h1', 1),
(17, 'html', 'Тег для абзаца текста?', 'p', 1),
(18, 'html', 'Тег для создания ссылки?', 'a', 1),
(19, 'html', 'Тег для вставки изображения?', 'img', 1),
(20, 'html', 'Тег для нумерованного списка?', 'ol', 2),
(21, 'html', 'Тег для маркированного списка?', 'ul', 2),
(22, 'html', 'Тег элемента списка?', 'li', 1),
(23, 'html', 'Тег для разделения строки?', 'br', 1),
(24, 'html', 'Тег для горизонтальной линии?', 'hr', 1),
(25, 'html', 'Тег для жирного текста?', 'b', 1),
(26, 'html', 'Тег для курсива?', 'i', 1),
(27, 'html', 'Тег основного контейнера?', 'div', 1),
(28, 'html', 'Атрибут для ссылки картинки?', 'src', 2),
(29, 'html', 'Атрибут для адреса ссылки?', 'href', 2),
(30, 'html', 'Тег для формы ввода?', 'form', 2),
(31, 'java', 'Ключевое слово для создания класса?', 'class', 1),
(32, 'java', 'Название главного метода?', 'main', 1),
(33, 'java', 'Модификатор доступа публичный?', 'public', 1),
(34, 'java', 'Модификатор статический?', 'static', 1),
(35, 'java', 'Тип данных не возвращает ничего?', 'void', 1),
(36, 'java', 'Вывод текста на консоль метод?', 'println', 1),
(37, 'java', 'Основной класс системы вывода?', 'system', 2),
(38, 'java', 'Переменная для целых чисел?', 'int', 1),
(39, 'java', 'Переменная для дробных чисел?', 'double', 1),
(40, 'java', 'Переменная для одного символа?', 'char', 1),
(41, 'java', 'Логический тип данных?', 'boolean', 1),
(42, 'java', 'Текстовый тип данных?', 'string', 1),
(43, 'java', 'Создание нового объекта?', 'new', 2),
(44, 'java', 'Условие если?', 'if', 1),
(45, 'java', 'Условие иначе?', 'else', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `progress`
--

CREATE TABLE `progress` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `language` varchar(20) NOT NULL,
  `level_id` int(11) NOT NULL,
  `status` enum('locked','active','completed') DEFAULT 'locked',
  `stars` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `progress`
--

INSERT INTO `progress` (`id`, `user_id`, `language`, `level_id`, `status`, `stars`) VALUES
(1, 1, 'python', 1, 'active', 0),
(2, 2, 'python', 1, 'active', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT 'default.png',
  `xp` int(11) DEFAULT 0,
  `level` int(11) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `avatar`, `xp`, `level`, `created_at`) VALUES
(1, '123', '123@mail.ru', '$2y$10$mRnV.ObKyZ5zHQULUCGjuONSVLsBzm1/rdcbI8A0MJQJD7neEvc2u', 'default.png', 0, 1, '2026-03-13 08:41:31'),
(2, 'test', 'test@mail.ru', '$2y$10$6HI5iGvUGTZC0ao54lVak.ZBl0eu318PdJCYoijCgtqJrLCPOvTnW', 'default.png', 0, 1, '2026-03-13 08:44:15');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `game_questions`
--
ALTER TABLE `game_questions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_level` (`user_id`,`language`,`level_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `game_questions`
--
ALTER TABLE `game_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT для таблицы `progress`
--
ALTER TABLE `progress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

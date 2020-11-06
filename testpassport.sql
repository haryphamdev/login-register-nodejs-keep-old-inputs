-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2020 at 03:45 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testpassport`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `display_name` varchar(64) NOT NULL,
  `birthday` date NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `full_name`, `display_name`, `birthday`, `email_address`, `password`, `created_at`, `updated_at`) VALUES
(1, 'erin', 'user1', '0000-00-00', 'stn78087@eoopy.com', '$2a$10$6ExRYmzgtF6Yi8Tn9FxoQOLcQDIQUF6CgTXnwOhfFSN406zRpW1M.', '2020-10-31 06:56:39', NULL),
(2, 'laine', 'user2', '0000-00-00', 'qmm00061@eoopy.com', '$2a$10$qdcf7Cfh9Sdj4b44xSvqXehd5B8zVnGdxteMlt9HQzUB.XN6bDSau', '2020-10-31 08:07:24', NULL),
(3, 'mon', 'nicahimee', '0000-00-00', 'munikawaii85@yahoo.com', '$2a$10$gduSa8fxmlj8M3iORqFD2OfTHWI7RrA40C7FytBTZkg8SqF5ltbmq', '2020-10-31 09:16:35', NULL),
(6, 'moon', 'star', '0000-00-00', 'caichii@yahoo.com', '$2a$10$wKdGpeOXgHOaUUTEjNOWz.HplqbeRbkPAxv76BFCwtPZrdDwMzdZ.', '2020-10-31 10:19:28', NULL),
(7, 'apple', 'mango', '0000-00-00', 'uwu@yahoo.com', '123456', '2020-10-31 10:24:21', NULL),
(8, 'monicaa', 'nicaa', '0000-00-00', 'uwu1@yahoo.com', '123456', '2020-10-31 10:24:41', NULL),
(13, 'mbb', 'mbbbb', '0000-00-00', 'hehehe@yahoo.com', '$2a$10$i4iA91IXznWtnYCqQSvvOevjsNdEvVAnnD.92VAp9v9115N5xLQUC', '2020-11-01 12:18:22', NULL),
(15, 'earl', 'earlalo', '2020-11-20', 'earlalo@yahoo.com', '$2a$10$2yii08FIL0q5GxbDETuDBeflBp3UM2PjhFzk05Uj3bqommJGGKiJq', '2020-11-02 07:44:40', NULL),
(16, 'hahaha', 'hahaha', '2020-11-18', 'qwe@yahoo.com', '$2a$10$JAJSt4ZUiJe0Bwqd1hvzcuaRcCQRz3fGjk.M2rVQBknWXcBRFHPXu', '2020-11-02 08:38:45', NULL),
(17, 'hahahaha', 'hahahaha', '2020-11-19', 'qwe1@yahoo.com', '$2a$10$8dnoCoM7cDlIgd33IybPZON3lCw1A63ESvwCRdW5Xj/BtGTTUXRDW', '2020-11-02 08:42:58', NULL),
(18, 'hat', 'dog', '2007-11-01', 'dog@yahoo.com', '$2a$10$NLJBAJTljd82Yx5o8tUv4uXJi6tcGchJDBQVdDLR9xZ00wRv4xdoG', '2020-11-06 10:13:26', NULL),
(19, 'arfarf', 'arf arf', '2007-11-05', 'fikosi43761@99mimpi.com', '$2a$10$NzAVYfsQpOVjyVhwgTfpbukqpjQKXUY.pykhcJjPR9gGHAf42NH0.', '2020-11-06 10:14:38', NULL),
(20, 'aaaaaaa', 'aaa_aaaaa', '2007-11-01', 'aaaa@yahoo.com', '$2a$10$6MMvL/aEka6TAbYAiRTcj.K45MtRvg3oaGrbxjnbQRZLtVewa2dZ.', '2020-11-06 10:19:45', NULL),
(21, 'nica bells', 'nicachii', '2007-11-01', 'nicachii111@yahoo.com', '$2a$10$7hByRf6INnj.0C5efnwhterzZq9BRdnfimlawQONoXxe9cjjykxGW', '2020-11-06 10:42:49', NULL),
(25, 'qwek', 'qwekk', '2007-10-31', 'fikosi437611@99mimpi.com', '$2a$10$u2mg/X6SjcO04ou3qMDE8OrCfM/.6RM53Tnga1hG0v6K0IOLuo4Ve', '2020-11-06 12:04:59', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

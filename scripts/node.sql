-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2021 a las 05:01:03
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `estado`, `createdAt`, `updatedAt`, `password`, `rol`) VALUES
(1, 'Nestor', 'nestor@gmail.com', 1, NULL, '2021-10-21', '$2a$10$qngiaG3Gew/hKtgB.W7xAe9hkweewwiANwOB5T/ZUHK5JLGMPO7m2', 'USER'),
(2, 'Rafael', 'rafael@gmail.com', 1, NULL, NULL, NULL, 'USER'),
(3, 'Neftali', 'neftali@gmail.com', 0, NULL, NULL, '12333444567889', 'USER'),
(7, 'melissa', 'meliss@gmail.com', 1, '2021-10-18', '2021-10-18', NULL, 'USER'),
(8, 'pedro', 'nuevo@gmail.com', 1, '2021-10-19', '2021-10-19', '123456', 'USER'),
(9, 'julian', 'julian@gmail.com', 1, '2021-10-19', '2021-10-19', '123456', 'USER'),
(10, 'jose', 'jose@gmail.com', 1, '2021-10-20', '2021-10-20', '$2a$10$ZVr2Sng1wpqBc11ZdbNux.BNXLtD9oCQtSJdU0KrGyEe5IZGE2lFq', 'ADMIN'),
(11, 'daniel', 'daniel@gmail.com', 1, '2021-10-20', '2021-10-21', '$2a$10$h2cUs5DtkacQLBSKFU226efH6eUZBHxXD9KsBaqBf9X7z25sgfb.6', 'USER'),
(12, 'daniela', 'daniela@gmail.com', 0, '2021-10-20', '2021-10-20', '$2a$10$gUdmnCo72Lyh18jAgo5cwupEPPyclcEc3xEQ/1BHIlnY65dGdeQC6', 'USER'),
(13, 'dan', 'dan@gmail.com', 1, '2021-10-20', '2021-10-20', '$2a$10$wsRM93sgbcCiYsArGzhSQe.Ae22/RGiepKFh9LxuMvrVJYKywVnwC', 'USER'),
(14, 'victor', 'victor@gmail.com', 1, '2021-10-20', '2021-10-20', '$2a$10$9nFOidNN9W6HsOYMJB1ZxO0n2YPqmd4nBjRkpzV2zjwVZImFrlvde', 'USER');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email_unique` (`correo`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

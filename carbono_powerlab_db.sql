-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-04-2026 a las 16:48:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carbono_powerlab_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(150) DEFAULT NULL,
  `asunto` varchar(150) DEFAULT NULL,
  `mensaje` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `nombre`, `correo`, `asunto`, `mensaje`) VALUES
(1, '', 'malcorreo', '', ''),
(4, 'RAUL', 'gustavo@big5hats.local', 'HOLA', 'HOLAAAA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria`, `marca`, `precio`, `stock`, `imagen`, `descripcion`, `disponible`) VALUES
(2, 'Creatina Monohidratada', 'Suplementos', 'Universal Nutrition', 450.00, 35, 'https://tse3.mm.bing.net/th/id/OIP.MN9hou9cgPjLPiLNnTDaPgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', 'Creatina pura micronizada para fuerza y rendimiento.', 1),
(3, 'Pre Workout C4', 'Pre-entreno', 'Cellucor', 680.00, 18, 'https://tse2.mm.bing.net/th/id/OIP.9Gl7QY3Ty4-8IfpT4U6_RQHaGe?rs=1&pid=ImgDetMain&o=7&rm=3', 'Pre entreno con cafeina para energia y enfoque.', 1),
(4, 'BCAA 2:1:1', 'Aminoacidos', 'Scivation', 520.00, 22, 'https://tse1.mm.bing.net/th/id/OIP.4IbhMf3RSJy9x46Ivf8QqQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', 'Aminoacidos ramificados para apoyo en recuperacion.', 1),
(5, 'Shaker Deportivo 700ml', 'Accesorios', 'SmartShake', 180.00, 40, 'https://tse3.mm.bing.net/th/id/OIP.SzHHzgxL8grtk-hoTG_7jQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3', 'Shaker resistente con compartimento para suplemento.', 1),
(6, 'Guantes para Gym Pro Grip', 'Accesorios', 'Harbinger', 320.00, 25, 'https://tse1.mm.bing.net/th/id/OIP.bjtblMDXABduNqg7NmrUEAHaGD?rs=1&pid=ImgDetMain&o=7&rm=3', 'Guantes con soporte de muneca y agarre antideslizante.', 1),
(7, 'Cinturon de Levantamiento', 'Accesorios', 'RDX', 790.00, 12, 'https://www.tradeinn.com/f/13938/139383947/rdx-sports-cinturon-levantamiento-peso-rx1.jpg', 'Cinturon de cuero para soporte lumbar en cargas pesadas.', 1),
(8, 'Proteina Vegana Plant Power', 'Suplementos', 'MyProtein', 980.00, 16, 'https://http2.mlstatic.com/D_NQ_NP_622026-MLU74144722532_012024-O.webp', 'Proteina vegetal blend sin lactosa ni gluten.', 1),
(9, 'Multivitaminico Daily Fit', 'Vitaminas', 'GNC', 390.00, 30, 'https://tse3.mm.bing.net/th/id/OIP.51OR8gzH-q9qcmd-sb4rYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', 'Complejo multivitaminico para soporte general diario.', 1),
(10, 'Termogenico Extreme Burn', 'Control de peso', 'Muscletech', 610.00, 14, 'https://tse1.mm.bing.net/th/id/OIP.HQUyF5t6O4pJ-7BWB_5cngHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', 'Termogenico para apoyo en quema de grasa y energia.', 1),
(11, 'Gold Standard Isolated', 'Suplementos', 'Optimum Nutrition', 999.00, 5, 'https://m.media-amazon.com/images/I/71BFejouWCL._AC_SX679_.jpg', 'Optimum Nutrition es la marca de Nutrición Deportiva #1 del Mundo. ', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

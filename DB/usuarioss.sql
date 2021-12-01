-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2021 a las 03:46:06
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `triviasano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `correo` varchar(50) NOT NULL,
  `contrasenna` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(120) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `sexo` tinyint(1) NOT NULL,
  `estatura` int(230) NOT NULL,
  `peso` float(255,0) NOT NULL,
  `enfermedadCardiaca` varchar(120) DEFAULT NULL,
  `enfermedadRespiratoria` varchar(120) DEFAULT NULL,
  `cirugia` varchar(120) DEFAULT NULL,
  `alergia` varchar(120) DEFAULT NULL,
  `enfermedadDegenerativa` varchar(120) DEFAULT NULL,
  `futbol` tinyint(1) NOT NULL,
  `baloncesto` tinyint(1) NOT NULL,
  `voleyball` tinyint(1) NOT NULL,
  `salsa` tinyint(1) NOT NULL,
  `zumba` tinyint(1) NOT NULL,
  `folklor` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`correo`, `contrasenna`, `nombre`, `edad`, `fechaNacimiento`, `sexo`, `estatura`, `peso`, `enfermedadCardiaca`, `enfermedadRespiratoria`, `cirugia`, `alergia`, `enfermedadDegenerativa`, `futbol`, `baloncesto`, `voleyball`, `salsa`, `zumba`, `folklor`) VALUES
('carlos@pucv.cl', '123', 'Carlos', 22, '0000-00-00', 0, 179, 60, 'si', 'si', 'si', 'si', 'si', 1, 1, 1, 1, 1, 1),
('dexter@pucv.cl', '123', 'Dexter Freyggang', 30, '0000-00-00', 0, 164, 60, 'si', 'si', 'si', 'si', 'si', 1, 1, 1, 1, 1, 1),
('joaking@pucv.cl', '123', 'joaco', 21, '0000-00-00', 0, 165, 60, 'si', 'si', 'no', 'no', 'si', 1, 1, 0, 0, 1, 1),
('nacho@pucv.cl', '123', 'Ignacio', 22, '0000-00-00', 0, 178, 60, 'si', 'si', 'si', 'si', 'si', 1, 1, 1, 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`correo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

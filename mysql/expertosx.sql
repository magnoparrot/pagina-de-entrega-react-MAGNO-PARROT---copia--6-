-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-01-2023 a las 15:47:44
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `expertosx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'La RTX 4090 está que arde: el cable de alimentación de la GPU de Nvidia se quema y es culpa de no caber en el PC', 'Con las primeras unidades de la RTX 4090 en el mercado, los problemas han comenzado a surgir. Varios usuarios en Reddit han mostrado que sus GPU presentan quemaduras en el cable de alimentación 12VHPWR, lo cual deriva en que el componente se derrita y el adaptador también.', 'Cabe señalar que la Serie RTX 40 incorpora este cable que está diseñado para las fuentes de alimentación ATX 3.0, pero lo más común es usar unos 4 cables de 8 pines. Por ello, la propia Nvidia ofrece unos adaptadores para no tener que cambiar toda la fuente.\r\n\r\nSon 600W de potencia los que logra el cable 12VHPWR y, según cablemod, la raíz del problema radica en doblar demasiado los cables cuando están muy cerca del conector, lo cual \"podría provocar que algunos de los terminales se suelten o se desalineen dentro del propio conector\". La solución, por ahora, es la de lograr una \"distancia mínima de 35 mm desde el conector antes de que se produzcan dobleces\".\r\n\r\nDe no hacerlo, se incrementan las posibilidades de sobrecalentamiento derivando en las quemaduras. Tarea difícil de llevar a cabo teniendo en cuenta las mastodónticas dimensiones de la RTX 4090, la cual incluso necesita de un bastón de apoyo para caber en el PC. En cualquier caso, veremos cuál es la solución por la que opta Nvidia.', ''),
(2, 'La RTX 4090 está que arde: el cable de alimentación de la GPU de Nvidia se quema y es culpa de no caber en el PC', 'Con las primeras unidades de la RTX 4090 en el mercado, los problemas han comenzado a surgir. Varios usuarios en Reddit han mostrado que sus GPU presentan quemaduras en el cable de alimentación 12VHPWR, lo cual deriva en que el componente se derrita y el adaptador también.', 'Cabe señalar que la Serie RTX 40 incorpora este cable que está diseñado para las fuentes de alimentación ATX 3.0, pero lo más común es usar unos 4 cables de 8 pines. Por ello, la propia Nvidia ofrece unos adaptadores para no tener que cambiar toda la fuente.\r\n\r\nSon 600W de potencia los que logra el cable 12VHPWR y, según cablemod, la raíz del problema radica en doblar demasiado los cables cuando están muy cerca del conector, lo cual \"podría provocar que algunos de los terminales se suelten o se desalineen dentro del propio conector\". La solución, por ahora, es la de lograr una \"distancia mínima de 35 mm desde el conector antes de que se produzcan dobleces\".\r\n\r\nDe no hacerlo, se incrementan las posibilidades de sobrecalentamiento derivando en las quemaduras. Tarea difícil de llevar a cabo teniendo en cuenta las mastodónticas dimensiones de la RTX 4090, la cual incluso necesita de un bastón de apoyo para caber en el PC. En cualquier caso, veremos cuál es la solución por la que opta Nvidia.', ''),
(3, 'AMD vs. Intel: ¿cuál te conviene más?', 'Al igual que MacOS vs. Windows, la rivalidad AMD vs. Intel es un debate inacabable entre los entendidos de computación. Y ahora que AMD lanzó sus CPU Ryzen 7000, es hora de revisar la dinámica entre AMD e Intel en 2022. Ambas compañías tienen nuevas generaciones en proceso, ninguna de las cuales ha llegado a las tiendas todavía, por lo que aún hay mucho más en esta historia que se seguirá desarrollando.', 'En el pasado, las CPU AMD eran la mejor opción solo en las porciones económicas y de nivel de entrada del mercado, pero eso ocurría en 2019. Ahora, Intel en realidad ofrece un valor ligeramente mejor con precios más baratos en sus CPU Alder Lake de 12ª generación en general. Pero eso no significa que Intel esté perdiendo frente a AMD. De hecho, su Core i9-12900KS generalmente se considera la CPU más rápida que puede comprar.\r\n\r\nLos chips AMD o Intel más asequibles te costarán entre $40 y $60 dólares por un par de núcleos y velocidades de reloj de bajo consumo. Las mejores CPU de rango medio te costarán entre $200 y $350, mientras que una CPU superior para juegos tiene un precio que ronda los $600 dólares. Si deseas acelerar tareas intensivas como la edición y transcodificación de videos, puedes llegar a gastarte entre $600 y $1000 dólares.', ''),
(4, 'AMD vs. Intel: ¿cuál te conviene más?', 'Al igual que MacOS vs. Windows, la rivalidad AMD vs. Intel es un debate inacabable entre los entendidos de computación. Y ahora que AMD lanzó sus CPU Ryzen 7000, es hora de revisar la dinámica entre AMD e Intel en 2022. Ambas compañías tienen nuevas generaciones en proceso, ninguna de las cuales ha llegado a las tiendas todavía, por lo que aún hay mucho más en esta historia que se seguirá desarrollando.', 'En el pasado, las CPU AMD eran la mejor opción solo en las porciones económicas y de nivel de entrada del mercado, pero eso ocurría en 2019. Ahora, Intel en realidad ofrece un valor ligeramente mejor con precios más baratos en sus CPU Alder Lake de 12ª generación en general. Pero eso no significa que Intel esté perdiendo frente a AMD. De hecho, su Core i9-12900KS generalmente se considera la CPU más rápida que puede comprar.\r\n\r\nLos chips AMD o Intel más asequibles te costarán entre $40 y $60 dólares por un par de núcleos y velocidades de reloj de bajo consumo. Las mejores CPU de rango medio te costarán entre $200 y $350, mientras que una CPU superior para juegos tiene un precio que ronda los $600 dólares. Si deseas acelerar tareas intensivas como la edición y transcodificación de videos, puedes llegar a gastarte entre $600 y $1000 dólares.', ''),
(15, 'SI FUNCIONA', 'FUNCIONA ESTO', 'Y ESTO', 'rcgx2vkcfp8zu6ivg7lm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'magno', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'pepe', '111');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

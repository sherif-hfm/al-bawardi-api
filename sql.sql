-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.8.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table al-bawardi.funerals
CREATE TABLE IF NOT EXISTS `funerals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deadName` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `prayerId` int(11) DEFAULT NULL,
  `sexId` char(1) DEFAULT NULL,
  `purialPlaceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prayerId` (`prayerId`),
  KEY `sexId` (`sexId`),
  KEY `purialPlaceId` (`purialPlaceId`),
  CONSTRAINT `funerals_ibfk_1` FOREIGN KEY (`prayerId`) REFERENCES `prayers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `funerals_ibfk_2` FOREIGN KEY (`sexId`) REFERENCES `sexes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `funerals_ibfk_3` FOREIGN KEY (`purialPlaceId`) REFERENCES `purialplaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for procedure al-bawardi.getFuneral
DELIMITER //
CREATE PROCEDURE `getFuneral`(
	IN `p_date` DATE
)
BEGIN
SELECT prayerId,prayers.prayerName,
COUNT(CASE WHEN Funerals.sexId = 'M' THEN 0 END) AS 'M',
COUNT(CASE WHEN Funerals.sexId = 'F' THEN 0 END) AS 'F',
COUNT(CASE WHEN Funerals.sexId = 'B' THEN 0 END) AS 'B',
COUNT(CASE WHEN Funerals.sexId = 'G' THEN 0 END) AS 'G',
COUNT(*) AS 'Total'
FROM  Funerals,prayers
where
date=p_date 
and Funerals.prayerId=prayers.id
GROUP BY Funerals.prayerId,prayers.prayerName;
END//
DELIMITER ;

-- Dumping structure for table al-bawardi.prayers
CREATE TABLE IF NOT EXISTS `prayers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prayerName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

INSERT INTO `prayers` (`id`, `prayerName`) VALUES
(1, 'الفجر'),
(2, 'الظهر'),
(3, 'الجمعة'),
(4, 'العصر'),
(5, 'المغرب'),
(6, 'العشاء');

-- Data exporting was unselected.

-- Dumping structure for table al-bawardi.purialplaces
CREATE TABLE IF NOT EXISTS `purialplaces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `placeName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

INSERT INTO `purialplaces` (`id`, `placeName`) VALUES
(1, 'الدفن داخل الرياض'),
(2, ' الدفن خارج الرياض');

-- Data exporting was unselected.

-- Dumping structure for table al-bawardi.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table al-bawardi.sexes
CREATE TABLE IF NOT EXISTS `sexes` (
  `id` char(1) NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sexes` (`id`, `Name`) VALUES
('B', 'طفل'),
('F', 'امراة'),
('G', 'طفلة'),
('M', 'رجل');

-- Data exporting was unselected.

-- Dumping structure for table al-bawardi.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `loginErrors` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for view al-bawardi.v_funerals
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `v_funerals` (
	`date` DATE NOT NULL,
	`sexid` CHAR(1) NULL COLLATE 'utf8mb4_general_ci',
	`prayerId` INT(11) NULL,
	`total` BIGINT(21) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view al-bawardi.v_funerals
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `v_funerals`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `v_funerals` AS select `funerals`.`date` AS `date`,`funerals`.`sexId` AS `sexid`,`funerals`.`prayerId` AS `prayerId`,count(0) AS `total` from `funerals` group by `funerals`.`date`,`funerals`.`sexId`,`funerals`.`prayerId`;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

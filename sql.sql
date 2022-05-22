CREATE DATABASE  IF NOT EXISTS `al-bawardi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `al-bawardi`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: al-bawardi
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `funerals`
--

DROP TABLE IF EXISTS `funerals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funerals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `deadName` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `sexId` char(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `prayerId` int DEFAULT NULL,
  `purialplaceId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prayerId` (`prayerId`),
  KEY `purialplaces_fk_1_idx` (`purialplaceId`),
  KEY `sex_fk1_idx` (`sexId`),
  CONSTRAINT `funerals_ibfk_1` FOREIGN KEY (`prayerId`) REFERENCES `prayers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `purialplaces_fk_1` FOREIGN KEY (`purialplaceId`) REFERENCES `purialplaces` (`id`),
  CONSTRAINT `sex_fk1` FOREIGN KEY (`sexId`) REFERENCES `sexes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prayers`
--

DROP TABLE IF EXISTS `prayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prayers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prayerName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `purialplaces`
--

DROP TABLE IF EXISTS `purialplaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purialplaces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `placeName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sexes`
--

DROP TABLE IF EXISTS `sexes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexes` (
  `id` char(1) NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `loginName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  `loginErrors` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `v_funerals`
--

DROP TABLE IF EXISTS `v_funerals`;
/*!50001 DROP VIEW IF EXISTS `v_funerals`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_funerals` AS SELECT 
 1 AS `date`,
 1 AS `sexid`,
 1 AS `prayerId`,
 1 AS `total`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `v_funerals`
--

/*!50001 DROP VIEW IF EXISTS `v_funerals`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_funerals` AS select `funerals`.`date` AS `date`,`funerals`.`sexId` AS `sexid`,`funerals`.`prayerId` AS `prayerId`,count(0) AS `total` from `funerals` group by `funerals`.`date`,`funerals`.`sexId`,`funerals`.`prayerId` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-22 10:33:58

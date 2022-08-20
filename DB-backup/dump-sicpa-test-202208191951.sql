-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sicpa-test
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creado_fecha` datetime DEFAULT NULL,
  `creado_por` varchar(60) DEFAULT NULL,
  `descripcion` varchar(60) NOT NULL,
  `estado` varchar(60) NOT NULL,
  `modificado_fecha` datetime DEFAULT NULL,
  `modificado_por` varchar(60) DEFAULT NULL,
  `nombre` varchar(60) NOT NULL,
  `telefono` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (5,NULL,NULL,'TI-System','activo',NULL,NULL,'Sistemas','4401'),(6,NULL,NULL,'Departamento de Contabilidad','activo',NULL,NULL,'Contabilidad','4402');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(60) NOT NULL,
  `edad` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `estado` varchar(60) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `posicion` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_j9xgmd0ya5jmus09o0b8pqrpb` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Guadalupe',35,'vguadalupe@gmail.com','rol','Adriánn','developer'),(2,'Perez',33,'luis@mail.com','Rol ','Luis','developer');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enterprises`
--

DROP TABLE IF EXISTS `enterprises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enterprises` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creado_fecha` datetime DEFAULT NULL,
  `creado_por` varchar(60) DEFAULT NULL,
  `direccion` varchar(60) NOT NULL,
  `estado` varchar(60) NOT NULL,
  `modificado_fecha` datetime DEFAULT NULL,
  `modificado_por` varchar(60) DEFAULT NULL,
  `nombre` varchar(60) NOT NULL,
  `telefono` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enterprises`
--

LOCK TABLES `enterprises` WRITE;
/*!40000 ALTER TABLE `enterprises` DISABLE KEYS */;
INSERT INTO `enterprises` VALUES (1,NULL,NULL,'el telegrafo','activo',NULL,NULL,'movistar','0255663322'),(2,NULL,NULL,'6 de diciembre','activa',NULL,NULL,'IBM','0255662299'),(3,NULL,NULL,'ofelia','inactivo',NULL,NULL,'SistemasOG','2255774488');
/*!40000 ALTER TABLE `enterprises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sicpa-test'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19 19:51:47

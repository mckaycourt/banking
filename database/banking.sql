-- MySQL dump 10.13  Distrib 5.7.21, for osx10.13 (x86_64)
--
-- Host: 127.0.0.1    Database: banking
-- ------------------------------------------------------
-- Server version	5.7.21

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
-- Table structure for table `transaction`
--

CREATE DATABASE banking;

USE banking;

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `Date` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Debit` double DEFAULT NULL,
  `Credit` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES ('2019-03-31','WINGERS PROVO PROVO UT',9.18,''),('2019-03-30','TEPANYAKI OF LEHI LEHI UT',35.2,''),('2019-03-30','GRUBHUBRUMBIISLANDGRI GRUBHUB.COM NY',13.56,''),('2019-03-29','DRAGON STAR HEBER UT',48.97,''),('2019-03-29','Kindle Svcs*MW8LI65Q0 866-321-8851 WA',8.06,''),('2019-03-28','SQ *J DAWGS Provo UT',4,''),('2019-03-27','BRICK OVEN PROVO UT',5.3,''),('2019-03-27','COSTCO WHSE #0484 OREM UT',6.78,''),('2019-03-27','COSTCO WHSE #0484 OREM UT',3.22,''),('2019-03-26','SEVEN BROTHERS PROVO UT',9.71,''),('2019-03-26','TEXAS ROADHOUSE 2284 OREM UT',11.85,''),('2019-03-26','FIREHOUSE SUBS #10 801-971-1473 UT',10.78,''),('2019-03-25','WENDYS #6076 PROVO UT',4.31,''),('2019-03-25','AMZN Mktp US*MW4J69AL2 Amzn.com/billWA',12.49,''),('2019-03-24','Amazon.com*MW7US7X41 Amzn.com/billWA',13.07,''),('2019-03-23','JCWS RESTAURANT PROVO PROVO UT',10.02,''),('2019-03-22','RUMBI ISLAND GRILL - PROVPROVO UT',15.09,''),('2019-03-22','IN N OUT BURGER 235 OREM UT',2.64,''),('2019-03-21','PANDA EXPRESS #724 PROVO UT',8.2,''),('2019-03-20','APL*ITUNES.COM/BILL 866-712-7753 CA',4.26,''),('2019-03-19','WENDYS #6076 PROVO UT',5.38,''),('2019-03-19','BRICK OVEN - PROVO STRIPE.COM CA',15.9,''),('2019-03-19','NOODLES & CO WEB 716 olo.com UT',11.32,''),('2019-03-16','PROPER BURGER SALT LAKE CITUT',9.76,''),('2019-03-16','COSTCO WHSE #0484 OREM UT',10.17,''),('2019-03-16','COSTCO GAS #0484 OREM UT',21.98,''),('2019-03-15','TACO AMIGO OREM OREM UT',16.02,''),('2019-03-15','SMASHBURGER #1390 LEHI UT',10.11,''),('2019-03-13','WENDYS #6076 PROVO UT',4.31,''),('2019-03-13','KNEADERS RIVERWOODS PROVO UT',3.22,''),('2019-03-13','KNEADERS RIVERWOODS PROVO UT',6.46,''),('2019-03-12','CULVERS OF OREM #5 OREM UT',8.1,''),('2019-03-12','RUMBI ISLAND GRILL - PROVPROVO UT',15.09,''),('2019-03-12','MACEY\'S INC PROVO 135-632-168 UT',1.64,''),('2019-03-11','TEXAS ROADHOUSE 2284 OREM UT',10.7,''),('2019-03-10','OLIVE GARDEN #00017814 AMERICAN FORKUT',48.05,''),('2019-03-08','TUCANOS BRAZILIAN GRIL PROVO UT',64.82,''),('2019-03-07','COSTCO GAS #0484 OREM UT',22.49,''),('2019-03-07','FIVE GUYS UT 411 QSR OREM UT',7.22,''),('2019-03-07','QUICK QUACK 502 888-772-2792 UT',19.98,''),('2019-03-06','WINGERS OREM OREM UT',12.4,''),('2019-03-06','AMZN MKTP US*MI1TT46J2 AMAMZN.COM/BILLWA',32.89,''),('2019-03-05','COSTCO WHSE #0484 OREM UT',3.24,''),('2019-03-05','WENDYS #6076 PROVO UT',2.89,''),('2019-03-05','Kindle Svcs*MI9LI6RG1 866-321-8851 WA',9.05,''),('2019-03-02','WINGERS OREM OREM UT',24.49,''),('2019-03-01','BRICK OVEN - PROVO STRIPE.COM CA',14.55,''),('2019-02-28','FAT JACKS BURGER EMPOR 724-2831878 UT',14.01,''),('2019-02-28','WENDYS #6076 PROVO UT',5.38,''),('2019-02-27','COSTCO WHSE #0484 OREM UT',1.62,''),('2019-02-26','TACO AMIGO OREM OREM UT',8.6,''),('2019-02-23','SMASHBURGER #1057 OREM UT',12.38,''),('2019-02-23','COSTCO WHSE #0484 OREM UT',1.62,''),('2019-02-23','COSTCO GAS #0484 OREM UT',20.75,''),('2019-02-23','TEXAS ROADHOUSE 2284 OREM UT',11.85,''),('2019-02-20','JCWS RESTAURANT PROVO PROVO UT',13.89,''),('2019-02-20','APPLEBEES OREM99591778 OREM UT',14.63,''),('2019-02-20','APL*ITUNES.COM/BILL 866-712-7753 CA',4.26,''),('2019-02-19','TST* MALAWI S PIZZA - PROPROVO UT',5.66,''),('2019-02-19','USA*HANSEN VENDING OREM UT',1,''),('2019-02-18','WENDYS #6076 PROVO UT',4.31,''),('2019-02-16','COSTCO WHSE #0484 OREM UT',9.24,''),('2019-02-16','WENDYS #6076 PROVO UT',5.38,''),('2019-02-16','ZAXBY\'S #47608 CEDAR CITY UT',9.16,''),('2019-02-14','BRICK OVEN - PROVO STRIPE.COM CA',14.55,''),('2019-02-12','TUCANOS BRAZILIAN GRIL PROVO UT',36.04,''),('2019-02-12','LITTLE CAESARS 003 OREM UT',5.39,''),('2019-02-11','WENDYS #3540 OREM UT',0.18,''),('2019-02-10','CHEESECAKE CITY CREEK SALT LAKE CITUT',23,''),('2019-02-06','WINGERS OREM OREM UT',12.4,''),('2019-02-05','COSTCO WHSE #0733 LEHI UT',1.62,''),('2019-02-05','COSTCO GAS #0733 LEHI UT',11.91,''),('2019-02-05','QUICK QUACK 502 888-772-2792 UT',19.98,''),('2019-02-02','JCWS RESTAURANT PROVO PROVO UT',7.86,''),('2019-02-02','TEXAS ROADHOUSE 2284 OREM UT',15,''),('2019-02-01','BRICK OVEN PROVO UT',10.07,''),('2019-01-30','CUBBY\'S - PROVO PROVO UT',6.99,''),('2019-01-29','WINGERS OREM OREM UT',11.25,''),('2019-01-29','COSTCO GAS #0484 OREM UT',21.34,''),('2019-01-29','JERSEY MIKES 42006 OREM UT',15.05,''),('2019-01-27','STREET TACOS DON JOAQU PROVO UT',6.46,''),('2019-01-26','JCWS RESTAURANT PROVO PROVO UT',10.02,''),('2019-01-26','TB #25390 PROVO UT',9.92,''),('2019-01-25','EXXONMOBIL 48228548 PROVO UT',4.41,''),('2019-01-22','JCWS RESTAURANT PROVO PROVO UT',7.54,''),('2019-01-22','JCWS RESTAURANT PROVO PROVO UT',5.65,''),('2019-01-20','APL*ITUNES.COM/BILL 800-275-2273 CA',4.26,''),('2019-01-20','TEXAS ROADHOUSE 2257 SANDY UT',75.39,''),('2019-01-19','COSTCO GAS #0484 OREM UT',24.28,''),('2019-01-18','BRICK OVEN - PROVO STRIPE.COM CA',14.55,''),('2019-01-17','ZAXBY\'S #47608 CEDAR CITY UT',6.03,''),('2019-01-15','CAFE RIO PROVO PROVO UT',0.3,''),('2019-01-12','CAFE ZUPAS - PROVO PROVO UT',10.56,''),('2019-01-12','COSTCO WHSE #0484 OREM UT',1.62,''),('2019-01-11','WINGERS OREM OREM UT',11.25,''),('2019-01-09','TST* COSTA VIDA - PROVO PROVO UT',1.61,''),('2019-01-09','TEXAS ROADHOUSE 2284 OREM UT',11.85,''),('2019-01-08','CAFE RIO PROVO PROVO UT',1.35,''),('2019-01-08','CAFE RIO PROVO PROVO UT',8.61,''),('2019-01-07','GRUBPASS HTTPSTHEMEALPUT',5.35,''),('2019-01-06','QUICK QUACK 502 888-772-2792 UT',19.98,''),('2019-01-05','JCWS RESTAURANT PROVO PROVO UT',10.02,''),('2019-01-05','COSTCO GAS #0484 OREM UT',17.88,''),('2019-01-04','LITTLE CAESARS 006 PROVO UT',5.39,''),('2019-01-03','FIREHOUSE SUBS #10 801-971-1473 UT',10.78,''),('2019-01-02','WENDYS #6074 OREM UT',3.65,''),('2019-01-02','BRICK OVEN - PROVO STRIPE.COM CA',4.84,''),('2019-01-01','NINTENDO *AMERICAUS 800-255-3700 WA',26.68,'');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-04 10:32:22

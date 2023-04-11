-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2023 at 03:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `service`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `kdCust` char(4) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `no_telfon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`kdCust`, `nama`, `alamat`, `no_telfon`) VALUES
('c001', 'andian', 'genteng', '083885886887');

-- --------------------------------------------------------

--
-- Table structure for table `smartphone`
--

CREATE TABLE `smartphone` (
  `kdHp` char(5) NOT NULL,
  `tipe` char(20) NOT NULL,
  `problem` text NOT NULL,
  `biaya` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `smartphone`
--

INSERT INTO `smartphone` (`kdHp`, `tipe`, `problem`, `biaya`) VALUES
('mi001', 'mi a1', 'ganti lcd', 400000),
('mi002', 'redmi 6a', 'ganti lcd', 350000),
('mi003', 'redmi 9', 'ganti lcd', 400000),
('op001', 'oppo a3s', 'ganti lcd', 350000),
('op002', 'oppo a5s', 'ganti lcd', 400000);

-- --------------------------------------------------------

--
-- Table structure for table `teknisi`
--

CREATE TABLE `teknisi` (
  `kdTeknisi` char(3) NOT NULL,
  `nama` char(30) NOT NULL,
  `alamat` char(50) NOT NULL,
  `no_telfon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teknisi`
--

INSERT INTO `teknisi` (`kdTeknisi`, `nama`, `alamat`, `no_telfon`) VALUES
('T01', 'hadi purwanto', 'blokagung, BWI', '083852000089');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`kdCust`),
  ADD UNIQUE KEY `kdCust` (`kdCust`);

--
-- Indexes for table `smartphone`
--
ALTER TABLE `smartphone`
  ADD PRIMARY KEY (`kdHp`),
  ADD UNIQUE KEY `kdHp` (`kdHp`),
  ADD UNIQUE KEY `kdHp_2` (`kdHp`),
  ADD UNIQUE KEY `kdHp_3` (`kdHp`);

--
-- Indexes for table `teknisi`
--
ALTER TABLE `teknisi`
  ADD PRIMARY KEY (`kdTeknisi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

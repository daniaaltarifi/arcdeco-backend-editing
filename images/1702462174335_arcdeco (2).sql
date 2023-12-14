-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 02:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arcdeco`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `paragraphleft` varchar(512) NOT NULL,
  `paragraphright` varchar(255) NOT NULL,
  `imageleft` varchar(255) NOT NULL,
  `imageright` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `paragraphleft`, `paragraphright`, `imageleft`, `imageright`) VALUES
(18, 'Be faithful to your own taste, because nothing you really like is ever out of style.', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment, not about fashion or what\'s in or what\'s out. This is not an easy job. Be faithful to your own taste, because nothing you really like is ever out of style.', 'Form follows function — that has been misunderstood. Form and function should be one, joined in a spiritual union. Innovation is often the ability to reach into the past and bring back what is good, what is beautiful, what is useful, what is lasting.', 'imageleft_1701168459434.jpg', 'imageright_1701168459449.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `extracontact`
--

CREATE TABLE `extracontact` (
  `id` int(255) NOT NULL,
  `contact` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `extracontact`
--

INSERT INTO `extracontact` (`id`, `contact`) VALUES
(89, 'dcdc');

-- --------------------------------------------------------

--
-- Table structure for table `favicon`
--

CREATE TABLE `favicon` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favicon`
--

INSERT INTO `favicon` (`id`, `name`, `icon`) VALUES
(11, 'Arcdeco', 'icon_1701950856909.png');

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `social1` varchar(255) DEFAULT NULL,
  `link1` varchar(255) NOT NULL,
  `social2` varchar(255) NOT NULL,
  `link2` varchar(255) NOT NULL,
  `social3` varchar(255) NOT NULL,
  `link3` varchar(255) NOT NULL,
  `extraContact` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footer`
--

INSERT INTO `footer` (`id`, `phone`, `email`, `address`, `social1`, `link1`, `social2`, `link2`, `social3`, `link3`, `extraContact`) VALUES
(189, '2322323232', 'hello@acrdeco.com', ' 756 Livingston Street, Brooklyn, NY 11201', NULL, '', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `footerhome`
--

CREATE TABLE `footerhome` (
  `id` int(255) NOT NULL,
  `socialmedia` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footerhome`
--

INSERT INTO `footerhome` (`id`, `socialmedia`, `link`) VALUES
(10, 'socialmedia_1701084575035.png', 'https://www.npmjs.com/package/react-helmet'),
(18, 'socialmedia_1701168348401.png', 'https://bitbucket.org/qtechmobileteam/workspace/overview/');

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(255) NOT NULL,
  `video` varchar(512) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`id`, `video`, `title`, `subtitle`, `content`) VALUES
(81, NULL, 'Architecture and decor.', 'Introduction', 'The essence of interior design will always be about people and how they live.');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`, `role`) VALUES
(15, 'dania', 'd.altarifi@qtech.com.jo', '$2b$10$JMeNeXO4IWzGZcABcbJlsOdGIm.3yqVkE3xV8i6Rzv//b4r0o379G', 'admin'),
(16, 'user', 'user@gmail.com', '$2b$10$LN6Lc5aU6B1B3EjFyTRuhOCsZCowsdhBj69qd36TVKvCoP/a1HCuS', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `logo`
--

CREATE TABLE `logo` (
  `id` int(255) NOT NULL,
  `logo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logo`
--

INSERT INTO `logo` (`id`, `logo`) VALUES
(1, 'logo_1701954420430.png');

-- --------------------------------------------------------

--
-- Table structure for table `mainslider`
--

CREATE TABLE `mainslider` (
  `id` int(255) NOT NULL,
  `images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mainslider`
--

INSERT INTO `mainslider` (`id`, `images`) VALUES
(15, '/1701943506519_intro.mp4'),
(17, '/1701953054984_about_03.jpg'),
(19, '/1701953513910_image_project_07.jpg'),
(20, '/1701953513922_services_022.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `newpage`
--

CREATE TABLE `newpage` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `nav` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newpage`
--

INSERT INTO `newpage` (`id`, `title`, `path`, `nav`) VALUES
(14, 'Home', '/', 'Home'),
(15, 'Profile', 'https://www.yahoo.com/?guccounter=1', 'Profile'),
(16, 'Services', 'services', 'Services'),
(17, 'Contact', 'contact', 'Contact');

-- --------------------------------------------------------

--
-- Table structure for table `newpageservices`
--

CREATE TABLE `newpageservices` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(255) NOT NULL,
  `images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `images`) VALUES
(13, '/1699787009270_brand-01.png'),
(14, '/1699787009270_brand-03.png'),
(16, '/1699787454636_brand-07.png'),
(17, '/1699787474006_brand-01.png'),
(18, '/1699787474006_brand-03.png'),
(19, '/1699794911263_brand-01.png'),
(20, '/1699881377855_brand-03.png');

-- --------------------------------------------------------

--
-- Table structure for table `relevantcase`
--

CREATE TABLE `relevantcase` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relevantcase`
--

INSERT INTO `relevantcase` (`id`, `title`, `content`) VALUES
(23, 'Relevante cases.', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `content`) VALUES
(30, 'Services', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(255) NOT NULL,
  `relevant_id` int(255) NOT NULL,
  `images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `relevant_id`, `images`) VALUES
(179, 0, '/1701675297700_image_project_07.jpg'),
(193, 0, '/1701953604634_about_03.jpg'),
(194, 0, '/1701953604648_services_022.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `socialfooter`
--

CREATE TABLE `socialfooter` (
  `id` int(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `socialmedia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `socialfooter`
--

INSERT INTO `socialfooter` (`id`, `link`, `socialmedia`) VALUES
(10, 'https://reactback.qtechnetworks.co.uk/admin/footerhome', 'socialmedia_1701946057928.png'),
(12, 'https://reactback.qtechnetworks.co.uk/admin/footerhome', 'socialmedia_1701948140229.png');

-- --------------------------------------------------------

--
-- Table structure for table `typeofservices`
--

CREATE TABLE `typeofservices` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `descriptionofservice` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `typeofservices`
--

INSERT INTO `typeofservices` (`id`, `title`, `descriptionofservice`, `image`) VALUES
(68, 'interiorrr', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.', 'image_1701696176393.jpg'),
(69, 'Architecture', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.', 'image_1701696301713.jpg'),
(70, 'Design', 'The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.', 'image_1701953686641.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `extracontact`
--
ALTER TABLE `extracontact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favicon`
--
ALTER TABLE `favicon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footerhome`
--
ALTER TABLE `footerhome`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logo`
--
ALTER TABLE `logo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mainslider`
--
ALTER TABLE `mainslider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newpage`
--
ALTER TABLE `newpage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newpageservices`
--
ALTER TABLE `newpageservices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relevantcase`
--
ALTER TABLE `relevantcase`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relevant_id` (`relevant_id`);

--
-- Indexes for table `socialfooter`
--
ALTER TABLE `socialfooter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeofservices`
--
ALTER TABLE `typeofservices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `extracontact`
--
ALTER TABLE `extracontact`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `favicon`
--
ALTER TABLE `favicon`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;

--
-- AUTO_INCREMENT for table `footerhome`
--
ALTER TABLE `footerhome`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `home`
--
ALTER TABLE `home`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `logo`
--
ALTER TABLE `logo`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mainslider`
--
ALTER TABLE `mainslider`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `newpage`
--
ALTER TABLE `newpage`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `newpageservices`
--
ALTER TABLE `newpageservices`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `relevantcase`
--
ALTER TABLE `relevantcase`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `socialfooter`
--
ALTER TABLE `socialfooter`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `typeofservices`
--
ALTER TABLE `typeofservices`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

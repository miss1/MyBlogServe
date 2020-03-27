/*
 Navicat Premium Data Transfer

 Source Server         : localData
 Source Server Type    : MySQL
 Source Server Version : 50646
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50646
 File Encoding         : 65001

 Date: 27/03/2020 18:20:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(6000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subtitle` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `timestamp` bigint(13) NOT NULL,
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`, `name`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for relational
-- ----------------------------
DROP TABLE IF EXISTS `relational`;
CREATE TABLE `relational`  (
  `labelId` int(11) NOT NULL,
  `articleId` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `relational_ibfk_1`(`articleId`) USING BTREE,
  INDEX `relational_ibfk_2`(`labelId`) USING BTREE,
  CONSTRAINT `relational_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `relational_ibfk_2` FOREIGN KEY (`labelId`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `signature` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `titleName` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;

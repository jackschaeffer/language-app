-- -----------------------------------------------------
-- Schema full-stack-languageapp
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-languageapp`;

CREATE SCHEMA `full-stack-languageapp`;
USE `full-stack-languageapp` ;

-- -----------------------------------------------------
-- Table `full-stack-languageapp`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-languageapp`.`genre` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(255) NULL DEFAULT NULL,
  
  PRIMARY KEY (`id`))

ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-languageapp`.`artist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-languageapp`.`artist` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `artist_name` VARCHAR(255) NULL DEFAULT NULL,
  `region` VARCHAR(255) NULL DEFAULT NULL,
  
  PRIMARY KEY (`id`))

ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-languageapp`.`phrase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-languageapp`.`phrase` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `fr_phrase` VARCHAR(255) NULL DEFAULT NULL,
  `en_phrase` VARCHAR(255) NULL DEFAULT NULL,
  
  PRIMARY KEY (`id`))

ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-languageapp`.`song`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-languageapp`.`song` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `fr_name` VARCHAR(255) DEFAULT NULL,
  `en_name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `fr_lyrics` VARCHAR(5000) DEFAULT NULL,
  `en_lyrics` VARCHAR(5000) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `artist_id` BIGINT(20) NOT NULL,
  `genre_id` BIGINT(20) NOT NULL,

  PRIMARY KEY (`id`),
 
  KEY `fk_genre` (`genre_id`),
  CONSTRAINT `fk_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  
  KEY `fk_artist` (`artist_id`),
  CONSTRAINT `fk_artist` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`)
) 

ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-languageapp`.`song_phrase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-languageapp`.`song_phrase` (
  `song_id` BIGINT(20) NOT NULL,
  `phrase_id` BIGINT(20) NOT NULL,
  
  PRIMARY KEY (`song_id`,`phrase_id`),
  
  KEY `fk_song_idx` (`song_id`), 
  CONSTRAINT `fk_song_idx` FOREIGN KEY (`song_id`) REFERENCES `song` (`id`),
  
  KEY `fk_phrase_idx` (`phrase_id`), 
  CONSTRAINT `fk_phrase_idx` FOREIGN KEY (`phrase_id`) REFERENCES `phrase` (`id`) 
) 

ENGINE=InnoDB


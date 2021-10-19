
USE `full-stack-languageapp` ;


-- INSERT INTO artist(artist_name) VALUES ('Eli Rose');
INSERT INTO artist(artist_name) VALUES ('Yseult');

-- INSERT INTO genre(genre_name) VALUES ('Pop');


INSERT INTO song (fr_title, en_title, fr_lyrics, en_lyrics, genre_id, artist_id, release_year, date_created)
VALUES ('L\'orage', 'The storm', 'Bonjour', 'Hello', 1, 1, 2021, NOW());



INSERT INTO song (fr_title, en_title, fr_lyrics, en_lyrics, genre_id, artist_id, release_year, date_created)
VALUES ('Rodéo', 'Rodeo', 'Bonjour', 'Hello', 1, 2, 2019, NOW());


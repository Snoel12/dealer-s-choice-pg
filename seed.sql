DROP TABLE IF EXISTS villains;

CREATE TABLE villains (
   id SERIAL PRIMARY KEY,
   name VARCHAR (100) NOT NULL,
   surname VARCHAR (250) NOT NULL,
   alias VARCHAR (250) NOT NULL
); 

INSERT INTO villains (name, surname, alias) VALUES ('Johann', 'Schmiddt', 'Red SKull');
INSERT INTO villains (name, surname, alias) VALUES ('Emil', 'Blonski', 'Abomination');
INSERT INTO villains (name, surname, alias) VALUES ('John', 'Masters', 'Taskmaster');
INSERT INTO villains (name, surname, alias) VALUES ('Obadiah', 'Stane', 'Iron Monger');
INSERT INTO villains (name, surname, alias) VALUES ('Benjamin', 'Poindexter', 'Bullseye');
INSERT INTO villains (name, surname, alias) VALUES ('Loki', 'Odinson', 'Loki');

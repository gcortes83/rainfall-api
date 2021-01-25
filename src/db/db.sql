CREATE TABLE IF NOT EXISTS rainfall (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	year INTEGER NOT NULL,
   	month TEXT NOT NULL,
	rainfall INTEGER DEFAULT 0
);

INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'January', 127);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'March', 90);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'February', 108);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'April', 51);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'May', 15);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'June', 9);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'July', 10);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'August', 10);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'September', 25);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'September', 25);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'October', 75);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'November', 115);
INSERT INTO rainfall (year, month, rainfall) VALUES (2020, 'December', 131);
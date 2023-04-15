-- create
CREATE TABLE user (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO user VALUES (1, 'Timon', 23, 'California'), 
                        (2, 'Niko', 29, 'Texas'), 
                        (3, 'Alex', 27, 'Florida'), 
                        (4, 'Bob', 24, 'Colorado');

-- fetch 
SELECT * FROM user;
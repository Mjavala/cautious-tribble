-- Creation of user table
CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL,
  username varchar(250) NOT NULL,
  password varchar(250) NOT NULL,
  PRIMARY KEY (user_id)
);
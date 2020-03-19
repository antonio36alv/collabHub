DROP DATABASE IF EXISTS collabhub;
CREATE DATABASE collabhub;

CREATE TABLE user (
  fName VARCHAR(200) NOT NULL,
  lName VARCHAR(200) NOT NULL,
  emailAddress VARCHAR(200) NOT NULL,
--   skills dropdown
  city VARCHAR(30),
  state VARCHAR(2),
  zip VARCHAR(5),
  bio TEXT,
  photo IMAGE,
);

-- DROP DATABASE IF EXISTS skills;
-- CREATE DATABASE skills;

-- CREATE TABLE skillset (
--   id INT NOT NULL AUTO_INCREMENT,
--   uxui VARCHAR(20),
--   databaseEngineer VARCHAR(20),
--   fullStack VARCHAR(20),
--   serverSide VARCHAR(20),
--   iOSapp VARCHAR(20),
--   androidApp VARCHAR(20),
--   linux VARCHAR(20),
--   java VARCHAR(20),
--   aws VARCHAR(20),
--   perl VARCHAR(20),
--   PRIMARY KEY (id)
-- );
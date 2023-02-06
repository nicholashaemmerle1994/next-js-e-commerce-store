-- Create Table

CREATE TABLE coffee(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
site_name varchar(50) NOT NULL,
name varchar(300) NOT NULL,
price integer NOT NULL,
short_description varchar(200) NOT NULL,
long_description varchar(600) NOT NULL,
);

-- Insert product
INSERT INTO coffee
(site_name, name, price, short_description, long_description)
VALUES

-- Get all products
SELECT * FROM coffee;


CREATE TABLE equipment(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
site_name varchar(50) NOT NULL,
name varchar(300) NOT NULL,
price integer NOT NULL,
img varchar(200) NOT NULL,
short_description varchar(200) NOT NULL,
long_description varchar(600) NOT NULL,
);


INSERT INTO equipment
(site_name, name, price, img, short_description, long_description)
VALUES

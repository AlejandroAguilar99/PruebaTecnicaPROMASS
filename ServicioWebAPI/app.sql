CREATE DATABASE blogPROMASS_bd;
USE blogPROMASS_bd;

CREATE TABLE Entradas
(
	Id int not null primary key auto_increment,
    Titulo varchar(50) not null,
    Autor varchar(100) not null,
    Fecha date,
    Contenido text
);
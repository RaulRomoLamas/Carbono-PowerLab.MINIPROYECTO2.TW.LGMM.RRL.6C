-- Crear base de datos
CREATE DATABASE IF NOT EXISTS carbono_powerlab_db;
USE carbono_powerlab_db;

-- Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  marca VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  imagen VARCHAR(500),
  descripcion TEXT,
  disponible BOOLEAN DEFAULT TRUE
);

-- Tabla de mensajes
CREATE TABLE IF NOT EXISTS mensajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  asunto VARCHAR(200) NOT NULL,
  mensaje TEXT NOT NULL
);

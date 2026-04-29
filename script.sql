DROP DATABASE IF EXISTS loja_chuteira;

CREATE DATABASE loja_chuteira;

USE loja_chuteira; 

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produto (nome, descricao, preco) VALUES
('Chuteira Futsal Joma Dribling Masculina', 'Chuteira Futsal Branco + Amarelo', 302.90),
('Chuteira Futsal Umbro Pro 5 ', 'Chuteira Futsal Umbro Kintsugi Branco + Azul Claro', 625.00),
('Chuteira Futsal Umbro Pro 5 Bump', 'Chuteira Futsal Umbro Pro Unissex Grafite + Preto', 329.90),
('Chuteira Futsal Joma Top Flex', 'Chuteira Futsal Umbro Pró 5 Bump Club Unissex - Preto + Roxo', 600.90),
('Chuteira Futsal Umbro Pro 5', 'Chuteira Futsal Umbro Pro 5 Preta + Roxa', 409.90),
('Chuteira Futsal Umbro Pro 5', 'Chuteira Futsal Umbro Pro 5 Bump Dia De Los Muertos Unissex - Laranja + Azul', 599.90),
('Chuteira Futsal Umbro Pro ', 'Chuteira Futsal Umbro Pro Challenge Uptake Unissex - Branco + Violeta', 380.90),
('Chuteira Futsal Joma', 'Chuteira Futsal Joma Maxima Unissex - Preto + Branco', 379.90),
('Chuteira Futsal Umbro Pro 5', 'Chuteira Futsal Umbro Pro 5 Bump Club Unissex - Branco + Vermelho', 419.90),
('Chuteira Joma Futsal', 'Chuteira Joma Futsal Top Flex Rebound Hexa Branco/Dourado - Branco', 899.90);
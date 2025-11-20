CREATE DATABASE com_ghibli;
USE com_ghibli;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL
);

CREATE TABLE filmes (
id_filme INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
ano_lancamento YEAR
);

CREATE TABLE emocoes (
id_emocao INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45),
intensidade VARCHAR(13)
CONSTRAINT chkIntensidade
	CHECK (intensidade IN ('Leve', 'Média', 'Intenso', 'Muito Intenso'))
);

CREATE TABLE comentarios (
id_comentario INT AUTO_INCREMENT,
id_usuario INT,
id_filme INT,
PRIMARY KEY (id_comentario, id_usuario, id_filme),
comentario TEXT,
data_envio DATE,
id_emocao INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_filme) REFERENCES filmes(id_filme),
FOREIGN KEY (id_emocao) REFERENCES emocoes(id_emocao)
);


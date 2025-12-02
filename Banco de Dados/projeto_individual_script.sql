CREATE DATABASE com_ghibli;
USE com_ghibli;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(50) NOT NULL,
data_cadastro DATE DEFAULT (CURDATE())
);

CREATE TABLE filmes (
id_filme INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
ano_lancamento YEAR
);

CREATE TABLE emocoes (
id_emocao INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45)
);

CREATE TABLE intensidades (
id_intensidade INT PRIMARY KEY AUTO_INCREMENT,
nivel VARCHAR(13),
CONSTRAINT chkNivel 
	CHECK (nivel IN ('Leve', 'Médio', 'Intenso', 'Muito Intenso'))
);

CREATE TABLE comentarios (
id_comentario INT AUTO_INCREMENT,
id_usuario INT,
id_filme INT,
PRIMARY KEY (id_comentario, id_usuario, id_filme),
comentario TEXT,
data_envio DATE,
id_emocao INT,
id_intensidade INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_filme) REFERENCES filmes(id_filme),
FOREIGN KEY (id_emocao) REFERENCES emocoes(id_emocao),
FOREIGN KEY (id_intensidade) REFERENCES intensidades(id_intensidade)
);

-- INSERTS --

INSERT INTO filmes (nome, ano_lancamento) VALUES 
	('Nausicaä do Vale do Vento', '1984'),
	('O Castelo no Céu', '1986'),
	('Meu Amigo Totoro', '1988'),
	('Túmulo dos Vagalumes', '1988'),
	('O Serviço de Entregas da Kiki', '1989'),
	('Memórias de Ontem', '1991'),
	('Porco Rosso: O Último Herói Romântico', '1992'),
	('Eu Posso Ouvir o Oceano', '1993'),
	('PomPoko: A Grande Batalha dos Guaxinins', '1994'),
	('Sussurros do Coração', '1995'),
	('Princesa Mononoke', '1997'),
	('A Viagem de Chihiro', '2001'),
	('O Reino dos Gatos', '2002'),
	('O Castelo Animado', '2004'),
	('Contos de Terramar', '2006'),
	('Ponyo: Uma Amizade Que Veio do Mar', '2008'),
	('O Mundo dos Pequeninos', '2010'),
	('Da Colina Kokuriko', '2011'),
	('Vidas ao Vento', '2013'),
	('O Conto da Princesa Kaguya', '2013'),
	('As Memórias de Marnie', '2014'),
	('O Menino e a Garça', '2023');
    
INSERT INTO emocoes (tipo) VALUES 
	('Admiração'),
	('Alívio'),
	('Tristeza'),
	('Raiva'),
	('Ansiedade'),
	('Medo'),
	('Alegria'),
	('Excitação'),
	('Calma'),
	('Nostalgia');
    
INSERT INTO intensidades (nivel) VALUES
	('Leve'),
	('Médio'),
	('Intenso'),
	('Muito Intenso');

CREATE VIEW view_comentarios_por_usuario AS 
SELECT u.id_usuario,
COUNT(c.id_comentario) AS qtd_comentarios
FROM comentarios c
JOIN usuarios u ON u.id_usuario = c.id_usuario
GROUP BY u.id_usuario;
    
    
CREATE VIEW view_filme_mais_comentado AS 
SELECT f.nome AS filme 
FROM comentarios c 
JOIN filmes f ON f.id_filme = c.id_filme 
GROUP BY f.nome 
ORDER BY COUNT(f.id_filme) DESC;

CREATE VIEW view_usuarios_total AS 
SELECT COUNT(id_usuario) AS total_usuarios 
FROM usuarios;

CREATE VIEW view_emocao_mais_comentada AS
SELECT e.tipo AS emocao 
FROM comentarios c 
JOIN emocoes e ON e.id_emocao = c.id_emocao 
GROUP BY e.tipo 
ORDER BY COUNT(e.id_emocao) DESC
LIMIT 1;

CREATE VIEW view_quantidade_intensidades AS 
SELECT i.nivel AS nivel, 
COUNT(c.id_intensidade) AS qtd 
FROM comentarios c 
JOIN intensidades i ON i.id_intensidade = c.id_intensidade 
GROUP BY i.nivel;

CREATE VIEW view_quantidade_emocoes AS
SELECT e.tipo AS tipo, 
COUNT(c.id_emocao) AS total 
FROM comentarios c 
JOIN emocoes e ON e.id_emocao = c.id_emocao 
GROUP BY e.tipo;
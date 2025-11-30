# Projeto-Individual
Projeto Individual para o curso  de Análise e Desenvolvimento de Sistemas da São Paulo Tech School (SPTech)

🌿 **Comunidade Ghibli**

Comunidade Ghibli é um projeto inspirado nas obras do Studio Ghibli, desenvolvido com o objetivo de unir pessoas através de emoções e tecnologia.  
A plataforma permite que os usuários compartilhem as lições e sentimentos que cada filme do estúdio despertou em suas vidas, formando uma comunidade acolhedora e inspiradora.  

# Screenshots
### Landing page
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/f3d3016e-2540-4c3e-81d4-f7a9eb19880c" />

### Login
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/a5b5be57-2070-4157-8c1a-076cb50c4867" />

### Área de Comentários
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2fa3e646-dbb1-49af-af1b-a052684f487e" />

### Dashboard
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/cf0c0cf4-39fe-4d2f-aab3-329a8394df3f" />

# Funcionalidades
- Login e cadastro: Faça o login e cadastro na plataforma e interaja com a comunidade.
- Seção de comentários: Os usuários podem deixar comentários e reflexões sobre os filmes de sua escolha, assim como a emoção sentida e a intensidade dela ao assistir.
- Dashboard: Usuários logados conseguem visualizar informações relevantes sobre a plataforma, como total de usuários que fazem parte da comunidade, gráficos sobre emoções sentidas e intensidades, total de usuários novos do dia e filme mais comentado.

# Tecnologias utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:
- Frontend: HTML, CSS, JavaScript
- Backend: NodeJS, JavaScript
- Banco de Dados: MySQL
- Infraestrutura: VM

# Como executar o projeto localmente
Pré-requisitos:
- Node.js
- Git

```
# Clone o repositório
git clone https://github.com/BiancaIwata/Projeto-Individual-.git

# Acesse a pasta do repositório
cd Projeto-Individual-/Site/

# Instale as dependências
npm install

# Após criar o banco de dados com o script "projeto_individual_script.sql" no diretório Projeto-Individual-/Banco de Dados, mude suas credenciais no arquivo do diretório Projeto-Individual-/Site/.env
DB_HOST='localhost'
DB_DATABASE='nome-do-seu-database'
DB_USER='nome-do-seu-usuario'
DB_PASSWORD='senha-do-banco'
DB_PORT='3306' # Porta do MySQL local. Esse projeto foi criado utilizando uma VM como banco de dados, por isso por padrão a porta utilizada é 3307.

# Inicie o servidor
npm start
```

Após executar os comandos, você conseguirá navegar na plataforma através da URL `http://localhost:8080`

# Créditos
Todas as imagens de pôsteres promocionais utilizadas neste site são de propriedade intelectual e direitos autorais do Studio Ghibli. Este é um projeto de fã, sem fins comerciais, e nenhuma posse ou autoria sobre estas imagens é reivindicada.

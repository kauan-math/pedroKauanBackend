# Trabalho desenvolvimento de sistemas

Este trabalho consiste em montar um CRUD para personagens de Jujutsu Kaisen

# Integrantes

- Kauan Matheus
- Pedro Henrique

# Como rodar o projeto na sua máquina

- Clonar o repositório do GitHub
- Inserir no terminal gitbash, o comando "code ."
- Abrir o terminal gitbash no VS Code, e inserir o comando "npm i"
- Inserir o comando "npm run dev" no terminal
- Ir ao postman, criar os personagens na aba Personagens, na parte de "create", no "body", ir na aba "raw", trocar de "text", para "json", inserir os dados do personagem desejado
- Listar os seus personagens, na parte de "list"
- Receber dados, no "GetById", especificar o id do personagem na barra onde está o caminho
- Para atualizar os dados de um personagem em especifico, ir ao "update", no "body", ir na aba "raw", trocar de "text", para "json", e inserir o dado que quiser atualizar, especificar o id do personagem na barra onde está o caminho
- Para deletar um personagem, ir ao "delete", especificar o id do personagem na barra onde está o caminho


# Como testar as requisições

- Rota 1:
  - URL: <digite a url aqui>
  - Método: <GET, POST, PUT, DELETE>
  - Body: <quais campos enviar no corpo da requisição>
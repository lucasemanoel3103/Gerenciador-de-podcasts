# Gerenciador de Podcasts

Este é um projeto de gerenciamento de podcasts desenvolvido utilizando Node.js e TypeScript. Ele permite listar e filtrar episódios via requisições HTTP e foi testado no Postman.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- HTTP (módulo nativo do Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasemanoel3103/Gerenciador-de-podcasts
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd gerenciador-podcasts
   ```
3. Instale as dependências:
   ```bash
   npm init -y
   ```
4. Compile o TypeScript:
   ```bash
   npm run build
   ```
5. Inicie o servidor:
   ```bash
   src/server.ts
   ```

## Uso

O servidor estará rodando em `http://localhost:3636`. Você pode fazer requisições via Postman ou outro cliente HTTP.

## Endpoints

### Listar episódios
**GET /list**
- Retorna a lista de episódios.

### Filtrar episódios
**GET /episode**
- Filtra episódios com base em critérios passados na query string.

As imagens abaixo mostram exemplos de requisições feitas no Postman:

<img src="src/assets/Postman-list.png" alt="Texto alternativo 1" width="48%" />
<img src="src/assets/Postman-filter.png" alt="Texto alternativo 2" width="48%" />





## Melhorias Futuras

- Implementar Express.js para melhor gerenciamento de rotas.
- Adicionar testes automatizados.
- Conectar com um banco de dados para persistência.

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Envie para o branch principal (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


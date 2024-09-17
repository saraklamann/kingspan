<div align="center">
   <img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=7d5b8c&height=120&section=header"/>
</div>

> [!TIP]
> Lembre-se de usar a versão 22 do JDK.

> <a href="https://www.java.com/pt-BR/download/"><img src="https://img.shields.io/badge/JDK-22-768732?style=for-the-badge&logo=jdk-22&logo&color=7d5b8c"></a>

# SOBRE O PROJETO
<p> A ideia principal do projeto é ser uma API Restful que faz as cinco operações principais. POST, GET ALL, GET ONE, PUT/UPDATE e DELETE utilizando Java com Springboot. E explorar um pouco o comportamento de componentes e páginas no React. O objetivo da API em si é gerenciar sistemas. </p>

# PROTÓTIPO:

> <a href="https://www.figma.com/design/Fz8UvMpP7TU6sVVX2J3UCq/Kingspan?node-id=0-1&t=zjPZGrNmzt4OgitR-1"><img src="https://img.shields.io/badge/FIGMA-768732?style=for-the-badge&logo=figma_351&logo&color=7d5b8c"></a>

# MANUAL DO USUÁRIO

<h3> O usuário tem acesso a algumas funcionalidades básicas, sendo elas: </h3>
<p> <strong> • Visualizar sistemas: </strong> O usuário logo na página inicial tem acesso a uma tabela com todos os sistemas registrados no banco de dados. </p>
<p> <strong> • Cadastrar sistemas: </strong> O usuário pode criar um novo sistema, para isso serão solicitados os dados: Descrição, Sigla, E-mail de atendimento e URL. Onde e-mail de atendimento e url são opcionais. </p>
<p> <strong> • Edição de sistemas: </strong> O usuário pode editar um sistema existente. Nesta tela pode visualizar o último editor, horário da última edição e o motivo da última edição. Para alterar um dados basta preencher os campos e inserir o motivo da alteração. </p>

# INFORMAÇÕES PARA DESENVOLVEDORES

<p> <strong> • Tratamento de valores em branco: </strong> Ao registrar um sistema, ao deixar o campo e-mail ou url em branco, a aplicação faz a tratativa de definir como padrão o valor "-" com o intuito de facilitar a renderizar da tabela de sistemas no frontend. </p>
<p> <strong> • Valores padrão na criação: </strong> Ao registrar um novo sistema, alguns campos não são pedidos, são eles: Editor, horário da última edição, justificativa da alteração, status. Esses campos são preenchidos em segundo plano com "Admin", horário atual com base no fuso horário, "Criação" e "ATIVO" respectivamente. </p>
<p> <strong> • Valores padrão na edição: </strong> Ao editar um sistema, o campo editor e horário da última edição são preenchidos automaticamente com "Admin" e horário atual com base no fuso horário. </p>

# DESAFIOS DURANTE O DESENVOLVIMENTO

<p> <strong> • E-mail: </strong> Como um dos requisitos era a validação de e-mail, mas também, que o campo e-mail era opcional. Estive em um dilema para executar ambos. Então optei por deixar o e-mail opcional, e caso o usário deixe em branco, ele é preenchido automaticamente com "-". Para facilitar a renderização da tabela no frontend. Essa decisão me fez perder a validação de e-mail própria do springboot. </p>
<p> <strong> • Justificativa de alteração: </strong> Tive dificuldade em exibir o motivo da última alteração e novo motivo de alteração na mesma página. Acredito que foi uma má elaboração do banco de dados. </p>
<p> <strong> • Estilização de componentes e páginas: </strong> Outra dificuldade foi em relação a minha pouca experiência com o React, não sabia que os componentes "herdavam" o arquivo css da página que estão, e por vezes desconfigurei o estilo das minhas páginas por isso. </p>
<p> <strong> • Login: </strong> Devido a pouca experiência com o springboot, optei por não tentar implementar as sessões, para evitar erros no funcionamento da api. </p>

# TECNOLOGIAS UTILIZADAS:

![JAVA](https://img.shields.io/badge/Java-768732?style=for-the-badge&logo=java&logo&color=7d5b8c)
![SPRINGBOOT](https://img.shields.io/badge/Springboot-768732?style=for-the-badge&logo=springboot&logo&color=7d5b8c)
![POSTGRESQL](https://img.shields.io/badge/postgresql-768732?style=for-the-badge&logo=postgresql&logo&color=7d5b8c)
![REACT](https://img.shields.io/badge/react-768732?style=for-the-badge&logo=react&logo&color=7d5b8c)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript_3&color=7d5b8c)
![HTML](https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=html&color=7d5b8c)
![CSS](https://img.shields.io/badge/CSS-000?style=for-the-badge&logo=css&color=7d5b8c)

# DEPENDÊNCIAS:

![SPRING WEB](https://img.shields.io/badge/springweb-768732?style=for-the-badge&logo=springweb_351&logo&color=7d5b8c)
![SPRING DATA JPA](https://img.shields.io/badge/springdatajpa-768732?style=for-the-badge&logo=springdatajpa_351&logo&color=7d5b8c)
![POSTGRESQL DRIVER](https://img.shields.io/badge/postgredriver-768732?style=for-the-badge&logo=postgredriver_351&logo&color=7d5b8c)
![VALIDATION](https://img.shields.io/badge/validation-768732?style=for-the-badge&logo=validation_351&logo&color=7d5b8c)
![NODEJS](https://img.shields.io/badge/nodejs-768732?style=for-the-badge&logo=nodejs_351&logo&color=7d5b8c)
![NPM](https://img.shields.io/badge/npm-768732?style=for-the-badge&logo=npm_351&logo&color=7d5b8c)
![MAVEN](https://img.shields.io/badge/maven-768732?style=for-the-badge&logo=maven_351&logo&color=7d5b8c)
![SPRING OPEN API](https://img.shields.io/badge/openapi-768732?style=for-the-badge&logo=openapi_351&logo&color=7d5b8c)

# TECNOLOGIAS FACILITADORAS:

![TRELLO](https://img.shields.io/badge/springweb-768732?style=for-the-badge&logo=springweb_351&logo&color=7d5b8c)
![POSTMAN](https://img.shields.io/badge/springdatajpa-768732?style=for-the-badge&logo=springdatajpa_351&logo&color=7d5b8c)
![SPRING INITIALIZER](https://img.shields.io/badge/postgredriver-768732?style=for-the-badge&logo=postgredriver_351&logo&color=7d5b8c)
![SWAGGER](https://img.shields.io/badge/validation-768732?style=for-the-badge&logo=validation_351&logo&color=7d5b8c)
![GITHUB](https://img.shields.io/badge/GITHUB-768732?style=for-the-badge&logo=github_351&logo&color=7d5b8c)
![GIT](https://img.shields.io/badge/GIT-768732?style=for-the-badge&logo=git_351&logo&color=7d5b8c)
![FIGMA](https://img.shields.io/badge/FIGMA-768732?style=for-the-badge&logo=figma_351&logo&color=7d5b8c)
![TOMCAT](https://img.shields.io/badge/tomcat-768732?style=for-the-badge&logo=tom-cat_351&logo&color=7d5b8c)

# ENGLISH VERSION:

Coming Soon...

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=7d5b8c&height=120&section=footer"/>

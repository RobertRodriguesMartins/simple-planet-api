# simple-planet-api

  Bem vindo ao pequeno projeto de API;
  
  Basicamente essa api consome outra api de planetas e devolve os seus resultados!
  
  Ela já está configurada para rodar em qualquer ambiente com o dockerfile, caso seja de seu gosto.
  
  Não é necessário qualquer configuração para seu funcionamento,
  apenas executar as instruções abaixo para iniciar o projetinho.
  
  Endpoints:
    /planets => retorna uma lista de todos os planetas presentes na API `planets-info-by-newbapi`
  
  Porta: a aplicação roda na porta 3001.
  
  Requisitos sem docker:
  - ter git instalado em sua máquina;
  - Ter o nodeJS instalado em sua máquina;

  Como usar sem docker:

    1- clonar o projeto para sua máquina
    2- Na pasta 'backend' em sua máquina, abrir um terminal e digitar 'npm install'
    3- Após a instalação digitar no terminal: 'npm start' e aguarda a mensagem: 'planets api running at: 3001'
    aparecer no terminal
    4- abrir o navegador e colocar a url: 'http://localhost:3001/planets'
    5- será exibido uma lista em formato JSON :)
    
    
  Requisitos com docker:
  - ter git instalado em sua máquina
  - ter Docker instalado em sua máquina
  
  Como usar com docker:

    1- clonar o projeto para sua máquina
    2- Na pasta do projeto(a pasta backend), abrir um terminal e digitar 'docker build . -t planets-api' e aguardar a imagem ser criada.
    3- agora vamos rodar o container com: 'docker run -d -p 3001:3001 --name planet-api-container planets-api'
    4- abrir o navegador e colocar a url: 'http://localhost:3001/planets'
    5- será exibido uma lista em formato JSON :)
    opcional- Se quiser para a execução do container digite 'docker stop planet-api-container', para retomar
    a execução: 'docker start planet-api-container'
    
  Atenção: o terminal no passo 2 tem que ser aberto referenciando a pasta backend em sua máquina, caso contrário os comandos
  não irão funcionar!

Exemplo no linux(ubuntu): /home/meu-usuario/pasta-Onde-Clonei-O-Projeto/backend

É isso, logo mais estarei trazendo um frontend simples para consumir essa api, quem sabe crio mais endpoints.

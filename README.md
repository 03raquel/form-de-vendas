# Projeto Formulário de Vendas

Este projeto é uma landing page totalmente interativa e responsiva, desenvolvida para simular o cadastro de produtos em um marketplace. A aplicação consiste em um formulário detalhado que, através de manipulação do DOM com JavaScript, valida os dados em tempo real e oferece uma experiência de usuário moderna e engajadora.

O objetivo principal foi construir uma interface front-end completa, aplicando conceitos fundamentais de HTML5, CSS3 e JavaScript para criar uma aplicação funcional e visualmente agradável, demonstrando minhas habilidades em desenvolvimento web.

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Utilizado para a estruturação semântica de todo o conteúdo, garantindo acessibilidade e uma base sólida para a aplicação.
-   **CSS3:** Responsável por todo o design, layouts, animações e responsividade da página.
-   **JavaScript (ES6):** Utilizado para criar toda a interatividade, validação de formulário, manipulação de elementos da página e a lógica da experiência do usuário.

## ✨ O que Aprendi e Apliquei

Este projeto foi uma jornada de aprendizado incrível, onde pude solidificar e aplicar diversos conceitos:

* **Estruturação Semântica:** Aprofundei a importância de usar tags HTML corretas (`<form>`, `<label>`, `<footer>`, etc.), não apenas para organizar o código, mas para melhorar a acessibilidade e o SEO.

* **Layouts Modernos com CSS:** Este foi um dos maiores focos.
    * **Flexbox:** Foi a ferramenta principal para garantir o alinhamento e a centralização de elementos, como no contêiner principal da página e no rodapé.
    * **CSS Grid:** Aprendi a utilizá-lo para criar a galeria de produtos, construindo uma grade perfeitamente espaçada e organizada que se adapta a diferentes cenários.

* **Design Responsivo:** Implementei media queries para ajustar a galeria de produtos, garantindo que o site seja visualmente agradável tanto em desktops (com 3 colunas) quanto em dispositivos móveis (com 1 coluna).

* **Manipulação Avançada do DOM:** O JavaScript foi o coração da interatividade. Aprendi a:
    * Criar e inserir elementos na página dinamicamente (os contadores de caracteres).
    * Ouvir e responder a uma variedade de eventos do usuário (`submit`, `input`, `mouseover`).
    * Percorrer os elementos de um formulário e validar seus dados em tempo real usando métodos modernos como `every()`.

* **Foco na Experiência do Usuário (UX):** Fui além do básico para criar uma interface que reage ao usuário. As animações de `hover` nos cards, os contadores de caracteres e a validação visual do botão de envio foram implementados com esse foco.

## 🚧 Desafios e Soluções

Durante o desenvolvimento, enfrentei alguns desafios que foram ótimas oportunidades de aprendizado:

1.  **Desafio: Layout da Galeria de Produtos**
    * **Dificuldade:** Inicialmente, o título da seção "Produtos Cadastrados" estava "quebrando" a grade dos produtos, pois eu o havia colocado dentro do mesmo contêiner que usava `display: grid`.
    * **Solução:** Aprendi a separar as responsabilidades. Movi o título para fora do contêiner da grade e o estilizei de forma independente. Isso me ensinou na prática como diferentes modelos de layout do CSS (neste caso, o fluxo normal de blocos e o Grid) interagem.

2.  **Desafio: Centralização Consistente**
    * **Dificuldade:** Em certo ponto, o formulário e outros elementos perderam a centralização após algumas mudanças no código.
    * **Solução:** Em vez de aplicar margens individuais a cada elemento, adotei uma solução mais robusta: transformei o contêiner principal da página em um contêiner Flexbox com `flex-direction: column` e `align-items: center`. Isso garantiu que todos os blocos de conteúdo principais ficassem perfeitamente centralizados de forma consistente.

3.  **Desafio: Criar Interatividade Criativa**
    * **Dificuldade:** Eu queria que o formulário fosse mais do que apenas campos para preencher. Queria evitar que o usuário enviasse um formulário incompleto de uma forma divertida.
    * **Solução:** Desenvolvi a funcionalidade do "botão fujão". Utilizando JavaScript para verificar o estado do formulário no evento `mouseover`, altero a posição do botão com `transform: translate()` se o formulário não estiver válido. Foi um ótimo exercício para praticar a lógica condicional e a manipulação de estilos em resposta a ações do usuário.

## Organização de Documento

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<!DOCTYPE>	|	Define o tipo de documento, essencial para que o navegador interprete o HTML corretamente. No HTML5, é usado assim:	|
|	<html>	|	O elemento raiz de uma página HTML que envolve todo o conteúdo da página.	|
|	<head>	|	Contém metadados e links para recursos externos, como CSS e JavaScript.	|
|	<title>	|	 Define o título da página (aparece na aba do navegador).	|
|	<base>	|	Define uma URL base para todos os links relativos da página. Com <base>, qualquer link relativo, como <a href="pagina.html">, será interpretado como https://www.example.com/pagina.html.	|
|	<meta>	|	Fornece metadados, como a codificação de caracteres, a descrição e palavras-chave da página.	|
|	charset= (dentro de <meta>)	|	Define a codificação de caracteres do documento.	|
|	name="description" (dentro de <meta>)	|	Fornece uma breve descrição do conteúdo da página, útil para SEO.	|
|	name="keywords" (dentro de <meta>)	|	Lista palavras-chave relevantes para a página, embora seu uso tenha diminuído em SEO.	|
|	name="viewport" (dentro de <meta>)	|	Controla a forma como a página é exibida em dispositivos móveis.	|
|	name="author" (dentro de <meta>)	|	Indica o autor do documento.	|
|	<link>	|	Usado para vincular arquivos externos, como folhas de estilo (CSS) e ícones.	|
|	<style>	|	 Define estilos (CSS) internos para a página.	|
|	<body>	|	O conteúdo visível da página HTML fica dentro da tag <body>.	|
|	: ---	|	: ---	|

## Estrutura de Conteúdo

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<header>	|	Define o cabeçalho de uma página ou seção, geralmente contendo o logotipo, título e navegação.	|
|	<nav>	|	Define um bloco de navegação, geralmente contendo links para outras partes do site.	|
|	<section>	|	Define uma seção de conteúdo na página, como uma seção de produtos ou uma galeria.	|
|	<article>	|	Define um conteúdo independente e autocontido, como um post de blog ou um artigo de notícias.	|
|	<aside>	|	Contém conteúdo adicional ou complementar, mas que não é essencial para a compreensão do documento, como uma barra lateral ou uma nota.	|
|	<footer>	|	Define o rodapé de uma página ou seção, geralmente contendo informações de copyright ou links de política de privacidade.	|
|	<main>	|	Representa o conteúdo principal do documento, que é exclusivo para esse documento. Deve haver apenas um <main> por página.	|
|	<div>	|	Um contêiner genérico para agrupar elementos em blocos, útil para aplicar estilos ou organizar o layout.	|
|	<span>	|	Um contêiner genérico inline para aplicar estilos ou manipular uma pequena parte do texto.	|
|	<address>	|	Fornece informações de contato para um autor ou proprietário de um documento. Geralmente, é formatado em um estilo específico.	|
|	: ---	|	: ---	|

## Formatação de Texto

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<h1> a <h6>	|	Cabeçalhos de diferentes níveis, de <h1> (mais importante) a <h6> (menos importante).	|
|	<p>	|	Define um parágrafo de texto.	|
|	<hr>	|	Insere uma linha horizontal (separador) para separar seções.	|
|	<pre>	|	Exibe texto pré-formatado, preservando espaços e quebras de linha.	|
|	<blockquote>	|	Define uma citação em bloco.	|
|	<ol>	|	Cria uma lista ordenada (numerada).	|
|	<ul>	|	Cria uma lista não ordenada (com marcadores).	|
|	<li>	|	Define um item de lista, usado dentro de <ol> ou <ul>.	|
|	<dl>	|	Cria uma lista de descrição, útil para glossários ou definições.	|
|	<dt>	|	Define um termo dentro de uma lista de descrição.	|
|	<dd>	|	Define a descrição de um termo em uma lista de descrição.	|
|	<figure>	|	Agrupa elementos de mídia e legendas, como imagens e legendas.	|
|	<figcaption>	|	Define a legenda de um elemento <figure>.	|
|	<a>	|	Define um link para outra página ou recurso.	|
|	<strong>	|	Aplica forte ênfase ao texto, geralmente exibido em negrito.	|
|	<em>	|	Aplica ênfase ao texto, geralmente exibido em itálico.	|
|	<b>	|	Exibe o texto em negrito, sem indicar ênfase.	|
|	<i>	|	Exibe o texto em itálico, sem indicar ênfase.	|
|	<u>	|	Sublinha o texto.	|
|	<small>	|	Exibe o texto em tamanho menor.	|
|	<mark>	|	Destaca o texto, geralmente usado para indicar partes importantes ou relevantes com um fundo colorido (tipo marcador de texto).	|
|	<del>	|	Indica texto deletado ou riscado.	|
|	<ins>	|	Indica texto inserido, geralmente com sublinhado.	|
|	<sub>	|	Exibe o texto em subscrito.	|
|	<sup>	|	Exibe o texto em sobrescrito.	|
|	<br>	|	Insere uma quebra de linha.	|
|	: ---	|	: ---	|

## Conteúdo de Mídia

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<img>	|	Usado para inserir uma imagem na página. Requer o atributo src para especificar o caminho da imagem e alt para fornecer uma descrição.	|
|	<audio>	|	Incorpora áudio na página. Pode incluir controles de reprodução usando o atributo controls.	|
|	<video>	|	Incorpora vídeo na página. Também pode incluir controles de reprodução.	|
|	<source>	|	Define fontes alternativas para <audio> e <video>, permitindo que o navegador escolha o formato compatível.	|
|	<track>	|	Adiciona faixas de legendas, descrições ou capítulos para vídeos. Pode ser configurado com o atributo kind para definir o tipo de faixa, como subtitles para legendas.	|
|	<iframe>	|	Incorpora outro documento ou conteúdo, como formulários, vídeos do YouTube ou mapas, na página.	|
|	<embed>	|	 Incorpora conteúdo externo diretamente na página, como documentos PDF ou plugins. É menos usado hoje em dia, mas ainda suportado para determinados conteúdos.	|
|	<object>	|	Incorpora arquivos externos, como um applet ou um documento, podendo incluir parâmetros com o elemento <param>.	|
|	<param>	|	Define parâmetros para um elemento <object>. Útil para personalizar conteúdo incorporado.	|
|	: ---	|	: ---	|

## Tabelas

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<table>	|	Cria uma tabela para exibir dados em linhas e colunas.	|
|	<caption>	|	Define o título ou legenda de uma tabela, aparecendo na parte superior.	|
|	<thead>	|	Agrupa o cabeçalho da tabela em uma seção separada, útil para estilos e acessibilidade.	|
|	<tbody>	|	Agrupa o corpo da tabela, diferenciando-o do cabeçalho e do rodapé.	|
|	<tfoot>	|	Agrupa o rodapé da tabela, geralmente usado para somas ou notas.	|
|	<tr>	|	Cria uma linha dentro de uma tabela. Usado para agrupar <th> e <td>.	|
|	<th>	|	Define uma célula de cabeçalho, geralmente exibida em negrito. Normalmente usada na primeira linha ou coluna para identificar categorias.	|
|	<td>	|	Define uma célula de dados na tabela.	|
|	<colgroup>	|	Agrupa uma ou mais colunas para aplicar estilos ou atributos específicos.	|
|	<col>	|	Especifica atributos de estilo para uma coluna específica dentro de <colgroup>.	|
|	: ---	|	: ---	|

## Formulários

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<form>	|	Cria um formulário para coleta de dados do usuário. O atributo action especifica o local para onde os dados serão enviados, e method define o método de envio (GET ou POST).	|
|	<input>	|	Cria campos de entrada de dados, como texto, senhas, botões de envio, etc. O tipo de entrada é definido pelo atributo type.	|
|	<textarea>	|	Cria uma área de texto para a entrada de várias linhas de texto.	|
|	<button>	|	Define um botão, que pode ser usado para envio de formulário ou para outras ações, como disparar scripts JavaScript.	|
|	<select>	|	Cria um menu suspenso com opções. Cada opção é definida por um elemento <option>.	|
|	<option>	|	Define uma opção dentro de um menu suspenso <select>. Pode incluir o atributo selected para marcar a opção padrão.	|
|	<optgroup>	|	Agrupa opções dentro de um menu suspenso <select>, permitindo categorização.	|
|	<label>	|	Define rótulos para elementos de formulário, tornando-os mais acessíveis. O atributo for associa o rótulo ao elemento de entrada.	|
|	<fieldset>	|	Agrupa campos do formulário em uma seção, geralmente com uma borda ao redor.	|
|	<legend>	|	Fornece uma legenda para um <fieldset>, ajudando a descrever o grupo de campos.	|
|	<datalist>	|	Define uma lista de opções predefinidas para um campo <input>, ajudando o usuário com sugestões de preenchimento.	|
|	<output>	|	Exibe o resultado de um cálculo ou outra ação do usuário.	|
|	<progress>	|	Exibe o progresso de uma tarefa, como o download de um arquivo. O atributo value representa o progresso atual, e max o valor total.	|
|	<meter>	|	Representa uma medição em uma faixa definida, como um nível de bateria. O valor deve estar entre min e max.	|
|	: ---	|	: ---	|

## Scripts

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<script>	|	Define um bloco de código JavaScript que pode ser executado na página. O atributo src é usado para incluir um arquivo externo.	|
|	<noscript>	|	Fornece conteúdo alternativo para navegadores que não suportam ou têm o JavaScript desativado.	|
|	: ---	|	: ---	|

## Acessibilidade e Interação

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<details>	|	Cria um elemento que pode ser expandido ou recolhido, geralmente utilizado para mostrar ou ocultar informações adicionais.	|
|	<summary>	|	Define um resumo ou título para um elemento <details>. É sempre visível e pode ser clicado para expandir ou recolher o conteúdo.	|
|	<dialog>	|	Representa uma caixa de diálogo que pode ser usada para interações do usuário, como confirmações ou entradas de dados.	|
|	<canvas>	|	Desenhar gráficos e animações dinâmicas via JavaScript. Ele fornece uma área retangular em que você pode desenhar e manipular imagens, formas e textos.	|
|	<template>	|	Bloco de código que pode ser usado para armazenar conteúdo que não será renderizado até que seja explicitamente instanciado usando JavaScript. É útil para criar elementos que serão clonados ou reutilizados.	|
|	<slot>	|	Usado dentro de componentes Web (web components) para definir um espaço onde o conteúdo externo pode ser inserido. Ele permite que elementos pais forneçam conteúdo a elementos filhos personalizados.	|
|	<menu>	|	Utilizado para definir um menu de comandos ou uma lista de opções disponíveis para o usuário. Em contextos de formulários, ele pode incluir opções que são relevantes para a interação.	|
|	<menuitem>	|	Representa um item em um menu de contexto. Este elemento pode ser usado dentro de um <menu> para definir opções que o usuário pode selecionar (não suportado em todos os navegadores).	|
|	: ---	|	: ---	|

## Semântica

|	: ---	|	: ---	|
|	Elemento	|	Descrição	|
|	: ---	|	: ---	|
|	<bdi>	|	O elemento <bdi> (Bi-Directional Isolation) isola uma sequência de texto que pode não seguir a direção do texto ao redor. É útil quando você tem texto em direções opostas, como quando se mistura texto em árabe (que é escrito da direita para a esquerda) com texto em inglês.	|
|	<bdo>	|	 O elemento <bdo> (Bi-Directional Override) sobrescreve a direção do texto. Ele é usado para forçar a direção de leitura, seja da esquerda para a direita (LTR) ou da direita para a esquerda (RTL).	|
|	<abbr>	|	Usado para abreviações. Ele pode incluir um atributo title que fornece a forma completa da abreviação quando o usuário passa o mouse sobre ela.	|
|	<cite>	|	Usado para referenciar o título de uma obra, como livros, filmes, artigos ou outras publicações. Normalmente, o texto contido é exibido em itálico, indicando que se trata de uma citação.	|
|	<code>	|	Utilizado para apresentar um trecho de código de programação. O texto dentro deste elemento é geralmente exibido em uma fonte monoespaçada para diferenciá-lo do texto normal.	|
|	<data>	|	Usado para associar um valor de conteúdo com um formato específico, representando o valor em formato de máquina. Ele pode conter um valor legível por humanos, junto com um valor que pode ser processado por máquinas.	|
|	<kbd>	|	Usado para indicar que o texto deve ser inserido por um usuário, como quando se menciona combinações de teclas.	|
|	<samp>	|	Utilizado para representar um exemplo de saída de um programa de computador (output) ou de uma interface. Assim como o <code>, geralmente é exibido em uma fonte monoespaçada.	|
|	<time>	|	Define um período específico de tempo, como datas e horas. Pode incluir o atributo datetime para especificar um formato padrão.	|
|	: ---	|	: ---	|

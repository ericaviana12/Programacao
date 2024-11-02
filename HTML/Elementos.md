# Elementos da linguagem HTML e suas categorias


## Organização de Documento

<!DOCTYPE> - Define o tipo de documento, essencial para que o navegador interprete o HTML corretamente.

Exemplo:
<!DOCTYPE html>

---

<head> - Contém metadados e links para recursos externos, como CSS e JavaScript.

Exemplo:
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
  <link rel="stylesheet" href="styles.css">
</head>

---

<title> -  Define o título da página (aparece na aba do navegador).

Exemplo:
<title>Minha Página de Exemplo</title>

---

<base> - Define uma URL base para todos os links relativos da página. Com <base>, qualquer link relativo, como <a href="pagina.html">, será interpretado como https://www.example.com/pagina.html.

Exemplo:
<base href="https://www.example.com/">

---

<meta> - Fornece metadados, como a codificação de caracteres, a descrição e palavras-chave da página.

Exemplo:
<meta charset="UTF-8">
<meta name="description" content="Descrição da minha página">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

---

charset= (dentro de <meta>) - Define a codificação de caracteres do documento.

Exemplo:
<meta charset="UTF-8">

---

name="description" (dentro de <meta>) - Fornece uma breve descrição do conteúdo da página, útil para SEO.

Exemplo:
<meta name="description" content="Descrição da página aqui.">

---

name="keywords" (dentro de <meta>) - Lista palavras-chave relevantes para a página, embora seu uso tenha diminuído em SEO.

Exemplo:
<meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3">

---

name="viewport" (dentro de <meta>) - Controla a forma como a página é exibida em dispositivos móveis.

Exemplo:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

---

name="author" (dentro de <meta>) - Indica o autor do documento.

Exemplo:
<meta name="author" content="Nome do Autor">

---

<link> - Usado para vincular arquivos externos, como folhas de estilo (CSS) e ícones.

Exemplo:
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico" type="image/x-icon">

---

<style> -  Define estilos (CSS) internos para a página.

Exemplo:
<style>
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
</style>

---

<body> - O conteúdo visível da página HTML fica dentro da tag <body>.

Exemplo:
<body>
  <h1>Bem-vindo à Minha Página</h1>
  <p>Este é um parágrafo de exemplo.</p>
</body>

export default function templateHtmlEmail ({ title, message, path, textButton }) {
  return `<!DOCTYPE html>
  <html lang="es">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet">
  </head>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Work Sans', sans-serif;
    }
  
    .body {
      display: grid;
      place-items: center;
      gap: 20px;
      background-color: #68a7ad;
      color: white;
    }
  
    .button {
      text-decoration: none;
      background-color: #ffffff;
      padding: 10px 20px;
      border-radius: 2rem;
      font-weight: 600;
      color: #68a7ad;
      border: 2px solid;
    }
  </style>
  
  <body class="body" style="background-color: #0000ff">
    <img src="logo.svg" width="340" alt="Here will be the logo">
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="${path}" class="button">${textButton}</a>
  </body>
  
  </html>`
}

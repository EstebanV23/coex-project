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
  
  <body class="body" style="
    background-color: #68A7AD;
    box-sizing: border-box;
    display: grid;
    place-items: center;
    text-align: center;
    gap: 20px;
    color: white;
    margin: 0;
    padding: 20px;
    margin: auto;
    border-radius: 1rem;
    font-family: 'Work Sans', sans-serif;
    max-width: 800px;"
  >
    <img src="cid:logo" width="60%" style="align-self: center; margin: auto;" alt="Here will be the logo">
    <h1 style="font-size: 2rem; margin: 10px;">${title}</h1>
    <p style="font-size: 1.3rem; margin: 10px;">${message}</p>
    <a href="${path}" class="button" style="
      text-decoration: none;
      background-color: #ffffff;
      padding: 10px 20px;
      border-radius: 2rem;
      margin: auto;
      margin-top: 10px;
      font-weight: 600;
      color: #68a7ad;
      border: 2px solid;
      width: fit-content;
      font-size: 1.3rem;"
    >
      ${textButton}
    </a>
  </body>
  
  </html>`
}

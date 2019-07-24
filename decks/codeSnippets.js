export default {
  slide2: [
    {
      id: '1',
      content: `<form>\n\t<!-- Zawartość formularza -->\n</form>`,
    },
  ],
  slide3: [
    {
      id: '1',
      content: `<form action="/action_page.php">...</form>`,
    },
  ],
  slide4: [{ id: '1', content: `<form method="get">...</form>` }],
  slide5: [{ id: '1', content: `<label for="email">E-mail</label>` }],
  slide6: [{ id: '1', content: `<input type="text" name="email" />` }],
  slide7: [
    {
      id: '1',
      content: `<input type="text" name="email" />`,
    },
    {
      id: '2',
      content: `<label for="email">E-mail</label>`,
    },
  ],
  slide8: [
    {
      id: '1',
      content: `<input type="text" name="email" list="fruits" />

  <datalist id="fruits">
    <option value="Apple" />
      <option value="Orange" />
      <option value="Strawberry" />
  </datalist>`,
    },
  ],
  slide9: [
    {
      id: '1',
      content: `<select>\n\t<option value="apple">Apple</option>\n\t<option value="orange">Orange</option>\n\t<option value="strawberry">Strwaberry</option>\n</select>`,
    },
  ],
  slide10: [
    {
      id: '1',
      content: `<textarea rows="4" cols="60">\n\tPoczątkowy tekst zawarty w polu.\n</textarea>`,
    },
  ],
  slide11: [
    {
      id: '1',
      content: `<!-- Przycisk bez dodatkowych właściwości -->
      <button type="button">Normalny<button>

      <!-- Przycisk Powodujący wysłanie formularza -->
      <button type="submit">Wyślij<button>

      <!-- Przycisk resetujący wszystkie pola formularza -->
      <button type="reset">Resetuj<button>`,
    },
  ],
  slide13: [
    {
      id: '1',
      content: `<form action="" method="post" enctype="text/plain">
      <input type="text" placeholder="USERNAME" name="username" required>
        <input type="email" placeholder="EMAIL" name="email" required>
        <input type="password" placeholder="PASSWORD" name="password" required>
        <div class="size-xs">
          By creating an account you agree to our <a href="#">Terms/Privacy</a>
        </div>
        <button type="submit">CREATE ACCOUNT</button>
    </form>`,
    },
  ],
  slide17: [
    {
      id: '1',
      content: `<head>\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>`,
    },
  ],
  slide19: [
    {
      id: '1',
      content: `.container {\n\tfont-size: 16px;\n}
      \n@media screen and (max-width: 680px) {\n\t.container {\n\tfont-size: 14px;\n\t}\n}`,
    },
  ],
  slide22: [
    {
      id: '1',
      content: `@media screen and (max-width: 680px) {...}`,
    },
  ],
  slide24: [
    {
      id: '1',
      content: `@media (max-width: 680px) {...}`,
    },
  ],
  slide26: [
    {
      id: '1',
      content: `@media screen, (max-width: 680px) {...}`,
    },
  ],
  slide41: [
    {
      id: '1',
      content: `.box {\n\tposition: relative;\n}\n\n.box::before {\n\tcontent: '';\n\tposition: absolute;\n}`,
    },
  ],
  slide45: [
    {
      id: '1',
      content: `.box {\n\tposition: static;\n}`,
    },
  ],
  slide46: [
    {
      id: '1',
      content: `.box {\n\tposition: relative;\n}`,
    },
  ],
  slide47: [
    {
      id: '1',
      content: `.box {\n\tpositon: relative;\n\ttop: 20px;\n\tleft: 40px;\n}`,
    },
  ],
  slide49: [
    {
      id: '1',
      content: `.box {\n\tposition: absolute;\n}`,
    },
  ],
  slide50: [
    {
      id: '1',
      content: `.box-1 {\n\tpositon: relative;\n}\n.box-2 {\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 20px;\n}`,
    },
  ],
  slide52: [
    {
      id: '1',
      content: `.box {\n\tposition: fixed;\n}`,
    },
  ],
  slide53: [
    {
      id: '1',
      content: `.box {\n\tposition: fixed;\n\tbottom: 10px;\n\tright: 10px;\n}`,
    },
  ],
  slide54: [
    {
      id: '1',
      content: `.yellow { z-index: 100; }\n.red { z-index: 1; }\n.green { z-index: 0; }\n.blue { z-index: -2; }`,
    },
  ],
  slide59: [
    {
      id: '1',
      content: `:root {\n\t--primaryColor: #f23d12;\n}`,
    },
  ],
  slide63: [
    {
      id: '1',
      content: `:root {\n\t--primaryColor: #f23d12;\n}\n.element {\n\tcolor: var(--primaryColor);\n}`,
    },
  ],
};

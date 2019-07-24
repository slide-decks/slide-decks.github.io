import { css } from 'styled-components';
import code from './codeSnippets';
import { blue } from 'ansi-colors';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

export default {
  slides: [
    {
      slide_id: '0',
      template: 'Title',
      animation: {
        type: 'horizontal',
      },
      content: {
        images: [
          {
            number: '1',
            path: '/static/rwd_image.png',
          },
          {
            number: '2',
            path: '/static/sass.png',
          },
        ],
        title: 'WARSZTATY HTML i CSS 2',
        subtitle:
          'na których odkryjemy nowości, wprowadzone w CSS-ie wostatnich latach i dowiemy się wszystkiego, co jest nam potrzebne, by samodzielnie zakodować layout każdej strony internetowej.',
      },
    },
    {
      slide_id: '1',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Formularze',
      },
    },
    {
      slide_id: '2',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Znacznik <form>',
        content: 'Wyznacza obszar formularza. To w nim wpisujemy wszystkie tagi związane z danym formularzem.',
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide2,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '3',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Atrybuty formularza - action',
        content: 'Określa, gdzie mają zostać wysłane dane z formularza. Używanenajczęściej w połączeniu z PHP.',
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide3,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '4',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Atrybuty formularza - method',
        content: 'Forma przesłania danych z formularza.',
        additionalInfo: [
          {
            id: '1',
            text: 'get - dane będą widoczne w pasku adresu przeglądarki.',
            top: '70%',
            left: '10%',
          },
          {
            id: '2',
            text: 'post - wysyła dane w sposób niewidoczny dla użytkownika.',
            top: '70%',
            left: '50%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide4,
        language: 'html',
        stylesObj: {
          fontSize: 70,
          position: 'absolute',
          top: '25%',
        },
      },
    },
    {
      slide_id: '5',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: '<label></label> Etykieta dla danego pola formularza.',
        additionalInfo: [
          {
            id: '1',
            text: 'Nazwa pola formularza, dla którego stworzyliśmy daną etykietę.',
            top: '70%',
            left: '10%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: 'static/arrow.svg',
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '40%',
              transform: 'rotate(300deg)',
            },
          },
        ],
        codeSnippets: code.slide5,
        language: 'html',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '25%',
        },
      },
    },
    {
      slide_id: '6',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: '<input/> Pole do wpisania tekstu o wysokości jednego wiersza.',
        additionalInfo: [
          {
            id: '1',
            text: `Typ pola:\ntext - normalne (tekstowe) password - kropki zamiast znaków`,
            top: '70%',
            left: '10%',
          },
          {
            id: '2',
            text: 'Nazwa pola',
            top: '70%',
            left: '65%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: 'static/arrow.svg',
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '40%',
              transform: 'rotate(300deg)',
            },
          },
          {
            number: '2',
            src: 'static/arrow.svg',
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '65%',
              transform: 'rotate(260deg)',
            },
          },
        ],
        codeSnippets: code.slide6,
        language: 'html',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '25%',
        },
      },
    },
    {
      slide_id: '7',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: 'Połączenie pola formularza z jego etykietą.',
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: 'static/double-arrow1.svg',
            width: 200,
            height: 100,
            style: {
              top: '55%',
              left: '60%',
              transform: 'rotate(140deg)',
            },
          },
        ],
        codeSnippets: code.slide7,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '8',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<datalist><datalist/>
        Lista możliwych wartości inputa, dodająca do niego autosugestie..`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: 'static/double-arrow1.svg',
            width: 80,
            height: 80,
            style: {
              top: '47%',
              left: '53%',
              transform: 'rotate(155deg)',
            },
          },
        ],
        codeSnippets: code.slide8,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '9',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<select></select>
        Lista rozwijana.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide9,
        language: 'html',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '10',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<textarea></textarea>
        Pole do wpisania dłuższego tekstu. Rozmiar pola może obejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide10,
        language: 'html',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '11',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<button></button>
        Przycisk.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide11,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '12',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/mockup.png',
        title: 'Co zakodujemy - mockup',
        link: 'https://www.figma.com/file/BDpg9TcboEBXlmmlevMd8h/Untitled-(Copy)?node-id=13%3A21',
      },
    },
    {
      slide_id: '13',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<textarea></textarea>
        Pole do wpisania dłuższego tekstu. Rozmiar pola możeobejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide13,
        language: 'html',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '14',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Responsywność',
      },
    },
    {
      slide_id: '15',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/meme-RWD.png',
        title: 'Po co nam responsywność?',
      },
    },
    {
      slide_id: '16',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://pic4.zhimg.com/v2-776f2c1d1d904eeb5c209b94408d29f1_1200x500.gif',
        title: 'Responsywność',
        content: `Zdolność strony internetowej do automatycznego dopasowywaniaswojego wyglądu do wielkości ekranu, na którym jest wyświetlana.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '17',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalująone faktyczne rozmiary strony (np. zmniejszając je dwukrotnie).Aby tego uniknąć wystarczy jeden tag: `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide17,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '18',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalują one faktyczne rozmiary strony (np. zmniejszając je dwukrotnie). Aby tego uniknąć wystarczy jeden tag: `,
        additionalInfo: [
          {
            id: '1',
            text: 'Sprawia, że szerokość strony jest równa szerokości urządzenia.',
            top: '40%',
            left: '35%',
          },
          {
            id: '2',
            text: 'Sprawia, że strona domyślnie wczytywana jest w skali 1:1.',
            top: '70%',
            left: '45%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: 'static/arrow.svg',
            width: 70,
            height: 70,
            style: {
              top: '50%',
              left: '55%',
              transform: 'rotate(270deg)',
            },
          },
          {
            number: '2',
            src: 'static/arrow.svg',
            width: 70,
            height: 70,
            style: {
              top: '63%',
              left: '80%',
              transform: 'rotate(130deg)',
            },
          },
        ],
        codeSnippets: code.slide17,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '19',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Konstrukcja, dzięki której możemy zadecydować na jakich ekranach i przy jakich ich wielkościach zastosować określone style. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '20',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Domyślnie wszystko w elemencie o klasie container będzie miało font owielkości 16px. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: 'static/rectangular-outline.svg',
            width: 400,
            height: 400,
            style: {
              top: '28%',
              left: '30%',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '21',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Na ekranach o szerokości mniejszej lub równej 680px domyślne style zostaną nadpisane a font będzie miał 14 px. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '22',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Słowo kluczowe, które zawsze pojawia się na początku reguły dotyczącej styli specyficznych dla ekranów danego typu i rozmiaru. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '23',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Określa typ ekranu, na którym mają zostać zastosowane określonestyle. Możliwe wartości to:
        all - wszystkie typy ekranu (ustawienie domyślne).
        print - drukarki (wygląd podaczas wydruku).
        screen - ekrany komputerów, tabletów, telefonów itp.
        speech - czytniki odczytujące treść strony na głos. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '24',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `W większości przypadków ustalanie typu ekranu nie będzie Cipotrzebne i możesz je pominąć. `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide24,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '25',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Tzw. spójnik logiczny. Pozwala na łączenie warunków.
        Zastosuj style z klamr jeżeli użytkownik przedląda stronę naekranie oraz szerokość strony jest nie większa niż 680px. Aby stylezostały zastosowane muszą być spełnione oba warunki. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '26',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Tzw. spójnik logiczny. Pozwala na łączenie warunków.
        Zastosuj style z klamr jeżeli użytkownik przedląda stronę naekranie lub szerokość strony jest nie większa niż 680px. Aby stylezostały zastosowane musi być spełniony co najmniej jeden zwarunków.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide26,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '27',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Określa wymiary strony, przy których mają zostać zastosowaneokreślone style. Możliwe wartości to:max-width - o szerokości mniejszej lub równej. min-width - o szerokości większej lub równej.    max-height - o wysokości mniejszej lub równej.min-height - o wysokości większej lub równej.  `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '28',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Style, które mają zostać zastosowane, jeżeli spełniony zostałwcześniej opisany warunek.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '29',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Responsywność - praktyka',
      },
    },
    {
      slide_id: '30',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/dKqqGO',
      },
    },
    {
      slide_id: '31',
      template: 'Image',
      animation: {
        type: 'horizontal',
      },
      content: {
        imageSrc: `https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_400,w_1100,x_0,y_0/fl_lossy/f_auto/a_ignore/v1530026674/acecaf5d-7c24-4a5b-84b6-42fea424b6ec.gif`,
      },
    },
    {
      slide_id: '32',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/ZRMMpd',
      },
    },
    {
      slide_id: '33',
      template: 'Image',
      animation: {
        type: 'horizontal',
      },
      content: {
        imageSrc: `https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_400,w_1100,x_0,y_0/fl_lossy/f_auto/a_ignore/v1530027579/7b713f96-cb3f-44aa-a9a5-9ccc16101502.gif`,
      },
    },
    {
      slide_id: '34',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/wXEENN',
      },
    },
    {
      slide_id: '35',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy i pseudoelementy',
      },
    },
    {
      slide_id: '36',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      // Dodać iFrame z Codepen!!!!!!!!
      content: {
        image: 'https://pic4.zhimg.com/v2-776f2c1d1d904eeb5c209b94408d29f1_1200x500.gif',
        title: 'Pseudoklasa',
        content: `Specjalny dopisek do selektora, dzięki któremu niektóre style dodają się doniego tylko w ściśle określonymprzypadku.
        Pseudoklasy zawsze zaczynamy dwukropkiem.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '37',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy dynamiczne',
        content: 'Element nabywa/traci daną pseudoklasę w wyniku interakcji z użytkownikiem.',
        items: [
          {
            service_id: '1',
            icon: '',
            title: ':hover',
            content: 'Element, nad którym znajduje się kursor.',
          },
          {
            service_id: '2',
            icon: '',
            title: ':active',
            content: 'Element, w trakcie trwania kliknięcia.',
          },
          {
            service_id: '3',
            icon: '',
            title: ':focus',
            content: 'Zogniskowany link lub pole formularza.',
          },
          {
            service_id: '4',
            icon: '',
            title: ':link',
            content: 'Nieodwiedzony link.',
          },
          {
            service_id: '5',
            icon: '',
            title: ':visited',
            content: 'Odwiedzony link.',
          },
        ],
      },
    },
    {
      slide_id: '38',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy strukturalne',
        content: 'Posiadanie tej klasy zależy od miejsca elementu w dokumencie (w relacji do innych elementów).',
        items: [
          {
            service_id: '1',
            icon: '',
            title: ':first-child',
            content: 'Pierwsze dziecko danego elementu',
          },
          {
            service_id: '2',
            icon: '',
            title: ':root',
            content: 'Element najwyżej w hierarchii (najczęściej <html>).',
          },
          {
            service_id: '3',
            icon: '',
            title: ':last-child',
            content: 'Ostatnie dziecko danego elementu.',
          },
          {
            service_id: '4',
            icon: '',
            title: ':nth-child(n)',
            content: 'n-te dziecko danego elementu.n jest liczbą naturalną >= 1.',
          },
          {
            service_id: '5',
            icon: '',
            title: ':nth-of-type(n)',
            content: 'n-te dziecko elementu o określonym typie. n jest liczbą naturalną >= 1.',
          },
        ],
      },
    },
    {
      slide_id: '39',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      // Dodać iFrame z Codepen!!!!!!!!
      content: {
        image: 'https://pic4.zhimg.com/v2-776f2c1d1d904eeb5c209b94408d29f1_1200x500.gif',
        title: 'Pseudoklasa',
        content: `Pozwalają odnieść się do specjalnychelementów struktury dokumentu orazutomatycznie generować pewnązawartość w określonych miejscach.
        Pseudoelementy zawsze zaczynamy podwójnym dwukropkiem.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
  ],
};

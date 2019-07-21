import { css } from 'styled-components';
import code from './codeSnippets';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

export default {
  slides: [
    {
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
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Formularze',
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Znacznik <form>',
        content: 'Wyznacza obszar formularza. To w nim wpisujemy wszystkie tagi związane z danym formularzem.',
        additionalInfo: [],
        codeSnippets: code.slide2,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Atrybuty formularza - action',
        content: 'Określa, gdzie mają zostać wysłane dane z formularza. Używanenajczęściej w połączeniu z PHP.',
        additionalInfo: [],
        codeSnippets: code.slide3,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
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
        codeSnippets: code.slide4,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
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
        codeSnippets: code.slide5,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
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
        codeSnippets: code.slide6,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: 'Połączenie pola formularza z jego etykietą.',
        additionalInfo: [],
        codeSnippets: code.slide7,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<datalist><datalist/>
        Lista możliwych wartości inputa, dodająca do niego autosugestie..`,
        additionalInfo: [],
        codeSnippets: code.slide8,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<select></select>
        Lista rozwijana.`,
        additionalInfo: [],
        codeSnippets: code.slide9,
        language: 'html',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<textarea></textarea>
        Pole do wpisania dłuższego tekstu. Rozmiar pola możeobejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        codeSnippets: code.slide10,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<textarea></textarea>
        Pole do wpisania dłuższego tekstu. Rozmiar pola możeobejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        codeSnippets: code.slide11,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
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
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza',
        content: `<textarea></textarea>
        Pole do wpisania dłuższego tekstu. Rozmiar pola możeobejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        codeSnippets: code.slide13,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Responsywność',
      },
    },
    {
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
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://pic4.zhimg.com/v2-776f2c1d1d904eeb5c209b94408d29f1_1200x500.gif',
        title: 'Responsywność',
        content: `Zdolność strony internetowej do automatycznego dopasowywaniaswojego wyglądu do wielkości ekranu, na którym jest wyświetlana.`,
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalująone faktyczne rozmiary strony (np. zmniejszając je dwukrotnie).Aby tego uniknąć wystarczy jeden tag: `,
        additionalInfo: [],
        codeSnippets: code.slide17,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalująone faktyczne rozmiary strony (np. zmniejszając je dwukrotnie).Aby tego uniknąć wystarczy jeden tag: `,
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
            left: '50%',
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
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Konstrukcja, dzięki której możemy zadecydować na jakich ekranach i przy jakich ich wielkościach zastosować określone style. `,
        additionalInfo: [],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Domyślnie wszystko welemencie o klasie container będzie miało font owielkości 16px. `,
        additionalInfo: [],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Na ekranach o szerokości mniejszej lub równej 680px domyślne style zostaną nadpisane a font będzie miał 14 px. `,
        additionalInfo: [],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Słowo kluczowe, które zawsze pojawia się na początku reguły dotyczącej styli specyficznych dla ekranów danego typu i rozmiaru. `,
        additionalInfo: [],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      template: 'Services',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            icon: '/static/icons/light/calendar-alt.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/comments.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/gem.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/hourglass-half.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/paper-plane.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/star.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            icon: '/static/icons/light/calendar-alt.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/comments.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/gem.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/hourglass-half.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/paper-plane.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/star.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        first: true,
        items: [
          {
            image: 'https://images.unsplash.com/photo-1469989744817-b70e88eb8cda?w=600&q=80',
            date: '01.01',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&q=80',
            date: '01.02',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=600&q=80',
            date: '01.03',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        styles: timelineNoContent,
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80',
            date: '01.04',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1472584069410-35e46830b642?w=600&q=80',
            date: '01.05',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80',
            date: '01.06',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        last: true,
        styles: timelineNoContent,
        items: [
          {
            image: 'https://images.unsplash.com/photo-1526244434298-88fcbcb066b5?w=600&q=80',
            date: '01.07',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1523527927236-da4036f4f66b?w=600&q=80',
            date: '01.08',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1523575166472-a83a0ed1d522?w=600&q=80',
            date: '01.09',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            number: '01',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '02',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '03',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '04',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '05',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '06',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'NumberItems2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            number: '1',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '2',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '3',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '4',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '5',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '6',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Pineapple',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Vivamus ac risus eget orci mollis sodales. Praesent faucibus accumsan risus. Etiam semper orci id tellus dignissim pretium.',
        items: [
          {
            name: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            name: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Projects',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1484071096222-7936a931e094?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Logos',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'http://pngimg.com/uploads/intel/intel_PNG15.png',
          },
          {
            image:
              'https://wiki.duraspace.org/download/attachments/31655033/duracloud_logo_12in.png?version=1&modificationDate=1329183208810&api=v2',
          },
          {
            image: 'https://github.githubassets.com/images/modules/site/logos/spotify-logo.png',
          },
          {
            image:
              'https://static1.squarespace.com/static/567069c3d82d5e5d015ccbac/56bc080545bf21e4826b890c/5b0eaf48f950b73551e8f753/1527689039587/amazon+logo.png',
          },
          {
            image: 'https://us.coca-cola.com/content/dam/coke2016/walgreens-fall-football/Coca-Cola-logo.png',
          },
          {
            image: 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
          },
        ],
      },
    },
    {
      template: 'Pineapple2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        items: [
          {
            value: 1,
            name: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            value: 2,
            name: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            value: 3,
            name: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Card',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        subtitle: 'Slide subtitle',
        icon: '/static/icons/light/gem.svg',
        image: 'https://images.unsplash.com/photo-1553109231-0bd785712347?w=1350&q=80',
        content: `
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        `,
      },
    },
    {
      template: 'Percentages',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            value: 25,
            title: 'Percent one',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            value: 48,
            title: 'Percent two',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            value: 81,
            title: 'Percent three',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
        ],
      },
    },
    {
      template: 'CodeSandbox',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'mzq0jz1ryp',
      },
    },
    {
      template: 'SocialMedia',
      animation: {
        type: 'horizontal',
      },
      content: {
        items: [
          {
            image: '/static/icons/light/social_media_one.png',
            line: '/static/icons/light/top_line.svg',
            title: 'Item name',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            image: '/static/icons/light/social_media_two.png',
            line: '/static/icons/light/medium_line.svg',
            title: 'Item 2',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            image: '/static/icons/light/social_media_three.png',
            line: '/static/icons/light/bottom_line.svg',
            title: 'Item 3',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
        ],
      },
    },
    {
      template: 'Funnel',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        items: [
          {
            image: '/static/icons/light/funnel_piece_one.svg',
            name: 'Item name 1',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_two.svg',
            name: 'Item name 2',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_three.svg',
            name: 'Item name 3',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_four.svg',
            name: 'Item name 4',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_five.svg',
            name: 'Item name 5',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_six.svg',
            name: 'Item name 6',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
        ],
      },
    },
  ],
};

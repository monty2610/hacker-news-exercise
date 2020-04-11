import css from 'styled-jsx/css';

const body = css.global`
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Semibold.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Bold.ttf');
    font-weight: 600;
  }

  body {
    font-family: 'Open Sans';
    font-size: 14px;
  }
`;

export default body;

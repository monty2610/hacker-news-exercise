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

  button {
    background: none;
    border: none;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .smallText {
    font-size: 8px;
  }

  .mediumText {
    font-size: 10px;
  }

  .largeText {
    font-size: 12px;
  }

  .primary {
    color: #000;
  }

  .secondary {
    color: #828282;
  }

  .tertiary {
    color: #b8b8b8;
  }

  .bold {
    font-weight: 600;
  }
`;

export default body;

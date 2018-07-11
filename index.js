const syntaxHue           = '220';
const syntaxSubsituabtion = '13%';
const syntaxBrightness    = '18%';

// Monochrome
const mono = {
  '1': `hsl(${syntaxHue}, 14%, 71%)`,
  '2': `hsl(${syntaxHue}, 9%, 55%)`,
  '3': `hsl(${syntaxHue}, 10%, 40%)`,
};

// Colors
const hue = {
  '1': 'hsl(187, 47%, 55%)', // cyan
  '2': 'hsl(207, 82%, 66%)', // blue
  '3': 'hsl(286, 60%, 67%)', // purple
  '4': 'hsl( 95, 38%, 62%)', // green
  '5': {
    '1': 'hsl(355, 65%, 65%)', // red 1
    '2': 'hsl( 5, 48%, 51%)',  // red 2
  },
  '6': {
    '1': 'hsl( 29, 54%, 61%)', // orange 1
    '2': 'hsl( 39, 67%, 69%)', // orange 2
  },
};

// Base color
const syntaxFg     = mono['1'];
const syntaxBg     = `hsl(${syntaxHue}, ${syntaxSubsituabtion}, ${syntaxBrightness})`;
const syntaxGutter = `hsl(${syntaxHue}, 14%, 89%)`;
const syntaxGuide  = `hsl(${syntaxHue}, 16%, 71%)`;
const syntaxAccent = `hsl(${syntaxHue}, 100%, 66%)`;

module.exports.onWindow = (browserWindow) => browserWindow.setVibrancy("ultra-dark");

exports.decorateConfig = (config) => {
  // The key which will be used in `~/.hyper.js`
  const configKey  = 'theme';
  const userConfig = config.hasOwnProperty(configKey) && config[configKey];

  return Object.assign({}, {
    fontFamily:      "'Fira Code', '游ゴシック体'",
    fontSize:        16,
    fontWeight:      500,
    fontWeightBold:  700,
    backgroundColor: syntaxBg,
    foregroundColor: syntaxFg,
    borderColor:     syntaxGutter,
    cursorColor:     syntaxAccent,

    colors: {
      black:        mono['2'],
      red:          hue['5']['1'],
      green:        hue['4'],
      yellow:       hue['6']['1'],
      blue:         hue['2'],
      magenta:      hue['3'],
      cyan:         hue['1'],
      white:        mono['1'],
      lightBlack:   mono['2'],
      lightRed:     hue['5']['2'],
      lightGreen:   hue['4'],
      lightYellow:  hue['6']['2'],
      lightBlue:    hue['2'],
      lightMagenta: hue['3'],
      lightCyan:    hue['1'],
      lightWhite:   mono['1'],
    },

    css: `
      ${config.css}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background-color: rgba(0, 0, 0, .15) !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        background: rgba(255, 255, 255, .05);
      }
      .hyper-search-wrapper {
          border: 0 !important;
          padding: 0 !important;
          background-color: transparent !important;
          display: flex;
          opacity: 0.8 !important;
        }
      .hyper-search-wrapper button {
        top: 0 !important;
        opacity: 0.8 !important;
        padding: 0 6px;
        cursor: pointer;
      }
      .hyper-search-wrapper button:hover {
        opacity: 1.0 !important;
      }
      .hyper-search-wrapper button:nth-of-type(1) {
        border-radius: 4px 0 0 4px !important;
        border-right: 1px solid #ddd !important;
      }
      .hyper-search-wrapper button:nth-of-type(2) {
        border-radius: 0 4px 4px 0 !important;
      }
      .hyper-search-wrapper:before {
        width: 20px;
        color: #000;
        position: absolute;
        content: '🔍';
        font-size: 10px;
        margin: 7px;
        z-index: 999;
      }
      #hyper-search-input {
        background-color: #fff !important;
        border-radius: 4px;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        padding: 3px 6px 3px 24px !important;
        color: #000 !important;
        opacity: 0.9 !important;
        margin-right: 2px;
      }
      #hyper-search-input:focus {
        opacity: 1.0 !important;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
      }
    `,
  }, userConfig);
};

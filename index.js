const colors        = require('./colors');
const configKey     = 'theme';
const customedTheme = config.hasOwnProperty(configKey) && config.theme[setting];

const theme = {
  fontFamily:      "'Fira Code', '游ゴシック体'",
  fontSize:        16,
  fontWeight:      500,
  fontWeightBold:  700,
  backgroundColor: colors.syntaxBg,
  foregroundColor: colors.syntaxFg,
  borderColor:     colors.mono['2'],
  cursorColor:     colors.hue['2'],

  colors: {
    black:        colors.syntaxBg,
    red:          colors.hue['5']['1'],
    green:        colors.hue['4'],
    yellow:       colors.hue['6']['1'],
    blue:         colors.hue['2'],
    magenta:      colors.hue['3'],
    cyan:         colors.hue['1'],
    white:        colors.mono['1'],
    lightBlack:   colors.mono['3'],
    lightRed:     colors.hue['5']['2'],
    lightGreen:   colors.hue['4'],
    lightYellow:  colors.hue['6']['2'],
    lightBlue:    colors.hue['2'],
    lightMagenta: colors.hue['3'],
    lightCyan:    colors.hue['1'],
    lightWhite:   colors.mono['2'],
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
  ...customedTheme
}

exports.decorateConfig = (config) => ({...config, ...theme});

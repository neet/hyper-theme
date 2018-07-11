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
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: #181a1f !important;
      }
      .splitpane_divider {
        background-color: rgba(171, 178, 191, 0.15) !important;
      }
      .tab_tab {
        font-weight: 500;
        color: rgba(157, 165, 180, 0.6);
        border-width: 0 0 0 1px;
        border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
        border-style: solid;
      }
      .tab_tab:first-of-type {
        border-width: 0;
      }
      .tab_tab:hover {
        color: rgba(157, 165, 180, 0.6);
        transition: none;
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        top: 0;
        bottom: -1px;
        left: 0;
        width: 2px;
        height: inherit;
        background: #528bff;
        opacity: 0;
        transition: opacity .16s;
        z-index: 1;
      }
      .tabs_title,
      .tab_tab.tab_active {
        font-weight: 500;
        color: #d7dae0;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active,
      .tab_tab.tab_active + .tab_tab {
        border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
      }
      .tab_tab.tab_active::before {
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left: -1px;
        bottom: -1px;
        right: 0;
        height: inherit;
        background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
        border: 1px solid #181a1f;
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tab_icon {
        display: block;
        background: rgba(157, 165, 180, 0.6);
        -webkit-mask-image: url('${__dirname}/close.svg');
        mask-image: url('${__dirname}/close.svg');
        -webkit-mask-size: 7px;
        mask-size: 7px;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position-y: center;
        mask-position-y: center;
        -webkit-mask-position-x: 8px;
        mask-position-x: 8px;
        width: 26px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0);
        transition: transform .08s;
        opacity: 1;
        border-radius: 0;
        z-index: 2;
      }
      .tab_icon:hover {
        background: rgba(157, 165, 180, 0.6);
        opacity: .7;
      }
      .tab_tab.tab_active .tab_icon {
        background: #d7dae0;
      }
      .tab_tab.tab_active .tab_icon:hover {
        background: #d7dae0;
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
      }
      .tab_icon svg {
        display: none;
      }
      .tab_icon::after {
        display: none;
      }
    `,
  }, userConfig);
};

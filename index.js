const backgroundColor = '#292D3E';
const foregroundColor = '#959DCB';
const cursorColor     = '#FFCC00';
const selectionColor  = '#6a5e32';
const borderColor     = backgroundColor;

const colors = {
  black        : '#3a4056',
	red          : '#F07178',
	green  	     : '#C3E88D',
	yellow       : '#FFCB6B',
	blue         : '#82AAFF',
	magenta      : '#C792EA',
	cyan         : '#89DDFF',
	white        : '#d0d0d0',
	lightBlack   : '#434758',
	lightRed     : '#FF8B92',
	lightGreen   : '#DDFFA7',
	lightYellow  : '#FFE585',
	lightBlue    : '#9CC4FF',
	lightMagenta : '#E1ACFF',
	lightCyan    : '#A3F7FF',
	colorCubes   : '#ffffff',
	grayscale    : foregroundColor,
}


module.exports.decorateConfig = (config) => {
  // The key which will be used in `~/.hyper.js`
  const configKey  = 'theme';
  const userConfig = config.hasOwnProperty(configKey) && config[configKey];

  return Object.assign({}, {
    fontFamily:      "'Fira Code', 'Hack Nerd Font', '游ゴシック体'",
    fontSize:        16,
    fontWeight:      500,
    fontWeightBold:  700,
    selectionColor,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,

    css: `
      ${config.css || ''}

      .tab_tab {
        color: ${mono['2']} !important;
        background-color: ${uiBg} !important;
      }

      .tabs_title,
      .tab_tab.tab_active {
        color: ${mono['1']} !important;
        background-color: ${uiFg} !important;
        box-shadow: 0px 1px 0px ${uiFg} !important;
      }

      .tab_icon {
        background-color: ${uiBgDarker} !important;
      }

      .tab_icon:hover {
        background-color: ${uiAccent} !important;
      }

      .tabs_list {
        border-color: ${uiBgDarker} !important;
      }

      .footer_footer {
        opacity: 1;
        background-color: ${uiBg};
        border-top: 1px solid ${uiBgDarker};
      }

      .footer_footer .item_clickable:hover {
        text-decoration: none;
      }

      .footer_footer .footer_group {
        color: ${mono['2']} !important;
        transition: background 150ms ease;
      }

      .footer_footer .item_icon:before {
        background-color: ${mono['2']} !important;
        transition: background 150ms ease;
      }

      .footer_footer:hover .footer_group {
        color: ${mono['1']} !important;
        transition: background 150ms ease;
      }

      .footer_footer:hover .item_icon:before {
        background-color: ${mono['1']} !important;
        transition: background 150ms ease;
      }
    `,
  }, userConfig);
};

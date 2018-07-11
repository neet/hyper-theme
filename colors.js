
module.exports = {
  syntaxHue          : '220',
  syntaxSubsituabtion: '13%',
  syntaxBrightness   : '18%',

  // Monochrome
  mono: {
    '1': `hsl(${syntaxHue}, 14%, 71%)`,
    '2': `hsl(${syntaxHue}, 9%, 55%)`,
    '3': `hsl(${syntaxHue}, 10%, 40%)`,
  },

  // Colors
  hue: {
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
  },

  // Base color
  syntaxFg: mono['1'],
  syntaxBg: `hsl(${syntaxHue}, ${syntaxSubsituabtion}, ${syntaxBrightness})`,
}

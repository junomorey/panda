import type { Context } from '../../engines'

export const generateGlobalCss = (ctx: Context) => {
  const { globalCss = {} } = ctx.config

  ctx.stylesheet.processGlobalCss({
    ':root': {
      '--made-with-panda': `'🐼'`,
    },
    '*, *::before, *::after, ::backdrop': {
      '--blur': '/*!*/ /*!*/',
      '--brightness': '/*!*/ /*!*/',
      '--contrast': '/*!*/ /*!*/',
      '--grayscale': '/*!*/ /*!*/',
      '--hue-rotate': '/*!*/ /*!*/',
      '--invert': '/*!*/ /*!*/',
      '--saturate': '/*!*/ /*!*/',
      '--sepia': '/*!*/ /*!*/',
      '--drop-shadow': '/*!*/ /*!*/',
      '--backdrop-blur': '/*!*/ /*!*/',
      '--backdrop-brightness': '/*!*/ /*!*/',
      '--backdrop-contrast': '/*!*/ /*!*/',
      '--backdrop-grayscale': '/*!*/ /*!*/',
      '--backdrop-hue-rotate': '/*!*/ /*!*/',
      '--backdrop-invert': '/*!*/ /*!*/',
      '--backdrop-opacity': '/*!*/ /*!*/',
      '--backdrop-saturate': '/*!*/ /*!*/',
      '--backdrop-sepia': '/*!*/ /*!*/',
      '--scroll-snap-strictness': 'proximity',
      '--border-spacing-x': 0,
      '--border-spacing-y': 0,
      '--translate-x': 0,
      '--translate-y': 0,
      '--rotate': 0,
      '--skew-x': 0,
      '--skew-y': 0,
      '--scale-x': 1,
      '--scale-y': 1,
    },
  })

  ctx.stylesheet.processGlobalCss(globalCss)

  void ctx.hooks.callHook('generator:css', 'global.css', '')
}

const defaultOutputOptions = {
  inherit: false,
  base: 'vs-dark',
  rules: [{}],
  colors : {}
}

type themeInput = {
  colors: {},
  tokenColors: [{
    scope: string | [],
    settings: {},
    name: string
  }]
}

const convertTheme = (input: themeInput, outputOptions?: {}) => {
  const output = {
    ...defaultOutputOptions,
    ...outputOptions
  }

  for (const key of Object.keys(input.colors)) {
    output.colors[key] = input.colors[key] === null ? "#00000000" : input.colors[key]
  }

  input.tokenColors.forEach(item => {
    let array: string[] = []
    if (typeof item.scope === 'string') array = item.scope.split(',')
    else array = item.scope

    if (array !== undefined) {
      for (const token of array) {
        for (const key of Object.keys(item.settings)) {
          if (item.settings[key] === null) item.settings[key] = "#00000000"
        }
        output.rules.push({
          name: item.name,
          token,
          ...item.settings
        })
      }
    }
  })
  return output
}

export { convertTheme as default }
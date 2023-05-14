export type BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';

export type IColors = {
  [colorId: string]: string;
};

export interface ITokenThemeRule {
  token: string;
  foreground?: string;
  background?: string;
  fontStyle?: string;
}

export interface IStandaloneThemeData {
    base: BuiltinTheme;
    inherit: boolean;
    rules: ITokenThemeRule[];
    encodedTokensColors?: string[];
    colors: IColors;
}

type themeInput = {
  colors: {},
  tokenColors: [{
    scope?: string | [],
    settings?: {},
    name?: string
  }]
}

type outputOptions = {
  inherit: boolean,
  base: BuiltinTheme
}

type rule = {
  name: string,
  token: string,
  foreground?: string,
  background?: string,
  fontStyle?: string
}

const defaultOutput = {
  inherit: false,
  base: 'vs-dark',
  rules: [],
  colors : {}
}

const convertTheme = (input: themeInput, outputOptions?: outputOptions): IStandaloneThemeData => {
  const output = {
    ...defaultOutput,
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
        } as rule)
      }
    }
  })
  return output
}

export { convertTheme as default }
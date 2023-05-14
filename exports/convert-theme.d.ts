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
    colors: {};
    tokenColors: [
        {
            scope?: string | [];
            settings?: {};
            name?: string;
        }
    ];
};
type outputOptions = {
    inherit: boolean;
    base: BuiltinTheme;
};
declare const convertTheme: (input: themeInput, outputOptions?: outputOptions) => IStandaloneThemeData;
export { convertTheme as default };
//# sourceMappingURL=convert-theme.d.ts.map
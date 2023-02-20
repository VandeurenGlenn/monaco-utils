type themeBaseType = 'vs-dark' | 'vs-light';
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
    base: themeBaseType;
};
type rule = {
    name: string;
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
};
type rules = rule[];
type themeOutput = {
    inherit: boolean;
    base: themeBaseType;
    rules?: rules;
    colors: {};
};
declare const convertTheme: (input: themeInput, outputOptions?: outputOptions) => themeOutput;
export { convertTheme as default };
//# sourceMappingURL=convert-theme.d.ts.map
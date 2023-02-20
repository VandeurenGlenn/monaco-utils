type themeInput = {
    colors: {};
    tokenColors: [
        {
            scope: string | [];
            settings: {};
            name: string;
        }
    ];
};
declare const convertTheme: (input: themeInput, outputOptions?: {}) => {
    inherit: boolean;
    base: string;
    rules: {}[];
    colors: {};
};
export { convertTheme as default };
//# sourceMappingURL=convert-theme.d.ts.map
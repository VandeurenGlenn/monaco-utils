const defaultOutput = {
    inherit: false,
    base: 'vs-dark',
    rules: [],
    colors: {}
};
const convertTheme = (input, outputOptions) => {
    const output = {
        ...defaultOutput,
        ...outputOptions
    };
    for (const key of Object.keys(input.colors)) {
        output.colors[key] = input.colors[key] === null ? "#00000000" : input.colors[key];
    }
    input.tokenColors.forEach(item => {
        let array = [];
        if (typeof item.scope === 'string')
            array = item.scope.split(',');
        else
            array = item.scope;
        if (array !== undefined) {
            for (const token of array) {
                for (const key of Object.keys(item.settings)) {
                    if (item.settings[key] === null)
                        item.settings[key] = "#00000000";
                }
                output.rules.push({
                    name: item.name,
                    token,
                    ...item.settings
                });
            }
        }
    });
    return output;
};
export { convertTheme as default };

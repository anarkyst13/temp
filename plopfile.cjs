module.exports = function (plop) {
    // Регистрация хелпера split
    plop.setHelper("split", function (str, delimiter) {
        return str.split(delimiter);
    });

    // Хелпер для получения первого пропса с типом string
    plop.setHelper("getTextProp", function (props) {
        const propArray = props.split(",");
        for (let prop of propArray) {
            const [name, type] = prop.trim().split(":");
            if (type === "string") return name;
        }
        return null;
    });

    plop.setGenerator("entity", {
        description: "Generate a new entity (component, layout, page, section)",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the name of the entity (e.g., Button):",
                validate: (value) =>
                    value.length > 0 ? true : "Name is required",
            },
            {
                type: "list",
                name: "type",
                message: "Select the type of entity:",
                choices: ["component", "layout", "page", "section"],
            },
            {
                type: "input",
                name: "props",
                message: "Enter props (e.g., text:string, onClick:() => void):",
                default: "text:string",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile: "templates/entity.tsx.hbs",
            },
            {
                type: "add",
                path: "src/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
                templateFile: "templates/entity.styles.ts.hbs",
            },
            {
                type: "add",
                path: "src/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
                templateFile: "templates/entity.stories.tsx.hbs",
            },
            {
                type: "add",
                path: "src/{{type}}s/{{pascalCase name}}/types.ts",
                templateFile: "templates/types.ts.hbs",
            },
            {
                type: "add",
                path: "src/{{type}}s/{{pascalCase name}}/index.ts",
                templateFile: "templates/index.ts.hbs",
            },
        ],
    });
};

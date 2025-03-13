module.exports = function(plop) {
  plop.setHelper('eq', function(a, b) {
    return a === b;
  });

  plop.setGenerator('component', {
    description: 'Создать новый компонент по Atomic Design',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Какой тип компонента?',
        choices: ['atom', 'molecule', 'organism', 'template', 'page'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Как назвать компонент?',
      },
    ],
    actions: function(data) {
      let basePath;
      let filePath;
      let actions = [];

      if (['atom', 'molecule', 'organism'].includes(data.type)) {
        basePath = `src/components/${data.type}s/`;
        filePath = `${basePath}{{pascalCase name}}/`;
        actions.push(
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.tsx`,
            templateFile: 'plop-templates/component.tsx.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.types.ts`,
            templateFile: 'plop-templates/component.types.ts.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.stories.tsx`,
            templateFile: 'plop-templates/component.stories.tsx.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.test.tsx`,
            templateFile: 'plop-templates/component.test.tsx.hbs',
          },
          {
            type: 'add',
            path: `${filePath}index.ts`,
            templateFile: 'plop-templates/index.ts.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.styles.ts`,
            templateFile: 'plop-templates/component.styles.ts.hbs',
          }
        );
      } else if (data.type === 'template' || data.type === 'page') {
        basePath = data.type === 'template' ? 'src/templates/' : 'src/pages/';
        filePath = basePath;
        actions.push(
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.tsx`,
            templateFile: 'plop-templates/component.tsx.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.types.ts`,
            templateFile: 'plop-templates/component.types.ts.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.stories.tsx`,
            templateFile: 'plop-templates/component.stories.tsx.hbs',
          },
          {
            type: 'add',
            path: `${filePath}{{pascalCase name}}.test.tsx`,
            templateFile: 'plop-templates/component.test.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
            templateFile: 'plop-templates/component.styles.ts.hbs',
          },
        );
      }

      return actions;
    },
  });
};
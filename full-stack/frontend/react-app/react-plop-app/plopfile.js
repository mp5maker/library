module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'Create Component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What will be your component name?',
            },
            {
                type: 'input',
                name: 'location',
                message: 'What will be your location?',
                default: 'components'
            }
        ],
        actions: [{
            type: 'add',
            path: './src/{{location}}/{{name}}/index.tsx',
            templateFile: './plop-templates/component.hbs'
        }],
    })
    plop.setGenerator('fc', {
        description: 'Create Functional Component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What will be your functional component?'
            },
            {
                type: 'input',
                name: 'location',
                message: 'What will be your location?',
                default: 'components'
            }
        ],
        actions: [{
            type: 'add',
            path: './src/{{location}}/{{name}}/index.tsx',
            templateFile: './plop-templates/fc.hbs'
        }],
    })
    plop.setGenerator('redux', {
        description: 'Create Redux',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What will be the name of the reducer ?'
            },
        ],
        actions: (data) => {
            const actions = [
                {
                    type: 'add',
                    path: './src/redux/actions/{{name}}.tsx',
                    templateFile: './plop-templates/redux-action.hbs'
                },
                {
                    type: 'add',
                    path: './src/redux/reducers/{{name}}.tsx',
                    templateFile: './plop-templates/redux-reducer.hbs'
                }
            ]
            return actions
        },
    })
}
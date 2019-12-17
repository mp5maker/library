// import React, { Fragment } from 'react';
import React, { Fragment } from 'react';

import { render } from 'react-dom';

/* X State */
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

/* Select Field Text */
import 'react-bootstrap-typeahead/css/Typeahead.css';
// import { Typeahead } from 'react-bootstrap-typeahead';

/* Styling */
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

/* Apollo Setup */
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { ApolloProvider, ApolloConsumer, Query, Mutation } from 'react-apollo'



// Combining Local Storage
// const updateRecipeStarredMutation = gql`
//     mutation updateRecipeStarred($id: ID!, $isStarrred: Boolean!) {
//         updateRecipeStarred(id: $id, isStarred: $isStarred) @client
//     }
// `

{/* <Mutation
    mutation={updateRecipeStarredMutation}>
</Mutation> */}

// const resolvers = {
//     Recipe: {
//         isStarred: () => {
//             const starredRecipes = JSON.parse(localStorage.getItem("starredRecipes")) || []
//             return starredRecipes.includes(parent.id);
//         }
//     },
//     Mutation: {
//         updateRecipeStarred: (_, variables) => {
//             const starredRecipes = JSON.parse(localStorage.getItem("starredRecipes")) || []
//             if (variables.isStarred) {
//                 localStorage.setItem(
//                     "starredRecipes",
//                     JSON.stringify(starredRecipes.concat([variables.id]))
//                 )
//             } else {
//                 localStorage.setItem(
//                     "starredRecipes",
//                     JSON.stringify(
//                         starredRecipes.filter(recipeId => recipeId !== variables.id)
//                     )
//                 )
//             }
//             return {
//                 __typename: "Recipe",
//                 isStarred: variables.isStarred
//             }
//         }
//     }
// }

// const client = new ApolloClient({
//     uri: 'http://localhost:4000/',
//     clientState: {
//         resolvers
//     }
// })

/* Simple Client */
// client
//     .query({
//         query: gql`
//             {
//                 recipes {
//                     id
//                     title
//                 }
//             }
//         `
//     }).then(results  => console.log(results))

/* Apollo Consumer */
{/* <ApolloConsumer>
    {
        (client) => {
            client
                .query({
                    query: gql`
                        {
                            recipes {
                                id
                                title
                            }
                        }
                    `
                }).then(results => console.log(results))
        }
    }
</ApolloConsumer> */}

/* Query */
// const recipeQuery = gql`
//     query recipes($vegetarian: Boolean!) {
//         recipes(vegetarian: $vegetarian) {
//             id
//             title
//         }
//     }
// `
{/* <Query
    variables={{ vegetarian: true }}
    pollingInterval={3000}
    query={recipeQuery}>
    {
        ({ data, loading, error, refetch }) => {
            if (loading) return "Loading ..."
            if (error) return "Error ...."

            return (
                <Fragment>
                    <ul>
                        {
                            data.recipes.map(({ id, title }) => {
                                return (
                                    <li key={id}>
                                        { title }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Fragment>
            )
        }
    }
</Query> */}

/* Mutation */
// const addRecipeMutation = gql`
//     mutation addRecipe($recipe: RecipeInput!) {
//         addRecipe(recipe: $recipe) {
//             id
//             title
//         }
//     }
// `

// <Mutation
//     refetchQueries={[
//         {
//             query: recipesQuery,
//             variables: { vegetarian: true}
//         },
//         {
//             query: recipesQuery,
//             variables: { vegetarian: false}
//         },
//     ]}
//     awaitRefetchQueries={true}
//     mutation={addRecipeMutation}>
//     {
//         (addRecipe, { loading, error }) => {
//             <form
//                 onSubmit={(event) => {
//                     event.preventDefault();
//                     addRecipe({
//                         variables: {
//                             recipe: {
//                                 title: this.state.title,
//                                 vegetarian: this.state.vegetarian
//                             }
//                         }
//                     })
//                 }}
//                 >
//                 ....fields
//             </form>
//         }
//     }
// </Mutation>


/* Managing Local Graphql */
// export default gql `
//     query recipes($vegetarian: Boolean!) {
//         recipes(vegetarian: $vegetarian) {
//             id
//             title
//             isStarred @client
//         }
//     }
// `


/* X State */
// const toggleMachine = Machine({
//     id: 'toggle',
//     initial: 'inactive',
//     states: {
//         inactive: {
//             on: { TOGGLE: 'active' }
//         },
//         active: {
//             on: { TOGGLE: 'inactive' }
//         }
//     }
// });

// export const Index = () => {
//     const [current, send] = useMachine(toggleMachine);

//     return (
//         <button onClick={() => send('TOGGLE')}>
//             {current.value === 'inactive'
//                 ? 'Click to activate'
//                 : 'Active! Click to deactivate'}
//         </button>
//     );
// };

const Index = () => (
    <Fragment>
        <nav className="navbar navbar-bg bg-dark">
            <a className="navbar-brand text-white">
                Testing
            </a>
        </nav>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col">
                    <Typeahead
                        labelKey="name"
                        options={["Photon", "Sami", "Auto", "Erfan", "Samith"]}
                        placeholder="Choose a state..."
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
        <footer>
            <div>
                &copy;  { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
            </div>
        </footer>
    </Fragment>
)


/* Mounting on the rouut */
// const root = document.getElementById('root')
// render (
//     <ApolloProvider client={client}>
//         <Index />
//     </ApolloProvider>,
//     root
// );
const root = document.getElementById('root')
render (
    <Index />,
    root
);
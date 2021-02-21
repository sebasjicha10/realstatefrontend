const urlSlug = require("url-slug")

exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query  {
            allStrapiPages {
                nodes {
                    name
                    id
                }
            }
            allStrapiPropertries {
                nodes {
                    name
                    id
                }
            }
        }   
    `)

    // Handle erros
    if(result.erros) {
        reporter.panic("No results", result.errors)
    }

    // Generate static files
    const pages = result.data.allStrapiPages.nodes
    const properties = result.data.allStrapiPropertries.nodes

    // Create the pages' templates
    pages.forEach(page => {

        actions.createPage({
            path: urlSlug(page.name),
            component: require.resolve("./src/components/Page.js"),
            context: {
                id: page.id
            }
        })

    })

    // Create the properties' templates
    properties.forEach(property => {

        actions.createPage({
            path: urlSlug(property.name),
            component: require.resolve("./src/components/Property.js"),
            context: {
                id: property.id
            }
        })

    })
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   // Check if the page is a localized 404
//   if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
//     const oldPage = { ...page }
//     // Get the language code from the path, and match all paths
//     // starting with this code (apart from other valid paths)
//     const langCode = page.path.split(`/`)[1]
//     page.matchPath = `/${langCode}/*`
//     // Recreate the modified page
//     deletePage(oldPage)
//     createPage(page)
//   }
// }

export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf752c88cedfcf2f6cb224',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x4cmxtk2',
                  apiId: 'bb9bf487-5c76-4b3f-a6b1-d4ed88094bd7'
                },
                {
                  buildHookId: '5fcf752c45a30dbb8f7a90d1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kmjaexzu',
                  apiId: 'ac87697c-5bf2-4c6e-b77f-9ecba2b53fbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dasarikamalson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kmjaexzu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

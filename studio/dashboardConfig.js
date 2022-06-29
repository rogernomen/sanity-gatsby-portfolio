export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62bc4b35c1eac1044b9b3e07',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t7jr487u',
                  apiId: '72901061-f2c6-4580-80b0-4babc964c3d0'
                },
                {
                  buildHookId: '62bc4b357677c1362c1de6be',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qtik7nod',
                  apiId: '728a1513-9395-482f-ac94-a50dc601b944'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rogernomen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qtik7nod.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

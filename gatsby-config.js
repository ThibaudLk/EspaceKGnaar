module.exports = {
	siteMetadata: {
		title: 'Espace KGnaar',
		author: 'Thibaud Larrière',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: 'https://twitter.com/amanhimself',
		github: `https://github.com/amandeepmittal`,
		medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://gatsby-starter-bulma-css.appseed.us`
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: { 
        name: `mdPages`, 
        path: `${__dirname}/mdPages/` 
      },
    },
		{
			resolve: `gatsby-transformer-remark`,
			options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
						resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`
            }
					},
					{
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                include: ['Twitter', 'YouTube']
              }
            }
          }
				],
			},
		},
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Espace KGnaar',
				short_name: 'KGnaar',
				start_url: '/',
				background_color: '#F7F3E8',
				theme_color: '#1D1D1D',
				display: 'standalone',
				icon: 'src/images/logo.png',
				orientation: 'portrait'
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};

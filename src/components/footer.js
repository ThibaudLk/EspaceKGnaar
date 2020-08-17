import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../style/style.scss'

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<article className="media center">

						Footer à personnaliser

					</article>

				</div>
			</footer>
		)}
	/>
);

export default Footer;

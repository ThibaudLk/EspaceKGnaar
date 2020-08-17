import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import '../style/style.scss'

const Navbar = ({ toggleNavbar, isActive }) => {
	const data = useStaticQuery(graphql`
    query NavbarQuery {
			headerImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 112, height: 112) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			},
			allPages: allMarkdownRemark(
				filter: { fileAbsolutePath: { glob: "**/mdPages/*.md" } }
				) {
				edges {
					node {
						id
						frontmatter {
							title
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	return (
		<div style={{ borderBottom: '2px solid black' }}>
			<nav className="navbar container is-widescreen" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/">
						<Img style={{ margin: 8 }} fixed={data.headerImage.childImageSharp.fixed} />
					</Link>

					<button type="button" className={`navbar-burger burger link-button ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarTop" onClick={toggleNavbar}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>
				</div>

				<div id="navbarTop" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className="navbar-end">
						{data.allPages.edges.map(({ node }) =>
							<Link key={node.id} to={node.fields.slug} className="navbar-item">
								{node.frontmatter.title}
							</Link>
						)}
						<Link to="/presentation/" className="navbar-item">
							Présentation
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar

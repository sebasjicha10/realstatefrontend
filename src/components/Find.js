import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"


const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const Find = () => {

    const {image} = useStaticQuery(graphql`
        query  {
            image: file(relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (  
        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.imagebg}>
                <h3 className={heroCSS.title}>Find your Dream Home</h3>
                <p>15 Years of Experience</p>
            </div>
        </ImageBackground>
    )
}
 
export default Find
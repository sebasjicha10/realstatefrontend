import React from 'react'
import Layout from "../components/Layout"
import useHome from "../hooks/useHome"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import Find from "../components/Find"
import PropertiesList from "../components/PropertiesList"


const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`

const Home = () => {

    const home = useHome()
    const {name, content, image} = home[0]

    return (  
        <Layout>
            <ImageBackground
                tag="section"
                fluid={image.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagebg}>
                    <h1 className={heroCSS.title}>Exclusive Houses and Flats</h1>
                </div>
            </ImageBackground>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{name}</h1>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >{content}</p>
                </div>
            </main>

            <Find />

            <PropertiesList />

        </Layout>
        
    )
}

export default Home
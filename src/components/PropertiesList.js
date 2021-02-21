import React, {useState, useEffect} from 'react'
import {css} from "@emotion/react"
import useProperties from "../hooks/useProperties"
import PropertyPreview from "./PropertyPreview"
import propertiesListCSS from "../css/propertiesList.module.css"
import useFilter from "../hooks/useFilter"


const PropertiesList = () => {

    const result = useProperties()
    const [properties] = useState(result)
    const [filtered, setFiltered] = useState([])

    // Properties filter
    const {category, FilterUI} = useFilter()

    useEffect(() => {
        if(category) {
            console.log(category)
            const filterResult = properties.filter(property => property.categories.name === category)
            setFiltered(filterResult)
        } else {
            setFiltered(properties)
        }
        // eslint-disable-next-line
    }, [category])

    return (  
        <>
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Our Properties</h2>

            {FilterUI()}

            <ul className={propertiesListCSS.properties}>
                {filtered.map(property => (
                    <PropertyPreview 
                        key={property.id}
                        property={property}
                    />
                ))}
            </ul>
        </>
        

    )
}
 
export default PropertiesList
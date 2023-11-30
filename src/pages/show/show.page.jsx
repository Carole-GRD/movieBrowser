import React from 'react'
import { useParams } from 'react-router-dom'

function ShowPage() {
    const { id } = useParams();

    return (
        <section>
            {/* <img src="" alt="" /> */}
            <h2>Id du film : {id}</h2>
        </section>
    )
}

export default ShowPage

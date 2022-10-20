import Tour from "./Tour"
import { useState } from "react"
import { Component } from "react"

const Tours = ({tours}) => {
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>
                {
                    tours.map(tour => {
                        return <Tour key={tour.id} {...tour}/>
                    })
                }
            <div>

            </div>
        </section>
    )
}

export default Tours
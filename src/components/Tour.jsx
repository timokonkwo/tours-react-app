const Tour = ({id, name, image, info, price }) => {
    
    return (
        <article className="single-tour">
            <img src={image} alt={name} />

            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                </div>
            </footer>
        </article>
    )
}

export default Tour
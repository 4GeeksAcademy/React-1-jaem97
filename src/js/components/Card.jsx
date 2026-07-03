export const Card = ({ image, title, description, textButton }) => {


    return (

        <>

            <div className="card text-center" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{textButton}</a>
                </div>
            </div>

        </>

    )
}
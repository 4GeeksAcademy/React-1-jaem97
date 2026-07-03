export const Jumbotron = () => {


    return (

        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">¡Hola, mundo!</h1>
                    <p className="col-md-8 fs-4">
                        Este es un jumbotron simple, un componente estilo vitrina para llamar la atención
                        sobre contenido o información destacada.
                    </p>
                    <hr className="my-4" />
                    <p>
                        Utiliza clases de utilidad para el tipografía y el espaciado para separar el contenido.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Leer más
                    </button>
                </div>
            </div>

        </>

    )
}
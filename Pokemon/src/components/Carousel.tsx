import "../css/carousel.css"

export function Carousel() {
    return (

        <div className="Wrapper ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="../../public/Carroseul.jpg" className="" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="../../public/carroseul2.jpg" className="" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="../../public/carrousel3.jpg" className="" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>    
        </div>
    )
}
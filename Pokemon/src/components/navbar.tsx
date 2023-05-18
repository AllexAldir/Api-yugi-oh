
export function NavBar() {

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Yugi-oh</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a id="gera" className="nav-link" href="#">Gerar Cards</a>
                <a className="nav-link" href="#">Cartas</a>
                {/* <a className="nav-link disabled">Disabled</a> */}
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}
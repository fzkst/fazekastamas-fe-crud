function Navbar({setBasicId}) {
    const editId = 0;
    const handleSetBasicId = () => setBasicId(editId)
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Home</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#new-record" onClick={handleSetBasicId}>New record</a>
                            <a className="nav-link" href="https://github.com/fzkst/fazekastamas-fe-crud.git">GitHub</a>                     
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;











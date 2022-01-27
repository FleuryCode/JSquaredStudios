import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid my-3 mainNavigation">
            <div className="row">
                <div className="col-3">
                    <h4>J-Squared Studios</h4>
                </div>
                <div className="col-9">
                    <div className="navlinks">
                        <a href="/#">Portfolio</a>
                        <a href="/#">Services</a>
                        <a href="/#">About</a>
                        <a href="/#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
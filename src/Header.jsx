import logo from "./logo.svg"
 
const Menu = () => {
    return (
        <>
            <a href="#" class="nav-link">HOME</a>
            <a href="#" class="nav-link">ABOUT US</a>
            <a href="#" class="nav-link">CONTACTS</a>
        </>
    )
}
 
const Header = () => {
    return (
        <header className="fixed-top mb-5">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={logo} width="50px" alt="logo" />
            <nav className="d-flex justify-content-between w-75">
                <Menu />
            </nav>
        </div>
        </header>
    )
}
 
export default Header;
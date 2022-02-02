import Link from "next/link";

const Navbar = () => {
    return (  
        <nav className="">
            <Link href="/">
                <a className="navbar-title">NoteMaker</a>
            </Link>
            <Link href="/new">
                <a className="navbar-create">Add note</a>
            </Link>
        </nav>
    );
}
 
export default Navbar;
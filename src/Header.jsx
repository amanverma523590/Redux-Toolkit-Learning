import { AddToCart } from "./AddtoCart";


export function Header(){
    return(
        <nav className="bg-black text-white d-flex justify-content-around align-items-center" style={{height:'60px'}}>
            <div>My Shop</div>
            <ul className="d-flex justify-content-evenly list-unstyled" style={{gap:"1.5rem"}}>
                <li>Home</li>
                <li>About</li>
                <li>Call us</li>
            </ul>
            <AddToCart/>
        </nav>
    )
}
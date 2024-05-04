import './navbar.css'
function navBar(){
    return(
        <>
            
    
            <nav>
                <div className="logo">FOODies</div>
                
                <i className="fa fa-bars"></i>
                
                <ul className="navBar">
                <li className="tab">Home</li>
                <li className="tab">Hot Item</li>
                <li className="tab">Menus</li>
                <li className="tab">Contact us</li>
                <li className="joinBtn">Join</li>
                <li className="card"><i className="fa fa-shopping-cart"></i></li>
                </ul>
        
            </nav>
            
        </>
    )
}

export default navBar;
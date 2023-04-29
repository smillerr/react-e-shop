import '@styles/DesktopMenu.scss';
function DesktopMenu(){
    return(
        <div className="DesktopMenu">
            <ul className='DesktopMenuList'>
                <li>
                    <a href="/my-orders" className="MyOrders">My orders</a>
                </li>
                <li>
                    <a href="/my-account" className="MyAccount">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export {DesktopMenu};
import { FilterCategory } from "@components/FilterCategory";
import '@styles/MobileMenu.scss';
function MobileMenu(){
    return(
        <div className="MobileMenu inactive"> 
            <div className="MobileMenuList">
                <ul className="Categories"> 
                    <li> 
                        <a> CATEGORIES </a> 
                    </li>
                    <FilterCategory category="All" />
                    <FilterCategory category="Clothes" />
                    <FilterCategory category="Electronics" />
                    <FilterCategory category="Furniture" />
                    <FilterCategory category="Toys" />
                    <FilterCategory category="Others" />
                </ul>
            </div>
            <div className="other-info-list">
                <ul className="primary-list"> 
                    <li className="categories-item"> 
                        <a href="/"> My orders </a> 
                    </li>
                    <li className="categories-item"> 
                        <a href="/"> My account </a> 
                    </li>
                </ul>
            </div>
            <div className="my-info">
                <ul className="primary-list"> 
                    <li className="categories-item"> 
                        <a href="/"> example@somedomain.com </a> 
                    </li>
                    <li className="categories-item"> 
                        <a href="/" id="sign-out"> Sign out </a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}


  


export {MobileMenu};
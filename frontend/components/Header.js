import Navbar from './Navbar'

export const Header = () => {
    return  (
        <div>
            <div className="bar">
                <a href="">11 Stories</a>
                <Navbar/>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </div>
    )
}

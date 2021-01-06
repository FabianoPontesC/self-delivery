import './styles.css';
import { ReactComponent as MainImage} from './main.svg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Place your order <br /> and we deliver <br /> to you!!! 
                    </h1>
                    <h3 className="home-subtitle">
                        Choose your products and in a few minutes <br />
                        they will be at your door
                    </h3>
                    <a href="orders" className="home-btn-order">
                        SHOP NOW
                    </a>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )
}

export default Home;
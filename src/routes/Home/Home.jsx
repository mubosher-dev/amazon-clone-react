import React, { useEffect } from "react"
import "./Home.css"
import changePage from "../../changePage";
import Header from "../../components/Header/Header";
import Product from "../../components/productCard/Product"
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"
import { useStateValue } from "../../StateProvider";

function Home() {
    changePage("Amazon Home");

    const [{ user }, dispatch] = useStateValue();

    const [{ basket }, disp] = useStateValue();

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            }
            else {
                // user is log out...
                dispatch({
                    type: "SET_USER",
                    user: null,
                })
                navigate("/login")
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <Header />
            <div className="home">

                <div className="home__banner">
                    <img
                        className="home__bannerImg"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-banner" />
                </div>

                <div className="home__body">
                    <div className="home__row">
                        <Product
                            id={1}
                            title="Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor, 1800R Curvature, 8ms Grey-to-Grey Response Time (Normal Mode)"
                            price={405.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71Ede4YMO+L._AC_SX679_.jpg"
                        />
                        <Product
                            id={2}
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id={3}
                            title="ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop, 15.6” 144Hz FHD, GeForce RTX 3050 Ti, Intel Core i7-11370H"
                            price={1029.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/919xvhsM0BS._AC_SX425_.jpg"
                        />
                        <Product
                            id={4}
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id={5}
                            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                            price={99.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id={6}
                            title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
                            price={138.98}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
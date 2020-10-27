import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home_container">
                {/* <img className="home_image" src="https://raraa.s3-ap-southeast-1.amazonaws.com/raraa_home.png"></img> */}
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

                <div className="home_row">
                    <Product
                        id="001"
                        title="Palazzo Pants"
                        price={39.90}
                        rating={5}
                        image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/122040773_5111591178881625_1557227438738202353_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=fgN4djZ4akwAX8Ak620&_nc_tp=18&oh=bcb23dc98fc77505ffd1268eeaed5256&oe=5FB9858C"
                    />
                    <Product
                        id="002"
                        title="Formal Palazzo Pants"
                        price={39.90}
                        rating={5}
                        image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/122168339_472200950367965_8722855689918829486_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=bbmK8nFMuA8AX94KdGg&_nc_tp=18&oh=2caf8cba5489d806a89e5fdcea779171&oe=5FB8F173"
                    />
                    <Product
                        id="003"
                        title="Denim Palazzo"
                        price={39.90}
                        rating={4}
                        image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/120938944_646868749348741_4164913612577358543_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jnj7PpJP0QcAX_HRK-V&_nc_tp=18&oh=603f4390a61060342587db7c59595b45&oe=5FB82AFC"
                    />
                </div>
                <div className="home_row">
                <Product
                    id="004"
                    title="Denim Palazzo"
                    price={39.90}
                    rating={4}
                    image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/120973709_190959602478722_7907152265569857891_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ou-7SQAHc6EAX-BZHbI&_nc_tp=18&oh=2fc886ace042520dabc5d461e52ded35&oe=5FB6A170"
                />
                <Product
                    id="005"
                    title="Ruffle Handsocks"
                    price={10.90}
                    rating={4}
                    image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/119714384_328553435231674_7570733957902565238_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=nHoTrpfVgz4AX_fyO3u&_nc_tp=18&oh=0f01a45009750617aa9f07909733bfee&oe=5FB80DB8"
                />
                <Product
                    id="006"
                    title="Lace Handsocks"
                    price={10.90}
                    rating={4}
                    image="https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-15/e35/119473966_179355583665970_1467928981382942806_n.jpg?_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=9qlIT7RFxxcAX-rX7Um&_nc_tp=18&oh=fd10ccff4ef63063229dddbddee3e346&oe=5FB8DDEE"
                />
                </div>
            </div>
        </div>
    )
}

export default Home;
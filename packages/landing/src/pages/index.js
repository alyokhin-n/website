import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appclassic';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppClassic/Navbar';
import Banner from 'containers/AppClassic/Banner';
import Customer from 'containers/AppClassic/Customer';
import KeyFeatures from 'containers/AppClassic/KeyFeatures';
import AppSlider from 'containers/AppClassic/AppSlider';
import Features from 'containers/AppClassic/Features';
import DesignedAndBuilt from 'containers/AppClassic/DesignedAndBuilt';
import FeatureTab from 'containers/AppClassic/FeatureTab';
import PricingPolicy from 'containers/AppClassic/PricingPolicy';
import Testimonial from 'containers/AppClassic/Testimonial';
import Faq from 'containers/AppClassic/Faq';
import JoinTrial from 'containers/AppClassic/JoinTrial';
import Footer from 'containers/AppClassic/Footer';
import GlobalStyle, { AppWrapper, ContentWrapper } from 'containers/AppClassic/appClassic.style';

const AppClassic = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Head>
					<title>Orienteering.pro</title>
					<meta name="Description" content="Explore the outdoors like never before with our AR Orienteering app. Navigate through checkpoints using augmented reality on your mobile device, enhancing your adventure with interactive, digital elements. Perfect for adventure enthusiasts and those looking to combine technology with nature." />
					<meta name="theme-color" content="#FF6004" />
					<meta name="keywords" content="AR Orienteering, Augmented Reality Navigation, Outdoor Adventure App, Mobile Orienteering, AR Outdoor Games, Augmented Reality Apps, Orienteering Technology, Explore Nature with AR, AR Treasure Hunt, Interactive Outdoor Experience" />
				</Head>
				{/* end of head */}

				<ResetCSS />
				<GlobalStyle />
				{/* end of global and reset style */}

				{/* start app classic landing */}
				<AppWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-active">
						<Navbar />
					</Sticky>
					<ContentWrapper>
						<Banner />
						<AppSlider />
						{/*<Features />*/}
						{/*<DesignedAndBuilt />*/}
						{/*<FeatureTab />*/}
						<PricingPolicy id="pricing-policy"/>
						<Faq />
						{/* <Testimonial /> */}
						{/*<JoinTrial />*/}
					</ContentWrapper>
					<Footer />
				</AppWrapper>
				{/* end of app classic landing */}
			</>
		</ThemeProvider>
	);
};
export default AppClassic;

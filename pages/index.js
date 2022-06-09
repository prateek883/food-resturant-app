import Image from "next/image";
import MainLayout from "../components/layout/main-layout";
import Row from "../components/widgets/elements/row";
import styles from "../styles/modules/home.module.scss";
import RestoCards from "../components/widgets/resto-cards";
import { useEffect, useState, useRef } from "react";
import { RESTO } from "../src/data";
import PageHead from "../components/head";
import LocationTag from "../components/location-tag";
import Slide1 from "../components/widgets/carousel/slide-1";
import Slide2 from "../components/widgets/carousel/slide-2";
import Slide3 from "../components/widgets/carousel/slide-3";

const sliders = [<Slide1 />, <Slide2 />, <Slide3 />];

export default function Home() {
	const [restoCount, setRestoCount] = useState(2);
	const [currentSlide, setCurrentSlide] = useState(0);
	const intervalRef = useRef();

	const setSlideView = () => {
		return sliders[currentSlide];
	};

	const prevSlide = () => {
		if (currentSlide == 0) setCurrentSlide(sliders.length - 1);
		else setCurrentSlide((prev) => prev - 1);
	};

	const nextSlide = () => {
		if (currentSlide >= sliders.length - 1) setCurrentSlide(0);
		else setCurrentSlide((prev) => prev + 1);
	};

	const startSliderAutoPlay = () => {
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => {
				return prev >= sliders.length - 1 ? 0 : prev + 1;
			});
		}, 5000);
	};

	useEffect(() => {
		startSliderAutoPlay();
		return () => {
			clearInterval(intervalRef);
		};
	}, []);

	return (
		<MainLayout>
			{/* Fixed location tag */}
			<LocationTag />
			{/* Pager header  */}
			<PageHead />

			{/* Header section  */}
			<Row align="center" className={styles.header_row}>
				<div className={styles.header_left_column}>
					<Row
						align="center"
						justify="center"
						className={styles.header_left_column_container}
					>
						<div style={{ zIndex: "50" }}>
							<span className={styles.title}>
								Discover Restaurant & Delicious Food
							</span>
							<div className={styles.header_input_container}>
								<input
									className={styles.header_input}
									placeholder="search restaurant,food"
								/>
								<button className={styles.header_submit_btn}>Go</button>
							</div>
						</div>
					</Row>
				</div>
				<div
					style={{ height: "100%", position: "relative" }}
					className={styles.header_right_column}
				>
					{setSlideView()}
					<div className={styles.header_background_wrapper}>
						<div className={styles.header_background_container}>
							<Image layout="fill" src="/images/long-dots.svg" alt="dots" />
						</div>
					</div>

					<div className={styles.red_column}></div>
				</div>
				<div onClick={prevSlide} className={styles.left_arrow_wrapper}>
					<div className={styles.left_arrow_container}>
						<Image
							layout="fill"
							src="/images/icons/left-arrow.svg"
							alt="left arrow"
						/>
					</div>
				</div>
				<div onClick={nextSlide} className={styles.right_arrow_wrapper}>
					<div className={styles.right_arrow_container}>
						<Image
							layout="fill"
							src="/images/icons/left-arrow.svg"
							alt="left arrow"
						/>
					</div>
				</div>
			</Row>
			{/* Header section end  */}

			{/* Partner restorants section  */}
			<Row style={{ paddingTop: "50px", minHeight: "100vh" }} justify="center">
				<div className={styles.sub_title_wrapper}>
					<div className={styles.sub_title}>
						some top restaurant for dining out or in!
					</div>
				</div>

				<div className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				</div>

				<div style={{ position: "relative", width: "100vw" }}>
					<div className={styles.resto_top_background_wrapper}>
						<div className={styles.resto_top_background_container}>
							<Image
								layout="fill"
								objectFit="contain"
								alt="dots image"
								src="/images/dots.svg"
							/>
						</div>
					</div>
					<div className={styles.resto_bottom_background_wrapper}>
						<div className={styles.resto_bottom_background_container}>
							<Image layout="fill" src="/images/dots.svg" alt="dots" />
						</div>
					</div>
					<div className={styles.resto_card_wrapper}>
						{RESTO.slice(0, restoCount).map((resto) => (
							<RestoCards
								key={Math.random()}
								name={resto.name}
								url={resto.url}
							/>
						))}
						<div
							className={styles.see_more_container}
							onClick={() => {
								setRestoCount(RESTO.length);
							}}
						>
							<Image
								layout="fill"
								objectFit="contain"
								src="/images/see-more-logo.svg"
								alt="see-more"
							/>
						</div>
					</div>
				</div>
			</Row>

			{/* Search restorant section  */}
			<Row align="center" justify="center" className={styles.footer_section}>
				<div className={styles.form_container}>
					<div className={styles.color_head}></div>
					<div className={styles.footer_title}>advanced booking</div>
					<div>
						<div className={styles.footer_input_container}>
							<input
								className={styles.footer_input}
								placeholder="search restaurant"
							/>
							<button className={styles.footer_submit_btn}>Go</button>
						</div>
					</div>
				</div>
				<div className={styles.left_veggi_wrapper}>
					<div className={styles.left_veggi_container} style={{}}>
						<Image layout="fill" src="/images/test2.png" alt="iceberg" />
					</div>
				</div>
				<div>
					<div className={styles.right_veggi_wrapper}>
						<div className={styles.right_veggi_container}>
							<Image layout="fill" src="/images/test2.png" alt="iceberg" />
						</div>
					</div>
				</div>
			</Row>
		</MainLayout>
	);
}

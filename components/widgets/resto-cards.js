import React from "react";
import styles from "../../styles/modules/home.module.scss";
import Row from "./elements/row";
import { BsArrowRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function RestoCards({ url, name }) {
	return (
		<div className={styles.rest_wrapper}>
			<div
				className={styles.rest_card}
				style={{
					zIndex: "1",
					backgroundImage: "url(" + url + ")",
				}}
			>
				<div
					style={{
						background: "#e91e63ad",
						width: "100%",
						color: "#fff",
						padding: "30px",
					}}
				>
					<div className={styles.resto_name}>{name}</div>
					<div className={styles.resto_description} style={{}}>
						we are all about we are all about to the fullest and all content
						dining out or in!dining out or in!
					</div>
					<Row align="center" justify="space-between">
						<div>
							<Row align="center">
								<MdLocationOn /> Main City
							</Row>
						</div>
						<button className={styles.book_now_btn}>
							<Row align="center">
								Book Now{" "}
								<BsArrowRight style={{ fontSize: "20px", marginLeft: "5px" }} />
							</Row>
						</button>
					</Row>
				</div>
			</div>
		</div>
	);
}

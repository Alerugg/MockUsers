import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer">
		<p>
			Hecho con <i className="fa fa-heart text-danger" /> por{" "}
			<a href="https://www.mockusers.com" target="_blank" rel="noopener noreferrer">
				Mock Users
			</a>{" "}
			|{" "}
			<a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
				GitHub
			</a>
		</p>
	</footer>
);

import React from "react";
import "../../styles/footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => (
	<footer className="footer">
		<p>
	
			<a href="https://www.linkedin.com/in/aleruggeril" target="_blank" rel="noopener noreferrer" className="icon-link">
				<FaLinkedin className="icon linkedin-icon" /> LinkedIn
			</a>{" "}
			{" "}
			<a href="https://github.com/Alerugg" target="_blank" rel="noopener noreferrer" className="icon-link">
				<FaGithub className="icon github-icon" /> GitHub
			</a>
		</p>
	</footer>
);

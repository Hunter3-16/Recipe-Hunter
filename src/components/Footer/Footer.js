import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

function Footer() {
    return (
        <div className="bg-background-tertiary text-copy-primary flex flex-row sm:flex-col sm:text-center sm:justify-around justify-between bg-gray-800 h-32">
            <div className="container flex flex-col justify-center ml-12 sm:ml-0">
                <p className="text-gray-100 text-sm sm:text-xs mb-1">
                    Created By
                </p>
                <p className="text-gray-500 text-lg sm:text-sm">
                    <a href="https://divyanshushukla.netlify.app/">Divyanshu Shukla</a>
                </p>
            </div>
            <div className="container flex flex-col justify-center mr-12 sm:text-center text-right text-gray-500 text-lg">
                <p className="text-sm sm:text-xs text-white mb-1">
                    <GitHubIcon size="1x" />{" "}
                    <a href="https://github.com/Hunter3-16">
                        Hunter3-16
                    </a>
                </p>
                <p className="text-sm sm:text-xs text-white mb-1">
                    <LinkedinIcon size="1x" />{" "}
                    <a href="https://www.linkedin.com/in/divyanshu-shukla-hunter/">
                        Divyanshu Shukla
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;

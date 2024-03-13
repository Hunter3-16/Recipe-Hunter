import React from "react";
import classes from "./Hero.module.css";

function Hero() {
    return (
        <div className={classes.Hero}>
            <div className="font-sans py-6 px-12 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
                <div className="self-center md:text-center p-4">
                    <h1>Cook Healthy</h1>
                    <h2>Eat Healthy</h2>
                </div>
                <div className="self-center md:text-justify max-w-xl p-4">
                    <p className="text-base">
                    Revitalize Your Life Dive into the Delicious World of Healthy Eating! Transform your plate into a powerhouse of goodness that fuels your passions and ignites your vitality. With each nutritious bite, you're not just nourishing your body, you're celebrating your healthiest, happiest self. Embrace the journey to wellness your body will thank you!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Geist } from "next/font/google";

export const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500"],
    style: ["normal", "italic"],
    variable: "--font-fraunces",
    display: "swap",
});

export const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-jetbrains",
    display: "swap",
});

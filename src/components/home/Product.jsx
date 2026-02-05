import React from "react";
import ProductCard from "../ui/ProductCard";
import RealPeopleSection from "./RealPeopleSection";
import ProductsCharm from "./ProductsCharm";


export default function Product() {
    return (
        <div className="relative bg-white">
            <div className="absolute inset-0 overflow-hidden flex items-center justify-end z-10 pointer-events-none opacity-75">
                <img src="bg-graphic.png" alt="" className=" translate-x-1/2 mb-20" />
            </div>
            <div className="relative z-20">
                <ProductsCharm />
            </div>
            <div className="relative z-20">
                <RealPeopleSection />
            </div>
        </div>
    )
}
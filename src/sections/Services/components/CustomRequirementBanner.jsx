import React from 'react';
import FadeUp from '../../../components/FadeUp';

const CustomRequirementBanner = ({ openModal }) => {
    return (
        <FadeUp delay={0.5}>
            <div
                className="rounded-2xl p-6 md:p-5 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4 mt-4 text-center md:text-left"
                style={{ background: "linear-gradient(135deg,#131C2E 0%,#1a2540 100%)" }}
            >
                <div className="w-full">
                    <h3 className="sora font-bold text-white text-[17px] md:text-sm mb-2 md:mb-1">
                        Don't See Your Requirement?
                    </h3>
                    <p className="dm text-white/50" style={{ fontSize: ".85rem", lineHeight: "1.6" }}>
                        Submit anything — our team sources the right vendor for any industrial need.
                    </p>
                </div>
                <button
                    onClick={() => openModal("Custom Requirement")}
                    className="w-full md:w-auto flex-shrink-0 sora font-bold text-white px-5 py-3.5 md:py-2.5 rounded-xl transition-all hover:bg-white/15 whitespace-nowrap flex justify-center items-center cursor-pointer"
                    style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", fontSize: ".9rem" }}
                >
                    Submit Custom Requirement &rarr;
                </button>
            </div>
        </FadeUp>
    );
};

export default CustomRequirementBanner;
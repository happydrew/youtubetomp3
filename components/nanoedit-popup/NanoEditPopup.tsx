import React, { useState, useEffect } from 'react';
import {
    XIcon,
    ZapIcon,
    TypeIcon,
    ImageIcon,
    ArrowRightIcon,
    SparklesIcon,
    CheckCircleIcon
} from './Icons';

interface NanoEditPopupProps {
    /** 
     * Delay in milliseconds before showing the popup automatically.
     * Default: 5000 (5 seconds)
     */
    delay?: number;
    /**
     * Whether to enable exit intent detection (mouse leaving the window).
     * Default: true
     */
    exitIntent?: boolean;
}

const STORAGE_KEY_PERMANENT = 'trybanana2_ad_permanent_hide';
const STORAGE_KEY_COUNT = 'trybanana2_ad_visit_count';

export const NanoEditPopup: React.FC<NanoEditPopupProps> = ({
    delay = 5000
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // 1. Check Permanent Dismiss Flag
        const isPermanentlyHidden = localStorage.getItem(STORAGE_KEY_PERMANENT);
        if (isPermanentlyHidden) {
            console.log('Advertisement Permanently Hidden');
            return;
        }

        // 2. Check & Update Frequency Counter
        const rawCount = localStorage.getItem(STORAGE_KEY_COUNT);
        const count = rawCount ? parseInt(rawCount, 10) : 0;
        console.log('Visit Count:', count);

        // Logic: Show if count is 0. 
        // Cycle: 0(show) -> 1 -> 2 -> 3 -> 4 -> 0(show)
        const showThisTime = count === 0;

        let nextCount = count + 1;
        if (nextCount >= 5) {
            nextCount = 0; // Reset so next visit shows it
        }
        localStorage.setItem(STORAGE_KEY_COUNT, nextCount.toString());

        if (showThisTime) {
            // Start Timer if allowed
            if (delay > 0) {
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, delay);
                return () => clearTimeout(timer);
            }
        }
    }, [delay]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    const handleDontShowAgain = (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            localStorage.setItem(STORAGE_KEY_PERMANENT, 'true');
        } catch (e) {
            console.error('Storage failed', e);
        }
        handleClose();
    };

    const handleGotIt = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClose();
    };

    const handleCTA = () => {
        window.open('https://trybanana2.com', '_blank');
        handleClose();
    };

    if (!isVisible && !isClosing) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Container */}
            <div className={`relative w-full max-w-4xl bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col-reverse md:flex-row justify-centerm items-center transform transition-all duration-300 ${isClosing ? 'scale-95' : 'scale-100 animate-slide-up'}`}>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/40 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                    aria-label="Close advertisement"
                >
                    <XIcon className="w-5 h-5" />
                </button>

                {/* Left Side (Bottom on Mobile) - Content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative bg-gradient-to-b from-[#0F172A] to-[#0b1121]">

                    {/* Header Logo */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/30">
                            T
                        </div>
                        <span className="text-white/90 font-semibold tracking-wide text">TryBanana2</span>
                    </div>

                    {/* Headline - Punchy & Short */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                        Pro AI Images. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Better & Cheaper.
                        </span>
                    </h2>

                    {/* Subhead - Concise */}
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                        Generate stunning 4K images with perfect text rendering. Powered by <span className="text-slate-200">Nano Banana 2</span>.
                    </p>

                    {/* Features - Compact Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                        <CompactFeature icon={<TypeIcon className="w-4 h-4 text-indigo-400" />} text="Perfect Text" />
                        <CompactFeature icon={<ImageIcon className="w-4 h-4 text-purple-400" />} text="4K Quality" />
                        <CompactFeature icon={<ZapIcon className="w-4 h-4 text-yellow-400" />} text="Super Fast" />
                        <CompactFeature icon={<CheckCircleIcon className="w-4 h-4 text-emerald-400" />} text="Low Cost" />
                    </div>

                    {/* Main CTA */}
                    <button
                        onClick={handleCTA}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                        <SparklesIcon className="w-4 h-4" />
                        <span>Try TryBanana2 Free</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-5 px-1">
                        <button
                            onClick={handleDontShowAgain}
                            className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors underline decoration-dotted underline-offset-2"
                        >
                            Don't show again
                        </button>
                        <button
                            onClick={handleGotIt}
                            className="text-[11px] text-slate-400 hover:text-white transition-colors"
                        >
                            Got it, thanks
                        </button>
                    </div>
                </div>

                {/* Right Side (Top on Mobile) - Visuals */}
                <div className="flex justify-center items-center w-full h-full md:w-1/2 aspect-[3/2] bg-gradient-to-b from-[#0F172A] to-[#0b1121] overflow-hidden group border-b md:border-b-0 md:border-l border-white/5">
                    {/* Background Image */}
                    <img
                        src="https://trybanana2.com/imgs/examples/advanced_text_rendering.webp"
                        alt="Cyberpunk Aesthetic"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </div>
        </div>
    );
};

const CompactFeature = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2 text-slate-300">
        <div className="shrink-0 p-1 rounded bg-white/5 border border-white/5">
            {icon}
        </div>
        <span className="text-xs font-medium">{text}</span>
    </div>
);

export default NanoEditPopup;
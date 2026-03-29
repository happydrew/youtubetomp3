import React, { useState, useEffect } from 'react';
import {
    XIcon,
    ZapIcon,
    VideoIcon,
    ImageIcon,
    ArrowRightIcon,
    SparklesIcon,
    CheckCircleIcon
} from '../nanoedit-popup/Icons';

interface VeogenPopupProps {
    delay?: number;
}

const STORAGE_KEY_PERMANENT = 'veogen_2026_ad_permanent_hide';
const STORAGE_KEY_COUNT = 'veogen_2026_ad_visit_count';

export const VeogenPopup: React.FC<VeogenPopupProps> = ({
    delay = 5000
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const isPermanentlyHidden = localStorage.getItem(STORAGE_KEY_PERMANENT);
        if (isPermanentlyHidden) {
            return;
        }

        const rawCount = localStorage.getItem(STORAGE_KEY_COUNT);
        const count = rawCount ? parseInt(rawCount, 10) : 0;
        const showThisTime = count === 0;

        let nextCount = count + 1;
        if (nextCount >= 5) {
            nextCount = 0;
        }
        localStorage.setItem(STORAGE_KEY_COUNT, nextCount.toString());

        if (showThisTime && delay > 0) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [delay]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300);
    };

    const handleDontShowAgain = (e: React.MouseEvent) => {
        e.stopPropagation();
        localStorage.setItem(STORAGE_KEY_PERMANENT, 'true');
        handleClose();
    };

    const handleGotIt = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClose();
    };

    const handleCTA = () => {
        window.open('https://veogen.art', '_blank');
        handleClose();
    };

    if (!isVisible && !isClosing) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            <div className={`relative w-full max-w-4xl bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col-reverse md:flex-row justify-center items-center transform transition-all duration-300 ${isClosing ? 'scale-95' : 'scale-100 animate-slide-up'}`}>
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/40 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                    aria-label="Close advertisement"
                >
                    <XIcon className="w-5 h-5" />
                </button>

                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative bg-gradient-to-b from-[#0F172A] to-[#0b1121]">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/30">
                            V
                        </div>
                        <span className="text-white/90 font-semibold tracking-wide">Veogen</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                        Create AI Videos & Images <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            in One Place
                        </span>
                    </h2>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                        Access latest AI models in one place. Powered by <span className="text-slate-200">Seedance 2.0, Kling AI, Veo 3.1, Nano Banana Pro</span> & more.
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                        <CompactFeature icon={<VideoIcon className="w-4 h-4 text-blue-400" />} text="AI Video Generator" />
                        <CompactFeature icon={<ImageIcon className="w-4 h-4 text-cyan-400" />} text="AI Image Generator" />
                        <CompactFeature icon={<ZapIcon className="w-4 h-4 text-yellow-400" />} text="One-Stop Platform" />
                        <CompactFeature icon={<CheckCircleIcon className="w-4 h-4 text-emerald-400" />} text="Affordable Pricing" />
                    </div>

                    <button
                        onClick={handleCTA}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                        <SparklesIcon className="w-4 h-4" />
                        <span>Try AI Video Generator Free</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

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

                <div className="flex justify-center items-center w-full h-full md:w-1/2 aspect-[3/2] bg-gradient-to-b from-[#0F172A] to-[#0b1121] overflow-hidden group border-b md:border-b-0 md:border-l border-white/5">
                    <video
                        src="https://veogen.art/videos/feature-carousel/ai-video/seedance-pro-1-5.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
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

export default VeogenPopup;

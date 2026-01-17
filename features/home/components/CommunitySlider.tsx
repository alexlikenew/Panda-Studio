"use client";

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Type definition matching homeService
interface SocialReel {
    _id: string;
    caption: string;
    username: string;
    platform: string;
    link: string;
    thumbnail: string;
    thumbnailAlt: string;
    videoUrl?: string;
    publishedAt: string;
}

interface ReelItemProps {
    reel: SocialReel;
    isActive: boolean;
    isMuted: boolean;
    toggleMute: () => void;
}

// Single Slide Component
function ReelItem({ reel, isActive, isMuted, toggleMute }: ReelItemProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !reel.videoUrl) return;

        if (isActive) {
            // Attempt to play
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log('Autoplay prevented (interaction needed):', error);
                });
            }
        } else {
            // Strictly pause. DO NOT reset currentTime (allows resuming).
            video.pause();
        }
    }, [isActive, reel.videoUrl]);

    useEffect(() => {
        // Hack to show a frame if no thumbnail is available
        if (videoRef.current && !reel.thumbnail) {
            videoRef.current.currentTime = 1; // Seek to 1 second to find a non-black frame
        }
    }, [reel.thumbnail]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    return (
        <div className={`community-reels__slide ${isActive ? 'is-active' : ''}`}>
            <div className="community-reels__slide-inner">
                {reel.videoUrl ? (
                    <>
                        <video
                            ref={videoRef}
                            src={reel.videoUrl}
                            poster={reel.thumbnail}
                            className="community-reels__video"
                            muted={isMuted}
                            loop
                            playsInline
                            preload="auto"
                        />
                        <button
                            className="community-reels__mute-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMute();
                            }}
                        >
                            {isMuted ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16zm13.13 1.95a1 1 0 01-1.414-1.415 5.5 5.5 0 000-7.778 1 1 0 011.414-1.414 7.5 7.5 0 010 10.607zM16.5 12A4.5 4.5 0 0017.82 8.82 1 1 0 1119.234 7.406 6.5 6.5 0 0116.5 16.5V12z" />
                                    <line x1="2" y1="2" x2="22" y2="22" stroke="white" strokeWidth="2" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16zm14.525-4a8.5 8.5 0 00-2.091-5.594 1 1 0 10-1.536 1.282 6.5 6.5 0 011.627 4.312 6.5 6.5 0 01-1.627 4.312 1 1 0 101.536 1.282 8.5 8.5 0 002.091-5.594zm-3.5 0a5.5 5.5 0 00-1.354-3.621 1 1 0 10-1.535 1.282A3.5 3.5 0 0115.5 12a3.5 3.5 0 01-.863 2.339 1 1 0 101.535 1.282A5.5 5.5 0 0016.914 12z" />
                                </svg>
                            )}
                        </button>
                    </>
                ) : (
                    <img
                        src={reel.thumbnail}
                        alt={reel.thumbnailAlt}
                        className="community-reels__image"
                    />
                )}

                <div className="community-reels__overlay"></div>

                <div className="community-reels__info">
                    <a
                        href={reel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="community-reels__username text-small-bold"
                    >
                        {reel.username}
                    </a>
                    <p className="community-reels__caption text-small-normal">
                        {reel.caption}
                    </p>
                </div>
            </div>
        </div>
    );
}

interface CommunitySliderProps {
    reels: SocialReel[];
}

export default function CommunitySlider({ reels }: CommunitySliderProps) {
    // Always start at index 4 (5th video)
    const initialIndex = 4;

    // Track the active slide index
    const [currentSlide, setCurrentSlide] = useState(initialIndex);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => setIsMuted((prev) => !prev);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
        variableWidth: false, // Fluid width based on slidesToShow
        speed: 500,
        focusOnSelect: true,
        initialSlide: initialIndex,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "60px", // Peek effect
                    variableWidth: false,
                },
            },
        ],
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    if (!reels || reels.length === 0) return null;

    return (
        <div className="community-reels__slider-container">
            <Slider {...settings}>
                {reels.map((reel, index) => (
                    <ReelItem
                        key={`${reel._id}-${index}`}
                        reel={reel}
                        isActive={index === currentSlide}
                        isMuted={isMuted}
                        toggleMute={toggleMute}
                    />
                ))}
            </Slider>
        </div>
    );
}

function CustomNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`custom-slick-arrow custom-slick-next ${className}`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        >
            {">"}
        </div>
    );
}

function CustomPrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`custom-slick-arrow custom-slick-prev ${className}`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        >
            {"<"}
        </div>
    );
}
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
}

// Single Slide Component
function ReelItem({ reel, isActive }: ReelItemProps) {
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

    return (
        <div className={`community-reels__slide ${isActive ? 'is-active' : ''}`}>
            <div className="community-reels__slide-inner">
                {reel.videoUrl ? (
                    <video
                        ref={videoRef}
                        src={reel.videoUrl}
                        poster={reel.thumbnail}
                        className="community-reels__video"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />
                ) : (
                    <img
                        src={reel.thumbnail}
                        alt={reel.thumbnailAlt}
                        className="community-reels__image"
                    />
                )}

                <div className="community-reels__overlay"></div>
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
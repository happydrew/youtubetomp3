import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { yt2mp3Url } from '../../ezymp3.config';


const Home = () => {
    const [videoURL, setVideoURL] = useState('');
    const [fetchingDownloadUrl, setFetchingDownloadUrl] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    const [showDownloadTip, setShowDownloadTip] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');
    const [waitingDownload, setWaitingDownload] = useState(false);

    const handleConvert = async () => {
        //检测输入的URL是否有效，并提取视频ID
        if (!videoURL) {
            alert('Please enter a valid YouTube URL!');
            return;
        }

        let fullVideoUrl = '';
        let videoId = '';
        // 首先尝试匹配youtube.com/watch?v=
        const videoIdMatch = videoURL.match(/youtube\.com\/watch\?v=([^&/?]+)/)
        if (videoIdMatch && videoIdMatch[1]) {
            videoId = videoIdMatch[1];
            fullVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        }
        // 如果匹配失败, 尝试匹配youtu.be
        if (!videoId) {
            const youtuBeMatch = videoURL.match(/youtu\.be\/([^&/?]+)/)
            if (youtuBeMatch && youtuBeMatch[1]) {
                videoId = youtuBeMatch[1];
                fullVideoUrl = `https://youtu.be/${videoId}`;
            }
        }

        if (!videoId) {// 如果匹配失败, 尝试匹配短视频id
            const shortIdMatch = videoURL.match(/youtube\.com\/shorts\/([^&/?]+)/)
            if (shortIdMatch && shortIdMatch[1]) {
                videoId = shortIdMatch[1];
                fullVideoUrl = `https://www.youtube.com/shorts/${videoId}`;
            }
        }

        if (!videoId) {
            alert('Please enter a valid YouTube URL!');
            return;
        }

        setFetchingDownloadUrl(true);
        try {
            const response = await fetch(`${yt2mp3Url}?vedioUrl=${fullVideoUrl}&videoId=${videoId}`, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('fetch downloadUrl error: ' + JSON.stringify(response));
            }
            const data = await response.json();
            if (!data.downloadUrl) {
                throw new Error(`No downloadUrl in response data: Response{status: ${response.status}, statusText: ${response.statusText}}`);
            }
            setDownloadUrl(data.downloadUrl);
            setShowDownloadTip(false);
            setShowDownloadButton(true);
        } catch (error) {
            console.error('Failed to convert video: ', error);
            alert('Opps, something went wrong. Please wait a moment before refreshing the page and trying again.\nError message: ' + error.message);
        } finally {
            setFetchingDownloadUrl(false);
        }
    };

    const handleDownload = () => {
        if (!downloadUrl) {
            alert('Please wait for the conversion to complete before downloading.');
            return;
        }
        // 这里调用你的API逻辑来下载视频
        setWaitingDownload(true);
        downloadFile(downloadUrl);
        setDownloadUrl('');
        setTimeout(() => {
            setWaitingDownload(false);
            setShowDownloadButton(false);
            setShowDownloadTip(true);
        }, 4000);
    };

    // 下载文件函数
    function downloadFile(url: string) {
        const a = document.createElement('a');
        a.href = url;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className='w-full bg-zinc-900 text-white '>
                <div className="pt-6 text-center flex justify-center items-center">
                    <Image src='/favicon-dark.png' width={40} height={40} alt='Y2MP3 - YouTube to MP3 Converter' />
                    &nbsp;EzyMP3 is a Free, Safe, Easy-to-use YouTube to MP3 Converter.
                </div>
                <div className='flex justify-center items-center space-x-2 mb-2'>
                    Any questions or feedback? 👉
                    <a className='bg-red-400 text-white rounded-md px-2 py-1 mx-2 text-lg underline hover:bg-red-500 transition'
                        href="https://ezymp3ccyoutubetomp3.quora.com/?invite_code=wJ55ugDw4sbNAOAAmIRs" target='_blank'>
                        Quaro Space
                    </a>
                </div>
                <div className="text-center flex justify-center items-center text-orange-300 mb-4">
                    Ads keep our site free and functional 😊. Sorry for any inconvenience and thanks for your support! ❤️
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center w-full'>
                <div id="left-ads" className='flex flex-col justify-start items-center w-full md:w-1/4 gap-4'>
                    <div data-banner-id="1444688"></div>
                    <div data-banner-id="1444690"></div>
                </div>
                <div className='flex items-center justify-center w-full md:w-1/2'>
                    <div className='flex flex-col items-center justify-center max-w-2xl'>
                        {/* Header */}
                        <header className=" w-full py-8 text-center">
                            <h1 className="flex flex-col items-center justify-center">
                                <span className='text-3xl font-bold text-blue-500'>YouTube to MP3 Converter</span>
                            </h1>
                        </header>

                        {/* Main Section */}
                        <main className="w-full flex-1 flex flex-col items-center px-4">
                            <div className="w-full bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Insert a YouTube video URL
                                </h2>
                                <div className="flex items-center space-x-2 mb-4">
                                    <input
                                        type="text"
                                        value={videoURL}
                                        onChange={(e) => setVideoURL(e.target.value)}
                                        placeholder="https://www.youtube.com/watch?v=2ktINaDZiNc"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                    <button
                                        onClick={handleConvert}
                                        className="flex justify-center items-center w-28 px-2 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                                        disabled={fetchingDownloadUrl}
                                    // data-ads-attach
                                    >
                                        Convert
                                        {fetchingDownloadUrl && <CircularProgress sx={{ color: 'white', ml: 1 }} size={20} thickness={5} />}

                                    </button>
                                </div>
                                <div className="flex justify-center items-center space-x-2">
                                    <button
                                        onClick={handleDownload}
                                        className={`${showDownloadButton ? '' : 'hidden '}flex justify-center items-center w-40 px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-900 transition`}
                                    >
                                        Download
                                        {waitingDownload && <CircularProgress sx={{ color: 'white', ml: 1 }} size={20} thickness={5} />}

                                    </button>
                                    {showDownloadTip && <div>
                                        <span className="text-sm text-green-600">
                                            Your MP3 is downloading, please wait......<br />
                                            Check the progress in browser's download panel.
                                        </span>
                                        <br />
                                        <span className='text-xs text-red-400'>Tip: If the downloaded file lacks an extension, rename it and add the .mp3 suffix to play it properly.</span>
                                    </div>}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="mt-8 w-full max-w-2xl text-gray-600 mt-20">
                                <h2 className="text-2xl text-center font-semibold mb-4">YouTube to MP3 Converter</h2>
                                <p className="mb-4 leading-8">
                                    Welcome to EzyMP3, your ultimate online tool for converting YouTube to MP3 effortlessly!
                                    Our platform is designed to provide you with a safe, fast, ad-free experience to download
                                    high-quality MP3 audio from your favorite YouTube videos.
                                </p>
                                <h4 className="text-center text-lg font-semibold mb-4">How to download YouTube videos?</h4>
                                <ol className="list-decimal list-inside space-y-4 leading-8">
                                    <li>
                                        Go to YouTube.com and search for a video you would like to download.
                                        Then copy the video URL from the browser address bar.
                                    </li>
                                    <li>
                                        Paste the video URL in our YouTube Converter, click the "Convert" button.
                                        Wait seconds for the conversion to complete, and you will see a "Download" button below.
                                    </li>
                                    <li>
                                        Click the "Download" button, wait for the MP3 file to download. You can check the
                                        progress of your download in your browser's download panel.

                                    </li>
                                </ol>
                                <p className="mt-6">Thank you for using our YouTube Converter.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div id="right-ads" className='flex flex-col justify-start items-center w-full md:w-1/4 gap-4'>
                    <div data-banner-id="1444692"></div>
                    <div data-banner-id="1444693"></div>
                </div>
            </div>

        </div>
    );
};

export default Home;

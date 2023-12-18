import React from 'react';

const LoadingPage: React.FC = () => {
  const emojis = ['😊', '🥺', '😁'];

  return (
    <div className="bg-ff8473 h-screen ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl mb-4 mr-4 p-10 text-white font-lucida-calligraphy">
          Loading...
        </h1>
        <div className="text-4xl">
          {emojis.map((emoji, index) => (
            <div
              key={index}
              className={`inline-block m-0 mr-4 animate-bounce`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

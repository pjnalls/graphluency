import ReactPlayer from 'react-player';

export const Background = () => {
  return (
    <>
      <div>
        <ReactPlayer
          src="https://vimeo.com/1126438352"
          controls={false}
          muted={true}
          loop={true}
          playing={true}
          width={'100%'}
          height={'188vw'}
          className="z-0 fixed mx-auto"
        />
      </div>
      <div className="z-1 fixed mx-auto w-[100vw] h-[100vh] bg-[#272554b0]"></div>
    </>
  );
};

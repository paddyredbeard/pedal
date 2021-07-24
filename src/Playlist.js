const Playlist = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
      width='853'
      height='480'
      src='https://www.youtube.com/embed/videoseries?list=PLCExx1NE85K4fG43rWSCft1B5NxZRkRr_'
      frameBorder='0'
      allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </div>
)

export default Playlist

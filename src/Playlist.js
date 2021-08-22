const Playlist = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
      src='https://www.youtube.com/embed/videoseries?list=PLCExx1NE85K4fG43rWSCft1B5NxZRkRr_'
      frameBorder='0'
      allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture'
      allowFullScreen
      title='Riding Bikes - embedded youtube playlist'
    />
  </div>
)

export default Playlist

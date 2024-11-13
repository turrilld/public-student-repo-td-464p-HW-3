import React from 'react';

const Home = () => {
  const background =
    'https://i.pinimg.com/1200x/01/fe/29/01fe297bb39456eb7581af17371c1965.jpg';

  var backgroundStyle = {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <h1 class="text-white">The Nations of South America</h1>
      </div>
    </div>
  );
};

export default Home;

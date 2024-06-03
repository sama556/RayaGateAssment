
  // babel.config.js
module.exports = async (api) => {
    api.cache(true);
  
    return {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [],
    };
  };
  
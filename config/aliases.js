const aliases = (prefix = `src`) => ({
  '@src': `./src`,
  '@components': `${prefix}/components`,
  '@assets': `${prefix}/assets`,
  '@hooks': `${prefix}/hooks`,
  '@utils': `${prefix}/utils`,
  '@store': `${prefix}/store`,
  '@pages': `${prefix}/pages`,
  '@icons': `${prefix}/icons`,
  '@contexts': `${prefix}/contexts`,
  '@api': `${prefix}/api`,
});

module.exports = aliases;

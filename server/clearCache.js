// Clear Node.js module cache
function clearNodeModuleCache() {
  // Loop through the cache object and delete cached modules
  Object.keys(require.cache).forEach((key) => {
    delete require.cache[key];
  });
}

// Call the function to clear the cache
clearNodeModuleCache();

// Now, you can re-require your modules as needed

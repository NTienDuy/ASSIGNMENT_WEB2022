const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'Home.html'), 
        blog: resolve(__dirname, 'Blog.html'), 
        work: resolve(__dirname, 'Work.html'), 
      }
    }
  }
})
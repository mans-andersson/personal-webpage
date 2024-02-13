const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        posts: './posts.html',
        projects: './projects.html',
      }
    }
  }
})

module.exports = function(grunt) {

  grunt.initConfig({
    // Méta-données
    pkg: grunt.file.readJSON("package.json"),

    // Fichers que les tâches utiliserons
    files: {
      html: {
        src: "app/index.html"
      },

      css: {
        src: "app/stylesheets/style.css"
      },

      js: {
        src: [
          "bower_modules/phaser/build/phaser.min.js",
          "app/javascripts/static_object.js",
          "app/javascripts/ruby.js",
          "app/javascripts/player.js",
          "app/javascripts/game.js",
          "app/javascripts/app.js"
        ]
      }
    },

    // Configurations
    concat: {
      app: {
        src: "<%= files.js.src %>",
        dest: "generated/js/app.min.js"
      }
    },

    watch: {
      js: {
        files: ["<%= files.js.src %>"],
        tasks: ["concat"]
      },
      css: {
        files: ["<%= files.css.src %>"],
        tasks: ["copy"]
      },
      html: {
        files: ["<%= files.html.src %>"],
        tasks: ["copy"]
      }
    },

    copy: {
      html: {
        src: "<%= files.html.src %>",
        dest: "generated/",
        expand: true,
        flatten: true
      },
      css: {
        src: "<%= files.css.src %>",
        dest: "generated/css/",
        expand: true,
        flatten: true
      },
      image: {
        src: "app/images/*.png",
        dest: "generated/images/",
        expand: true,
        flatten: true
      }
    },

    server: {
      base: process.env.SERVER_BASE || 'generated',
      web: {
        port: 3000
      }
    }
  });

  // Charge les tâches locales
  grunt.loadTasks("tasks");

  // Charge les tâches externe (plugins)
  // Charge tous mes plugins commençant par "grunt-"
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // Workflow
  grunt.registerTask("default", ["concat", "copy", "server", "watch"]);
};

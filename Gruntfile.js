module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: '',
                    port: 9999
                }
            }
        },

        qunit: {
            all: ['tests/index.html']
        },

        'saucelabs-qunit': {
            all: {
                options: {
                    testname: 'Unit Tests for jquery-circle-progress',
                    urls: ['localhost:9999/tests/index.html'],
                    build: process.env.TRAVIS_JOB_ID,
                    tunnelTimeout: 5,
                    concurrency: 3,
                    browsers: [{
                        browserName: 'firefox',
                        version: '19',
                        platform: 'XP'
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-saucelabs');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("test", ['connect', 'saucelabs-qunit']);
};

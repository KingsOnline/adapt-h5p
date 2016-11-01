/*
 * adapt-contrib-responsiveIframe
 * License - http://github.com/adaptlearning/adapt_framework/LICENSE
 * Maintainers - Kevin Corry <kevinc@learningpool.com>
 */
define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");

    var H5p = ComponentView.extend({

        events: {
            'inview': 'inview'
        },

        preRender: function() {
            console.log(this);
            console.log(top.Frame0);
            this.listenTo(Adapt, 'device:changed', this.resizeControl);
        },

        postRender: function() {
            var that = this;
            that.setReadyStatus();
            this.$('.h5p-iframe').ready(function() {
                that.resizeControl(Adapt.device.screenSize);
            });
        },

        inview: function(event, visible) {
            if (visible) {
                this.setCompletionStatus();
            }
        },

        resizeControl: function(size) {
            var width = this.$('.h5p-iframe').attr('data-width-' + size);
            var height = this.$('.h5p-iframe').attr('data-height-' + size);
            this.$('.h5p-iframe').width(width);
            this.$('.h5p-iframe').height(height);
        }

    });

    window.onmessage = function(e) {
      console.log('h');
        if (e.data == 'h5pComplete') {
            console.log('It works!');
        }
    };

    Adapt.register("h5p", H5p);

});

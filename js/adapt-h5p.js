define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");

    var H5p = ComponentView.extend({

        preRender: function() {
            var that = this;
            $(window).on("message", function(event) {
                that.checkComplete();
            });
            this.listenTo(Adapt, 'device:changed', this.resizeControl);
        },

        checkComplete: function() {
            Adapt.log.debug(event);
            if (event.data == (this.completeOn() + this.model.get("_id")))
                this.setCompletionStatus();
        },

        completeOn: function() {
          return this.model.get("_setCompletionOn");
        },

        postRender: function() {
            var that = this;
            that.setReadyStatus();
            this.$('.h5p-iframe').ready(function() {
                that.resizeControl(Adapt.device.screenSize);
            });
        },

        resizeControl: function(size) {
            var width = this.$('.h5p-iframe').attr('data-width-' + size);
            var height = this.$('.h5p-iframe').attr('data-height-' + size);
            this.$('.h5p-iframe').width(width);
            this.$('.h5p-iframe').height(height);
        }

    });

    Adapt.register("h5p", H5p);

});

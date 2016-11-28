adapt-h5p
=========

An Adapt component that acts as a listener to H5P content and messages Adapt when the completiton criteria has been met. Uses [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

Attributes
-----

**_setCompletionOn:** **complete** requires the learner to reach the end of the content. **started** requires the learner to only interact with the content to complete.

The rest of the attributes have been inherited from Learning Pool's [responsive iframe](https://github.com/LearningPool/adapt-contrib-responsiveIframe).

Supported H5P content types
-----
H5P content types are required to be modified to send messages to Adapt. Currently supported content types are:

* H5P-timeline https://github.com/KingsOnline/h5p-adapt-timeline
* H5P-interactive-video https://github.com/KingsOnline/h5p-adapt-interactive-video

If you have an idea of what else you would like supported please email simon.date@kcl.ac.uk .

Limitations
--------
This component has only been tested with H5P hosted on Drupal. Further testing required to ensure it works with older browsers as well as with different h5p hosted platforms.

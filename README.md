adapt-h5p
=========

An Adapt component that acts as a listener to H5P content and messages Adapt when the completion criteria has been met. Uses [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

Documentation on how to use available [here](https://docs.google.com/document/d/19W8MnpmZ17oILjlhGjXiGWDBso6oM6PZXAhEVKN38Qk/edit?usp=sharing).

Attributes
-----

**_setCompletionOn:** **complete** requires the learner to reach the end of the content. **started** requires the learner to only interact with the content to complete.

The rest of the attributes have been inherited from Learning Pool's [responsive iframe](https://github.com/LearningPool/adapt-contrib-responsiveIframe).

Supported H5P content types
-----
H5P content types are required to be modified to send messages to Adapt. Currently supported content types are:

* H5P-timeline https://github.com/KingsOnline/h5p-adapt-timeline
* H5P-interactive-video https://github.com/KingsOnline/h5p-adapt-interactive-video

Note as these are independent versions of each content type they may not have the most up to date features. If you wish for a content type to be update or if you wish for another to be converted to work with H5P please email [simon.date@kcl.ac.uk](mailto:simon.date@kcl.ac.uk).

Limitations
--------
This component has only been tested with H5P hosted on Drupal. Further testing required to ensure it works with other CMS platforms.

Ensure that your CMS has [cross origin resource sharing ](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled or you will have to host your Adapt courses on the same domain.

(function(module) {
	"use strict";

	var Shortlinks = {},
		c = '<a href="http://{relative_url}/category/$1" target="_blank">Category</a>',
        t = '<a href="http://{relative_url}/topic/$1" target="_blank">Topic</a>';


    Shortlinks.parse = function(postContent, callback) {
        var	category = /\B(\/c\/\w+)/g;
        var	topic = /\B(\/t\/\w+)/g;

        if (postContent.match(category)) {
            postContent = postContent.replace(category, c);
        }
        if (postContent.match(topic)) {
            postContent = postContent.replace(topic, t);
        }

        callback(null, postContent);
    };

	module.exports = Shortlinks;
}(module));

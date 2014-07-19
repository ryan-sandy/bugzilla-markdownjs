Bugzilla Markdownjs
===================

This is a markdown extension for bugzilla. All rendering is done client side through javascript. It renders the comments in markdown, and has a live preview in the new bug and edit bug areas.

##Installation

Copy the `Markdownjs` directory into `<bugzilla-root>/extensions` directory and run `checksetup.pl`.

##Dependencies

[Jquery](http://jquery.com/) : v1.11.1
[Markdown-js](https://github.com/evilstreak/markdown-js): v0.6.0-beta1

#Compatibility

Tested with buzillia:

* 4.4.4

Please help this module by testing on more versions.

#Overview

The extension finds all elements with the class `bz_commen_text`, takes their text passes it to markdown-js, and appends the markdown-js output into the element's html.

For the comment previews, the extension uses the jquery `on` method to bind to the input events of the `#comment` element. It takes the input, passes it through markdown-js and places the output in the `#bz_preview` element.

This extension relies on the following template hooks: `the bug/comment-aftercomments`, `bug/edit-after_comments_textarea`, and `bug/create/create-end`.

**Note:** You could, in theory, remove jQuery and just use the YUI library included with bugzilla. I did not use the YUI because, well, I'm a lazy hack.

#Known Issues & Bugs

Please report bugs in the github issue tracker. (I know it's blasphemy for a bugzilla extension, but give me a break.)

#Release

v0.0.0

#License

The MIT License (MIT)

Copyright (c) 2014 Ryan-Sandy Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

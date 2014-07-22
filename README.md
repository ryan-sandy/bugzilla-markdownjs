Bugzilla Markdownjs
===================

This is a markdown extension for bugzilla. All rendering is done client side through javascript. It dynamically adds markdown elements to comments and allows you to switch between the raw view and markdown. It has a live preview when submitting or commenting a bug.

#Features

* Markdown parsing of all comments
* Ability to view raw comment text
* Live markdown preview when creating or commenting
* Unobtrusive & customizable styling
* Formatting help information

#Installation

Copy the `Markdownjs` directory into `<bugzilla-root>/extensions` directory and run `checksetup.pl`.

##Dependencies

* [Jquery](http://jquery.com/) : v1.11.1
* [Markdown-js](https://github.com/evilstreak/markdown-js): v0.6.0-beta1

#Compatibility

Tested with buzillia:

* 4.4.4

Please help this module by testing on more versions.

#Overview

The extension finds all elements with the class `bz_commen_text`, takes their text passes it to markdown-js, and appends the markdown-js output into a new `div` after the comment. The raw comment is hidden by default. You can toggle between the markdown element and raw element by clicking on a link within the comment.

For the comment previews, the extension uses the jquery `on` method to bind to the input events of the `#comment` element. It takes the input, passes it through markdown-js and places the output in the `#bz_preview` element.

This extension relies on the following template hooks: `global/footer-end`, `global/header-additional_header`, `bug/edit-after_comments_textarea`, and `bug/create/create-end`.

The styles.css set the white-space to normal, and change the font to be more readable. If you want better styling, send me a pull request.

**Note:** You could, in theory, remove jQuery and just use the YUI library included with bugzilla. I did not use the YUI because, well, I'm a lazy hack.

#Known Issues & Bugs

Please report bugs in the github issue tracker. (I know it's blasphemy for a bugzilla extension, but give me a break.)

#Release

###Current

v1.0.0 Stable Release 

###Past Releases

* v1.0.0 Stable Release
* v0.1.0 Styling Release
* v0.0.0 Initial Release

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

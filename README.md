# chrome-ext-copy-smugmug-album-key
A Chrome extension to get the AlbumKey from SmugMug gallery pages (your own or others')

*For me, this is particularly useful in conjunction with my https://wordpress.org/plugins/tk-smugmug-slideshow-shortcode/ plugin.*

# What it does
This extension runs on all URLs but is very lightweight; it just runs a single [document.documentElement.outerHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML)
It needs to run on all URLs because of custom SmugMug domains, not just smugmug.com subdomains.

_If_ it detects you are on a SmugMug gallery page, it will display an _intrusive_ window.prompt pop-up with the AlbumKey already displayed and selected; you just need to Copy (keyboard shortcut or mouse clicking) and/or dismiss the message, like this:

![pop-up message if viewing a SmugMug album](https://cloud.githubusercontent.com/assets/1812179/22433553/6108a034-e6de-11e6-99a7-45ba33ce907c.png)

You will probably want to enable it only when actually looking for the album key and leave it disabled all other times.

# How to install extensions that are not in the Chrome Web Store
1. Go to chrome://extensions/
2. Check the box to enable "Developer mode"
3. Click the "Load unpacked extension..." button
4. Select the folder on your computer where the unpacked/unzipped Chrome extension is located
5. Make sure you have your settings as desired (enabled/disabled, incognito, etc.)

Note that if you modify the extension's code, you'll need to fully delete (not disable) the extension and reload it (follow the steps above, again).

# Extras
* The initial version was created with the help of http://extensionizr.com/ (thanks!)
* Not officially from, endorsed by, or otherwise connected to the SmugMug company.

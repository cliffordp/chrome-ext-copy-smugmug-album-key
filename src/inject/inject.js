chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
	
			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			
			// Runs on EVERY loaded page!
		    var pageAsString = document.documentElement.outerHTML;
		    var regexIsSmugMug = /("mainDomain":"smugmug.com")/;
		    var pageIsSmugMug = regexIsSmugMug.test( pageAsString ); // true or false
		    var regexAlbumKey = /("AlbumKey":")([a-zA-Z0-9]+)/;
		    var pageIsSmugMugAlbum = regexAlbumKey.test( pageAsString ); // true or false
		    // console.log( 'pageIsSmugMug: ', pageIsSmugMug );
		    // console.log( 'pageIsSmugMugAlbum: ', pageIsSmugMugAlbum );
		    if( pageIsSmugMug && pageIsSmugMugAlbum ) {
		      var albumKey = regexAlbumKey.exec( pageAsString )[2];
		      /*[""albumKey":"abc123", ""albumKey":"", "abc123"]*/
		      window.prompt( 'Copy this SmugMug Album Key:', albumKey );
		    } else {
		      //alert( 'Not a SmugMug Album page.' );
		    }
			// ----------------------------------------------------------
		}
	}, 10);
});
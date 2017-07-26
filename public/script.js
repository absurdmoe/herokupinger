window.onload = function(){
	console.log("dom loaded")
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/2b/ee/6d/2bee6d511ed7cf38084283f7921eb30c.jpg')";

 if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg){
        console.log("Yes, it did.");
      }).catch(function(err) {
        console.log("No it didn't. This happened: ", err)
      });
  }
}
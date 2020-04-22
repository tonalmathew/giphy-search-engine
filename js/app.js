/* 1. Grab the input value */

$(".js-go").click(function (e) {
  var input = $("input").val();
  searchKeyword(input);
});

$(".js-userinput").on("keyup", (event) => {
  let input = $("input").val();
  event.which === 13 && searchKeyword(input);
});

/* 2. do the data stuff with the API */
function searchKeyword(val) {
  var url =
    "http://api.giphy.com/v1/gifs/search?q=" + val + "&api_key=dc6zaTOxFJmzC";

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (e) {
    var data = e.target.response;
    pushToDOM(data);
  });
}

/* 3. Show me the GIFs */

function pushToDOM(input) {
  const contents = [];
  var response = JSON.parse(input);
  console.log(response);
  var imageUrls = response.data;

  imageUrls.forEach(function (image) {
    var src = image.images.fixed_height.url;
    var container = document.querySelector(".js-container");
    container.innerHTML += '<img src="' + src + '">';
  });
}

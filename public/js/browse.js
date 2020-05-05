$.get("/api/music", function(data){
      if (data.length !== 0) {
         for (var i =0; i < data.length; i++) {
            var card = $("<div class='card grey darken-4'>")
            var content = $("<div class='card-content white-text'>");
            content.addClass("white-text");
            content.append("<span class='card-title'>" + data[i].title + "</span>")
            content.append("<div class='divider'></div>")
            content.append("<br>")
            content.append("<p> Artist: " + data[i].artist + "</p>");
            content.append("<p> Year: " + data[i].year + "</p>");
            content.append("<p> Genre: " + data[i].genre + "</p>");
            content.append("<p> Duration: " + data[i].duration + "</p>")
            card.append(content);
            $("#music-section").append(card);
         }
      }
});



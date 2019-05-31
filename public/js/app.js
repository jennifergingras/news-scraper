$(document).ready(function () {
  console.log('Yo!')

  let noteDiv = $('.note');

  // notes are hidden until added
  noteDiv.hide();



  // -------------------
  // Event Handlers
  // -------------------

  // UPDATE ARTICLES - SCRAPE AGAIN
  $('.refresh-btn').on('click', function (e) {
    e.preventDefault();
    $.get("/scrape", function (data) {
      window.location.reload();
    });


    // // NOTES
    // // --------------
    // // showing note
    // $('.add-note-btn').on('click', function () {
    //   noteDiv.show();
    // });

    // // closing note
    // $('.close-note-btn').on('click', function () {
    //   noteDiv.hide();
    // });

    // saving a note
    $('.save-note-btn').on('click', function () {
      console.log("save note button clicked");
      var thisId = $(this).attr("data-id");
      console.log(thisId);

      $.ajax({
        method: 'GET',
        url: '/articles/' + thisId
        //     data: {
        //       name: $('.note-name').val(),
        //       body: $('.note-body').val()
        //     },
      })
      //     .then(function (data) {
      //       console.log(data);
      $("")


      //       $('.note-name').empty();
      //       $('.note-body').empty();
      //     });

      // });


      // // deleting a note
      // $('.delete-note-btn').on('click', function () {
      //   console.log("delete button clicked")
      // });


      // // save article button
      // $('.save-article-btn').on('click', function () {
      //   console.log('save article button clicked')
      // })

      // // GET ARTICLE AND ADD NOTE
      // app.get('/articles/:id', function(req, res){
      //   db.Article.fineOne({ _id: req.params.id }).populate('note')
      //   .then(function(dbArticle){
      //     res.json(dbArticle);
      //   })
      //   .catch(function(err) {
      //     res.json(err);
      //   });
      // });


    });


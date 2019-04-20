$(document).ready(function () {
  console.log('Yo!')

  let noteDiv = $('.note');

  // notes are hidden until added
  noteDiv.hide();


  // API METHODS
  let API = {
    getArticle: function () {
      return $.ajax({
        url: '/api/scrape',
        type: 'GET'
      });
    },
  };


  // -------------------
  // Event Handlers
  // -------------------

  // UPDATE ARTICLES - SCRAPE AGAIN
  $('.refresh-btn').on('click', function (e) {
    e.preventDefault();
    API.getArticle().then(function () {
      console.log('right on!')
      location.assign('/');
    },
      function (error) {
        console.log('nope!')
      });
  });


  // NOTES
  // --------------
  // showing note
  $('.add-note-btn').on('click', function () {
    noteDiv.show();
  });

  // closing note
  $('.close-note-btn').on('click', function () {
    noteDiv.hide();
  });

  // saving a note
  $(document).on('click', '.save-note-btn', function (e) {
    console.log("save note button clicked");
    //   data: {
    //     name: $('.note-name').val(),
    //     body: $('.note-body').val()
    //   }
    // })
    //   .then(function (data) {
    //     console.log(data);
    //     $('.note-name').empty();
    //     $('.note-body').empty();
    //   });

  });


  // deleting a note
  $('.delete-note-btn').on('click', function () {
    console.log("delete button clicked")
  });


  // save article button
  $('.save-article-btn').on('click', function () {
    console.log('save article button clicked')
  })

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


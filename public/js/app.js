$(document).ready(function () {
  console.log('Yo!')

  let noteDiv = $('.note');

  // notes are hidden until added
  noteDiv.hide();


  // API METHODS
  let API = {
    getArticle: function (article) {
      return $.ajax({
        url: '/scrape',
        type: 'GET'
      });
    },
  };

  // UPDATE ARTICLES - SCRAPE AGAIN
  $('.refresh-btn').on('click', function (e) {
    e.preventDefault();
    API.getArticle(article).then(function () {
      console.log('right on!')
      window.location.reload('/articles');
    },
      function (error) {
        console.log('nope!')
      });
  });

  // -------------------
  // Event Handlers
  // -------------------

  // NOTES
  // --------------
  // showing note
  $('.add-note-btn').on('click', function (e) {
    e.preventDefault();
    noteDiv.show();
  });

  // closing note
  $('.close-note-btn').on('click', function (e) {
    e.preventDefault();
    noteDiv.hide();
  });

  // saving a note



  // deleting a note





});


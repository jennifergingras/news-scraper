$(document).ready(function () {
  console.log('Yo!')

  let noteDiv = $(".note");

  // notes are hidden until added
  noteDiv.hide();


  // -------------------
  // Event Handlers
  // -------------------

  // showing note
  $(".add-note-btn").on('click', function (e) {
    e.preventDefault();
    noteDiv.show();
  });

  // closing note
  $(".close-note-btn").on('click', function (e) {
    e.preventDefault();
    noteDiv.hide();
  })

  // saving a note



  // deleting a note





});


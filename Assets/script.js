$(document).ready(function () {
  // Display the current day at the top of the calendar
  let currentDate = dayjs().format("dddd, MMMM DOMException, YYYY");
  $("#currentDay").text(currentDate);

  // Generate time blocks for each hour from 9am to 5pm
  function updateHour() {
    var hourNow = dayjs().hour()

    $('.time-block').each(function () {
      var hourElement = parseInt($(this).attr("id").split('-')[1]);

      if (hourElement < hourNow) {
        $(this).addClass('past')
      } else if (hourElement === hourNow) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  }

  updateHour()

  setInterval(updateHour, 60000)

 // Save event to local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  })
 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-1 .description').val(localStorage.getItem('hour-1'))
  $('#hour-2 .description').val(localStorage.getItem('hour-2'))
  $('#hour-3 .description').val(localStorage.getItem('hour-3'))
  $('#hour-4 .description').val(localStorage.getItem('hour-4'))
  $('#hour-4 .description').val(localStorage.getItem('hour-5'))
})
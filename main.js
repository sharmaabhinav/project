var cardTemplate = "<div class='card'>{{content}}</div"

$(document).ready (function () {
  $.ajax({
    dataType: 'json',
    url: '/data.json',
    success: display
  })
})


function display (apiResponse) {
  var types = Object.keys(apiResponse)

  for(var start = 0; start < types.length; start++) {
    var type = types[start]
    renderFuncs['render_' + type](apiResponse[type])
  }
}

var renderFuncs = {
  render_idea: renderIdea,
  render_progress: renderProgress,
  render_approved: renderApproved,
  render_review: renderReview
}



function renderIdea (data) {
  var container = $('#ideas')
  insertData(container, data)
}

function renderProgress (data) {
  var container = $('#progress')
  insertData(container, data)
}


function renderApproved (data) {
  var container = $('#approved')
  insertData(container, data)
}

function renderReview (data) {
  var container = $('#review')
  insertData(container, data)
}

function insertData(container, data) {
  for(var start = 0; start < data.length; start++) {
    container.append(cardTemplate.replace('{{content}}', data[start]))
  }
}




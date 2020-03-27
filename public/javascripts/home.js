var selectId = ''

function setId (id) {
  selectId = id
}

function submitDelete () {
  window.location.href = '/admin/delete?id='+selectId
}
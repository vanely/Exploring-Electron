const events = require('events')
const electronEvent = new events.EventEmitter();


// Post initialization
// ---------------------------------------------------------------------------------
const newWindowBtn = document.getElementById('new-window-btn');
newWindowBtn.addEventListener('click', () => {
  console.log('Entered event listener')
  console.log("Pre event: ")
  console.dir(electronEvent)
  electronEvent.emit('newWin')
  console.log('Post event:')
  console.dir(electronEvent)
})

module.exports = {
  electronEvent,
}
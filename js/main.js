 // Smooth Scrolling 
 $('a').on('click', function(event)  {
  if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
          {
              scrollTop: $(hash).offset().top
          },
          800
      );
  }
});

// Auto Text Typing
const textEl = document.getElementById('text');
const text = '“There is only one you on the globe today. \n You have been built to inspire and designed to dazzle. \n Live your uniqueness!”'

let idx = 1;
let speed = 150;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++

  if(idx > text.length) { 
    idx = 1;
  }

  setTimeout(writeText, speed);
}

const DraggableSlider = (style) => {
  // =======================================================================
  // CREATE ELEMENTS
  // =======================================================================
  const root = document.getElementById('root')
  const box = [1, 2, 3, 4, 5, 6, 7]
  const sliderContainer = document.createElement('div');
  sliderContainer.setAttribute('class', 'slider-container');
  const innerSlider = document.createElement('div');
  innerSlider.setAttribute('class', 'inner-slider');
  sliderContainer.appendChild(innerSlider);
  // const cardArray = box.map((el, id) => `<div class='card'>${el}</div>`).join('')
  // console.log(cardArray)
  innerSlider.innerHTML = box.map((el, id) => (
    `<div class='card'>${el}</div>`
  )).join('')
  // =======================================================================
  // ADD BEHAVIOUR
  // =======================================================================
  let pressed = false;
  let startX;
  let x;

  sliderContainer.addEventListener('mousedown', e => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = 'grabbing';
    console.log(`=== ${e.type} ===`)
    console.log(`   pressed = ${pressed}`)
  })
  sliderContainer.addEventListener('mouseenter', e => {
    sliderContainer.style.cursor = 'grab';
    console.log(`=== ${e.type} ===`)
    console.log(`   pressed = ${pressed}`)
  })
  sliderContainer.addEventListener('mouseup', e => {
    sliderContainer.style.cursor = 'grab';
    pressed = false;
    console.log(`=== ${e.type} ===`)
    console.log(`   pressed = ${pressed}`);
  })
  sliderContainer.addEventListener('mouseleave', e => {
    pressed = false;
    console.log(`=== ${e.type} ===`)
    console.log(`   pressed = ${pressed}`)
  })
  sliderContainer.addEventListener('mousemove', e => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
  })
  const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    }
    if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  };
  // =======================================================================
  // EXECUTE STYLING & RETURN THE ELEMENTS
  // =======================================================================
  // inject the style
  style()
  return root.appendChild(sliderContainer)
}


const DraggableSliderStyle = () => {
  const style = document.createElement('style');
  style.textContent = `
    .card {
      height: 300px;
      width: 400px;
      border-radius: 5px;
      text-align: center;
      line-height: 300px;
      font-size: 50px;
      font-family: sans-serif;
      color: white;
    }
    .card:nth-child(odd) {
      background-color: blue;
    }
    .card:nth-child(even) {
      background-color: rgb(0, 183, 255);
    }
    .slider-container {
      width: 80%;
      height: 350px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
    }
    .inner-slider {
      width: 150%;
      display: flex;
      gap: 10px;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
    }
  `;
  return document.head.appendChild(style);
}


// Execute Component with Style Parameter
DraggableSlider(DraggableSliderStyle);

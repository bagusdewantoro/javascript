// create Component: Counter
function CounterComponent() {
  // get the ID of the root from index.html
  const root = document.getElementById('root')

  // set counter to 0
  let counter = 0

  // create fragment
  const fragment = document.createDocumentFragment()

  // create button for counter
  const btn = document.createElement('button')
  btn.setAttribute('id', 'btn-counter')
  btn.innerHTML = 'Counter'

  // create count text display
  const current_count = document.createElement('div')
  current_count.setAttribute('id', 'elem-counter')

  // create reset button
  const reset_btn = document.createElement('button')
  reset_btn.setAttribute('id', 'count-reset')
  reset_btn.innerHTML = 'Reset Count'

  // function to display current count
  const current_count_display = count => (
    current_count.innerHTML = `
      <span style='color: red;'>
        Counter = ${count}
      </span>
    `
  )

  // function to display reset
  const reset_counter = count => {
    // if (counter > 10) root.append(reset_btn)
    // else {
    //   if (document.body.contains(
    //     document.getElementById('count-reset'))
    //   ) reset_btn.remove()
    // }
    if (
      !document.body.contains(
        document.getElementById('count-reset')
      )
      && (counter > 10)
    ) root.append(reset_btn)
    if (counter <= 10) reset_btn.remove()
  }

  // event handler for counter
  document.addEventListener('click', e => {
    if (e.target && e.target.id === 'btn-counter') {
      counter = counter + 1
      console.log(`Counter: ${counter}`)
      current_count_display(counter)
      reset_counter(counter)
    }
  })

  // event handler for reset
  document.addEventListener('click', e => {
    if (e.target && e.target.id === 'count-reset') {
      console.log('reset')
        counter = 0
        current_count.innerHTML = 'Counter Reset to 0'
    }
  })

  // add counter &
  fragment.appendChild(btn)
  fragment.appendChild(current_count)
  console.log(`Counter component. Initial count: ${counter}`)
  return root.appendChild(fragment)
}


// =========================================



// execute component
CounterComponent();

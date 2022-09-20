// Target:
// const element = <h1 title="foo">Hello</h1>
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

// ============================
// Achieve without using react:

const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
)

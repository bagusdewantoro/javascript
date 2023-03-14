
/*
React Version:

const element = (
	<div id="foo">
		<h1>bar</h1>
		<b />
	</div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
*/


// Our Own React:

function createElement(type, props, ...children) {
	return {
		type,
		props: {
			...props,
			children: children.map(child => 
				typeof child === "object"
					? child
					: createTextElement(child)
			),
		},
	}
}

console.log(createElement(
	"div",
	{ id: "foo" },
	createElement("h1", null, "bar"),
	createElement("b")
))
// {
// 	"type": "div",
// 	"props": {
// 		"id": "foo",
// 		"children": [
// 		  {
// 	      "type": "h1",
// 	      "props": {
// 	        "children": [
// 	          {
// 	            "type": "TEXT_ELEMENT",
// 	            "props": {
// 	              "nodeValue": "bar",
// 	              "children": []
// 	            }
// 	          }
// 	        ]
// 	      }
// 		  },
// 		  {
// 	      "type": "b",
// 	      "props": {
//         	"children": []
// 	      }
// 		  }
// 		]
// 	}
// }


function createTextElement(text) {
	return {
		type: "TEXT_ELEMENT",
		props: {
			nodeValue: text,
			children: [],
		},
	}
}


function render(element, container) {
	const dom = 
		element.type == "TEXT_ELEMENT"
			? document.createTextNode("")
			: document.createElement(element.type)
	console.log("current 1 dom =", dom) // <div id="foo"><h1>bar</h1><b></b></div>


	const isProperty = key => key !== "children"
	Object.keys(element.props)
		.filter(isProperty)
		.forEach(name => {
			dom[name] = element.props[name]
			console.log("dom[name] =", dom[name]) // foo
		})
	console.log("element.props =", element.props)
	// {
	//   "id": "foo",
	//   "children": [
	//     {
	//       "type": "h1",
	//       "props": {
	//         "children": [
	//           {
	//             "type": "TEXT_ELEMENT",
	//             "props": {
	//               "nodeValue": "bar",
	//               "children": []
	//             }
	//           }
	//         ]
	//       }
	//     },
	//     {
	//       "type": "b",
	//       "props": {
	//         "children": []
	//       }
	//     }
	//   ]
	// }
	
	console.log("Object.keys(element.props) =", Object.keys(element.props)) 
	// ["id", "children"]

	element.props.children.forEach(child => 
		render(child, dom)
	)
	container.appendChild(dom)
	console.log("current 2 dom =", dom) // "bar"
}

const Didact = {
	createElement,
	render
}

// Without JSX
const elementNonJSX = Didact.createElement(
	"div",
	{ id: "foo" },
	Didact.createElement("h1", null, "bar"),
	Didact.createElement("b")
)

// With JSX  // same result 
/** @jsx Didact.createElement */
const element = (
	<div id="foo">
		<h1>bar</h1>
		<b />
	</div>
)


const body = document.getElementsByTagName("body")[0]
const container = document.createElement("div")
body.appendChild(container)
Didact.render(element, container)
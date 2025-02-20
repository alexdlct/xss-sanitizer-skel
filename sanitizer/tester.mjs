const htmlRender = document.getElementById("rendered");
const c = await fetch("testcase.txt")
const c_text = await c.text()
console.log(c_text)
htmlRender.setAttribute("srcdoc", c_text);
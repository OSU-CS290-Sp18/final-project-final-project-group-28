document.getElementById("task-val").addEventListener("keyup", function(e){
	if (e.key == "Enter") {
		if (e.target.value.trim() == "") return false;
		const ctx = {text: e.target.value};
		const head = new Headers({"text": e.target.value});
		fetch("new", { method: "POST", headers: head });
		e.target.value = "";
		const ren = Handlebars.templates.note(ctx);
		const con = document.getElementById("new-prompt");
		con.insertAdjacentHTML('beforebegin', ren);
	}
});

document.addEventListener("click", function(e){
	if (!e.target.classList.contains("tick")) return false;
	const content = e.target.parentElement.children[1].textContent;
	const tick = e.target.checked;
	const head = new Headers({"text": content, "checked": tick});
	fetch("tick", { method: "PATCH", headers: head });
}, false);
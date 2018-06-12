document.getElementById("task-val").addEventListener("keyup", function(e){
	if (e.key == "Enter") {
		const ctx = {text: e.target.value};
		e.target.value = "";
		const ren = Handlebars.templates.note(ctx);
		const con = document.getElementById("new-prompt");
		con.insertAdjacentHTML('beforebegin', ren);
	}
});
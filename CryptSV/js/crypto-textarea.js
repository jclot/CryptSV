var letters = 'abcdefghijklmnopqrstuvwxyz';

function Decrypt(params){
	var t = params.replace(/([\d]{1,2})([^\d]|$)/g, function(match, p1, p2) {
		return letters[Number(p1) - 1] + (p2 == "-" ? "" : p2);
	});
	return t;
}


function valueTextArea() {

    const textarea = document.getElementById('decrypt-form').value;
    document.getElementById("text-decrypted").innerHTML = Decrypt(textarea);

}
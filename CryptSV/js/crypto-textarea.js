
var letters = 'abcdefghijklmnopqrstuvwxyz';

document.getElementById('myFile').addEventListener('change', getFile);

function getFile(event) {

    const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('text-decrypted'),
      input.files[0]


      )}}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function Decrypt(params){
	var t = params.replace(/([\d]{1,2})([^\d]|$)/g, function(match, p1, p2) {
		return letters[Number(p1) - 1] + (p2 == "-" ? "" : p2);
	});
	return t;
}


function valueTextArea() {


    const textarea = document.getElementById('decrypt-form').value;
    document.getElementById("text-decrypted").innerHTML = Decrypt(textarea);

    getFile();

}




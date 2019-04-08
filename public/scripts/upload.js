function getAsText(fileToRead){
    let reader = new FileReader();

    reader.readAsText(fileToRead);

    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function handleFiles(){
    let file = document.querySelector('#file').files[0];
    let fd = new FormData();
    fd.append('file', file);
    // $.ajax({
    //     type: 'POST',
    //     url: '/upload',
    //     data: fd,
    //     processData: false,
    //     contentType: false
    // }).done(function (data) {
    //     console.log(data);
    // });
    if(window.FileReader){
        getAsText(file)
    }
    else{
        alert('File not supported');
    }
}

function loadHandler(event) {
    let csv = event.target.result;
    processData(csv);
}

function errorHandler(event) {
    if(event.target.error.name === 'NotReadableError'){
        alert('Cannot read file');
    }
}

function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n|\r/);
    let arr = [];
    let headers = [];
    for(let i = 0; i < allTextLines.length; i++){
        let row = allTextLines[i].split(',');
        if(i===0){
            headers = row;
        }
        else{
            let arrTemp = {};
            for(let j = 0; j < row.length; j++){
                arrTemp[headers[j]] = row[j].replace(/#/g,'').replace(/"/g, '');
            }
            arr.push(arrTemp);
        }
    }
    console.log(arr);
    document.querySelector('#json').value = JSON.stringify(arr);
    document.querySelector('#form').submit();
}
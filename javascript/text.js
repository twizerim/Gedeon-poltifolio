

function downloadPDF() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var pdfLink = 'path/to/your/file.pdf';
    
    // Create a temporary link element
    var link = document.createElement('a');

    // Set the download attribute and file path
    link.download = 'downloaded_file.pdf';
    link.href = pdfLink;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link element
    link.click();

    // Remove the link element from the document
    document.body.removeChild(link);
}

document.getElementById('colorButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
})

function navad(){
    const admin=document.querySelector(".navigate").style.display="none"
    const wapi =document.querySelector(".fa-bars").style.display="block"
}

function naver(){
    const byaje=document.querySelector(".navigate").style.display="block"
    const wapi =document.querySelector(".fa-bars").style.display="none"
}

// --------------------------------------------------------------------------------------------

function post(){
     const post=document.querySelector(".post-blog").style.display="block"
     const update=document.querySelector(".update-blog").style.display="none"
     const delet=document.querySelector(".delete-blog").style.display="none"
}
function update(){
    const post=document.querySelector(".post-blog").style.display="none"
    const update=document.querySelector(".update-blog").style.display="block"
    const delet=document.querySelector(".delete-blog").style.display="none"

}
function Delete(){
    const post=document.querySelector(".post-blog").style.display="none"
    const update=document.querySelector(".update-blog").style.display="none"
    const delet=document.querySelector(".delete-blog").style.display="block"

}
// ---------------------------------------------------------------------------------------------------


function byajeto(){
    const buto=document.querySelector(".user-update").style.display="block"
}
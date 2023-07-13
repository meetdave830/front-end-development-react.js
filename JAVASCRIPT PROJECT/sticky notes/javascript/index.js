 
 let notesData=[];
 let generatedid=1;

 if (localStorage.getItem("notes")!==null){
    notesData=JSON.parse(localStorage.getItem("notes"));
    generatedid=notesData[notesData.length-1].id+1
 }

 function  displayExistingNotes() {
    notesData.forEach(function(oldNote,index){


        let note=document.createElement("div");
    note.classList.add("note");

    let title=document.createElement("input")
    title.classList.add("title");
    title.setAttribute("placeholder","sticky-title....");
    title.setAttribute("type","text");
    title.setAttribute("data-id",oldNote.id);
    title.value=oldNote.title;

    title.onkeyup=updatetitle;

    let content=document.createElement("textarea");
        content.classList.add("content");
        content.setAttribute("placeholder","content here");
        content.setAttribute("data-id",oldNote.id);
        content.value=oldNote.content;
        content.onkeyup=updatecontent;

    let deleteBtn=document.createElement("img");
        deleteBtn.src="delete.png";
        deleteBtn.setAttribute("data-id",oldNote.id);
        deleteBtn.onclick=deleteNote;



        note.appendChild(title);
        note.appendChild(content);
        note.append(deleteBtn);


        document.getElementById("notes").appendChild(note);



    })
 }
 displayExistingNotes();

function newNote(){
    let note=document.createElement("div");
    note.classList.add("note");

    let title=document.createElement("input")
    title.classList.add("title");
    title.setAttribute("placeholder","sticky-title....");
    title.setAttribute("type","text");
    title.setAttribute("data-id",generatedid);
    title.onkeyup=updatetitle;

    let content=document.createElement("textarea");
        content.classList.add("content");
        content.setAttribute("placeholder","content here");
        content.setAttribute("data-id",generatedid);
        content.onkeyup=updatecontent;

        let deleteBtn=document.createElement("img");
        deleteBtn.src="delete.png";
        deleteBtn.setAttribute("data-id",generatedid);
        deleteBtn.onclick=deleteNote;

        let head1=document.createElement("h3")

        note.appendChild(title);
        note.appendChild(content);
        note.append(deleteBtn);


        document.getElementById("notes").appendChild(note);

        notesData.push({id:generatedid,title:"",content:""});
        generatedid++;
        console.log(notesData);

        localStorage.setItem("notes",JSON.stringify(notesData));
}

    function updatetitle(){
        let titleId=Number(this.getAttribute("data-id"));
        let titleValue=this.value;
        let obj=notesData.find(function(meet,index){
            return meet.id===titleId;
        })

        obj.title=titleValue; 
        // console.log(obj);
        // console.log(notesData);
        localStorage.setItem("notes",JSON.stringify(notesData));

    }

    function updatecontent(){
        let contentId=Number(this.getAttribute("data-id"));
        let contentvalue=this.value;
        let obj=notesData.find(function(meet,index){
            return meet.id===contentId;
        })

        obj.content=contentvalue; 
        // console.log(obj);
        // console.log(notesData);
        localStorage.setItem("notes",JSON.stringify(notesData));

    }

    function deleteNote(){

        let deleteid=Number(this.getAttribute("data-id"))

        let index=notesData.findIndex(function(meet,index){
            return meet.id===deleteid;
        })

            notesData.splice(index,1);

            this.parentNode.remove();
            localStorage.setItem("notes",JSON.stringify(notesData));

            // console.log(this.parentNode);
    }



{/* <div class="note">
<input type="text"  class="title"placeholder="sticky-title...." name="" id="">
<textarea name="" id="" class="content" placeholder="content here"></textarea>

</div> */}
let todoLists=[];

let index=-1;
let count=0;
let startedCount=0;
let completedcount=0;
let highPriorityCount=0;
let editable=false;
/* --------------------------------------------------------------------------------------------- */
let popup=document.getElementById('POPUP');
let todo=document.getElementById('add-todo');
let close=document.getElementById('close');
let form =document.getElementById('form');
let submit=document.getElementById('submit');
let counter1=document.getElementById('counter1');
let counter1image1=document.getElementById('counter1image1');
let counter1image2=document.getElementById('counter1image2');
let mainList=document.getElementById('mainList');
let startedcount1=document.getElementById('Startedcount1');
let highPriority=document.getElementById('highPriority');
let completedcount1=document.getElementById('completedcount1');

 function toggle(event)
{
   if(popup.style.display=='none')
   {
   popup.style.display='flex';
   close.style.display="flex";
   
    return;
   }
   popup.style.display='none';
   
} 

todo.addEventListener('click',toggle
);
close.addEventListener('click',toggle);
/* ---------------------------------------------------Events------------------------------------------------------------- */
let text="";
submit.addEventListener('click',(event)=>
{
    event.preventDefault(); 
    
    let text=form.taskName.value;
    let date=form.date.value;
    let priority=form.priority.value;
    let status=form.status.value;
    if(text==""||date==null)
    {
        alert("Give date and task Both");
        return;
    }
    index++;
    todoLists.push(new List(text,date,priority));
      if(count==0)
      {
        counter1image1.style.display="none";
        counter1image2.style.display="flex";
         mainList.children.item(0).style.display="none";
         mainList.children.item(1).style.display="none";
      }
      if(!editable)
      {
      count++;
      }
     counter1.innerText= `${count}`;
     if(priority=='high')
     {
         highPriorityCount++;
         highPriority.innerText=`${highPriorityCount}`+" of "+`${count}`;
     }
     highPriority.innerText=`${highPriorityCount}`+" of "+`${count}`;

     if(status=='Started')
     {
        startedCount++;
        startedcount1.innerText=` ${startedCount}`;
     }
     startedcount1.innerText=` ${startedCount}`;

    
   /* -------------------------------------------------------------- */
     let task=document.createElement("div");
     task.className="todo";
     task.draggable=true;
      

     let checkbox=document.createElement("input");
     checkbox.type="checkbox";
     checkbox.className="checkBox";
     checkbox.id=`checkbox${count}`;
     task.appendChild(checkbox);

     let todo=document.createElement("div");
     if(status=='Completed')
     {
        completedcount++;
        completedcount1.innerText=` ${completedcount}`;
        todo.style.textDecoration="line-through";
        checkbox.checked=true;
     }
     completedcount1.innerText=` ${completedcount}`;
     todo.className="todo-input";
      todo.innerText=form.taskName.value;
      todo.id=`input${count}`;
      task.appendChild(todo);
      /* ------------------------------------------------------------------------------------------------------ */
      let displaydate=document.createElement("div");
      displaydate.className="display";
       displaydate.innerText=`${date}`;
       displaydate.style.color="white";
       displaydate.style.width="150px";

       task.appendChild(displaydate);
       /* ----------------------------------------------------------------------------------------------------- */
       let displaystatus=document.createElement("div");
       displaystatus.className="display";
       displaystatus.innerText=`${status}`;
       displaystatus.style.color="white";
       displaystatus.style.width="100px";
       task.appendChild(displaystatus);
      /* -----------------------------------------------------------------------edit Element----------------- */
      let edit=document.createElement("span");
      edit.className="material-symbols-outlined";
      edit.innerText="edit";
      edit.addEventListener('click',()=>
      {     
        
        let text1=form.taskName.value;
        let date1=form.date.value;
        let priority1=form.priority.value;
        let status1=form.status.value; 
             let taskToEdit=task;
             taskToEdit.remove();
             editable=true;
             popup.style.display='flex';
             close.style.display="none";
            
             if(priority1=='high')
             {
                 highPriorityCount--;
        
             }
             if(status1=='Completed')
             {
                completedcount--;
            
             }
             if(status1=='Started')
          {
             startedCount--;
            
          }
          
      });
      task.appendChild(edit);
      /* ----------------------------------------------------------------------------delete Element------------------- */
      let deleteTodo=document.createElement("div");
      deleteTodo.addEventListener('click',()=>{
        let text2=form.taskName.value;
        let date2=form.date.value;
        let priority2=form.priority.value;
        let status2=form.status.value;
        let taskToDelete=task;
        taskToDelete.remove();
        count--;
        counter1.innerText= `${count}`;
        if(priority2=='high')
        {
            highPriorityCount--;
            highPriority.innerText=`${highPriorityCount}`+" of "+`${count}`;
        }
        if(status2=='Completed')
        {
           completedcount--;
           completedcount1.innerText=` ${completedcount}`;
        }
        if(status=='Started')
     {
        startedCount--;
        startedcount1.innerText=` ${startedCount}`;
     }

     if(count==0)
     {
        counter1image1.style.display="flex";
        counter1image2.style.display="none";
         mainList.children.item(0).style.display="flex";
         mainList.children.item(1).style.display="flex";
         highPriority.innerText="0";

     }
      })
      deleteTodo.id=`${count}delete`;
      let deleteImage= document.createElement("span");
       deleteImage.className="material-symbols-outlined";
       deleteImage.innerText="delete";
       deleteTodo.append(deleteImage);
       task.appendChild(deleteTodo);
       mainList.appendChild(task);
     popup.style.display='none';
     editable=false;
     
}
);
/* ------------------------------------------------------------------------------------------------------------------ */
function List(Task,date,priority)
{
    this.task=Task;
    this.date=date;
    this.priority=priority;
}
 

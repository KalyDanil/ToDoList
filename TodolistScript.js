function make (event) {
        let field= document.getElementById("put");
        if (event.code=="Enter" && field.value!==""){
            let box= document.createElement("input");
            let deal= document.createElement("span");
            let line= document.createElement("div");
            let button= document.createElement("input");
            let form= document.getElementById("form");
            let all= document.getElementById("all");
            let active= document.getElementById("active");
            let completed= document.getElementById("completed");
            let check_All=document.getElementById("check_All");
            let count= document.getElementById("count");
            count.hidden=false;
            all.hidden=false;
            active.hidden=false;
            completed.hidden=false;
            check_All.hidden=false;
            box.type="checkbox";
            box.classList.add("no_checked");
            button.type="button";
            deal.innerText=field.value + " ";
            deal.classList.add("active");
            deal.name="deal_text";
            button.value="[x]";
            line.append(box); 
            line.append(deal);
            line.append(button);
            form.append(line);
            field.value='';
            if (completed.classList.contains("button_active")){
                line.hidden=true;
            }
            counting();
    }
}

    let form= document.getElementById("form");
   
    function remove_deal (deal) {
        let deals=document.querySelectorAll(".no_checked");
        let checked_deals=document.querySelectorAll(".checked");
        let all= document.getElementById("all");
        let active= document.getElementById("active");
        let completed= document.getElementById("completed");
        let Button_ClearCompleted=document.getElementById("Button_ClearCompleted");
        let check_All=document.getElementById("check_All");
        form.removeChild(deal);
        if (deals.length==0 && checked_deals.length==1){
            all.hidden=true;
            active.hidden=true;
            completed.hidden=true;
            check_All.hidden=true;
            Button_ClearCompleted.hidden=true;
        }
        if (deals.length==1 && checked_deals.length==0){
            all.hidden=true;
            active.hidden=true;
            completed.hidden=true;
            check_All.hidden=true;
            Button_ClearCompleted.hidden=true;
        }
        counting();
    }

    function check_noCheck(deal,checkbox){
        let Button_ClearCompleted=document.getElementById("Button_ClearCompleted");
        let active_button=document.getElementById("active");
        let completed_button=document.getElementById("completed");
        deal.classList.toggle("active");
        deal.classList.toggle("completed");
        checkbox.classList.toggle("checked");
        checkbox.classList.toggle("no_checked");
        let checked_deals=document.querySelectorAll(".checked");
        if (checked_deals.length==0){
            Button_ClearCompleted.hidden=true;
        }
        if (checked_deals.length>0){
            Button_ClearCompleted.hidden=false;
        }
        if (active_button.classList.contains("button_active")){
            deal.parentNode.hidden=true;
        }
        if (completed_button.classList.contains("button_active")){
            deal.parentNode.hidden=true;
        }
        counting();
    }
   
    form.onclick=function(event){
        let target0= event.target;
        if(target0.tagName="input" && target0.type=="checkbox") {
            let target1= target0.nextElementSibling;
            check_noCheck(target1,target0);
        }
        if(target0.tagName="input" && target0.type=="button") {
            let target1= target0.parentNode;
            remove_deal(target1);
        }
    }

    form.ondblclick=function(event){
        let target1=event.target;
        if(target1.tagName="span" && target1.name=="deal_text"){
            let line=target1.parentNode;
            let checkbox=target1.previousSibling;
            let deal=document.createElement("input");
            deal.type="text";
            button_X=target1.nextSibling;
            deal.value=target1.innerText;
            line.removeChild(target1);
            line.insertBefore(deal, button_X);
            deal.focus();
            deal.onkeydown= function(event){
                if (event.code=="Enter"){
                    if (deal.value!==""){
                        let text=document.createElement("span");
                        text.innerText=deal.value;
                        text.classList.add("active");
                        text.name="deal_text";
                        deal.hidden=true;
                        line.insertBefore(text, button_X);
                        if (checkbox.checked){
                            text.classList.add("completed");
                            text.classList.remove("active");
                        }
                    }
                    if (deal.value==""){
                        let text=document.createElement("span");
                        text.innerText=deal.value;
                        text.classList.add("active");
                        text.name="deal_text";
                        deal.hidden=true;
                        line.insertBefore(text, button_X);
                        deal.hidden=true;
                    }
                }
            }
            deal.onblur= function () {
                if (deal.value!=="" && deal.hidden==false){    
                    let text=document.createElement("span");
                    text.innerText=deal.value;
                    text.classList.add("active");
                    text.name="deal_text";
                    line.removeChild(deal);
                    line.insertBefore(text, button_X);
                    if (checkbox.checked){
                        text.classList.add("completed");
                        text.classList.remove("active");
                    }
                }
                if (deal.value!=="" && deal.hidden==true){
                    line.removeChild(deal);
                }
                if (deal.value==""){
                    remove_deal(line);
                }
            }    
        }
    }

    function makeButton () {
        let field= document.getElementById("put");
        if (field.value!==""){
            let box= document.createElement("input");
            let deal= document.createElement("span");
            let line= document.createElement("div");
            let button= document.createElement("input");
            let form= document.getElementById("form");
            let all= document.getElementById("all");
            let active= document.getElementById("active");
            let completed= document.getElementById("completed");
            let check_All=document.getElementById("check_All");
            let count= document.getElementById("count");
            count.hidden=false;
            all.hidden=false;
            active.hidden=false;
            completed.hidden=false;
            check_All.hidden=false;
            box.type="checkbox";
            box.classList.add("no_checked");
            button.type="button";
            deal.innerText=field.value + " ";
            deal.classList.add("active");
            deal.name="deal_text";
            button.value="[x]";
            line.append(box); 
            line.append(deal);
            line.append(button);
            form.append(line);
            field.value='';
            if (completed.classList.contains("button_active")){
                line.hidden=true;
            }
            counting();
         }
    }

    function counting(){
        let deals_active=document.querySelectorAll(".active");
        let deals_completed=document.querySelectorAll(".completed");
        let count= document.getElementById("count");
        if (deals_active.length!==0){
            count.innerText=deals_active.length + " " + "items left";
        }
        if (deals_active.length==0 && deals_completed.length==0){
            count.hidden=true;
        }
        if (deals_active.length==0 && deals_completed.length!==0){
            count.innerText=0 + " " + "items left";
        }
    }

    function All_Button(){
        let all_button=document.getElementById("all");
        all_button.classList.remove("button_passive");
        all_button.classList.add("button_active");
        let active_button=document.getElementById("active");
        let completed_button=document.getElementById("completed");
        completed_button.classList.add("button_passive");
        completed_button.classList.remove("button_active");
        active_button.classList.add("button_passive");
        active_button.classList.remove("button_active");
        let deals_completed=document.querySelectorAll(".completed");
        let deals_active=document.querySelectorAll(".active");
        for (let line of deals_completed){
            line.parentNode.hidden=false;
        }
        for (let line of deals_active){
            line.parentNode.hidden=false;
        }
    }

    function Active_Button(){
        let active_button=document.getElementById("active");
        active_button.classList.remove("button_passive");
        active_button.classList.add("button_active");
        let all_button=document.getElementById("all");
        let completed_button=document.getElementById("completed");
        completed_button.classList.add("button_passive");
        completed_button.classList.remove("button_active");
        all_button.classList.add("button_passive");
        all_button.classList.remove("button_active");
        let deals_completed=document.querySelectorAll(".completed");
        let deals_active=document.querySelectorAll(".active");
        for (let line of deals_completed){
            line.parentNode.hidden=true;
        }
        for (let line of deals_active){
            line.parentNode.hidden=false;
        }
    }

    function Completed_Button(){
        let completed_button=document.getElementById("completed");
        completed_button.classList.remove("button_passive");
        completed_button.classList.add("button_active");
        let all_button=document.getElementById("all");
        let active_button=document.getElementById("active");
        active_button.classList.add("button_passive");
        active_button.classList.remove("button_active");
        all_button.classList.add("button_passive");
        all_button.classList.remove("button_active");
        let deals_completed=document.querySelectorAll(".completed");
        let deals_active=document.querySelectorAll(".active");
        for (let line of deals_completed){
            line.parentNode.hidden=false;
        }
        for (let line of deals_active){
            line.parentNode.hidden=true;
        }
    }
   
    function Button_ClearCompleted() {
        let all= document.getElementById("all");
        let active= document.getElementById("active");
        let completed= document.getElementById("completed");
        let Button_ClearCompleted=document.getElementById("Button_ClearCompleted");
        let check_All=document.getElementById("check_All");
        let deals=document.querySelectorAll(".completed");
        let no_checked_deals=document.querySelectorAll(".no_checked");
        for (let line of deals){
            form.removeChild(line.parentNode);
        } 
        if(no_checked_deals.length==0){
            all.hidden=true;
            active.hidden=true;
            completed.hidden=true;
            check_All.hidden=true;
            Button_ClearCompleted.hidden=true;
        }
        counting();  
    }

    function check_All(){
        let Button_ClearCompleted=document.getElementById("Button_ClearCompleted");
        let active_button=document.getElementById("active");
        let completed_button=document.getElementById("completed");
        let deals=document.querySelectorAll(".no_checked");
        let checked_deals=document.querySelectorAll(".checked");
        if (deals.length>0 && checked_deals.length>0){
            for (let line of deals){
                line.checked=true;
                line.nextSibling.classList.toggle("active");
                line.nextSibling.classList.toggle("completed");
                line.classList.remove("no_checked");
                line.classList.add("checked");
            }
        }
        if (deals.length==0){
            for (let line of checked_deals){
                line.checked=false;
                line.nextSibling.classList.toggle("active");
                line.nextSibling.classList.toggle("completed");
                line.classList.remove("checked");
                line.classList.add("no_checked");
                Button_ClearCompleted.hidden=true;
            }
        }
        if (checked_deals.length==0){
            for (let line of deals){
                line.checked=true;
                line.nextSibling.classList.toggle("active");
                line.nextSibling.classList.toggle("completed");
                line.classList.remove("no_checked");
                line.classList.add("checked");
                Button_ClearCompleted.hidden=false;
            }
        }
        counting();
        if (active_button.classList.contains("button_active")){
            if (checked_deals.length==0){
                for (let line of deals){
                line.parentNode.hidden=true;
                }
            }
            if (deals.length==0){
                for (let line of checked_deals){
                line.parentNode.hidden=false;
                }
            }
            if(deals.length>0 && checked_deals.length>0){
                for (let line of deals){
                line.parentNode.hidden=true;
                }
            }
        }
        if (completed_button.classList.contains("button_active")){
            if (deals.length==0){
                for (let line of checked_deals){
                line.parentNode.hidden=true;
                }
            }
            if (checked_deals.length==0){
                for (let line of deals){
                line.parentNode.hidden=false;
                }
            }
            if(deals.length>0 && checked_deals.length>0){
                for (let line of deals){
                line.parentNode.hidden=false;
                }
            }
        }
    }
define("baseElement",function()
{
  


    return function(element="div"){
    this.Ele=null;
    let nodeType=0;
  if(typeof(element)==="string")
    {
        try
        {
            this.Ele=document.createElement(element.toString().trim());


        }catch(error)
        {
          throw new Error(error,"create element error");

        }

    }else if(typeof(element)==="object")
    {
       
            if(element.nodeType)
            {
                    if(element.nodeType===1)
                    {
                         this.Ele=element;
                    }
                    
            }else
            {
                   throw new Error("This is not HtmlElement");
            }


    }else if(typeof(element)=="undefined"||element==null)
    {
         this.Ele=document.createElement("div");
    }



   
    let EventList =new Object();
    let DomEventList=new Object();
    //type代表内部事件还是用户事件0为普通object,非0为htmlelement
    this.addEvent=function(id,event,type=0,useCapture=false)
    {

        if(type==0)
        {
            if(!EventList[id])
            {
                    EventList[id]=new Array();
                    EventList[id].push(event);
            }else
            {
                EventList[id].push(event);   
            }
        }else
        {
               if(this.Ele.addEventListener)
               {
                    this.Ele.addEventListener(id,event,useCapture);
                    if(!DomEventList[id])
                    {
                            DomEventList[id]=new Array();
                            DomEventList[id].push(event);
                    }else
                    {
                        DomEventList[id].push(event);   
                    }

               }
        }
    };
    this.fireEvent=function(id,type=0,params=[])
    {
        if(type==0)
        {
            if(!EventList[id])
            {
                return;
            }else
            {
                    for(let index in EventList[id])
                    {
                        EventList[id][index].call(this,params);
                    }
            }
        }else
        {
               if(!DomEventList[id])
                    {
                        return;
                    }else
                    {
                            for(let index in DomEventList[id])
                            {
                                DomEventList[id][index].call(this,params);
                            }
                    }
        }
    };
    this.removeEvent=function(id,fun,type=0,useCapture=false)
    {
        if(type==0)
        {
            if(EventList[id])
            {
                if(typeof(fun)=="function")
                {
                    let funindex=-1;
                    for(var i=0;i<EventList[id].length;i++)
                    {
                                if(EventList[id][i]==fun)
                                {
                                    funindex=i;
                                    break;
                                }
                    }
                    if(funindex!=-1)
                    {
                        a.splice(funindex,1);
                        return true;
                    }
                }else
                {
                    return false;
                }
            }else
            {
                return false;
            }
         }else
         {
            if(DomEventList[id])
            {
                if(typeof(fun)=="function")
                {
                    let funindex=-1;
                    for(var i=0;i<DomEventList[id].length;i++)
                    {
                                if(DomEventList[id][i]==fun)
                                {
                                    funindex=i;
                                    break;
                                }
                    }
                    if(funindex!=-1)
                    {
                        a.splice(funindex,1);
                        if(this.Ele.removeEventListener)
                        {
                            this.Ele.removeEventListener(id,fun,useCapture);
                        }
                        return true;
                    }
                }else
                {
                    return false;
                }

         }
      }
    }
   
}})
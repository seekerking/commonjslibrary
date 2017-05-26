define("search",["./init","jquery"],function(common,$){

function search()
{
    if(!this instanceof search)
    {
        throw new Error("This is a class please do not use it like function");
    }
    let result=new Object();
    this.getItems=function(expression)
    {
        if(typeof(expression)=="undefined"||expression==null||expression.toString().trim()=="")
        {
            return $();
        }

        let item=result[expression];
        if(item)
        {
            return item;
        }else
        {

           item= $(expression);
           if(item.length!=0)
           {
               result[expression]=item;
           }
           return item;
        }
    }



}


(function()
{

    if(typeof(common.dom)=="undefined")
    {
        common.dom={};
         common.dom.seacrh=new  search();
    }else
    {
         common.dom.seacrh=new  search();

    }
    

})()
return common;

})


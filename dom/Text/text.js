define("text",["./init"],function(common)
{

String.prototype.IsNullOrEmpty=function()
{
   if(typeof(this)=="undefined"||this==null||this.trim()=="")
   {
       return true;
   }else
   {
       return false;
   }

};
String.prototype.format=function(args){ 
 if(arguments.length>0){ 
 var result=this; 
 if(arguments.length==1&&typeof(args)=="object"){ 
  for(var key in args){ 
  var reg=new RegExp("({"+key+"})","g"); 
  result=result.replace(reg, args[key]); 
  } 
 } 
 else{ 
  for(var i=0;i<arguments.length;i++){ 
  if(arguments[i]==undefined){ 
   return ""; 
  } 
  else{ 
   var reg=new RegExp ("({["+i+"]})","g"); 
   result = result.replace(reg, arguments[i]); 
  } 
  } 
 } 
 return result; 
 } 
 else{ 
 return this; 
 } 
};



function stringbuilder(){
  var text=[];  
  this.append=function(str)
  {
    text.push(str);

  };
  this.appendline=function(str)
  {
      text.push(str+"\n\r");
  };
  this.appendformat=function(args)
  {
         var str= arguments[0];
         delete arguments[0];
         arguments.length-=1;
        this.append(str.format(arguments));
  };
    this.appendlineformat=function(args)
  {
        var str= arguments[0];
         delete arguments[0];
         arguments.length-=1;
        this.append(str.format(arguments)+"\n\r");
  };
  this.tostring=function(splitchar="")
  {
      return text.join(plitchar);
  }    

};
(function()
{
 if(typeof(common.dom)=="undefined")
    {
         common.dom={};
         common.dom.text={};
         common.dom.text.stringbuilder=stringbuilder;
    }else
    {
        if(typeof(common.dom.text)=="undefined")
        {
             common.dom.text={};
        }
          common.dom.text.stringbuilder=stringbuilder;

    }
    
    return common;
})()


})


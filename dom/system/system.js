define("system",["./init"],function(common){


function system(){
    this.stopAlert=function()
    {
        window.alert=function(str){return ;}
    },
    this.forbiddNewWindow=function()
    {
        window.open=function(str){return ;}
    },
    this.promptbeforequit=function(message)
    {
        window.onbeforeunload = function() { return "\n"+message+"?";}
    },
    this.openForm=function(url,windowname,windowstyle)
        {
            window.open(url,windowname,windowstyle);

        },
    this.cookies=(function(){
        function cookies()
        {
            this.prototype=document.cookie.__proto__||document.cookie.prototype;
            this.getCookie=function(cookiename)
            {
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
                else
                return null;
            },
            this.setCookie=function(name,value,expires=1)
            {
                var Days = expires;
                var exp = new Date();
                exp.setTime(exp.getTime() + Days*24*60*60*1000);
                document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
            },
            this.delCookie=function(name)
            {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=getCookie(name);
            if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
            }
        }
            return new cookies();
    })(),

    this.getStorage=function(once=true)
    {
        var storage=(once==true? window.sessionStorage:window.localStorage);
        function Storage()
        {
           this.prototype=storage.__proto__||storage.prototype;
            this.setItem=function(name)
            {
               return  storage.getItem(name);
            },
            this.setItem=function(name,value)
            {
               return storage.setItem(name,value);
            }
            this.removeItem=function(name)
            {
              return  storage.removeItem(name);
            }
            this.clear=function()
            {
                return storage.clear();
            }
        }
            return new Storage();
    },
    this.url=(function(){
            var sourceurl=window.location.href;
            var result={};
            function url()
            {
                this.queryParams=function()
                {
                        var query = window.location.search.substring(1);
                        result={};
                        var vars = query.split("&");
                        for (var i=0;i<vars.length;i++) {
                                var pair = vars[i].split("=");
                                result[pair[0]]=pair[1] 
                        }
                        return result;

                },
                this.getParamVal=function(variable)
                    {
                        var query = window.location.search.substring(1);
                        var vars = query.split("&");
                        for (var i=0;i<vars.length;i++) {
                                var pair = vars[i].split("=");
                                if(pair[0] == variable){return pair[1];}
                        }
                        return false;
                    },
                this.updateParamVal=function(paramName,replaceWith){
                    var oUrl = this.location.search.toString();
                    var re=eval('/('+ paramName+'=)([^&]*)/gi');
                    var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
                    return nUrl;
                }
    }
    
    return new url();


    })()

};
(function()
{

    if(typeof(common.dom)=="undefined")
    {
        common.dom={};
         common.dom.system=new system();
    }else
    {
         common.dom.system=new system();

    }
    

})()
return common;

})


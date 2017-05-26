define( 'warperElement', ['baseElement'], function(baseElement) {
   
    function warperElement(styles)
            {

                let elementstyle=styles;
                init= function(_this,styles)
                {
                    if(typeof(styles)=="string")
                    {
                            _this.Ele.style.cssText=styles;
                    }else if(styles instanceof Object)
                    {
                            _this.extendpropertiese(_this.Ele.style,styles);
                    }
                };
                init(this,styles);//模拟构造函数
          
                function  setStyle(styles)
                {
                    elementstyle=styles;
                    init(styles);
                }
                function getStyle()
                {
                    return  elementstyle;
                }
                this.__defineGetter__("getStyle",getStyle);
                this.__defineSetter__("setStyle",setStyle);

            } ; 
    warperElement.prototype=new baseElement();
    return warperElement;




});
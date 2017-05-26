define( 'warperElement', ['baseElement'], function(baseElement) {
   
    function warperElement(styles)
            {

                    if(typeof(styles)=="string")
                    {
                            this.Ele.style.cssText=styles;
                    }else if(styles instanceof Object)
                    {
                            this.extendpropertiese(this.Ele.style,styles);
                    }



            } ; 
    warperElement.prototype=new baseElement();
    return warperElement;

});
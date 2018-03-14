var vrn = 'CA 123 456';
var vrn1 = 'CY 123 456'
function fromWhere(vrn){
 		if(vrn.startsWith('CY')){
			return "Bellville";}
        else if(vrn.startsWith('CJ')){
			return "Paarl";}
        else if(vrn.startsWith('CA')){
			return "Cape Town";
		}
        else{
			return "Some other place!";}


}

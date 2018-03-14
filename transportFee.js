var shift1 = 'morning';
var shift2 = "afternoon"
function transportFee(shift){
	if(shift==='morning'){
    	return 'R20';
    }
  else if(shift==='afternoon'){
      	return 'R10';
    }
  else{
    	return 'free';
    }
}

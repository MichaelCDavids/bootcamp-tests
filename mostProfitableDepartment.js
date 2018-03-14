var salesData1 = [
 {department : 'hardware', sales : 4500, day : 'Monday'},
 {department : 'outdoor', sales : 1500, day : 'Monday'},
 {department : 'carpentry', sales : 5500, day : 'Monday'},
 {department : 'hardware', sales : 7500, day : 'Tuesday'},
 {department : 'outdoor', sales : 2505, day : 'Tuesday'},
 {department : 'carpentry', sales : 1540, day : 'Tuesday'},
 {department : 'hardware', sales : 1500, day : 'Wednesday'},
 {department : 'outdoor', sales : 8507, day : 'Wednesday'},
 {department : 'carpentry', sales : 8009, day : 'Wednesday'},
 {department : 'hardware', sales : 12000, day : 'Thursday'},
 {department : 'outdoor', sales : 18007, day : 'Thursday'},
 {department : 'carpentry', sales : 6109, day : 'Thursday'},
 {department : 'hardware', sales : 7005, day : 'Friday'},
 {department : 'outdoor', sales : 12006, day : 'Friday'},
 {department : 'carpentry', sales : 16109, day : 'Friday'},
];
var salesData2 = [
 {department : 'hardware', sales : 4500, day : 'Monday'},
 {department : 'outdoor', sales : 1500, day : 'Monday'},
 {department : 'carpentry', sales : 5500, day : 'Monday'},
 {department : 'hardware', sales : 17500, day : 'Tuesday'},
 {department : 'outdoor', sales : 2505, day : 'Tuesday'},
 {department : 'carpentry', sales : 1540, day : 'Tuesday'},
 {department : 'hardware', sales : 1500, day : 'Wednesday'},
 {department : 'outdoor', sales : 8507, day : 'Wednesday'},
 {department : 'carpentry', sales : 8009, day : 'Wednesday'},
 {department : 'hardware', sales : 19000, day : 'Thursday'},
 {department : 'outdoor', sales : 18007, day : 'Thursday'},
 {department : 'carpentry', sales : 6109, day : 'Thursday'},
 {department : 'hardware', sales : 17005, day : 'Friday'},
 {department : 'outdoor', sales : 12006, day : 'Friday'},
 {department : 'carpentry', sales : 16109, day : 'Friday'},
];
var departmentSalesMap = {}


function mostProfitableDepartment(salesData){
  	console.log('');

  	console.log(' finding dept with most sales...');


  	for (var i = 0; i < salesData.length; i++) {
    	var currentDepartment = salesData[i].department;

    	if (departmentSalesMap[currentDepartment] === undefined){
        	departmentSalesMap[currentDepartment] = 0;
    	}
    	departmentSalesMap[currentDepartment] = departmentSalesMap[currentDepartment] + salesData[i].sales;
	}


  	var mostSales = 0;
  	var departmentMostSales = '';
  	for(var i in departmentSalesMap){
      	var currentDept = departmentSalesMap[i];
      	if(currentDept>mostSales){
			mostSales = currentDept;
          	departmentMostSales = i;
        }
	}
  	console.log(departmentMostSales);
  	//console.log(departmentSalesMap);

  	return departmentMostSales;
}

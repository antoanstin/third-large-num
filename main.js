//n th smallest number 
// let array=[7,4,3,9,2,1,6];
// function asending(array)
// {
	// for(i=0;i<array.length;i++)
	// {
		// for(j=i+1;j<array.length;j++)
		// {
			// if(array[i]>array[j])
			// {
				// temp=array[j];
				// array[j]=array[i];
				// array[i]=temp;
			// }
		// }	
		
	// }
	// return array;
// }
// console.log(asending(array));


// var bodyTemp=90,goingToTour="no",
   // manasuGood="yes",bikeWorking="yes",
   // localMatch="no",tempFestival="no",
   // isRaining="no",worthyTopic="yes",
   // movieRelease="no",bankWork="no",
   // anyFunctionForAnyone="no",wakeupTime="8",
   // busAvailability="yes",moreHomeWork="no";
// if(bodyTemp>=98 ||goingToTown=="yes"||
   // manasuGood=="no"||bikeWorking=="no"||
   // localMatch=="yes"||tempFestival=="yes"||
   // isRaining=="yes"||worthyTopic=="no"||
   // movieRelease=="yes"||bankWork=="no"||
   // anyFunctionForAnyone=="yes"||wakeupTime>"9"||
   // busAvailability=="no",moreHomeWork=="yes")
   
   // {
	   // console.log("Take Leave");	  
   // }
// else
   // {
	// console.log("Going to FABEVY") 
   // }	
   var a=[1,5,10,3,2];
   function array(a)
   {
	   for(i=0;i<a.length;i++)
	   {
		   for(j=i+1;j<a.length;j++)
		   {
			   if(a[i]>a[j])
			   {
			   temp=a[j];
			   a[j]=a[i];
			   a[i]=temp
			   }
		   }
	   }
	  let thirdLargeNumber=a[2];
		return thirdLargeNumber;
   }
   
console.log(array(a));


function calculateMinCost() {
  //your code here
  let inp=document.getElementById("rope-lengths").value;
	let arr=inp.split(" ");
	var sum=0;
	while(arr.length!=1)
		{
			arr.sort((a,b)=>{return a-b;})
			
			let a=parseInt(arr.shift());
			let b=parseInt(arr.shift());
			let temp=a+b;
			sum+=temp;
			arr.push(temp);
			
		}

	let res=document.getElementById('result');

	res.innerHTML=sum;
  
  
} 
  
  
  
 


function btn_click(){

}

$(document).ready(function(){

	var count = 0;


	$(".next-btn").on("click", function(){
		if(count==0){
            $("header").hide();
			$(".page:nth-child(1)").show();
            count++;
		}
		else{
            $(".page:nth-child("+count+")").hide();
			$(".page:nth-child(" + (++count) + ")").show();
		}
		
	});
})
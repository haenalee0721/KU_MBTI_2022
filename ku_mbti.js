$(document).ready(function(){


	// 다음버튼의 가로위치 조정
	var widthP = $("#page-wrapper").width();
	var widthB = $(".next-btn").width();
	$(".next-btn")
	.css('left', ((widthP-widthB)/2-1)+'px');



	var count = 0;    // 페이지번호
	var point = [];   // 각 질문 당 점수

	// 라디오버튼 클릭 시
	$("input:radio").on("click", function(){
		var Check = $("input[name=A"+count+"]:checked").val();
		point[count-1] = Check;
		console.log(point);
	});

	// 다음페이지 버튼 클릭 시
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

	// 이전페이지 버튼 클릭 시
	$(".fa-circle-chevron-left").on("click", function(){
		if(count==1){
			$(".page:nth-child(1)").hide();
            $("header").show();
            count=0;
		}
		else{
            $(".page:nth-child("+count+")").hide();
			$(".page:nth-child(" + (--count) + ")").show();
		}
	});

});
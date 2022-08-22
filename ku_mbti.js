$(document).ready(function(){

	//--------------변수------------------
	var count = 0;    // 페이지번호
	var point = [];   // 각 질문 당 점수
	var E,I,S,N,F,T,P,J,O,Y;  // 각각 퍼센트
	var Qnum=20;  // 문제개수


	// 다음버튼의 가로위치 조정
	var widthP = $("#page-wrapper").width();
	var widthB = $(".next-btn").width();
	$(".next-btn")
	.css('left', ((widthP-widthB)/2-1)+'px');

	// 라디오버튼 가로, 세로위치 조정
	var size1 = 38;
	var size2 = 44;
	var size3 = 50;
	var ws = 15;
	$(".radioButton>label:nth-child(1)").css('left', ((widthP-size1)/2-size2-size3 - ws*2)+'px');
	$(".radioButton>label:nth-child(2)").css('left', ((widthP-size1)/2-size2 - ws)+'px');
	$(".radioButton>label:nth-child(3)").css('left', ((widthP-size1)/2)+'px');
	$(".radioButton>label:nth-child(4)").css('left', ((widthP-size1)/2+size1 + ws)+'px');
	$(".radioButton>label:nth-child(5)").css('left', ((widthP-size1)/2+size1+size2 + ws*2)+'px');

	$(".radioButton>label:nth-child(2)").css('top', '3px');
	$(".radioButton>label:nth-child(3)").css('top', '6px');
	$(".radioButton>label:nth-child(4)").css('top', '3px');

	// 실제 라디오버튼 안보이게
	$("input:radio").hide();


	// 버튼종류 마우스오버
	$(".BTN").mouseover(function(){
		$(this).css('cursor', 'pointer');
	})

	// 라디오버튼 클릭 시
	$("input:radio").on("click", function(){
		// 배열에 가중치 입력
		var Check = $("input[name=A"+count+"]:checked").val();
		point[count-1] = Check;

		// 라디오버튼 색 변화
		var checkedIndex = $("input[name=A"+count+"]:checked").index();
		var radioColor;
		switch (checkedIndex){
			case 0:
				radioColor = '#619bd2';
				break;
			case 1:
				radioColor = '#78a76e';
				break;
			case 2:
				radioColor = '#dcd474';
				break;
			case 3:
				radioColor = '#dc9366';
				break;
			case 4:
				radioColor = '#cf7372';
				break;
		}
		for(var i=0; i<5; i++){
			if(i==checkedIndex){
				$("#page"+count+">.radioButton i").eq(i).css('color', radioColor);
			}
			else{
				$("#page"+count+">.radioButton i").eq(i).css('color', '#d7d7d7');
			}
		}

		// 콘솔창 테스트
		console.log(point);
	});

	// 다음페이지 버튼 클릭 시
	$(".next-btn").on("click", function(){
		if(count==0){  //메인페이지
            $("header").hide();
			$(".page:nth-child(1)").show();
            count++;
		}
		else if(count==20) //결과 페이지
		{
			calculatorResult();
			$(".page:nth-child("+count+")").hide();
			$(".page:nth-child(" + (++count) + ")").show();
			//결과출력
			$(".page:nth-child(" + count + ")").append("E : "+E)
			.append("  I : "+I)
			.append("  S : "+S)
			.append("  N : "+N)
			.append("  T : "+T)
			.append("  F : "+F)
			.append("  P : "+P)
			.append("  J : "+J)
			.append("  O : "+O)
			.append("  Y : "+Y);
			
		}
		else{ //문제
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



	function calculatorResult(){  // 배열확인해서 각각 퍼센트 내기

		//EI
		E=(Number(point[0])+Number(point[19])+Number(point[5])+Number(point[10]))/4;
		I=100-E;

		//NS
		N=(Number(point[18])+Number(point[3])+Number(point[11])+Number(point[8]))/4;
		S=100-N;

		//TF
		T=(Number(point[7])+Number(point[17])+Number(point[12])+Number(point[2]))/4;
		F=100-T;

		//PJ
		J=(Number(point[13])+Number(point[1])+Number(point[15])+Number(point[6]))/4;
		P=100-J;

		//고맑
		O=(Number(point[9])+Number(point[16])+Number(point[14])+Number(point[4]))/4;
		Y=100-O;
	}
});
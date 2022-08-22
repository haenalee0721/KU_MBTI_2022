$(document).ready(function(){

	//--------------변수------------------
	var count = 0;    // 페이지번호
	var point = [];   // 각 질문 당 점수
	var E,I,S,N,F,T,P,J,O,Y;  // 각각 퍼센트
	var Qnum=20;  // 문제개수

    //배열 초기화
    for(var i=0;i<20;i++){
        point[i]=1000;
    }

	// 다음버튼의 가로위치 조정
	var widthP = $("#page-wrapper").width();
	var widthB = $(".next-btn").width();
	$(".next-btn")
	.css('left', ((widthP-widthB)/2-1)+'px');



	// 라디오버튼 클릭 시
	$("input:radio").on("click", function(){
		var Check = $("input[name=A"+count+"]:checked").val();
		point[count-1] = Check;
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
			$("#Epercentage").append("E : "+E);
			$("#Ipercentage").append("I : "+I);
			$("#Npercentage").append("N : "+N);
			$("#Spercentage").append("S : "+S);
			$("#Tpercentage").append("T : "+T);
			$("#Fpercentage").append("F : "+F);
			$("#Ppercentage").append("P : "+P);
			$("#Jpercentage").append("J : "+J);
			$("#Opercentage").append("O : "+O);
			$("#Ypercentage").append("Y : "+Y);

			document.getElementById('mindProgress').value=parseInt(E);
			document.getElementById('energyProgress').value=parseInt(N);
			document.getElementById('natureProgress').value=parseInt(T);
			document.getElementById('tacticsProgress').value=parseInt(P);
			document.getElementById('identityProgress').value=parseInt(O);
			calcMBTI();
            addIMG();
            addTEXT1();
            addTEXT2();
		}
		else{ //문제
            if(!checked()){
                alert("답변을 선택하세요");
            }
            else{
                $(".page:nth-child("+count+")").hide();
			    $(".page:nth-child(" + (++count) + ")").show();
            }
            
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
 
   //라디오버튼 체크 확인함수
   function checked(){
        var Check = point[count-1];
        if(Check!=1000){
            return true;
   }else
            return false;
}

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

    function calcMBTI(){
        if(E>=50){
            $("#first").text("E");
        }else{
            $("#first").text("I");
        }
        if(N>=50){
            $("#second").text("N");
        }else{
            $("#second").text("S");
        }
        if(T>=50){
            $("#third").text("T");
        }else{
            $("#third").text("F");
        }
        if(J>=50){
            $("#fourth").text("J");
        }else{
            $("#fourth").text("P");
        }
        if(O>=50){
			$("#fifth").text("-O(고인물)");
		}else{
			$("#fifth").text("-Y(맑은물)");
		}
    }
 
    //mbti 결과이미지 출력 
    function addIMG(){
        var img = $("<img/>");
        var str = $("#first").text()+$("#second").text()+$("#third").text()+$("#fourth").text();
        img.attr({
            "src":"kuImg/"+str+".png",
            "height":"250px"
        });
      
        $("#container2").append(img);   
    }
    //mbti 결과 설명 출력
    function addTEXT1(){
        var str ="<p>"+"지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지"+"</p>";
        $("#container2").append(str);
    }
    //mbti궁합 출력
    function addTEXT2(){
        var str = $("#first").text()+$("#second").text()+$("#third").text()+$("#fourth").text();
        var good,bad;
        if(str=="ESTJ") {
            good="ISFP, ISTP";
            bad="INFP, ENFP, INFJ, ENFJ";
        }
        else if(str=="ESTP"){
            good="ISFJ, ISTJ";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ESFJ"){
            good="ISFP, ISTP";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ESFP"){
            good="ISFJ, ISTJ";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ENTJ"){
            good="INFP, INTP"
            bad="??없음(추가조사 필요)"
        }
        else if(str=="ENTP"){
            good="INFJ, INTJ";
            bad="??없음(추가조사 필요)"
        }
        else if(str=="ENFJ"){
            good="INFP, ISFP";
            bad="ESFP, ISTP, ESTP, ISFJ"
        }
        else if(str=="ENFP"){
            good="INFJ, INTJ";
            bad="ISFP, ESFP, ISTP, ESTP"
        }
        else if(str=="ISTJ"){
            good="ESFP, ESTP";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ISTP"){
            good="ESFJ, ESTJ";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ISFJ"){
            good="ESFP, ESTJ";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
        else if(str=="ISFP"){
            good="ENFJ, ESFJ, ESTJ";
            bad="INFP, ENFP, INFJ"
        }
        else if(str=="INTJ"){
            good="ENFP, ENTP";
            bad="INFP, INFJ, ENFJ, INTJ"
        }
        else if(str=="INTP"){
            good="ENTJ, ESTJ";
            bad="INFP, ENFP, INFJ, ENFJ"
        }
         else if(str=="INFJ"){
             good="ENFP, ENTP";
             bad="INFP, INFJ, ISTP, ESTP"
         }
         else if(str=="INFP"){
             good="ENTJ, ESTJ";
             bad="INFP, ENFP, INFJ, INTJ"
         }
    
         var output = "<p><b>"+"나와 잘 맞는 mbti : "+good+"<br> 나와 안 맞는 mbti : "+bad;
         $("#container3").append(output);
    }

    // 다시하기 버튼
    $("#retryButton").click(function() {
        
        location.reload();
    });
    // 공유하기버튼
    $("#shareButton").click(function() {
        alert("이것이 주소입니다");
            
    });    
});
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
palyer2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn")innerHTML="question_turn-"+player1_name;
document.getElementById("answer_turn")innerHTML="answerss_turn-"+player2_name;

function send() {
     player_1_1=document.getElementById("question").value;
     player_2_2=document.getElementById("question_2").value;
    
    actual_answer=parseInt(player_1_1)+parseInt(player_2_2);

    question_number="<h4>"+player_1_1+"+"+player_2_2+"</h4>";
    input_box="<br> Answer. : <input type'text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_number+input_box+check_button;

}
var search_word = ['경주 최대규모 지진','태풍 말라카스','강정호 19호 홈런','갤럭시노트7 리콜','北 5차 핵실험 강행','한진해운','패터슨 이태원 살인 진범','스폰서 부장 검사','힐러리 클린턴','아이폰7 공개','한진해운 법정관리','NBA','LPGA'];
if(search_word){
	var ran_no = Math.floor(Math.random()*13);
	document.getElementById('search_form').query.value = search_word[ran_no];
}
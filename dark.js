$(function() {
  $("#form-submit").on('click', function() {
    const word = $("#form-text").val();
    if(word.length > 0) {
       console.log("hello!");
      }
    else if(word == "")  {
      alert("聖なるフォームに好きな文字を入力してね！")
    }
     
  })
})
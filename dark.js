$(function() {
  $("#form-submit").on('click', function() {
    const word = $("#form-text").val();
    if(word.length > 0) {
      const replace_word = word.replace(word,"hello")
      console.log(replace_word)
      $(".header-title").before(replace_word)
      }
    else if(word == "")  {
      alert("聖なるフォームに好きな文字を入力してね！")
    }
     
  })
})
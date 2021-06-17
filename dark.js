$(function() {
  $("#form-submit").on('click', function() {
    const word = $("#form-text").val();
    if(word.length > 0) {
      const messages = ["hoge","fuga","hey"]

      // Math.random=0以上1未満の疑似ランダムな浮動小数点による小数を返すメソッド
      const messageNum = Math.floor( Math.random() * messages.length);
      const replace_word = word.replace(word,messages[messageNum])
      const headerTitleWord = $("#form-text").val(replace_word)

      $("#reset-btn").on('click', function() {
        headerTitleWord.remove();
      })
      }
    else if(word == "")  {
      alert("聖なるフォームに好きな文字を入力してね！")
    }
  })
})
$(function() {
  $("#form-submit").on('click', function() {
    const word = $("#form-text").val();
    if(word.length > 0) {
      const messages = ["hoge","fuga","hey"]
      if(word == "おはよう") {
        console.log(word)
        const morning_word = word.replace(word,"漆黒の闇が眠りにつくとき、聖なる灯が目を覚ます。"
          )
        $("#form-text").val(morning_word)
        return
      } else if (word == "こんにちは") {
        const noon_word = word.replace(word,"生きるべくした物の怪の面を拝むことになろうとは嬉しく思うぞ。"
          )
        $("#form-text").val(noon_word)
        return
      }

      else if (word == "こんばんは") {
        const noon_word = word.replace(word,"暗黒に包まれし静寂を楽しむとしよう。"
          )
        $("#form-text").val(noon_word)
        return
      }

      else if (word == "おやすみ") {
        const noon_word = word.replace(word,"虚無から誘いが来た。しばしの間、この世界から離れるとしよう。"
          )
        $("#form-text").val(noon_word)
        return
      }

      // Math.random=0以上1未満の疑似ランダムな浮動小数点による小数を返すメソッド
      const messageNum = Math.floor( Math.random() * messages.length);
      const replace_word = word.replace(word,messages[messageNum])
      $("#form-text").val(replace_word)
      }
    else if(word == "")  {
      alert("聖なるフォームに好きな文字を入力してね！")
    }
  })
})
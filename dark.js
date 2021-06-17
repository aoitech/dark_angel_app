$(function() {
  $("#form-submit").on('click', function(e) {
    e.preventDefault();
    const word = $("#form-text").val();
    if(word.length > 0) {
      const messages = [
        "強者のみが許されたこの至福のひとときを、ゆっくり楽しもうではないか",
        "お前たちの魂の叫びが俺の体に伝わっていく……これまでのひとときを、決して忘れはしない",
        "外の世界へ降臨するとしよう",
        "まずいな……このままでは神の逆鱗に触れてしまう",
        "裁きを受けよう",
        "汝が我を救ってくれたのか。神の加護を受けし者よ、礼を言おう。",
        "別れか……出会いとは短いものだ",
        "お前がこの世に生を受け、そして運命の日を迎えた。歓迎しよう",
        "俺の邪眼がうずいている",
        "なるほど。これがダークマターか",
        "邪神が俺を呼んでいる",
        "俺の邪眼が紅蓮色に染まっていく……",
        "天啓を聞け",
        "魔術書を使ってルーン語の術式を解読する",
        "人間が作った紙切れで我の実力は測れぬ",
        "平面世界ほど俺の脳を刺激するものはない",
        "湧水で穢れを浄化しておくか",
        "貴様の奏でるシンフォニーは不協和音だ",
        "我と契りを結ぶことによってフォルトゥ―ナは召喚される。幸運を掴みたいのであれば、今しかないぞ",
        "わけがわからないよね〜💪( ˙꒳˙💪†)"
      ]

      // indexOf=文字列が見つかればそのインデックスを、含まれなければ「-1」を返す。
      // JSでは-1はtrueとなるので、必ず「-1ではない」事をもって結果を確認する。
      if(word.indexOf("おはよう") !== -1) {
        const morning_messages = [
        "漆黒の闇が眠りにつくとき、聖なる灯が目を覚ます。",
        "漆黒の闇から覚醒したまばゆい光……さて、そろそろ我が身の力を解き放つとするか",
        "久しく深い宵から目覚めたな・・・",
        "神が人類に与えし希望の光が君や僕に降り注ぐことを神に、全ての自然に感謝",
        "ふん…貴様もあの暗黒の夜を生き延びることができたのか……祝福してやろう",
        "暗黒は終わり再び世界は輝こうとしている",
        "神聖なる浄化の光がやってきたようだ…"
      ]
      
      // 整数切り上げ&ランダムな数値*配列の数を数えてその数値を指定して表示させる
        const morning_messageNum = Math.floor( Math.random() * morning_messages.length);
        const morning_word = word.replace(word,morning_messages[morning_messageNum])
        $("#form-text").val(morning_word)
        return
      } 
      
      else if (word.indexOf("こんにちは") !== -1) {
        const noon_messages = [
          "生きるべくした物の怪の面を拝むことになろうとは嬉しく思うぞ。",
          "眩い光が我を包む…",
          "こんにちははネタが少ないんだよねー(🙏 ˙꒳˙†)"
        ]

        const noon_messageNum = Math.floor( Math.random() * noon_messages.length);
        const noon_word = word.replace(word,noon_messages[noon_messageNum])
        $("#form-text").val(noon_word)
        return
      }

      else if (word .indexOf("こんばんは") !== -1) {
        const night_messages = [
          "暗黒に包まれし静寂を楽しむとしよう。",
          "それでは魔界の迷宮へと足を進めることにしよう。",
          "漆黒の闇が我を呼んでいるようだ･･･。",
          "このダークサイドは命の輝きのように無垢で儚い故に美しい"
        ]
        
        const night_messageNum = Math.floor( Math.random() * night_messages.length);
        const night_word = word.replace(word,night_messages[night_messageNum])
        $("#form-text").val(night_word)
        return
      }

      else if (word .indexOf("おやすみ") !== -1) {
        const goodnight_messages = [
          "虚無から誘いが来た。しばしの間、この世界から離れるとしよう。",
          "漆黒の闇に我眠りにつく。",
          "闇が私を呼んでいるようだ…そろそろ封印っても（ねむっても）いいか？",
          "漸くこの因果に縛られた世界から解き放たれる刻が来たようだな…"
        ]

        const goodnight_messageNum = Math.floor( Math.random() * goodnight_messages.length);
        const goodnight_word = word.replace(word,goodnight_messages[goodnight_messageNum])
        $("#form-text").val(goodnight_word)
        return
      }

      // Math.random=0以上1未満の疑似ランダムな浮動小数点による小数を返すメソッド
      const messageNum = Math.floor( Math.random() * messages.length);
      const replace_word = word.replace(word,messages[messageNum])
      $("#form-text").val(replace_word)
      console.log(111)
      return
      }
      
    else if(word == "")  {
      alert("聖なるフォームに好きな文字を入力してね！")
      return
    }
  })
})
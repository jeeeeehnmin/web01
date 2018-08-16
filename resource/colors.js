/*
  jQuery 사용
    - $ 사용하는게 jQuery 사용을 의미함
    - 직관적
*/
  var Link = {
    setColor: function(color){

      $('a').css('color', color);
    }
  }

  var Body = {
    setFontColor: function (color){
      $('body').css('color', color);
      // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color){
      $('body').css('backgroundColor', color);
      // document.querySelector('body').style.backgroundColor = color;
    }
  }

  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){

      Body.setBackgroundColor('#660066');
      Body.setFontColor('#ffebe1');

      // Body.setBackgroundColor('#45b9d3');
      // Body.setFontColor('#314159');
      // Link.setLinkFontColor('#b9d345');
      self.value = 'day';

      Link.setLinkFontColor('red');

    } else {
      Body.setBackgroundColor('white');
      Body.setFontColor('black');
      self.value = 'night';

      Link.setLinkFontColor('blue');

  }
  }




/* jQuery 사용 전 기본 실습 */
/*
  var Link = {
    setColor: function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;

      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }


    var Body = {
      setFontColor: function (color){
        document.querySelector('body').style.color = color;
      },

        //, 주의
        //  객체의 property를 구분할 때 필요

      setBackgroundColor: function (color){
        document.querySelector('body').style.backgroundColor = color;
      }
    }

    function nightDayHandler(self){
      var target = document.querySelector('body');
      if(self.value === 'night'){

        Body.setBackgroundColor('#660066');
        Body.setFontColor('#ffebe1');

        // Body.setBackgroundColor('#45b9d3');
        // Body.setFontColor('#314159');
        // Link.setLinkFontColor('#b9d345');
        self.value = 'day';

        Link.setLinkFontColor('red');

      } else {
        Body.setBackgroundColor('white');
        Body.setFontColor('black');
        self.value = 'night';

        Link.setLinkFontColor('blue');

    }
  }
*/

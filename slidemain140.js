    $("#container1").on('click',function(){



            $.ajax({
                    url : "specificlib140.php",
                    dataType : "html",
                    async : false,
                    type : "post",  // post 또는 get
                    success : function(result){

                    $("#all").html(result);


                    } 
                });  

        });
    $("#container2").on('click',function(){



            $.ajax({
                url : "specificprac140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#all").html(result);


                } 
            });  

    });

  $("#container3").on('click',function(){



            $.ajax({
                url : "specificmajor140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#all").html(result);


                } 
            });  

    });


    var target1=$('#t1').val();
    var base1=$('#b1').val();

    var circle1 = new ProgressBar.Circle('#compo1', { //노랑
        color: '#ff0006',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base1).toFixed(0)+"/"+base1);
    }

    });
    circle1.path.setAttribute('stroke-linecap', 'round');
    circle1.animate(1/base1*target1);


    var target2=$('#t2').val();
    var base2=$('#b2').val();

    var circle2 = new ProgressBar.Circle('#compo2', { //노랑
        color: '#ff0006',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base2).toFixed(0)+"/"+base2);
    }

    });
    circle2.path.setAttribute('stroke-linecap', 'round');
    circle2.animate(1/base2*target2);


    var target3=$('#t3').val();
    var base3=$('#b3').val();

    var circle3 = new ProgressBar.Circle('#compo3', { //노랑
        color: '#ff0006',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base3).toFixed(0)+"/" + base3);
    }

    });
    circle3.path.setAttribute('stroke-linecap', 'round');
    circle3.animate(1/base3*target3);



    var target4=$('#t4').val();
    var base4=$('#b4').val();

    var circle4 = new ProgressBar.Circle('#compo4', { //노랑
        color: '#ffd655',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base4).toFixed(0)+"/"+base4);
    }

    });
    circle4.path.setAttribute('stroke-linecap', 'round');
    circle4.animate(1/base4*target4);



    var target5=$('#t5').val();
    var base5=$('#b5').val();

    var circle5 = new ProgressBar.Circle('#compo5', { //노랑
        color: 'transparent',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: 'transparent',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base5).toFixed(0)+"/"+base5);
    }

    });
    circle5.path.setAttribute('stroke-linecap', 'round');
    circle5.animate(1/base5*target5);



    var target6=$('#t6').val();
    var base6=$('#b6').val();

    var circle6 = new ProgressBar.Circle('#compo6', { //노랑
        color: 'transparent',
        strokeWidth: 0,
        trailWidth: 10,
        trailColor: 'transparent',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base6).toFixed(0)+"/"+base6);
    }

    });
    circle6.path.setAttribute('stroke-linecap', 'round');
    circle6.animate(1/base6*target6);
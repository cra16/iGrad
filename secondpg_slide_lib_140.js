       $('#container1').click(function(){

        var allbar1 = document.getElementById('about_container3');
        var allbar2 = document.getElementById('about_container5');
        var allbar3 = document.getElementById('about_container4');
        allbar1.style.display='none';
        allbar2.style.display='none';
        allbar3.style.display='none';

        this.style.opacity="1.0";
        this.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element1 = document.getElementById('container3');
        element1.style.opacity = "1.0";
        element1.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element2 = document.getElementById('container4');
        element2.style.opacity = "1.0";
        element2.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element3 = document.getElementById('container5');
        element3.style.opacity = "1.0";
        element3.style.filter  = 'alpha(opacity=100)'; // IE fallback


        $.ajax({
                url : "secondpg_slide_lib_lib_140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#alloflist").html(result);

                } 
            });  


    });



    $('#container3').click(function(){

        var allbar1 = document.getElementById('about_container3');
        var allbar2 = document.getElementById('about_container5');
        var allbar3 = document.getElementById('about_container4');
        allbar1.style.display='none';
        allbar2.style.display='none';
        allbar3.style.display='none';

        this.style.opacity="1.0";
        this.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element1 = document.getElementById('container4');
        element1.style.opacity = "0.3";
        element1.style.filter  = 'alpha(opacity=30)'; // IE fallback

        var element2 = document.getElementById('container5');
        element2.style.opacity = "0.3";
        element2.style.filter  = 'alpha(opacity=30)'; // IE fallback


        var bar = document.getElementById('about_container3');
        bar.style.display ='block';


        $.ajax({
                url : "secondpg_slide_lib_religion_140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#alloflist").html(result);


                } 
            });  


    });

        $('#container4').click(function(){

        var allbar1 = document.getElementById('about_container3');
        var allbar2 = document.getElementById('about_container5');
        var allbar3 = document.getElementById('about_container4');
        allbar1.style.display='none';
        allbar2.style.display='none';
        allbar3.style.display='none';

        this.style.opacity="1.0";
        this.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element1 = document.getElementById('container3');
        element1.style.opacity = "0.3";
        element1.style.filter  = 'alpha(opacity=30)'; // IE fallback

        var element2 = document.getElementById('container5');
        element2.style.opacity = "0.3";
        element2.style.filter  = 'alpha(opacity=30)'; // IE fallback

        var bar = document.getElementById('about_container4');
        bar.style.display ='block';

      $.ajax({
                url : "secondpg_slide_lib_leadership_140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#alloflist").html(result);


                } 
            });  


    });



    $('#container5').click(function(){

        var allbar1 = document.getElementById('about_container3');
        var allbar2 = document.getElementById('about_container5');
        var allbar3 = document.getElementById('about_container4');
        allbar1.style.display='none';
        allbar2.style.display='none';
        allbar3.style.display='none';
        
        this.style.opacity="1.0";
        this.style.filter  = 'alpha(opacity=100)'; // IE fallback

        var element1 = document.getElementById('container3');
        element1.style.opacity = "0.3";
        element1.style.filter  = 'alpha(opacity=30)'; // IE fallback

        var element2 = document.getElementById('container4');
        element2.style.opacity = "0.3";
        element2.style.filter  = 'alpha(opacity=30)'; // IE fallback


        var bar = document.getElementById('about_container5');
        bar.style.display ='block';


      $.ajax({
                url : "secondpg_slide_lib_basic_140.php",
                dataType : "html",
                async : false,
                type : "post",  // post 또는 get
                success : function(result){

                $("#alloflist").html(result);

                } 
            });  


    });

    



    var tb3_1=$('#tb3_1').val();
    var bb3_1=$('#bb3_1').val();

    var line1 = new ProgressBar.Line('#progressbar3_1', {
        color: '#FCB03C',
        trailColor: '#B4B4DC',
        duration: 1500,
        strokeWidth: 2,
        trailWidth: 2,

           text: {
            value: '0'
    }, step: function(state, bar) {
        bar.setText((bar.value() * bb3_1).toFixed(0)+"/"+bb3_1);
    }

    });
    line1.path.setAttribute('stroke-linecap', 'round');
    line1.animate(1.0/bb3_1*tb3_1);  // Number from 0.0 to 1.0


    
    var tb3_2=$('#tb3_2').val();
    var bb3_2=$('#bb3_2').val();

    var line2 = new ProgressBar.Line('#progressbar3_2', {
        color: '#FCB03C',
        trailColor: '#B4B4DC',
        duration: 1500,
        strokeWidth: 2,
        trailWidth: 2,

           text: {
            value: '0'
    }, step: function(state, bar) {
        bar.setText((bar.value() * bb3_2).toFixed(0)+"/"+bb3_2);
    }

    });
    line2.path.setAttribute('stroke-linecap', 'round');
    line2.animate(1.0/bb3_2*tb3_2);  // Number from 0.0 to 1.0



    
    var tb5_1=$('#tb5_1').val();
    var bb5_1=$('#bb5_1').val();

    var line3 = new ProgressBar.Line('#progressbar5_1', {
        color: '#FCB03C',
        trailColor: '#B4B4DC',
        duration: 1500,
        strokeWidth: 2,
        trailWidth: 2,

           text: {
            value: '0'
    }, step: function(state, bar) {
        bar.setText((bar.value() * bb5_1).toFixed(0)+"/"+bb5_1);
    }

    });
    line3.path.setAttribute('stroke-linecap', 'round');
    line3.animate(1.0/bb5_1*tb5_1);  // Number from 0.0 to 1.0


    
    var tb5_2=$('#tb5_2').val();
    var bb5_2=$('#bb5_2').val();

    var line4 = new ProgressBar.Line('#progressbar5_2', {
        color: '#FCB03C',
        trailColor: '#B4B4DC',
        duration: 1500,
        strokeWidth: 2,
        trailWidth: 2,

           text: {
            value: '0'
    }, step: function(state, bar) {
        bar.setText((bar.value() * bb5_2).toFixed(0)+"/"+bb5_2);
    }

    });
    line4.path.setAttribute('stroke-linecap', 'round');
    line4.animate(1.0/bb5_2*tb5_2);  // Number from 0.0 to 1.0





    var target1=$('#t1').val();
    var base1=$('#b1').val();

    var circle1 = new ProgressBar.Circle('#compo1', { //노랑
        color: '#cc0006',
        strokeWidth: 9,
        trailWidth: 9,
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
        color: 'transparent',
        strokeWidth: 9,
        trailWidth: 9,
        trailColor: 'transparent',
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
        color: '#Ff0066',
        strokeWidth: 9,
        trailWidth: 9,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base3).toFixed(0)+"/"+base3);
    }

    });
    circle3.path.setAttribute('stroke-linecap', 'round');
    circle3.animate(1/base3*target3);


  





    var target4=$('#t4').val();
    var base4=$('#b4').val();

    var circle4 = new ProgressBar.Circle('#compo4', { //노랑
        color: '#Ff0066',
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
        color: 'yellow',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#B4B4DC',
        duration: 1500,

        text: {
            value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * base5).toFixed(0));
    }

    });
    circle5.path.setAttribute('stroke-linecap', 'round');
    circle5.animate(1/base5*target5);



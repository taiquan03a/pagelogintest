<!-- JQUERY  -->
<script src="https://code.ptit.edu.vn/2020/js/jquery-3.5.1.slim.min.js"></script>
<script src="https://code.ptit.edu.vn/2020/js/popper.min.js"></script>
<!-- BOOTSTRAP JS  -->
<script src="./bt.js">
    function input_active(a){
        let input = document.getElementById(a);
        if(input.value !== ""){
            $(`#${a}`).addClass('input--active');
        }else{
            $(`#${a}`).removeClass('input--active');
        }
    }
</script>
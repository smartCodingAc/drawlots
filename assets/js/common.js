/**
 * Common Util
 */

// 숫자만 입력 - 공통 사용 가능
function onlyNumber(obj) {
    $(obj).keyup(function(){
         $(this).val($(this).val().replace(/[^0-9]/g,""));
    }); 
}

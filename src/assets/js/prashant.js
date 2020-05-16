/**
 * Created by HP on 24-03-2018.
 */
var $ = jQuery;
function DownloadBox() {
    $('#downloadmodal').modal('show');
}

function showAgency(flag,id) {
    if(flag == '1'){
        $('#'+id).removeClass('hide');
        $('#'+id).addClass('show');
    }else{
        $('#'+id).removeClass('show');
        $('#'+id).addClass('hide');
    }
}
function getRoi() {
    var scheme = $('#scheme').val();
    if(scheme == '1') {
        roi = 9;
        $('#roi').val(roi + '%');
    }else if(scheme == '2') {
        roi = 9;
        $('#roi').val(roi + '%');
    }
}
function calculator() {
    var scheme = $('#scheme').val();
    var Pamount = $('#amount').val();
    var years = $('#years').val();
    var roi = 0;
    var maturity = 0;
    if(scheme == '1'){
        roi = 9;
        $('#roi').val(roi+'%');
        maturity = parseFloat(Pamount)*(Math.pow((1+((parseFloat(roi)/100)/4)),(4*(parseFloat(years)))));
        $('#maturity').val(parseFloat(maturity).toFixed(2));
    }else if(scheme == '2') {
        var rdMaturity  = 0;
        var totalMonths = parseFloat(years)*12;
        roi = 9;
        $('#roi').val(roi + '%');
        for(var i=totalMonths;i>0;i--){
            maturity = parseFloat(Pamount)*(Math.pow((1+((parseFloat(roi)/100)/4)),(4*(parseFloat(i/12)))));
            rdMaturity = parseFloat(rdMaturity)+parseFloat(maturity);
        }
        $('#maturity').val(parseFloat(rdMaturity).toFixed(2));
    }
}

function showCalculator() {
    $('#calculatormodal').modal('show');
}

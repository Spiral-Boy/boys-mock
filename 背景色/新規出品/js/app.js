$(function () {
    /* append text field */
    $('#append').click(function () {
        $('#append_area').append('<div><input style="width: 50px; display: inline-block; margin: 5px 0 0 30px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲番"><input style="width: 300px; display: inline-block; margin: 5px 0 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲名"><input style="width: 80px; display: inline-block; margin: 5px 5px 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="時間"><input style="display: inline-block;" type="button" class="remove" value="削除"></div>');
    });
    $('#append-2').click(function () {
        $('#append_area-2').append('<div><input style="width: 50px; display: inline-block; margin: 5px 0 0 30px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲番"><input style="width: 300px; display: inline-block; margin: 5px 0 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲名"><input style="width: 80px; display: inline-block; margin: 5px 5px 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="時間"><input style="display: inline-block;" type="button" class="remove" value="削除"></div>'); 
    });
    $('#append-3').click(function () {
        $('#append_area-3').append('<div><input style="width: 50px; display: inline-block; margin: 5px 0 0 30px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲番"><input style="width: 300px; display: inline-block; margin: 5px 0 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲名"><input style="width: 80px; display: inline-block; margin: 5px 5px 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="時間"><input style="display: inline-block;" type="button" class="remove" value="削除"></div>'); 
    });
    $('#append-4').click(function () {
        $('#append_area-4').append('<div><input style="width: 50px; display: inline-block; margin: 5px 0 0 30px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲番"><input style="width: 300px; display: inline-block; margin: 5px 0 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="曲名"><input style="width: 80px; display: inline-block; margin: 5px 5px 0 5px;" type="text" class="form-control input-sm" id="InputText" placeholder="時間"><input style="display: inline-block;" type="button" class="remove" value="削除"></div>'); 
    });
    /* remove text field */
    $(document).on('click','.remove',function () {
        $(this).parent().remove();
    });
});
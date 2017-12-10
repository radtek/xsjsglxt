/*
 * 损伤鉴定
 */
function Create_Damage_InspectionRecord(obj) {
	var json_list = EntrustmentBook_json;
	var jc = $
			.confirm({
				icon : 'fa fa-pencil-square-o',
				title : '记录损伤检验过程',
				content : '<form id="form_Damage_InspectionRecord"><input value="'
						+ obj.id
						+ '"  class="form-control" name="damageInspectionRecord.damage_inspection_record_belong_entrustment_book"  style="display:none;"/>'
						+ '<hr>'
						+ '<table  class="table table-bordered" style="text-align: center;">'
						+ '<tbody>'
						+ '<tr>'
						+ '<td>姓名：</td>'
						+ '<td><input  class="form-control"  name="damageInspectionRecord.damage_inspection_record_name"/></td>'
						+ '<td>性别：</td>'
						+ '<td><select class="form-control" name="damageInspectionRecord.damage_inspection_record_sex">'
						+ '<option value="男">男</option>'
						+ '<option value="女">女</option>'
						+ '</select></td>'
						+ '</tr>'
						+ '<tr>'
						+ '<td>出生日期：</td>'
						+ '<td><input  class="form-control mydate" name="damageInspectionRecord.damage_inspection_record_birth_date"  /></td>'
						+ '<td>职业：</td>'
						+ '<td><input  class="form-control" name="damageInspectionRecord.damage_inspection_record_occupation" /></td>'
						+ '</tr>'
						+ '<tr>'
						+ '<td>服务处所：</td>'
						+ '<td><input  class="form-control" name="damageInspectionRecord.damage_inspection_record_unit_service" /></td>'
						+ '<td>身份证号码：</td>'
						+ '<td><input  class="form-control" name="damageInspectionRecord.damage_inspection_record_idcard" /></td>'
						+ '</tr>'
						+ '<tr>'
						+ '<td>受伤时间：</td>'
						+ '<td><input  class="form-control mydate" name="damageInspectionRecord.damage_inspection_record_damage_time" /></td>'
						+ '<td>检验时间：</td>'
						+ '<td><input  class="form-control mydate" name="damageInspectionRecord.damage_inspection_record_time" /></td>'
						+ '</tr>'
						+ '<tr>'
						+ '<td>住址：</td>'
						+ '<td><input  class="form-control" name="damageInspectionRecord.damage_inspection_record_adress" /></td>'
						+ '<td>联系方式：</td>'
						+ '<td><input  class="form-control" name="damageInspectionRecord.damage_inspection_record_phone" /></td>'
						+ '</tr>'
						+ '<tr><td>检验所见：</td>'
						+ '<td colspan="3"><textarea class="form-control" style="resize: none;height:100px;" name="damageInspectionRecord.damage_inspection_record_inspection" ></textarea></td>'
						+ '</tr>'
						+ '</tr>'
						+ '<tr><td>检查人：</td>'
						+ '<td ><input class="form-control"  name="damageInspectionRecord.damage_inspection_record_inspection_man" /></td>'
						+ '</tr>'
						+ '</tr>'
						+ '</tbody>'
						+ '</table></form>'
						+ '<hr>',
				type : 'blue',
				columnClass : 'col-md-12',
				onOpenBefore : function() {
				},
				onContentReady : function() {
					for (var num = 0; num < json_list.listEntrustmentBookManagementDTO.length; num++) {
						if (obj.id == json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.xsjsglxt_check_entrustment_book_id) {
							break;
						}
					}

					/*
					 * 
					 */
					var date = new Date();
					document
							.getElementsByName("damageInspectionRecord.damage_inspection_record_damage_time")[0].value = date
							.getFullYear()
							+ '-'
							+ (parseInt(date.getMonth()) + 1)
							+ '-'
							+ date.getDate();
					document
							.getElementsByName("damageInspectionRecord.damage_inspection_record_time")[0].value = date
							.getFullYear()
							+ '-'
							+ (parseInt(date.getMonth()) + 1)
							+ '-'
							+ date.getDate();
					/*
					 * 
					 */
					$.datetimepicker.setLocale('ch');
					$('.mydate').datetimepicker({
						yearStart : 1990, // 设置最小年份
						yearEnd : 2050, // 设置最大年份
						yearOffset : 0, // 年偏差
						timepicker : false, // 关闭时间选项
						format : 'Y-m-d', // 格式化日期年-月-日
						minDate : '1900/01/01', // 设置最小日期
						maxDate : '2030/01/01', // 设置最大日期
					});
					/*
					 * 
					 */

				},
				buttons : {
					'记录' : {
						btnClass : 'btn-blue',
						action : function() {
							var xhr = false;
							xhr = new XMLHttpRequest();
							xhr.onreadystatechange = function() {
								var message;
								if (xhr.readyState == 4) {
									if (xhr.status == 200) {
										console.debug(xhr.responseText);
										if (xhr.responseText == 1) {
											toastr.success("记录成功");
											jc.close();
											List_EntrustmentBook(1);
										} else {
											toastr.error("填写格式错误");
										}
									} else {
										toastr.error(xhr.status);
									}
								}
							}
							/*
							 * 
							 */
							alert(obj.id);
							var formData = new FormData(
									document
											.getElementById("form_Damage_InspectionRecord"));

							/*
							 * 
							 */
							xhr
									.open(
											"POST",
											"/xsjsglxt/inspectionIdentific/EntrustmentBookManagement_addDamageInspectionRecord");
							xhr.send(formData);
						}
					},
					'放弃' : function() {
					}
				}
			});
}
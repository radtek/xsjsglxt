/**
 * 
 */

var createScheduling = function() {
	$
			.confirm({
				boxWidth : '500px',
				useBootstrap : false,
				title : '<i class="fa fa-pencil-square-o"></i>新增排班',
				type : 'green',
				content : '<table class="table bordered-table"><tr><td>带班领导：</td><td style="text-align:center;" class="loadingLay"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></td><td class="contentName" style="display:none;"><select id="leader" style="width: 250px;" class="form-control selectpicker" data-live-search="true" title="请选择主班领导"></select></td></tr>'
						+ '<tr><td>主班：</td><td class="loadingLay" style="text-align:center;"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></td></td><td class="contentName" style="display:none;"><select id="main" style="width: 250px;" class="form-control selectpicker" data-live-search="true" title="请选择主班"></select></td></tr>'
						+ '<tr><td>副班：</td><td class="loadingLay" style="text-align:center;"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></td><td class="contentName" style="display:none;"><select id="assistant" style="width: 250px;" class="form-control selectpicker" data-live-search="true" title="请选择副班"></select></td></tr>'
						+ '<tr><td>值班时间：</td><td><input id="scheTime" style="250px" class="form-control timeDate"></td></tr></table>',
				buttons : {
					save : {
						text : '<i class="fa fa-upload" aria-hidden="true"></i>保存',
						btnClass : 'btn-blue',
						action : function() {
							if ($('#leader').val() != ''
									&& $('#main').val() != ''
									&& $('#assistant').val() != ''
									&& $('#scheTime').val() != '') {
								var postData = {
									'scheduling.scheduling_leader' : $(
											'#leader').val(),
									'scheduling.scheduling_main' : $('#main')
											.val(),
									'scheduling.scheduling_assistant' : $(
											'#assistant').val(),
									'scheduling.scheduling_time' : $(
											'#scheTime').val()
								}
								$
										.ajax({
											url : '/xsjsglxt/scheduling/Scheduling_saveScheduling',
											type : 'POST',
											data : postData,
											success : function(data) {
												if (data == "saveSuccess") {
													toastr.success("保存成功！");
													document
															.getElementById("leader").options.selectedIndex = 0; // 回到初始状态
													document
															.getElementById("main").options.selectedIndex = 0; // 回到初始状态
													document
															.getElementById("assistant").options.selectedIndex = 0; // 回到初始状态
													$(".selectpicker")
															.selectpicker(
																	'refresh');
													$(".selectpicker")
															.selectpicker(
																	'render')
													$('#scheTime').val("");
													queryConditionTemp.currPage = 1;
													loadScheduling();
													// 在次数重新加载列表
												} else
													toastr.error("该日已经排班");
											}
										});
								return false;
							} else {
								toastr.error("不能有空项");
								return false;
							}
						}
					},
					close : {
						text : "<i class='fa fa-times' aria-hidden='true'></i>关闭",
						btnClass : "btn-red",
						action : function() {

						}
					}
				},
				onContentReady : function() {
					// 为下拉列表添加姓名
					$
							.ajax({
								url : '/xsjsglxt/team/Staff_getSchedulingStaff',
								type : 'GET',
								success : function(data) {
									var result = JSON.parse(data);
									for (var i = 0; i < result.staffLeader.length; i++) {
										$('#leader')
												.append(
														"<option value='"
																+ result.staffLeader[i].xsjsglxt_name
																+ "'>"
																+ result.staffLeader[i].xsjsglxt_name
																+ "</option>");
									}
									for (var i = 0; i < result.staffMain.length; i++) {
										$('#main')
												.append(
														"<option value='"
																+ result.staffMain[i].xsjsglxt_name
																+ "'>"
																+ result.staffMain[i].xsjsglxt_name
																+ "</option>");
									}
									for (var i = 0; i < result.staffAssitant.length; i++) {
										$('#assistant')
												.append(
														"<option value='"
																+ result.staffAssitant[i].xsjsglxt_name
																+ "'>"
																+ result.staffAssitant[i].xsjsglxt_name
																+ "</option>");
									}
									$(".selectpicker").selectpicker('refresh');
									$(".loadingLay").hide();
									$(".contentName").show();
								}
							});

					$.datetimepicker.setLocale('ch');
					$('.timeDate').datetimepicker({
						yearStart : 1900, // 设置最小年份
						yearEnd : 2100, // 设置最大年份
						yearOffset : 0, // 年偏差
						timepicker : false, // 关闭时间选项
						format : 'Y-m-d', // 格式化日期年-月-日
						minDate : '1900/01/01', // 设置最小日期
						maxDate : '2030/01/01', // 设置最大日期
					});
				}
			});
}
package com.xsjsglxt.domain.DTO.Scheduling;

public class schedulingDTO {
	private String xsjsglxt_scheduling_id;
	private String scheduling_leader; // 带班领导
	private String scheduling_main; // 侦查民警主班
	private String scheduling_mainTec; // 技术民警主班
	private String scheduling_assistant;// 辅班
	private String scheduling_time; // 值班日期

	public schedulingDTO(String xsjsglxt_scheduling_id, String scheduling_leader, String scheduling_main,
			String scheduling_mainTec, String scheduling_assistant, String scheduling_time) {
		super();
		this.xsjsglxt_scheduling_id = xsjsglxt_scheduling_id;
		this.scheduling_leader = scheduling_leader;
		this.scheduling_main = scheduling_main;
		this.scheduling_mainTec = scheduling_mainTec;
		this.scheduling_assistant = scheduling_assistant;
		this.scheduling_time = scheduling_time;
	}

	public String getScheduling_mainTec() {
		return scheduling_mainTec;
	}

	public void setScheduling_mainTec(String scheduling_mainTec) {
		this.scheduling_mainTec = scheduling_mainTec;
	}

	public String getXsjsglxt_scheduling_id() {
		return xsjsglxt_scheduling_id;
	}

	public void setXsjsglxt_scheduling_id(String xsjsglxt_scheduling_id) {
		this.xsjsglxt_scheduling_id = xsjsglxt_scheduling_id;
	}

	public String getScheduling_leader() {
		return scheduling_leader;
	}

	public void setScheduling_leader(String scheduling_leader) {
		this.scheduling_leader = scheduling_leader;
	}

	public String getScheduling_main() {
		return scheduling_main;
	}

	public void setScheduling_main(String scheduling_main) {
		this.scheduling_main = scheduling_main;
	}

	public String getScheduling_assistant() {
		return scheduling_assistant;
	}

	public void setScheduling_assistant(String scheduling_assistant) {
		this.scheduling_assistant = scheduling_assistant;
	}

	public String getScheduling_time() {
		return scheduling_time;
	}

	public void setScheduling_time(String scheduling_time) {
		this.scheduling_time = scheduling_time;
	}

}
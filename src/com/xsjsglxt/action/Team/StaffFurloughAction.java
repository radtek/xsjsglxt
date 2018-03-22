package com.xsjsglxt.action.Team;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionSupport;
import com.xsjsglxt.domain.DO.xsjsglxt_staffFurlough;
import com.xsjsglxt.service.Team.StaffFurloughService;

/*
 * @author 孙毅
 * @description 休假管理
 * @function 增删改查
 */
public class StaffFurloughAction extends ActionSupport {
	private StaffFurloughService staffFurloughService;
	private xsjsglxt_staffFurlough furlough;
	private List<xsjsglxt_staffFurlough> furloughs;

	// 增加休假信息
	public void saveFurloughs() {
		String result = staffFurloughService.saveFurlough(furloughs);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 删除休假信息(单个)
	public void deleteFurloughByFurloughId() {
		String result = staffFurloughService.deleteFurloughByFurloughId(furlough);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 删除休假信息(所有)
	public void deleteFurloughByStaffId() {
		String result = staffFurloughService.deleteFurloughByStaffId(furlough.getStaffFurlough_staff());
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 通过id获得休假信息
	public void getFurloughByFurloughId() {
		xsjsglxt_staffFurlough newFurlough = staffFurloughService
				.getFurloughByFurloughId(furlough.getXsjsglxt_staffFurlough_id());
		Gson gson = new Gson();
		String result = gson.toJson(newFurlough);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void getFurloughByStaffId() {
		List<xsjsglxt_staffFurlough> furloughList = staffFurloughService
				.getFurloughByStaffId(furlough.getStaffFurlough_staff());
		Gson gson = new Gson();
		String result = gson.toJson(furloughList);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// 修改休假信息

	public void updateFurlough() {
		String result = staffFurloughService.updateFurlough(furlough);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=utf-8");
		try {
			PrintWriter pw = response.getWriter();
			pw.write(result);
			pw.flush();
			pw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// --------------setter/getter------------------------------------
	public StaffFurloughService getStaffFurloughService() {
		return staffFurloughService;
	}

	public xsjsglxt_staffFurlough getFurlough() {
		return furlough;
	}

	public void setFurlough(xsjsglxt_staffFurlough furlough) {
		this.furlough = furlough;
	}

	public void setStaffFurloughService(StaffFurloughService staffFurloughService) {
		this.staffFurloughService = staffFurloughService;
	}

	public List<xsjsglxt_staffFurlough> getFurloughs() {
		return furloughs;
	}

	public void setFurloughs(List<xsjsglxt_staffFurlough> furloughs) {
		this.furloughs = furloughs;
	}
}
package com.xsjsglxt.dao.Case;

import java.util.List;

import com.xsjsglxt.domain.DO.xsjsglxt_case;
import com.xsjsglxt.domain.DO.xsjsglxt_image;
import com.xsjsglxt.domain.DO.xsjsglxt_picture;
import com.xsjsglxt.domain.VO.Case.page_list_imageInformationVO;

public interface ImageDao {

public	void saveCD(xsjsglxt_image image);

public void savePicture(xsjsglxt_picture picture);

public int getMaxImage_number();

public int getMaxPicture_identifier();

public int getCountImageInformationByPage(page_list_imageInformationVO page_list_imageInformation);

public List<xsjsglxt_picture> getListImageInformatioByPage(page_list_imageInformationVO page_list_imageInformation);

public xsjsglxt_image get_image_Byxsjsglxt_picture_id(xsjsglxt_picture picture);

public xsjsglxt_case get_case1_Byxsjsglxt_picture_id(xsjsglxt_picture picture);

public xsjsglxt_picture getpictureById(xsjsglxt_picture picture);

public xsjsglxt_image getImageBypictureId(xsjsglxt_picture picture);

public xsjsglxt_case getCaseBypictureId(xsjsglxt_picture picture);

}

package com.lxs.hs.service.bean;

import lombok.Data;

import java.util.Date;

/**
 * @author akalxs@gmail.com
 */
@Data
public class File {
    private String name;
    private String path;
    private Long size;
    private String type;
    private Date lastUpdateTime;
}

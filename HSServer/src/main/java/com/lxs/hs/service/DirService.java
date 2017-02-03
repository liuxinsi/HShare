package com.lxs.hs.service;

import com.lxs.hs.service.bean.File;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author akalxs@gmail.com
 */
@Path("/dir")
@Produces("application/json")
@Slf4j
public class DirService {

    @Path("/ls")
    @GET
    public List<File> listDir(@QueryParam("path") String path) {
        if (StringUtils.isEmpty(path)) {
            path = ".";
        }
        try {
            return Files.list(Paths.get(path)).map(path1 -> {
                File f = new File();
                f.setName(path1.getFileName().toString());
                f.setPath(path1.toAbsolutePath().toString());
                try {
                    f.setSize(Files.size(path1));
                    f.setLastUpdateTime(new Date(Files.getLastModifiedTime(path1).toMillis()));
                } catch (IOException e) {
                    e.printStackTrace();
                    log.error(e.getMessage(), e);
                    throw new RuntimeException(e);
                }
                return f;
            }).collect(Collectors.toList());
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new RuntimeException(e);
        }
    }
}

package com.xdevtools.fileserver.service;

import com.xdevtools.fileserver.exception.FileStorageException;
import com.xdevtools.fileserver.exception.MyFileNotFoundException;
import com.xdevtools.fileserver.property.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public interface FileStorageService {
    List<String> listFiles() throws MyFileNotFoundException;
    Resource loadFileAsResource(String fileName) throws MyFileNotFoundException;
    String storeFile(MultipartFile file) throws FileStorageException;
}

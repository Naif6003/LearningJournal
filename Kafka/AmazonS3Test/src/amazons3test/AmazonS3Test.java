/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package amazons3test;

/**
 *
 * @author nyand
 */

//--------------------------------------Amazon S3
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class AmazonS3Test {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        //-----------------------------------------S3 
            AWSCredentials credentials = new BasicAWSCredentials("AKIAI6YRUZ7ADVJVAFJQ", "yXhZfj8Z1CNIypRO9zYcr2ykWlFASQKXcLyv8VnF");
            AmazonS3 s3 = new AmazonS3Client(credentials);
            
            String bucketName = "drew2g-testbucket-beer";
            String key = "1.txt";
        try {
            //s3.putObject(bucket_name, key_name, file_path);
            S3Object o = s3.getObject(bucketName, key);
            S3ObjectInputStream s3is = o.getObjectContent();
            FileOutputStream fos = new FileOutputStream(new File(key));
            byte[] read_buf = new byte[1024];
            int read_len = 0;
            while ((read_len = s3is.read(read_buf)) > 0) {
                
            fos.write(read_buf, 0, read_len);
            System.out.println(fos.getChannel().toString());
            }
            s3is.close();
            fos.close();
        } catch (AmazonServiceException e) {
            System.err.println(e.getErrorMessage());
            System.exit(1);
        } catch (FileNotFoundException e) {
            System.err.println(e.getMessage());
            System.exit(1);
        } catch (IOException e) {
            System.err.println(e.getMessage());
            System.exit(1);
        }
        //-----------------------------------------S3 Connection
    }
    
}

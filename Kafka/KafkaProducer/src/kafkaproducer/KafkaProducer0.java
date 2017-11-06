/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kafkaproducer;

/**
 *
 * @author nyand
 * --------------------------------README-----------------------------------
 * 
 * --------------------------------TODO-------------------------------------
 * 1. Have the S3 connection monitored so that when a new file is uploaded to the S3 bucket,
 * it will pull the file automatically (RealTime...when this feature is needed)
 * 2. Determine the structure of kafka messages, most likely by patient, (is each file a different patient?)
 * --------------------------------ChangeLog--------------------------------
 * Version 0.0 Just a connector from Java to my S3 bucket
 * Version 0.1 S3 Connector + JSON Parser
 * Version 0.2 S3 Connector + JSON Parser + Kafka Producer
 */
//import util.properties packages
import java.util.Properties;

//import simple producer packages
import org.apache.kafka.clients.producer.Producer;

//import KafkaProducer packages
import org.apache.kafka.clients.producer.KafkaProducer;

//import ProducerRecord packages
import org.apache.kafka.clients.producer.ProducerRecord;

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

//-------------------------------------JSON

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Iterator;
import java.util.Map;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class KafkaProducer0 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception{
        
        //-----------------------------------------S3 Connection
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
        //-----------------------------------------File to JSON
        
        Object obj = new JSONParser().parse(new FileReader(key));
        JSONObject jo = (JSONObject) obj;
        
        // getting address
        Map ATS = ((Map)jo.get("ActivityTimeSeries"));
        
        // iterating address Map
        Iterator<Map.Entry> itr1 = ATS.entrySet().iterator();
//        while (itr1.hasNext()) {
//            Map.Entry pair = itr1.next();
//            System.out.println(pair.getKey() + " : " + pair.getValue());
//        }
        
        //-----------------------------------------JSON to KAFKA 
        //-----------------------------------------

      if(args.length == 0){
         System.out.println("Enter topic name");
         return;
      }
      
      //Assign topicName to string variable
      String topicName = args[0].toString();
      
      // create instance for properties to access producer configs   
      Properties props = new Properties();
      
      //Assign localhost id
      props.put("bootstrap.servers", "localhost:9092");
      
      //Set acknowledgements for producer requests.      
      props.put("acks", "all");
      
      //If the request fails, the producer can automatically retry,
      props.put("retries", 0);
      
      //Specify buffer size in config
      props.put("batch.size", 16384);
      
      //Reduce the no of requests less than 0   
      props.put("linger.ms", 1);
      
      //The buffer.memory controls the total amount of memory available to the producer for buffering.   
      props.put("buffer.memory", 33554432);
      
      props.put("key.serializer", 
         "org.apache.kafka.common.serialization.StringSerializer");
         
      props.put("value.serializer", 
         "org.apache.kafka.common.serialization.StringSerializer");
      
      Producer<String, String> producer = new KafkaProducer
         <String, String>(props);
           
//TEST SEND to KAFKA
//      for(int i = 0; i < 10; i++)
//         producer.send(new ProducerRecord<String, String>(topicName, 
//            Integer.toString(i), Integer.toString(i)));
//               System.out.println("Test sent successfully");
 
        int incrementedIteration = 0;
        while (itr1.hasNext()) {
            Map.Entry pair = itr1.next();
            incrementedIteration++;
            String tempLine = (pair.getKey() + " : " + pair.getValue());
            producer.send(new ProducerRecord<String, String>(topicName, Integer.toString(incrementedIteration) , tempLine));
              
        }
        
         producer.close();
        
    }
    
    
}

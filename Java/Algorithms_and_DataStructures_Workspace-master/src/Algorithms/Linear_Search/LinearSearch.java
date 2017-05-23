
package Algorithms.Linear_Search;
import Data_Structures.ArrayStructures.ArrayStructures;
/**
 * Created by cowboyuniverse on 11/14/16.
 */
public class LinearSearch  {
    ArrayStructures newArray = new ArrayStructures();
    int arraySize = newArray.getArraySize();

    public String linearSearchForValue(int[] theArrays, int value){
        boolean valueInArray = false;
        String indexesWithValue = "";

        for(int i = 0; i < this.arraySize; i++){
            if(theArrays[i] == value){
                valueInArray = true;
                System.out.print(i + " ");
                indexesWithValue += i + " " ;
            }
            newArray.printHorzArray(i, -1, theArrays);

        }
        if (!valueInArray){
            indexesWithValue = "None";
            System.out.print(indexesWithValue);
        }
        System.out.print("The Value " + Integer.toString(value) + " was Found in the Following: " + indexesWithValue);
        System.out.println();
        return indexesWithValue;
    }

//    public void printHorzArray(int i, int j, int[] theArrays){
//
//        for(int n = 0; n < 51; n++)System.out.print("-");
//
//        System.out.println();
//
//        for(int n = 0; n < arraySize; n++){
//
//            System.out.print("| " + n + "  ");
//
//        }
//
//        System.out.println("|");
//
//        for(int n = 0; n < 51; n++)System.out.print("-");
//
//        System.out.println();
//
//        for(int n = 0; n < arraySize; n++){
//
//            System.out.print("| " + theArrays[n] + " ");
//
//        }
//
//        System.out.println("|");
//
//        for(int n = 0; n < 51; n++)System.out.print("-");
//
//        System.out.println();
//
//        // END OF FIRST PART
//
//
//        // ADDED FOR BUBBLE SORT
//
//        if(j != -1){
//
//            // ADD THE +2 TO FIX SPACING
//
//            for(int k = 0; k < ((j*5)+2); k++)System.out.print(" ");
//
//            System.out.print(j);
//
//        }
//
//
//        // THEN ADD THIS CODE
//
//        if(i != -1){
//
//            // ADD THE -1 TO FIX SPACING
//
//            for(int l = 0; l < (5*(i - j)-1); l++)System.out.print(" ");
//
//            System.out.print(i);
//
//        }
//
//        System.out.println();
//
//    }



}

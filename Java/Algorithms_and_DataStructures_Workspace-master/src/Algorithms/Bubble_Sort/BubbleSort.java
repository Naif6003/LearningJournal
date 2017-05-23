package Algorithms.Bubble_Sort;
import Data_Structures.ArrayStructures.ArrayStructures;

/**
 * Created by cowboyuniverse on 11/22/16.
 */
public class BubbleSort {
    ArrayStructures newArray = new ArrayStructures();
    int arraySize = newArray.getArraySize();

    public void bubbleSort(int [] theArrays){
        for(int i = arraySize - 1; i > 1; i--){
            for (int j = 0; j < i ; j++){
                if(theArrays[j] > theArrays[j+1]){
                    newArray.swapValues(j,j+1);
                    newArray.printHorzArray(i, j, theArrays);
                }
            }
        }
    }




}

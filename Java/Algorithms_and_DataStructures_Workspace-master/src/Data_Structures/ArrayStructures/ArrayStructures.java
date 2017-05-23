package Data_Structures.ArrayStructures;

/**
 * Created by cowboyuniverse on 11/14/16.
 */
public class ArrayStructures {
    int[] theArray = new int[50];
    private int arraySize = 10;

    public ArrayStructures() {
        this.theArray = theArray;
        this.arraySize = arraySize;
    }

    public int[] getTheArray() {
        return theArray;
    }

    public int getTheArrayIndex(int index){
        return theArray[index];
    }

    public void setTheArray(int[] theArray) {
        this.theArray = theArray;
    }

    public int getArraySize() {
        return arraySize;
    }

    public void setArraySize(int arraySize) {
        this.arraySize = arraySize;
    }

    public void generateRandomArray() {
        for (int i = 0; i < arraySize; i++) {
            //random from 10 to 19
            theArray[i] = (int) (Math.random() * 10) + 10;
        }
    }

    public int getValueAtIndex(int index) {
        if (index < arraySize)
            return theArray[index];
        return 0;
    }

    public boolean doesArrayContainThisValue(int searchValue) {
        boolean valueInArray = false;
        for (int i = 0; i < arraySize; i++) {
            if (theArray[i] == searchValue) {
                valueInArray = true;
            }
        }
        return valueInArray;
    }

    public void deleteIndex(int index){
        //check if index is lower than the arraysize
        if(index < arraySize){
            for(int i = 0; i < (arraySize - 1); i++){
                theArray[i] = theArray[i + 1];
            }
            arraySize--;
        }
    }

    public void insertValue(int value){
        //making sure if the insertion will happen inside the bounds
        //of the arraySize
//        if(arraySize < theArray.length)
        if(arraySize < 50){
            theArray[arraySize] = value;
            //not arraySize + 1 because of the 0 index is gonna be
            //one less than what we actually have.
            arraySize++;
        }
    }



    public void printArray() {
        System.out.println("------------");
        for (int i = 0; i < arraySize; i++) {
            System.out.println("|  " + i + "  | " + theArray[i] + " | ");
            System.out.println("------------");
        }
    }

    public void printHorzArray(int i, int j, int[] theArrays){

        for(int n = 0; n < 51; n++)System.out.print("-");

        System.out.println();

        for(int n = 0; n < arraySize; n++){

            System.out.print("| " + n + "  ");

        }

        System.out.println("|");

        for(int n = 0; n < 51; n++)System.out.print("-");

        System.out.println();

        for(int n = 0; n < arraySize; n++){

            System.out.print("| " + theArrays[n] + " ");

        }

        System.out.println("|");

        for(int n = 0; n < 51; n++)System.out.print("-");

        System.out.println();

        // END OF FIRST PART


        // ADDED FOR BUBBLE SORT

        if(j != -1){

            // ADD THE +2 TO FIX SPACING

            for(int k = 0; k < ((j*5)+2); k++)System.out.print(" ");

            System.out.print(j);

        }


        // THEN ADD THIS CODE

        if(i != -1){

            // ADD THE -1 TO FIX SPACING

            for(int l = 0; l < (5*(i - j)-1); l++)System.out.print(" ");

            System.out.print(i);

        }

        System.out.println();

    }

    public void swapValues(int indexOne, int indexTwo){
        int temp = theArray[indexOne];
        theArray[indexOne]=theArray[indexOne];
        theArray[indexTwo]=temp;
    }



}


//                  This is for Main
//import Data_Structures.ArrayStructures.ArrayStructures;
//        import Algorithms.Linear_Search.LinearSearch;
//
//public class Tester {
//    public static void main(String[] args){
//        ArrayStructures newArray = new ArrayStructures();
//        LinearSearch linearSearch = new LinearSearch();
//        newArray.generateRandomArray();
//        newArray.printArray();
//        System.out.print(newArray.getValueAtIndex(3));
//        System.out.println();
//        System.out.println(newArray.doesArrayContainThisValue(18));
//        newArray.deleteIndex(4);
//        newArray.printArray();
//        System.out.println("----------insertion----------");
//        newArray.insertValue(55);
//        newArray.printArray();
//        System.out.println("----------linearSearch----------");
//        linearSearch.linearSearchForValue(newArray.getTheArray(),17);
//    }
//}






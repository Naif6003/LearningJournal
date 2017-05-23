/**
 * Created by cowboyuniverse on 11/14/16.
 */

//----------------------- ArrayStructures Class and Linear_Search Class--------------------------------------//
import Algorithms.Bubble_Sort.BubbleSort;
import Data_Structures.ArrayStructures.ArrayStructures;
import Algorithms.Linear_Search.LinearSearch;

import Data_Structures.Linked_Lists.LinkedList;
public class Tester {
    public static void main(String[] args){




//----------------------- ArrayStructures Class and Linear_Search Class--------------------------------------//
        ArrayStructures newArray = new ArrayStructures();
        LinearSearch linearSearch = new LinearSearch();
        BubbleSort bubble = new BubbleSort();
        newArray.generateRandomArray();
        newArray.printArray();
        System.out.print(newArray.getValueAtIndex(3));
        System.out.println();
        System.out.println(newArray.doesArrayContainThisValue(18));
        newArray.deleteIndex(4);
        newArray.printArray();
        System.out.println("----------insertion----------");
        newArray.insertValue(55);
        newArray.printArray();
        System.out.println("----------linearSearch----------");
        linearSearch.linearSearchForValue(newArray.getTheArray(),11);
        System.out.println("----------bubbleSort----------");
        bubble.bubbleSort(newArray.getTheArray());

        System.out.println("----------D A T A  S T R U C T U R E S----------");
        LinkedList linkedList = new LinkedList();
        linkedList.add("1");
        linkedList.add("2");
        linkedList.add("3");
        linkedList.add("4");
        linkedList.add("5");


        System.out.println("Print: LinkedList: \t\t" + linkedList);
        System.out.println(".size(): \t\t\t\t" + linkedList.size());
        System.out.println(".get(3): \t\t\t\t" + linkedList.get(3) + " (get element at index:3 - list starts from 0)");
        System.out.println(".remove(2): \t\t\t\t" + linkedList.remove(2) + " (element removed)");
        System.out.println(".get(3): \t\t\t\t" + linkedList.get(3) + " (get element at index:3 - list starts from 0)");
        System.out.println(".size(): \t\t\t\t" + linkedList.size());
        System.out.println("Print again: LinkedList: \t" + linkedList);

    }
}






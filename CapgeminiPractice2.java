/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package capgeminipractice;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Scanner;

/**
 *
 * @author Jaggi
 */
public class CapgeminiPractice2 {
   
    public static LinkedHashMap<Character,Integer> countCharacter(){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the word");
        String s=sc.next();
        LinkedHashMap<Character,Integer> hm=new LinkedHashMap<Character,Integer>();
        for(int i=0;i<s.length();i++){
            Character ch=s.charAt(i);
            if(hm.containsKey(ch)){
                hm.put(ch, hm.get(ch)+1);
            }else{
                hm.put(s.charAt(i),1);
            }
        }
     return hm;
    }
    public static void main(String args[]){
    LinkedHashMap<Character,Integer> hm=new LinkedHashMap<Character,Integer>();
    hm=countCharacter();
        System.out.println(hm);
    }
}

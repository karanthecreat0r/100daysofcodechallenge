package collectionsolve;

import java.util.HashMap;
import java.util.Map;

public class MapRunner {
    public static void main(String[] args) {
        String str = "This is KaranSparrow" + "I am a Developer";
        Map<Character, Integer> occu = new HashMap<>();

        char[] characters = str.toCharArray();

        for (char character : characters) {
            // get the character
            Integer integer = occu.get(character);
            if (integer == null) {
                occu.put(character, 1);
            } else {
                occu.put(character, integer + 1);
            }

        }
        System.out.println(occu);
        Map<String, Integer> Stringoccu = new HashMap<>();

        String[] words = str.split(" ");

        for (String word : words) {
            // get the character
            Integer integer = occu.get(word);
            if (integer == null) {
                Stringoccu.put(word, 1);
            } else {
                Stringoccu.put(word, integer + 1);
            }

        }
        System.out.println(Stringoccu);

    }

}

// output

// {=5,a=5,D=1,e=3,h=1,i=2,I=1,K=1,l=1,m=1,n=1,o=2,p=2,r=4,s=2,S=1,T=1,v=1,w=1}{a=1,KaranSparrowI=1,This=1,Developer=1,is=1,am=1}

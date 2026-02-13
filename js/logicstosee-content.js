// Logicstosee - Content Data
const logicstoseeContentData = `<p>Here’s your <strong>refactored and collapsible version</strong> of the <code>main</code> method overloading explanation using <strong>Markdown with collapsible sections</strong> (perfect for tools like GitHub or Markdown previewers that support HTML):</p>
<hr>
<details open>
<summary><strong>Can we overload the <code>main</code> method in Java?</strong></summary>
<p>Yes, we <strong>can overload</strong> the <code>main</code> method in Java, but the JVM will only call the standard <code>main</code> method with this signature:</p>
<pre><code class="language-java">
public static void main(String[] args)
</code></pre>
<hr>
<details>
<summary><strong>🔁 Example: Overloading <code>main</code></strong></summary>
<pre><code class="language-java">
public class MainOverloadExample {
   // Standard main method (entry point for JVM)
   public static void main(String[] args) {
      System.out.println(&quot;Standard main method&quot;);

      // Calling overloaded main methods
      main(10);
      main(&quot;Overloaded main&quot;);
   }

   // Overloaded main method with an int parameter
   public static void main(int a) {
      System.out.println(&quot;Overloaded main with int: &quot; + a);
   }

   // Overloaded main method with a String parameter
   public static void main(String str) {
      System.out.println(&quot;Overloaded main with String: &quot; + str);
   }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>🖨️ Output</strong></summary>
<pre><code class="language-">
Standard main method  
Overloaded main with int: 10  
Overloaded main with String: Overloaded main
</code></pre>
</details>
<hr>
<details>
<summary><strong>📝 Key Points</strong></summary>
<ul>
<li>✅ Overloading = same method name, different parameter types or count</li>
<li>🚫 JVM calls only <code>public static void main(String[] args)</code></li>
<li>✅ Overloaded <code>main</code> methods must be <strong>called manually</strong> from within your code</li>
</ul>
</details>
</details>
<hr>
<details>
<summary><strong>❓ What happens if we remove <code>static</code> from the <code>main</code> method?</strong></summary>
<p>Removing <code>static</code> from the <code>main</code> method compiles successfully but causes a <strong>runtime error</strong>:</p>
<pre><code class="language-">
Error: Main method is not static in class Test, please define the main method as:
   public static void main(String[] args)
</code></pre>
<hr>
<details>
<summary><strong>🧠 Why does this happen?</strong></summary>
<ul>
<li><strong>JVM Calls <code>main</code> Without Creating an Object</strong></li>
</ul>
<ul>
<li>The JVM directly looks for <code>public static void main(String[] args)</code> to start the program.</li>
<li>A <strong>non-static</strong> method needs an object, but the JVM <strong>doesn’t create</strong> one automatically.</li>
</ul>
<ul>
<li><strong>Static = Class-level Method</strong></li>
</ul>
<ul>
<li>A <code>static</code> method belongs to the class, not to an instance.</li>
<li>JVM can call it <strong>without instantiating</strong> the class.</li>
</ul>
</details>
<hr>
<details>
<summary><strong>🧪 Code Example (With Error)</strong></summary>
<pre><code class="language-java">
public class Test {
    public void main(String[] args) { // Removed &#x27;static&#x27;
        System.out.println(&quot;Non-static main&quot;);
    }
}
</code></pre>
<p>🧨 <strong>Runtime Error</strong>:</p>
<pre><code class="language-">
Error: Main method is not static in class Test
</code></pre>
</details>
<hr>
<details>
<summary><strong>✅ How to Call a Non-Static <code>main</code> Manually?</strong></summary>
<pre><code class="language-java">
public class Test {
    public void main(String[] args) { // Non-static main
        System.out.println(&quot;Non-static main method&quot;);
    }

    public static void main(String[] args) { // Correct static main
        Test obj = new Test();
        obj.main(args); // Manually calling the non-static method
    }
}
</code></pre>
<p>✅ This works, but the JVM <strong>still uses</strong> the static <code>main</code> to start execution.</p>
</details>
<hr>
<details>
<summary><strong>📌 Conclusion</strong></summary>
<ul>
<li>Always declare the entry point as:</li>
</ul>
<pre><code class="language-java">
public static void main(String[] args)
</code></pre>
<ul>
<li>JVM will not execute the <code>main</code> method if <code>static</code> is missing.</li>
</ul>
<ul>
<li>You can <strong>manually</strong> call a non-static <code>main</code>, but it&#x27;s not recommended as the program entry point.</li>
</ul>
</details>
</details>
<hr>
<details>
<summary><strong>Write a Java Program to print Fibonacci Series using Recursion.</strong></summary>
<pre><code class="language-java">
class InterviewBit {
    public static void printFibonacci(int val_1, int val_2, int num){
        //Base Case
        if(num == 0)
            return;

        //Printing the next Fibonacci number    
        System.out.print( val_1 + val_2 + &quot; &quot;);

        //Recursively calling for printing Fibonacci for remaining length
        printFibonacci(val_2, val_1+val_2, --num);
    }
    public static void main(String args[]) {
        System.out.println(&quot; *** Fibonacci Series *** &quot;);

        //Printing the first two values
        System.out.print(&quot;0 1 &quot;);

        //Calling Method to print the fibonacci for length 10
        printFibonacci(0, 1, 10);
    }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java program to check if the two strings are anagrams.</strong></summary>
<p>The main idea is to validate the length of strings and then if found equal, convert the string to char array and then sort the arrays and check if both are equal.</p>
<pre><code class="language-java">
import java.util.Arrays;
import java.util.Scanner;
public class InterviewBit {
 public static void main(String[] args) {
   Scanner s = new Scanner(System.in);
   //Input from two strings
   System.out.print(&quot;First String: &quot;);
   String string1 = s.nextLine();
   System.out.print(&quot;Second String: &quot;);
   String string2 = s.nextLine();
   // check for the length
   if(string1.length() == string2.length()) {
     // convert strings to char array
     char[] characterArray1 = string1.toCharArray();
     char[] characterArray2 = string2.toCharArray();
     // sort the arrays
     Arrays.sort(characterArray1);
     Arrays.sort(characterArray2);
     // check for equality, if found equal then anagram, else not an anagram
     boolean isAnagram = Arrays.equals(characterArray1, characterArray2);
     System.out.println(&quot;Anagram: &quot;+ isAnagram);
 }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java Program to find the factorial of a given number.</strong></summary>
<pre><code class="language-java">
public class FindFactorial {
   public static void main(String[] args) {
       int num = 10;
       long factorialResult = 1l;
       for(int i = 1; i &lt;= num; ++i)
       {
           factorialResult *= i;
       }
       System.out.println(&quot;Factorial: &quot;+factorialResult);
   }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Given an array of non-duplicating numbers from 1 to n where one number is missing, write an efficient java program to find that missing number.</strong></summary>
<p>Idea is to find the sum of n natural numbers using the formula and then finding the sum of numbers in the given array. Subtracting these two sums results in the number that is the actual missing number. This results in O(n) time complexity and O(1) space complexity.</p>
<pre><code class="language-java">
public class IBMissingNumberProblem {

   public static void main(String[] args) {

       int[] array={4,3,8,7,5,2,6};
       int missingNumber = findMissingNum(array);
       System.out.println(&quot;Missing Number is &quot;+ missingNumber); 
   }

   public static int findMissingNum(int[] array) {
       int n=array.length+1;
       int sumOfFirstNNums=n*(n+1)/2;
       int actualSumOfArr=0;
       for (int i = 0; i &lt; array.length; i++) {
           actualSumOfArr+=array[i];
       }
       return sumOfFirstNNums-actualSumOfArr;
   }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java Program to check if any number is a magic number or not. A number is said to be a magic number if after doing sum of digits in each step and inturn doing sum of digits of that sum, the ultimate result (when there is only one digit left) is 1.</strong></summary>
<p>Example, consider the number:</p>
<ul>
<li>Step 1: 163 =&gt; 1+6+3 = 10</li>
<li>Step 2: 10 =&gt; 1+0 = 1 =&gt; Hence 163 is a magic number</li>
</ul>
<pre><code class="language-java">
public class IBMagicNumber{

   public static void main(String[] args) { 
       int num = 163;  
       int sumOfDigits = 0;
       while (num &gt; 0 || sumOfDigits &gt; 9) 
       { 
           if (num == 0) 
           { 
               num = sumOfDigits; 
               sumOfDigits = 0; 
           } 
           sumOfDigits += num % 10; 
           num /= 10; 
       } 

       // If sum is 1, original number is magic number 
       if(sumOfDigits == 1) {
           System.out.println(&quot;Magic number&quot;);
       }else {
           System.out.println(&quot;Not magic number&quot;);
       }
   }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java program to create and throw custom exceptions.</strong></summary>
<pre><code class="language-java">
class InterviewBit {
    public static void main(String args[]) throws CustomException {

        // Throwing the custom exception be passing the message
        throw new CustomException(&quot; This is my custom Exception &quot;);
    }
}
//Creating Custom Exception Class
class CustomException extends Exception{
    //Defining Constructor to throw exception message
    public CustomException(String message){
        super(message);
    }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java program to reverse a string.</strong></summary>
<pre><code class="language-java">
class InterviewBit{
    public static void main(String[] args){
        //Input String
        String str = &quot;Welcome to InterviewBit&quot;;
        
        //Pointers.
        int i = 0, j = str.length()-1;
        
        //Result character array to store the reversed string.
        char[] revString = new char[j+1];
        
        //Looping and reversing the string.
        while(i &lt; j){
            revString[j] = str.charAt(i);
            revString[i] = str.charAt(j);
            i++;
            j--;
        }
        //Printing the reversed String.
        System.out.println(&quot;Reversed String = &quot; + String.valueOf(revString));
    }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java program to rotate arrays 90 degree clockwise by taking matrices from user input.</strong></summary>
<pre><code class="language-java">
import java.util.Scanner;
public class InterviewBit
{
    public static void main(String[] args) {
	  Scanner sc = new Scanner(System.in);
	  int no;
        System.out.print(&quot;Enter size of Array : &quot;);
        no = sc.nextInt();
        int[][] a = new int[no][no];
        System.out.print(&quot;Enter  &quot;+ no*no+&quot; Element Array : &quot;);
        
        for(int i = 0; i&lt;no; i++){
            for(int j = 0; j&lt;no; j++){
                a[i][j] = sc.nextInt();
            }
        }
        System.out.print(&quot;\nArray Before Rotation\n\n&quot;);
        for(int i = 0; i&lt;no; i++){
            for(int j = 0; j&lt;no; j++){
                System.out.print(a[i][j] + &quot; &quot;);
            }
            System.out.println();
        }
    
        System.out.println(&quot;\n&quot;);
        //Rotation
        //Transpose
        for(int i = 0; i &lt; no; i++){
            for(int j = i; j &lt; no; j++){
                int temp = a[i][j];
                a[i][j] = a[j][i];
                a[j][i] = temp;
            }
        }
        
        //Reverse Each row
        for(int i = 0; i &lt; no; i++){
            int l, j;
            for(j = 0, l = no -1; j &lt; l; j++){
                int temp = a[i][j];
                a[i][j] = a[i][l];
                a[i][l] = temp;
                l--;
            }
        }
        
        System.out.println(&quot;Array After Rotation - \n&quot;);
    
        for(int i = 0; i&lt;no; i++){
            for(int j = 0; j&lt;no; j++){
                System.out.print(a[i][j] + &quot; &quot;);
            }
            System.out.println();
        }
    }
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a java program to check if any number given as input is the sum of 2 prime numbers.</strong></summary>
<p>Example :</p>
<p>Input - 18</p>
<p>Output - </p>
<p>18 = 13 + 5</p>
<p>18 = 11 + 7</p>
<pre><code class="language-java">
public class InterviewBit
{
    // Method to Check Prime Number
    private static int check_prime(int num){
        int flag = 0;
        for(int i = 2; i&lt;=num/2; i++){
            if(num%i == 0){
                flag = 1;
                return 1;
            }
        }
        if(flag == 0)
            return 0;
        return 1;
    }
    // Method to get print the prime sum
    private static void find(int num){
        for(int i = 2; i &lt;= num/2; i++){
            if(check_prime(i) == 0){
                if(check_prime(num-i) == 0)
                    System.out.println(num + &quot; = &quot;+ (num-i) + &quot; &quot;+ i);
            }
        }
    }
	public static void main(String[] args) {
		find(18);
	}
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Write a Java program for solving the Tower of Hanoi Problem.</strong></summary>
<pre><code class="language-java">
public class InterviewBit
{
    //Recursive Method for Solving the Tower of hanoi.
    private static void TOH(char source, char auxiliary, char destination, int numOfDisk){
    	if (numOfDisk &gt; 0){
    		TOH(source, destination, auxiliary, numOfDisk-1);
    		System.out.println(&quot;Move 1 disk from &quot;+source+&quot; to &quot;+destination+&quot; using &quot;+auxiliary+&quot;.&quot;);
    		TOH(auxiliary, source, destination, numOfDisk-1);
    	}
    }
	public static void main(String[] args) {
		TOH(&#x27;A&#x27;,&#x27;B&#x27;,&#x27;C&#x27;, 3);
	}
}
</code></pre>
</details>
<hr>
<details>
<summary><strong>Implement Binary Search in Java using recursion.</strong></summary>
<pre><code class="language-java">
public class Main
{
    //Recursive method for binary search
    private static boolean binarySearch(int[] arr, int low, int high, int key){
       
        //Calculating Mid.
        int mid = (low + high)/2;
       
        //Base Case.
        if(low &gt; high)
            return false;
       
        //Checking if the key is found in the middle.
        if(arr[mid] == key)
            return true;
       
        //Searching on the left half if a key exists there.  
        if(key &lt; arr[mid])
            return binarySearch(arr, low, mid-1, key);
       
        //Searching on the other half otherwise.
        return binarySearch(arr, mid+1, high, key);
    }
public static void main(String[] args) {
   
   int[] arr = {2, 5, 9, 13, 17, 21, 30};
   if(binarySearch(arr, 0, (arr.length-1), 30))
       System.out.println(&quot; Element Found. &quot;);
   else
       System.out.println(&quot; Element not Found.&quot;);
}
}
</code></pre>
</details>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = logicstoseeContentData;
}

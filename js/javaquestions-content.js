// Java Basics - Content Data
const javaquestionsContentData = `<h1 id="java-questions-link">[Java Questions Link](https://www.java2novice.com/-)</h1>
<p><a href="https://algorithm-visualizer.org/brute-force/insertion-sort">java visual rep</a></p>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;1. Java Program to Remove All Whitespaces Without Using replace()&lt;/summary&gt;</p>
<h3 id="problem">✅ Problem</h3>
<p>Remove all white spaces from a string <strong>without using <em>_CODE</em>PLACEHOLDER<em>0</em>_</strong>, using <strong>Java 8 syntax</strong> (Streams, Lambdas).</p>
<hr>
<h3 id="java-8-stream-solution">🔧 Java 8 Stream Solution</h3>
<pre><code class="language-java">
import java.util.stream.Collectors;

public class RemoveWhiteSpaces {
    public static void main(String[] args) {
        String input = &quot;  Java  8   Stream    Example  &quot;;

        // Remove whitespaces without using replace()
        String result = input.chars()
            .filter(c -&gt; !Character.isWhitespace(c))
            .mapToObj(c -&gt; String.valueOf((char) c))
            .collect(Collectors.joining());

        System.out.println(&quot;Original : &#x27;&quot; + input + &quot;&#x27;&quot;);
        System.out.println(&quot;Without Spaces : &#x27;&quot; + result + &quot;&#x27;&quot;);
    }
}
</code></pre>
<pre><code class="language-java">

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		String str1 = &quot;Communication process&quot;;
		
		Set&lt;Character&gt; uniqCharSet = new LinkedHashSet&lt;&gt;();
		
		String str2 = str1.chars().mapToObj(c -&gt; String.valueOf((char) c)).distinct().collect(Collectors.joining());
		
		System.out.println(str2);
	}
}

</code></pre>
<hr>
<h3 id="output">📌 Output</h3>
<pre><code class="language-">
Original : &#x27;  Java  8   Stream    Example  &#x27;
Without Spaces : &#x27;Java8StreamExample&#x27;
</code></pre>
<hr>
<h3 id="notes">🧠 Notes</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> creates an </em><em>CODE</em>PLACEHOLDER<em>1</em>_ of character codes.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ removes all whitespace.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ joins characters back into a string.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;2. Find the First Non-Duplicate Character in a String (Java 8)&lt;/summary&gt;</p>
<h3 id="problem">✅ Problem</h3>
<p>Find the first non-repeating character in a string.</p>
<p>Examples:</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> → </em><em>CODE</em>PLACEHOLDER<em>1</em>_</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> → </em><em>CODE</em>PLACEHOLDER<em>1</em>_</li>
</ul>
<hr>
<h3 id="java-8-solution">🔧 Java 8 Solution</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FirstUniqueChar {
    public static void main(String[] args) {
        String input = &quot;Apple&quot;;

        // Convert to uppercase for case-insensitive comparison (optional)
        String upperInput = input.toUpperCase();

        Optional&lt;Character&gt; firstNonRepeat = upperInput.chars()
            .mapToObj(c -&gt; (char) c)
            .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()))
            .entrySet()
            .stream()
            .filter(entry -&gt; entry.getValue() == 1)
            .map(Map.Entry::getKey)
            .findFirst();

        if (firstNonRepeat.isPresent()) {
            System.out.println(&quot;First non-duplicate character: &quot; + firstNonRepeat.get());
        } else {
            System.out.println(&quot;No unique character found.&quot;);
        }
    }
}
</code></pre>
<hr>
<h3 id="output">📌 Output</h3>
<pre><code class="language-">
First non-duplicate character: A
</code></pre>
<hr>
<h3 id="notes">🧠 Notes</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ maintains insertion order.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ counts character frequency.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> returns the first character with frequency </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
</ul>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.Collectors;

public class NonRepeatingNames {
    public static void main(String[] args) {
        List&lt;String&gt; names = List.of(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Alice&quot;, &quot;Charlie&quot;, &quot;Bob&quot;, &quot;David&quot;);
        Set&lt;String&gt; seen = new HashSet&lt;&gt;();
        Set&lt;String&gt; duplicates = new HashSet&lt;&gt;();
        
                // First pass: identify duplicates
                names.stream()
                        .filter(s -&gt; !seen.add(s)) // For every element, try to add it to `seen`.
                                                   // If `add` returns false, it&#x27;s a duplicate.
                        .forEach(duplicates::add); // Add all duplicates to the `duplicates` set.
        
                // Second pass: filter the original list again
                List&lt;String&gt; nonRepeatingNames = names.stream()
                        .filter(s -&gt; !duplicates.contains(s)) // Keep elements that are not in the `duplicates` set.
                        .collect(Collectors.toList());
        
                System.out.println(&quot;Original list: &quot; + names);
                System.out.println(&quot;Non-repeating names: &quot; + nonRepeatingNames);
                // Output: [Charlie, David]
        }
}
</code></pre>
<pre><code class="language-java">

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		List&lt;Integer&gt; names = List.of(1,2,3,3,2,5,6,7,9);

        List&lt;Integer&gt; uniqueOnlyOnce = names.stream()
                .filter(name -&gt; Collections.frequency(names, name) &gt; 1)
                .collect(Collectors.toList());

        System.out.println(uniqueOnlyOnce);
	}
}

</code></pre>
<pre><code class="language-java">

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ChekUniqueInString {

    public static void main(String[] args) {
        String value = &quot;hello world&quot;;
        List&lt;Character&gt; valueCharArr = value.chars()
                .mapToObj(s -&gt; (char) s)
                .collect(Collectors.toList());
        valueCharArr.stream()
                .filter(s -&gt; Collections.frequency(valueCharArr, s) == 1)
                .forEach(System.out::println);
    }
}

</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;3. Java Program to Find the Top 3 Highest Repeated Characters&lt;/summary&gt;</p>
<h3 id="problem">✅ Problem</h3>
<p>Given a string, find the <strong>top 3 characters</strong> that appear most frequently.</p>
<hr>
<h3 id="example">🧪 Example</h3>
<p>For input:</p>
<pre><code class="language-">

&quot;mississippi&quot;

</code></pre>
<p>Expected Output:</p>
<pre><code class="language-">

s : 4
i : 4
p : 2

</code></pre>
<hr>
<h3 id="java-8-stream-solution">🔧 Java 8 Stream Solution</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Top3FrequentCharacters {
    public static void main(String[] args) {
        String input = &quot;mississippi&quot;;

        Map&lt;Character, Long&gt; frequencyMap = input.chars()
            .mapToObj(c -&gt; (char) c)
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));

        frequencyMap.entrySet().stream()
            .sorted(Map.Entry.&lt;Character, Long&gt;comparingByValue(Comparator.reverseOrder()))
            .limit(3)
            .forEach(entry -&gt; System.out.println(entry.getKey() + &quot; : &quot; + entry.getValue()));
    }
}
</code></pre>
<hr>
<h3 id="output-for-mississippi">📌 Output for `&quot;mississippi&quot;`:</h3>
<pre><code class="language-">
s : 4
i : 4
p : 2
</code></pre>
<hr>
<h3 id="notes">🧠 Notes</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> with </em><em>CODE</em>PLACEHOLDER<em>1</em>_ computes frequency.</li>
<li>Sorted by value in <strong>descending order</strong>.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ picks the top 3.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;4. Find Missing Elements from One Array Compared to Another&lt;/summary&gt;</p>
<h3 id="problem">✅ Problem</h3>
<p>Given two arrays:</p>
<pre><code class="language-java">
int[] a = {1, 1, 2, 5, 6, 9};
int[] b = {2, 9, 5};
</code></pre>
<p>Find the elements in <em>_CODE</em>PLACEHOLDER<em>0</em><em> that are <strong>not present</strong> in </em><em>CODE</em>PLACEHOLDER<em>1</em>_, considering <strong>duplicates</strong>.</p>
<hr>
<h3 id="expected-output">🧪 Expected Output</h3>
<pre><code class="language-">
Missing elements: [1, 6]
</code></pre>
<hr>
<h3 id="java-8-solution-with-frequency-handling">🔧 Java 8 Solution (with Frequency Handling)</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FindMissingElements {
    public static void main(String[] args) {
        int[] a = {1, 1, 2, 5, 6, 9};
        int[] b = {2, 9, 5};

        // Convert b to frequency map
        Map&lt;Integer, Long&gt; bFreq = Arrays.stream(b)
            .boxed()
            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        // Collect missing elements from a
        List&lt;Integer&gt; missing = new ArrayList&lt;&gt;();

        Arrays.stream(a).forEach(num -&gt; {
            if (bFreq.getOrDefault(num, 0L) &gt; 0) {
                bFreq.put(num, bFreq.get(num) - 1); // reduce count
            } else {
                missing.add(num);
            }
        });

        System.out.println(&quot;Missing elements: &quot; + missing);
    }
}
</code></pre>
<hr>
<h3 id="output">📌 Output</h3>
<pre><code class="language-">
Missing elements: [1, 6]
</code></pre>
<hr>
<h3 id="notes">🧠 Notes</h3>
<ul>
<li>Handles <strong>frequency of duplicates</strong> (e.g., only one <em>_CODE</em>PLACEHOLDER<em>0</em><em> in </em><em>CODE</em>PLACEHOLDER<em>1</em><em> would not match two in </em><em>CODE</em>PLACEHOLDER<em>2</em>_).</li>
<li>Efficient and works with <strong>any data order</strong>.</li>
</ul>
<hr>
<p>Great question!</p>
<p>Let’s walk through <strong>how to analyze the time complexity</strong> of the Java 8 program that finds the <strong>missing elements</strong> when comparing two arrays <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_, considering duplicates.</p>
<hr>
<h3 id="code-recap-core-logic-only">✅ **Code Recap** (Core Logic Only)</h3>
<pre><code class="language-java">
Map&lt;Integer, Long&gt; bFreq = Arrays.stream(b)
    .boxed()
    .collect(Collectors.groupingBy(...));

List&lt;Integer&gt; missing = new ArrayList&lt;&gt;();

Arrays.stream(a).forEach(num -&gt; {
    if (bFreq.getOrDefault(num, 0L) &gt; 0) {
        bFreq.put(num, bFreq.get(num) - 1);
    } else {
        missing.add(num);
    }
});
</code></pre>
<hr>
<h3 id="steps-to-analyze-time-complexity">🧠 **Steps to Analyze Time Complexity**</h3>
<p>Let’s assume:</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<h4 id="1-creating-the-frequency-map-for-array-b">1. **Creating the frequency map for array `b`**</h4>
<pre><code class="language-java">
Arrays.stream(b).boxed().collect(Collectors.groupingBy(...));
</code></pre>
<ul>
<li>Each of the <em>_CODE</em>PLACEHOLDER<em>0</em>_ elements is processed once.</li>
<li>Grouping and counting takes <strong>O(m)</strong> time.</li>
</ul>
<h4 id="2-iterating-over-array-a">2. **Iterating over array `a`**</h4>
<pre><code class="language-java">
Arrays.stream(a).forEach(num -&gt; {...});
</code></pre>
<ul>
<li>Iterates over all <em>_CODE</em>PLACEHOLDER<em>0</em>_ elements.</li>
<li>Each lookup and update in a <em>_CODE</em>PLACEHOLDER<em>0</em><em> (i.e., </em><em>CODE</em>PLACEHOLDER<em>1</em>_) is <strong>O(1)</strong> on average.</li>
<li>So, this loop runs in <strong>O(n)</strong> time.</li>
</ul>
<h4 id="3-adding-to-missing-list">3. **Adding to missing list**</h4>
<ul>
<li>Each unmatched element is added to a list (at most <em>_CODE</em>PLACEHOLDER<em>0</em>_ elements).</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ is <strong>O(1)</strong> per operation → total <strong>O(n)</strong>.</li>
</ul>
<hr>
<h3 id="final-time-complexity">✅ **Final Time Complexity**</h3>
<pre><code class="language-text">
O(m)    // for building frequency map from array b
+ O(n)  // for scanning array a and updating/checking map
= O(n + m)
</code></pre>
<hr>
<h3 id="time-complexity-on-m">⏱️ **Time Complexity = `O(n + m)`**</h3>
<ul>
<li><strong>Efficient linear time algorithm</strong>, considering both arrays only once.</li>
<li>Assumes <em>_CODE</em>PLACEHOLDER<em>0</em>_ operations (get, put) are <strong>O(1) on average</strong>.</li>
</ul>
<hr>
<h3 id="space-complexity">📦 **Space Complexity**</h3>
<ul>
<li>Frequency map stores up to <em>_CODE</em>PLACEHOLDER<em>0</em>_ unique keys → <strong>O(m)</strong>.</li>
<li>Missing list can store up to <em>_CODE</em>PLACEHOLDER<em>0</em>_ elements → <strong>O(n)</strong>.</li>
</ul>
<p><strong>Total space complexity: O(n + m)</strong></p>
<hr>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;6. Get Even Numbers from an Array Using Stream (Java 8)&lt;/summary&gt;</p>
<h3 id="problem">✅ Problem</h3>
<p>Extract all even numbers from an integer array using Java 8 streams.</p>
<hr>
<h3 id="java-8-solution">🔧 Java 8 Solution</h3>
<pre><code class="language-java">
import java.util.Arrays;

public class EvenNumbersStream {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        int[] evens = Arrays.stream(numbers)
            .filter(n -&gt; n % 2 == 0)
            .toArray();

        System.out.println(&quot;Even numbers: &quot; + Arrays.toString(evens));
    }
}
</code></pre>
<hr>
<h3 id="output">📌 Output</h3>
<pre><code class="language-">
Even numbers: [2, 4, 6, 8, 10]
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;7. Print a given array cyclically in a loop to output the desired pattern&lt;/summary&gt;</p>
<p>Given Array: <em>_CODE</em>PLACEHOLDER<em>0</em>_</p>
<p>Sample Outputs:</p>
<pre><code class="language-">
- **Group (Columns)**: 4  
  **Iterations (Rows)**: 7  
  **Output**:

1 2 3 4
5 6 1 2
3 4 5 6
1 2 3 4
5 6 1 2
3 4 5 6
1 2 3 4

- **Group**: 5  
  **Iterations**: 2  
  **Output**:


1 2 3 4 5
6 1 2 3 4

- **Group**: 3  
  **Iterations**: 3  
  **Output**:

1 2 3
4 5 6
1 2 3

</code></pre>
<h3 id="standard-java-implementation">🔸 Standard Java Implementation</h3>
<pre><code class="language-java">
public class CyclicArrayPrinter {
  public static void main(String[] args) {
      int[] arr = {1, 2, 3, 4, 5, 6};
      int group = 4;       // Number of columns
      int iterations = 7;  // Number of rows

      int index = 0;
      for (int i = 0; i &lt; iterations; i++) {
          for (int j = 0; j &lt; group; j++) {
              System.out.print(arr[index] + &quot; &quot;);
              index = (index + 1) % arr.length; // Wrap around
          }
          System.out.println();
      }
  }
}
</code></pre>
<hr>
<h3 id="java-8-stream-based-version">🔹 Java 8 Stream-Based Version</h3>
<pre><code class="language-java">
import java.util.stream.IntStream;

public class CyclicArrayPrinter {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        int group = 4;       // Number of columns
        int iterations = 7;  // Number of rows

        final int[] index = {0};  // Mutable wrapper for lambda

        IntStream.range(0, iterations).forEach(row -&gt; {
            IntStream.range(0, group).forEach(col -&gt; {
                System.out.print(arr[index[0]] + &quot; &quot;);
                index[0] = (index[0] + 1) % arr.length;
            });
            System.out.println();
        });
    }
}
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;8. Method Overloading Resolution in Java (String vs Object)&lt;/summary&gt;</p>
<h3 id="code">✅ Code:</h3>
<pre><code class="language-java">
public class SimpleClass {
    public void method(String str) {
        System.out.println(&quot;String method &quot; + str);
    }

    public void method(Object object) {
        System.out.println(&quot;Object method &quot; + object);
    }

    public static void main(String[] args) {
        SimpleClass instance = new SimpleClass();
        instance.method(&quot;Hello&quot;);                   // ①
        instance.method(new String(&quot;World&quot;));       // ②
        String str = new String(&quot;Mango&quot;);
        instance.method((Object)str);               // ③
        instance.method(null);                      // ④
    }
}
</code></pre>
<hr>
<h3 id="explanation-of-each-call">🔍 Explanation of Each Call:</h3>
<h4 id="call-①-instancemethodhello">✅ Call ①: `instance.method(&quot;Hello&quot;);`</h4>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ is a <strong>String literal</strong></li>
<li>Compiler chooses <em>_CODE</em>PLACEHOLDER<em>0</em><em> because it&#x27;s more specific than </em><em>CODE</em>PLACEHOLDER<em>1</em>_</li>
<li><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<hr>
<h4 id="call-②-instancemethodnew-stringworld">✅ Call ②: `instance.method(new String(&quot;World&quot;));`</h4>
<ul>
<li>Argument is of type <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li>Compiler resolves to <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<hr>
<h4 id="call-③-instancemethodobjectstr">✅ Call ③: `instance.method((Object)str);`</h4>
<ul>
<li>Argument is explicitly cast to <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li>Compiler sees the type as <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li>Chooses <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<hr>
<h4 id="call-④-instancemethodnull">✅ Call ④: `instance.method(null);`</h4>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> is applicable to both </em><em>CODE</em>PLACEHOLDER<em>1</em><em> and </em><em>CODE</em>PLACEHOLDER<em>2</em>_</li>
<li>But <em>_CODE</em>PLACEHOLDER<em>0</em>_ is <strong>more specific</strong></li>
<li>So <em>_CODE</em>PLACEHOLDER<em>0</em>_ is chosen</li>
<li><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<hr>
<h3 id="final-output">📌 Final Output:</h3>
<pre><code class="language-">
String method Hello
String method World
Object method Mango
String method null
</code></pre>
<blockquote>ℹ️ If both overloads had the same specificity and <em>_CODE</em>PLACEHOLDER<em>0</em>_ was passed, it would result in a <strong>compile-time ambiguity error</strong>.</blockquote>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;9. Group cars by color prefix (Java 8 Stream)&lt;/summary&gt;</p>
<h3 id="problem-statement">✅ Problem Statement</h3>
<p>Given:</p>
<pre><code class="language-java">
String[] colors = {&quot;Red&quot;, &quot;Green&quot;, &quot;Blue&quot;};
List&lt;String&gt; carsList = Arrays.asList(&quot;1audi&quot;, &quot;2ferrari&quot;, &quot;3nexa&quot;, &quot;1swift&quot;, &quot;2baleno&quot;, &quot;3verna&quot;);
</code></pre>
<p>You want to group the cars based on the prefix digit (1 → Red, 2 → Green, 3 → Blue), and strip the digit from the car name.</p>
<hr>
<h3 id="java-8-stream-solution">🔧 Java 8 Stream Solution</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.Collectors;

public class CarColorGrouping {
    public static void main(String[] args) {
        String[] colors = {&quot;Red&quot;, &quot;Green&quot;, &quot;Blue&quot;};
        List&lt;String&gt; carsList = Arrays.asList(&quot;1audi&quot;, &quot;2ferrari&quot;, &quot;3nexa&quot;, &quot;1swift&quot;, &quot;2baleno&quot;, &quot;3verna&quot;);

        Map&lt;String, List&lt;String&gt;&gt; grouped = carsList.stream()
            .collect(Collectors.groupingBy(
                car -&gt; {
                    int colorIndex = Character.getNumericValue(car.charAt(0)) - 1;
                    return colors[colorIndex];
                },
                Collectors.mapping(car -&gt; car.substring(1), Collectors.toList())
            ));

        // Print the result
        grouped.forEach((color, cars) -&gt; System.out.println(color + &quot; : &quot; + cars));
    }
}
</code></pre>
<hr>
<h3 id="output">📌 Output</h3>
<pre><code class="language-">
Red : [audi, swift]
Green : [ferrari, baleno]
Blue : [nexa, verna]
</code></pre>
<hr>
<h3 id="notes">🧠 Notes</h3>
<ul>
<li>Uses <em>_CODE</em>PLACEHOLDER<em>0</em>_ to map digit to color index.</li>
<li>Uses <em>_CODE</em>PLACEHOLDER<em>0</em>_ to strip the prefix and collect car names.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;➕ 10. Add Two Numbers Using Java Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<h3 id="concept">💡 Concept</h3>
<p>Even though Java Streams are typically used for collections, you can use them creatively to sum just <strong>two numbers</strong>.</p>
<hr>
<h3 id="example-1-using-streamof">✅ Example 1: Using `Stream.of()`</h3>
<pre><code class="language-java">
import java.util.stream.Stream;

public class StreamAddition {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;

        int sum = Stream.of(num1, num2)
                        .mapToInt(Integer::intValue)
                        .sum();

        System.out.println(&quot;Sum: &quot; + sum); // Output: Sum: 30
    }
}

</code></pre>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ creates a stream of the two numbers.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> converts the stream to an </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ gives the total.</li>
</ul>
<h3 id="sum-largest-and-smallest-num">Sum largest and smallest num</h3>
<pre><code class="language-java">

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		int[] value = {4,9,2,1,8};
		
		System.out.println(Arrays.stream(value).max().getAsInt()-Arrays.stream(value).min().getAsInt());
	}
}

</code></pre>
<hr>
<h3 id="example-2-using-intstreamof">✅ Example 2: Using `IntStream.of()`</h3>
<pre><code class="language-java">
import java.util.stream.IntStream;

public class StreamAddition {
    public static void main(String[] args) {
        int sum = IntStream.of(5, 7).sum();
        System.out.println(&quot;Sum: &quot; + sum); // Output: Sum: 12
    }
}
</code></pre>
<p>This is more concise using <em>_CODE</em>PLACEHOLDER<em>0</em>_ directly.</p>
<hr>
<h3 id="when-is-this-useful">🔍 When is this useful?</h3>
<ul>
<li>Demonstrating stream operations</li>
<li>Summing dynamic inputs</li>
<li>Replacing traditional loops with a functional style</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;✖️ 11. Multiply Numbers Using Java Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<h3 id="option-1-using-reduce-for-multiplication">✅ Option 1: Using `reduce()` for Multiplication</h3>
<pre><code class="language-java">
import java.util.stream.IntStream;

public class MultiplyReduce {
    public static void main(String[] args) {
        int result = IntStream.of(2, 3, 4)
                              .reduce(1, (a, b) -&gt; a * b);

        System.out.println(&quot;Product: &quot; + result); // Output: 24
    }
}
</code></pre>
<p>🧠 <em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ is the identity (neutral) for multiplication.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ multiplies elements cumulatively.</li>
</ul>
<hr>
<h3 id="option-2-multiply-inside-map-with-paired-data">✅ Option 2: Multiply Inside `map()` (with paired data)</h3>
<pre><code class="language-java">
import java.util.stream.IntStream;

public class MultiplyArrays {
    public static void main(String[] args) {
        int[] a = {2, 4, 6};
        int[] b = {3, 5, 7};

        IntStream.range(0, a.length)
                 .map(i -&gt; a[i] * b[i])
                 .forEach(System.out::println);  // Output: 6, 20, 42
    }
}
</code></pre>
<p>Here, each pair from two arrays is multiplied using <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<hr>
<h3 id="option-3-multiply-a-fixed-number-inside-map">✅ Option 3: Multiply a Fixed Number Inside `map()`</h3>
<pre><code class="language-java">
import java.util.stream.Stream;

public class MultiplyFixed {
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 6;

        int result = Stream.of(num1)
                           .map(n -&gt; n * num2)
                           .findFirst()
                           .orElse(0);

        System.out.println(&quot;Product: &quot; + result); // Output: 30
    }
}
</code></pre>
<hr>
<h3 id="option-4-multiply-list-elements-with-reduce">✅ Option 4: Multiply List Elements with `reduce()`</h3>
<pre><code class="language-java">
import java.util.Arrays;

public class MultiplyList {
    public static void main(String[] args) {
        int product = Arrays.asList(2, 3, 5)
                            .stream()
                            .reduce(1, (a, b) -&gt; a * b);

        System.out.println(&quot;Product: &quot; + product); // Output: 30
    }
}
</code></pre>
<p>Note: You must use <em>_CODE</em>PLACEHOLDER<em>0</em><em> as identity, or use </em><em>CODE</em>PLACEHOLDER<em>1</em>_ if using no identity.</p>
<hr>
<h3 id="summary">🧠 Summary</h3>
<table>
<thead><tr>
<th>Use Case</th>
<th>Method</th>
<th>Code Technique</th>
</tr></thead><tbody>
<tr>
<td>Multiply multiple values</td>
<td>`reduce()`</td>
<td>`.reduce(1, (a, b) -&gt; a * b)`</td>
</tr>
<tr>
<td>Multiply pairs from arrays</td>
<td>`map()`</td>
<td>`.map(i -&gt; a[i] * b[i])`</td>
</tr>
<tr>
<td>Multiply with fixed number</td>
<td>`map()`</td>
<td>`.map(n -&gt; n * fixed)`</td>
</tr>
</tbody></table>
<hr>
<p>Multiplication is a natural use case for <em>_CODE</em>PLACEHOLDER<em>0</em>_ in functional style. Let me know if you&#x27;d like to include <strong>BigDecimal multiplication</strong> or <strong>parallel streams</strong>!</p>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🧮 12. Find Distinct and Non-Distinct Values from Two Arrays&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>✅ <strong>Distinct values</strong> → values that appear in either array, but only once across both</li>
<li>✅ <strong>Non-distinct values</strong> → values that appear in <strong>both arrays</strong> (i.e., common elements)</li>
</ul>
<h3 id="input-arrays">🧾 Input Arrays</h3>
<pre><code class="language-java">
int[] one = {1, 2, 3, 4, 5};
int[] two = {4, 5, 6, 7, 8};
</code></pre>
<hr>
<h3 id="1-non-distinct-values-common-elements">✅ 1. Non-Distinct Values (Common Elements)</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class CommonValues {
    public static void main(String[] args) {
        int[] one = {1, 2, 3, 4, 5};
        int[] two = {4, 5, 6, 7, 8};

        Set&lt;Integer&gt; setOne = Arrays.stream(one).boxed().collect(Collectors.toSet());

        List&lt;Integer&gt; common = Arrays.stream(two)
                                     .filter(setOne::contains)
                                     .distinct()
                                     .boxed()
                                     .collect(Collectors.toList());

        System.out.println(&quot;🔁 Common (Non-Distinct): &quot; + common);
    }
}
</code></pre>
<p>🧠 This collects elements that are in both arrays:</p>
<p><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</p>
<hr>
<h3 id="2-distinct-appearing-only-in-one-of-the-arrays">✅ 2. Distinct (Appearing Only in One of the Arrays)</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class DistinctValues {
    public static void main(String[] args) {
        int[] one = {1, 2, 3, 4, 5};
        int[] two = {4, 5, 6, 7, 8};

        Set&lt;Integer&gt; setOne = Arrays.stream(one).boxed().collect(Collectors.toSet());
        Set&lt;Integer&gt; setTwo = Arrays.stream(two).boxed().collect(Collectors.toSet());

        // Union of both sets
        Set&lt;Integer&gt; union = new HashSet&lt;&gt;(setOne);
        union.addAll(setTwo);

        // Intersection (common)
        Set&lt;Integer&gt; intersection = new HashSet&lt;&gt;(setOne);
        intersection.retainAll(setTwo);

        // Remove common from union to get only distincts
        union.removeAll(intersection);

        System.out.println(&quot;✅ Distinct (Unique to One Array): &quot; + union);
    }
}
</code></pre>
<p>💡 This filters values that appear only in <strong>one</strong> array.</p>
<p><strong>Output:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_</p>
<hr>
<h3 id="summary">📌 Summary</h3>
<table>
<thead><tr>
<th>Type</th>
<th>Output</th>
</tr></thead><tbody>
<tr>
<td>Common (Duplicate)</td>
<td>`[4, 5]`</td>
</tr>
<tr>
<td>Distinct (Unique)</td>
<td>`[1, 2, 3, 6, 7, 8]`</td>
</tr>
</tbody></table>
<p>You can even combine both into one method if needed.</p>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🔠 13. Count Character Occurrences in a String&lt;/strong&gt;&lt;/summary&gt;</p>
<h3 id="input">🧾 Input</h3>
<pre><code class="language-java">
String str = &quot;aaabbaccb&quot;;
</code></pre>
<hr>
<h3 id="option-1-using-java-8-streams">✅ Option 1: Using Java 8 Streams</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class CharFrequency {
    public static void main(String[] args) {
        String str = &quot;aaabbaccb&quot;;

        Map&lt;Character, Long&gt; freqMap = str.chars()                           // IntStream of characters
                                          .mapToObj(c -&gt; (char) c)           // Convert to Character Stream
                                          .collect(Collectors.groupingBy(
                                              Function.identity(),           // Group by character itself
                                              Collectors.counting()          // Count occurrences
                                          ));

        System.out.println(&quot;Character Frequencies: &quot; + freqMap);
    }
}



import java.util.*;
import java.util.stream.Collectors;

public class OccurrencesExample {
    public static void main(String[] args) {
        String[] s = {&quot;AA&quot;, &quot;BB&quot;, &quot;AA&quot;, &quot;CC&quot;};

        Map&lt;String, Long&gt; occurrences = Arrays.stream(s)
                .collect(Collectors.groupingBy(e -&gt; e, Collectors.counting()));

        System.out.println(occurrences);
    }
}

</code></pre>
<p>📦 <strong>Output:</strong></p>
<pre><code class="language-">
Character Frequencies: {a=4, b=3, c=2}

{AA=2, BB=1, CC=1}

</code></pre>
<hr>
<h3 id="option-2-classic-way-for-interviews">✅ Option 2: Classic Way (for interviews)</h3>
<pre><code class="language-java">
import java.util.*;

public class CharCountManual {
    public static void main(String[] args) {
        String str = &quot;aaabbaccb&quot;;
        Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        System.out.println(&quot;Character Frequencies: &quot; + map);
    }
}
</code></pre>
<hr>
<h3 id="summary">🧠 Summary</h3>
<table>
<thead><tr>
<th>Approach</th>
<th>Key Features</th>
</tr></thead><tbody>
<tr>
<td>`Streams`</td>
<td>Elegant, functional, concise</td>
</tr>
<tr>
<td>`Classic Loop`</td>
<td>Interview-friendly, easily readable</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Occurances&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Got it 👍 You want to find the occurrences (frequency) of each element in a <em>_CODE</em>PLACEHOLDER<em>0</em>_ using <strong>Java Streams</strong>.</p>
<p>Here’s how you can do it:</p>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.Collectors;

public class Occurrences {
    public static void main(String[] args) {
        List&lt;Integer&gt; allData = List.of(1, 2, 3, 5, 4, 3, 2, 2, 1);

        Map&lt;Integer, Long&gt; occurrences = allData.stream()
                .collect(Collectors.groupingBy(e -&gt; e, Collectors.counting()));

        System.out.println(occurrences);
    }
}
</code></pre>
<h3 id="output">✅ Output:</h3>
<pre><code class="language-">
{1=2, 2=3, 3=2, 4=1, 5=1}
</code></pre>
<h3 id="explanation">Explanation:</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ → groups elements by themselves and counts occurrences.</li>
<li>The result is a <em>_CODE</em>PLACEHOLDER<em>0</em><em> (since </em><em>CODE</em>PLACEHOLDER<em>1</em><em> returns </em><em>CODE</em>PLACEHOLDER<em>2</em>_).</li>
</ul>
<p>👉 If you want <em>_CODE</em>PLACEHOLDER<em>0</em><em> counts instead of </em><em>CODE</em>PLACEHOLDER<em>1</em>_, you can map it like this:</p>
<pre><code class="language-java">
Map&lt;Integer, Integer&gt; occurrences = allData.stream()
        .collect(Collectors.groupingBy(e -&gt; e, Collectors.collectingAndThen(Collectors.counting(), Long::intValue)));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🔢 14. Get Last 4 Even Numbers from List&lt;/strong&gt;&lt;/summary&gt;</p>
<p>To find the <strong>last 4 even numbers</strong> from this list:</p>
<pre><code class="language-text">
7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3
</code></pre>
<h3 id="input">🧾 Input</h3>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = Arrays.asList(7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3);
</code></pre>
<hr>
<h3 id="java-stream-approach">✅ Java Stream Approach</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class LastEvenNumbers {
    public static void main(String[] args) {
        List&lt;Integer&gt; numbers = Arrays.asList(7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3);

        List&lt;Integer&gt; last4Even = IntStream.range(0, numbers.size())
            .mapToObj(i -&gt; numbers.get(numbers.size() - 1 - i))  // Reverse traversal
            .filter(n -&gt; n % 2 == 0)
            .limit(4)
            .collect(Collectors.toCollection(LinkedList::new));  // Maintain order

        Collections.reverse(last4Even);  // Optional: To keep it in original order

        System.out.println(&quot;Last 4 Even Numbers: &quot; + last4Even);
    }
}
</code></pre>
<hr>
<h3 id="output">📦 Output</h3>
<pre><code class="language-">
Last 4 Even Numbers: [6, 8, 4, 2]
</code></pre>
<hr>
<h3 id="explanation">💡 Explanation</h3>
<table>
<thead><tr>
<th>Step</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>`range + get(index)`</td>
<td>Traverse in reverse order</td>
</tr>
<tr>
<td>`filter(n % 2 == 0)`</td>
<td>Select only even numbers</td>
</tr>
<tr>
<td>`limit(4)`</td>
<td>Get only the last 4 found</td>
</tr>
<tr>
<td>`reverse()`</td>
<td>Restore original input order</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🔢 15. First 3 Even and Last 3 Odd Numbers&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>First 3 even numbers</strong></li>
<li><strong>Last 3 odd numbers</strong></li>
</ul>
<pre><code class="language-">
(5, 8, 9, 7, 2, 4, 1, 3, 6)
</code></pre>
<h3 id="input">🧾 Input</h3>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = Arrays.asList(5, 8, 9, 7, 2, 4, 1, 3, 6);
</code></pre>
<hr>
<h3 id="java-stream-approach">✅ Java Stream Approach</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class EvenOddNumbers {
    public static void main(String[] args) {
        List&lt;Integer&gt; numbers = Arrays.asList(5, 8, 9, 7, 2, 4, 1, 3, 6);

        // First 3 even numbers
        List&lt;Integer&gt; first3Even = numbers.stream()
                                         .filter(n -&gt; n % 2 == 0)
                                         .limit(3)
                                         .collect(Collectors.toList());

        // Last 3 odd numbers - reverse the list, filter odd, limit 3, then reverse again to restore order
        List&lt;Integer&gt; last3Odd = IntStream.range(0, numbers.size())
                                         .mapToObj(i -&gt; numbers.get(numbers.size() - 1 - i))
                                         .filter(n -&gt; n % 2 != 0)
                                         .limit(3)
                                         .collect(Collectors.toCollection(LinkedList::new));
        Collections.reverse(last3Odd);

        System.out.println(&quot;First 3 Even Numbers: &quot; + first3Even);
        System.out.println(&quot;Last 3 Odd Numbers: &quot; + last3Odd);
    }
}
</code></pre>
<hr>
<h3 id="output">📦 Output</h3>
<pre><code class="language-">
First 3 Even Numbers: [8, 2, 4]
Last 3 Odd Numbers: [1, 3, 7]
</code></pre>
<hr>
<h3 id="explanation">💡 Explanation</h3>
<table>
<thead><tr>
<th>Task</th>
<th>Logic</th>
</tr></thead><tbody>
<tr>
<td>First 3 even</td>
<td>Filter even, take first 3 in original order</td>
</tr>
<tr>
<td>Last 3 odd</td>
<td>Reverse, filter odd, take first 3, then reverse</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🛠️ 16. Capitalize Character After Space&lt;/strong&gt;&lt;/summary&gt;</p>
<h3 id="original-problems">Original Problems</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> should be </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li>Comparing characters uses single quotes <em>_CODE</em>PLACEHOLDER<em>0</em><em> not double quotes </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ variable is not initialized.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> is invalid; </em><em>CODE</em>PLACEHOLDER<em>1</em>_ is primitive.</li>
<li>You risk <strong>IndexOutOfBoundsException</strong> when <em>_CODE</em>PLACEHOLDER<em>0</em>_ exceeds array length.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> is the correct method (not </em><em>CODE</em>PLACEHOLDER<em>1</em>_).</li>
</ul>
<hr>
<h3 id="corrected-java-code">Corrected Java Code</h3>
<pre><code class="language-java">
public class CapitalizeAfterSpace {
    public static void main(String[] args) {
        String valu = &quot;Hi this is sarath. Im attending interview&quot;;
        char[] charValu = valu.toCharArray();
        StringBuffer repValu = new StringBuffer();

        for (int i = 0; i &lt; charValu.length; i++) {
            if (charValu[i] == &#x27; &#x27;) {
                repValu.append(charValu[i]);  // append the space
                // Check boundary before accessing next character
                if (i + 1 &lt; charValu.length) {
                    repValu.append(Character.toUpperCase(charValu[i + 1]));
                    i++; // Skip the next character since it&#x27;s processed
                }
            } else {
                repValu.append(charValu[i]);
            }
        }

        System.out.println(repValu.toString());
    }
}
</code></pre>
<hr>
<h3 id="output">Output</h3>
<pre><code class="language-">
Hi This Is Sarath. Im Attending Interview
</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Line</th>
<th>Explanation</th>
</tr></thead><tbody>
<tr>
<td>`if (charValu[i] == &#x27; &#x27;)`</td>
<td>Check for space character</td>
</tr>
<tr>
<td>`repValu.append(charValu[i]);`</td>
<td>Append space itself</td>
</tr>
<tr>
<td>`if (i + 1 &lt; charValu.length)`</td>
<td>Boundary check before next char access</td>
</tr>
<tr>
<td>`Character.toUpperCase(...)`</td>
<td>Convert next char to uppercase</td>
</tr>
<tr>
<td>`i++;`</td>
<td>Skip the next char as it&#x27;s processed</td>
</tr>
</tbody></table>
<hr>
<h3 id="alternative-using-split-and-streams-for-capitalization">Alternative: Using `split()` and Streams for Capitalization</h3>
<pre><code class="language-java">
String valu = &quot;Hi this is sarath. Im attending interview&quot;;
String result = Arrays.stream(valu.split(&quot; &quot;))
                      .map(word -&gt; word.length() &gt; 0 
                                    ? Character.toUpperCase(word.charAt(0)) + word.substring(1)
                                    : word)
                      .collect(Collectors.joining(&quot; &quot;));
System.out.println(result);
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🔢 17. Find Second Largest Number in an Array (with utils, without utils, and Streams)&lt;/strong&gt;&lt;/summary&gt;</p>
<hr>
<h3 id="example-input">🧾 Example Input</h3>
<pre><code class="language-java">
int[] arr = {12, 35, 1, 10, 34, 1};
</code></pre>
<hr>
<h3 id="using-java-utils-arrays-collections">✅ Using Java Utils (`Arrays` &amp; `Collections`)</h3>
<pre><code class="language-java">
import java.util.*;

public class SecondLargestWithUtils {
    public static void main(String[] args) {
        Integer[] arr = {12, 35, 1, 10, 34, 1};  // Use Integer array for Collections

        List&lt;Integer&gt; list = Arrays.asList(arr);

        Set&lt;Integer&gt; set = new HashSet&lt;&gt;(list);

        List&lt;Integer&gt; distinctList = new ArrayList&lt;&gt;(set);
        Collections.sort(distinctList, Collections.reverseOrder());

        if (distinctList.size() &gt;= 2) {
            System.out.println(&quot;Second Largest: &quot; + distinctList.get(1));
        } else {
            System.out.println(&quot;No second largest element&quot;);
        }
    }
}
</code></pre>
<hr>
<h3 id="without-using-utils-manual-loop">✅ Without Using Utils (Manual Loop)</h3>
<pre><code class="language-java">
public class SecondLargestWithoutUtils {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num &gt; largest) {
                secondLargest = largest;
                largest = num;
            } else if (num &gt; secondLargest &amp;&amp; num &lt; largest) {
                secondLargest = num;
            }
        }

        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println(&quot;No second largest element&quot;);
        } else {
            System.out.println(&quot;Second Largest: &quot; + secondLargest);
        }
    }
}
</code></pre>
<hr>
<h3 id="using-java-streams">✅ Using Java Streams</h3>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class SecondLargestWithStreams {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        OptionalInt secondLargest = Arrays.stream(arr)
            .distinct()
            .boxed()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .mapToInt(Integer::intValue)
            .findFirst();

        if (secondLargest.isPresent()) {
            System.out.println(&quot;Second Largest: &quot; + secondLargest.getAsInt());
        } else {
            System.out.println(&quot;No second largest element&quot;);
        }
    }
}
</code></pre>
<hr>
<h3 id="explanation">📌 Explanation</h3>
<table>
<thead><tr>
<th>Approach</th>
<th>Details</th>
</tr></thead><tbody>
<tr>
<td>Using Utils</td>
<td>Convert to list, remove duplicates, sort descending, pick 2nd</td>
</tr>
<tr>
<td>Without Utils</td>
<td>Traverse array, track largest &amp; second largest manually</td>
</tr>
<tr>
<td>Using Streams</td>
<td>Stream distinct elements, sort descending, skip first, find first</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<p>Find the 3 largeest number in array</p>
<pre><code class="language-java">
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TopThreeNumbers {
public static void main(String[] args) {
int[] nums = {1, 2, 3, 5, 1, 5, 8, 6, 4, 8};

        // Convert to stream → box to Integer → sort in reverse → limit to 3 → collect
        List&lt;Integer&gt; top3 = Arrays.stream(nums)
                .boxed()                               // convert int to Integer
                .sorted((a, b) -&gt; b - a)               // sort in descending order
                .distinct()                            // optional: remove duplicates
                .limit(3)                              // take top 3
                .collect(Collectors.toList());

        System.out.println(&quot;Top 3 largest numbers: &quot; + top3);
    }
}
</code></pre>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;✅ 18. Filter Even and Odd Numbers using Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> is for transforming elements; to filter, use </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li>The condition <em>_CODE</em>PLACEHOLDER<em>0</em><em> doesn’t check for even numbers — you want </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li>The lambda must always return a value (in <em>_CODE</em>PLACEHOLDER<em>0</em><em>), but here you want to keep or discard items — so </em><em>CODE</em>PLACEHOLDER<em>1</em>_ is the right method.</li>
</ul>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class EvenOddFilter {
    public static void main(String[] args) {
        List&lt;Integer&gt; nums = IntStream.rangeClosed(1, 100)
                                      .boxed()
                                      .collect(Collectors.toList());

        // Filter even numbers
        List&lt;Integer&gt; evenNums = nums.stream()
                                     .filter(s -&gt; s % 2 == 0)
                                     .collect(Collectors.toList());

        // Filter odd numbers
        List&lt;Integer&gt; oddNums = nums.stream()
                                    .filter(s -&gt; s % 2 != 0)
                                    .collect(Collectors.toList());

        System.out.println(&quot;Even Numbers: &quot; + evenNums);
        System.out.println(&quot;Odd Numbers: &quot; + oddNums);
    }
}
</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Operation</th>
<th>Stream Method</th>
<th>Condition</th>
</tr></thead><tbody>
<tr>
<td>Filter even</td>
<td>`.filter()`</td>
<td>`s % 2 == 0`</td>
</tr>
<tr>
<td>Filter odd</td>
<td>`.filter()`</td>
<td>`s % 2 != 0`</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;🧩 Example using &lt;code&gt;Runnable&lt;/code&gt; and &lt;code&gt;wait/notify&lt;/code&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
public class OddEvenPrinter {

    private static final Object lock = new Object();
    private static int count = 1;
    private static final int MAX = 10;

    public static void main(String[] args) {

        Runnable printOdd = () -&gt; {
            while (count &lt;= MAX) {
                synchronized (lock) {
                    while (count % 2 == 0) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Odd: &quot; + count);
                        count++;
                        lock.notify();
                    }
                }
            }
        };

        Runnable printEven = () -&gt; {
            while (count &lt;= MAX) {
                synchronized (lock) {
                    while (count % 2 == 1) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Even: &quot; + count);
                        count++;
                        lock.notify();
                    }
                }
            }
        };

        Thread t1 = new Thread(printOdd);
        Thread t2 = new Thread(printEven);

        t1.start();
        t2.start();
    }
}
</code></pre>
<p>✅ <strong>Output (approx):</strong></p>
<pre><code class="language-">
Odd: 1
Even: 2
Odd: 3
Even: 4
Odd: 5
Even: 6
Odd: 7
Even: 8
Odd: 9
Even: 10
</code></pre>
<hr>
<p>🧠 Explanation</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ is shared by both threads.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ ensures <strong>synchronization</strong>.</li>
<li>When one thread is not supposed to print (e.g. even thread sees an odd number), it calls <em>_CODE</em>PLACEHOLDER<em>0</em>_ and releases the lock.</li>
<li>After printing, the thread increments <em>_CODE</em>PLACEHOLDER<em>0</em><em> and calls </em><em>CODE</em>PLACEHOLDER<em>1</em>_ to wake up the other thread.</li>
<li>This repeats until the count reaches 10.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;⚙️ Alternative using &lt;code&gt;Callable&lt;/code&gt; + &lt;code&gt;ExecutorService&lt;/code&gt;&lt;/summary&gt;</p>
<p>You can also use <em>_CODE</em>PLACEHOLDER<em>0</em>_ if you prefer an executor-based approach:</p>
<pre><code class="language-java">
import java.util.concurrent.*;

public class OddEvenCallable {

    private static final Object lock = new Object();
    private static int count = 1;
    private static final int MAX = 10;

    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Callable&lt;Void&gt; oddTask = () -&gt; {
            while (count &lt;= MAX) {
                synchronized (lock) {
                    while (count % 2 == 0) lock.wait();
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Odd: &quot; + count);
                        count++;
                        lock.notify();
                    }
                }
            }
            return null;
        };

        Callable&lt;Void&gt; evenTask = () -&gt; {
            while (count &lt;= MAX) {
                synchronized (lock) {
                    while (count % 2 == 1) lock.wait();
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Even: &quot; + count);
                        count++;
                        lock.notify();
                    }
                }
            }
            return null;
        };

        executor.submit(oddTask);
        executor.submit(evenTask);

        executor.shutdown();
    }
}
</code></pre>
<p>This behaves the same, but uses an <em>_CODE</em>PLACEHOLDER<em>0</em>_ to manage threads.</p>
<p>&lt;/details&gt;</p>
<hr>
<p><strong>cleaner and safer version</strong> using <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em><em> instead of </em><em>CODE</em>PLACEHOLDER<em>2</em>_.</p>
<hr>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;🧩 Using &lt;code&gt;Lock&lt;/code&gt; and &lt;code&gt;Condition&lt;/code&gt; (Recommended Way)&lt;/summary&gt;</p>
<pre><code class="language-java">
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class OddEvenLockExample {

    private static int count = 1;
    private static final int MAX = 10;

    private static final Lock lock = new ReentrantLock();
    private static final Condition oddTurn = lock.newCondition();
    private static final Condition evenTurn = lock.newCondition();

    public static void main(String[] args) {
        Runnable oddPrinter = () -&gt; {
            while (count &lt;= MAX) {
                lock.lock();
                try {
                    while (count % 2 == 0) {
                        oddTurn.await(); // wait until it&#x27;s odd&#x27;s turn
                    }
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Odd: &quot; + count);
                        count++;
                        evenTurn.signal(); // signal even thread
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                }
            }
        };

        Runnable evenPrinter = () -&gt; {
            while (count &lt;= MAX) {
                lock.lock();
                try {
                    while (count % 2 == 1) {
                        evenTurn.await(); // wait until it&#x27;s even&#x27;s turn
                    }
                    if (count &lt;= MAX) {
                        System.out.println(&quot;Even: &quot; + count);
                        count++;
                        oddTurn.signal(); // signal odd thread
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                }
            }
        };

        Thread t1 = new Thread(oddPrinter, &quot;OddThread&quot;);
        Thread t2 = new Thread(evenPrinter, &quot;EvenThread&quot;);

        t1.start();
        t2.start();
    }
}
</code></pre>
<hr>
<p>✅ <strong>Output:</strong></p>
<pre><code class="language-">

Odd: 1
Even: 2
Odd: 3
Even: 4
Odd: 5
Even: 6
Odd: 7
Even: 8
Odd: 9
Even: 10

</code></pre>
<hr>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;🧠 Why this is better than &lt;code&gt;wait/notify&lt;/code&gt;&lt;/summary&gt;</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> objects (</em><em>CODE</em>PLACEHOLDER<em>1</em><em> and </em><em>CODE</em>PLACEHOLDER<em>2</em><em>) are <strong>more readable</strong> than arbitrary </em><em>CODE</em>PLACEHOLDER<em>3</em><em>/</em><em>CODE</em>PLACEHOLDER<em>4</em>_ calls.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ provides <strong>fine-grained control</strong> over which condition to signal.</li>
<li>No need for <em>_CODE</em>PLACEHOLDER<em>0</em><em> blocks — the </em><em>CODE</em>PLACEHOLDER<em>1</em>_ ensures mutual exclusion.</li>
<li>Avoids accidental wake-ups (spurious wakeups) better than plain <em>_CODE</em>PLACEHOLDER<em>0</em>_.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🔍 19. String vs StringBuilder Comparison Explained&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
String s1 = &quot;Java&quot;;
String s2 = &quot;Java&quot;;
StringBuilder sb1 = new StringBuilder();
sb1.append(&quot;Ja&quot;).append(&quot;va&quot;);

System.out.println(s1 == s2);                // true or false?
System.out.println(s1.equals(s2));           // true or false?
System.out.println(sb1.toString() == s1);    // true or false?
System.out.println(sb1.toString().equals(s1));// true or false?
</code></pre>
<hr>
<h3 id="what-prints-and-why">What prints and why?</h3>
<table>
<thead><tr>
<th>Line</th>
<th>Output</th>
<th>Explanation</th>
</tr></thead><tbody>
<tr>
<td>`System.out.println(s1 == s2);`</td>
<td>`true`</td>
<td>Both refer to the same interned string literal in the String Pool, so references are equal.</td>
</tr>
<tr>
<td>`System.out.println(s1.equals(s2));`</td>
<td>`true`</td>
<td>Contents are the same, so `.equals()` returns true.</td>
</tr>
<tr>
<td>`System.out.println(sb1.toString() == s1);`</td>
<td>`false`</td>
<td>`sb1.toString()` creates a new String object, so reference comparison is false.</td>
</tr>
<tr>
<td>`System.out.println(sb1.toString().equals(s1));`</td>
<td>`true`</td>
<td>Contents are the same, so `.equals()` returns true.</td>
</tr>
</tbody></table>
<hr>
<h3 id="important-points">Important points:</h3>
<ul>
<li><strong><em>_CODE</em>PLACEHOLDER<em>0</em>_ on Strings</strong> compares <em>reference</em> equality (are both variables pointing to the same object?).</li>
<li><strong>String literals like <em>_CODE</em>PLACEHOLDER<em>0</em>_ are interned</strong>, so identical literals share the same reference.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> creates a <em>new</em> String object each time, so reference is different from </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ compares the <em>content</em> of strings.</li>
</ul>
<hr>
<h3 id="how-to-make-sb1tostring-s1-true">How to make `sb1.toString() == s1` true?</h3>
<p>You can intern the string explicitly:</p>
<pre><code class="language-java">
System.out.println(sb1.toString().intern() == s1);  // true
</code></pre>
<p>Because <em>_CODE</em>PLACEHOLDER<em>0</em>_ returns the canonical representation from the String Pool.</p>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;✨ 20. Find Palindromes using Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>Palindrome: a string that reads the same forwards and backwards.  </li>
<li>To check, compare the string with its reverse.  </li>
<li>Using streams, you can filter only palindrome words.</li>
</ul>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class PalindromeFinder {
    public static void main(String[] args) {
        String[] data = {&quot;level&quot;, &quot;hoodi&quot;, &quot;madam&quot;, &quot;java&quot;, &quot;racecar&quot;};

        // Find palindromes
        List&lt;String&gt; palindromes = Arrays.stream(data)
                                         .filter(PalindromeFinder::isPalindrome)
                                         .collect(Collectors.toList());

        System.out.println(&quot;Palindromes: &quot; + palindromes);
    }

    // Helper method to check palindrome
    private static boolean isPalindrome(String str) {
        return str.equalsIgnoreCase(
            new StringBuilder(str).reverse().toString()
        );
    }
}
</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Operation</th>
<th>Stream Method</th>
<th>Logic</th>
</tr></thead><tbody>
<tr>
<td>Convert array</td>
<td>`Arrays.stream()`</td>
<td>Turn the array into a stream.</td>
</tr>
<tr>
<td>Filter palindromes</td>
<td>`.filter()`</td>
<td>Keep only words where `word.equalsIgnoreCase(reverse(word))`.</td>
</tr>
<tr>
<td>Collect results</td>
<td>`.collect()`</td>
<td>Collect into a `List&lt;String&gt;`.</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-output">Example Output</h3>
<pre><code class="language-">
Palindromes: [level, madam, racecar]
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Check if a given string is palindrome using recursion.&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">

/*
* Java program to check if a given inputted string is palindrome or not using recursion.
*/

import java.util.*;
public class InterviewBit { 
   public static void main(String args[]) { 
       Scanner s = new Scanner(System.in);
       String word = s.nextLine();
       System.out.println(&quot;Is &quot;+word+&quot; palindrome? - &quot;+isWordPalindrome(word));
   } 
   
   
   public static boolean isWordPalindrome(String word){ 
       String reverseWord = getReverseWord(word); 
       //if word equals its reverse, then it is a palindrome
       if(word.equals(reverseWord)){ 
           return true; 
       } 
       return false; 
   } 
   
   public static String getReverseWord(String word){ 
       if(word == null || word.isEmpty()){ 
           return word; 
       } 
       
       return word.charAt(word.length()- 1) + getReverseWord(word.substring(0, word.length() - 1)); 
   }
}

</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;⚡ 21. Sort Map by Values (Streams, TreeMap, Comparator)&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>By default, <em>_CODE</em>PLACEHOLDER<em>0</em>_ doesn’t maintain order.  </li>
<li>We can sort by <strong>keys</strong> easily using <em>_CODE</em>PLACEHOLDER<em>0</em>_, but sorting by <strong>values</strong> requires:  </li>
<li>Streams (<em>_CODE</em>PLACEHOLDER<em>0</em>_)  </li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ with custom comparator  </li>
<li>Collecting into <em>_CODE</em>PLACEHOLDER<em>0</em>_ to preserve sorted order  </li>
</ul>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class MapSortByValue {
    public static void main(String[] args) {
        Map&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
        scores.put(&quot;David&quot;, 95);
        scores.put(&quot;Jane&quot;, 80);
        scores.put(&quot;Mary&quot;, 97);
        scores.put(&quot;Lisa&quot;, 78);
        scores.put(&quot;Dino&quot;, 65);

        // 1️⃣ Using Streams - Ascending by value
        Map&lt;String, Integer&gt; asc = scores.entrySet().stream()
                .sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -&gt; e1,
                        LinkedHashMap::new
                ));

        // 2️⃣ Using Streams - Descending by value
        Map&lt;String, Integer&gt; desc = scores.entrySet().stream()
                .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -&gt; e1,
                        LinkedHashMap::new
                ));

        // 3️⃣ Using TreeMap with Comparator (sort by key only)
        Map&lt;String, Integer&gt; treeByKey = new TreeMap&lt;&gt;(scores);

        System.out.println(&quot;Original: &quot; + scores);
        System.out.println(&quot;Sorted Asc by Value: &quot; + asc);
        System.out.println(&quot;Sorted Desc by Value: &quot; + desc);
        System.out.println(&quot;TreeMap Sorted by Key: &quot; + treeByKey);
    }
}

</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Method</th>
<th>Approach</th>
</tr></thead><tbody>
<tr>
<td>Streams + `sorted`</td>
<td>Sort by values (`comparingByValue`), then collect into `LinkedHashMap`.</td>
</tr>
<tr>
<td>Streams + reverseOrder</td>
<td>Same as above, but descending order.</td>
</tr>
<tr>
<td>TreeMap with Comparator</td>
<td>Sorts by **keys**, not values (but useful to show difference).</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-output">Example Output</h3>
<pre><code class="language-">
Original: {David=95, Jane=80, Mary=97, Lisa=78, Dino=65}
Sorted Asc by Value: {Dino=65, Lisa=78, Jane=80, David=95, Mary=97}
Sorted Desc by Value: {Mary=97, David=95, Jane=80, Lisa=78, Dino=65}
TreeMap Sorted by Key: {David=95, Dino=65, Jane=80, Lisa=78, Mary=97}
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🌀 22. Swap Values without Using Another Variable&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>Normally, swapping uses a temporary variable:  </li>
</ul>
<pre><code class="language-java">
  int temp = val1; 
  val1 = val2; 
  val2 = temp;
</code></pre>
<ul>
<li>But we can do it without an extra variable using:</li>
</ul>
<ul>
<li><strong>Arithmetic (Addition/Subtraction or Multiplication/Division)</strong></li>
<li><strong>Bitwise XOR</strong></li>
</ul>
<pre><code class="language-java">
public class SwapValues {
    public static void main(String[] args) {
        int val1 = 9;
        int val2 = 10;

        System.out.println(&quot;Before Swap: val1 = &quot; + val1 + &quot;, val2 = &quot; + val2);

        // 1️⃣ Using Addition &amp; Subtraction
        val1 = val1 + val2;  // 19
        val2 = val1 - val2;  // 9
        val1 = val1 - val2;  // 10
        System.out.println(&quot;After Swap (Add/Sub): val1 = &quot; + val1 + &quot;, val2 = &quot; + val2);

        // Reset values
        val1 = 9; val2 = 10;

        // 2️⃣ Using Multiplication &amp; Division (⚠️ works only if no zero &amp; no overflow)
        val1 = val1 * val2;  // 90
        val2 = val1 / val2;  // 9
        val1 = val1 / val2;  // 10
        System.out.println(&quot;After Swap (Mul/Div): val1 = &quot; + val1 + &quot;, val2 = &quot; + val2);

        // Reset values
        val1 = 9; val2 = 10;

        // 3️⃣ Using XOR (bitwise)
        val1 = val1 ^ val2;  // XOR result
        val2 = val1 ^ val2;  // gets original val1
        val1 = val1 ^ val2;  // gets original val2
        System.out.println(&quot;After Swap (XOR): val1 = &quot; + val1 + &quot;, val2 = &quot; + val2);
    }
}
</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Method</th>
<th>Logic</th>
</tr></thead><tbody>
<tr>
<td>Addition &amp; Subtraction</td>
<td>Add both → subtract back to extract original values.</td>
</tr>
<tr>
<td>Multiplication &amp; Division</td>
<td>Multiply → divide back to extract original values. (⚠️ risky: zero/overflow).</td>
</tr>
<tr>
<td>XOR Bitwise</td>
<td>XOR twice cancels out, restoring swapped values.</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-output">Example Output</h3>
<pre><code class="language-">
Before Swap: val1 = 9, val2 = 10
After Swap (Add/Sub): val1 = 10, val2 = 9
After Swap (Mul/Div): val1 = 10, val2 = 9
After Swap (XOR): val1 = 10, val2 = 9
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🎯 23. Two Sum using Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>Stream approach:  </li>
<li>Use <strong>IntStream.range</strong> to iterate over indices.  </li>
<li>For each index <em>_CODE</em>PLACEHOLDER<em>0</em><em>, find a matching index </em><em>CODE</em>PLACEHOLDER<em>1</em><em> where </em><em>CODE</em>PLACEHOLDER<em>2</em>_.  </li>
<li>Stop at the first valid pair.  </li>
</ul>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class TwoSumStream {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15, 7};
        int target = 9;

        int[] result = twoSum(nums, target);
        System.out.println(&quot;Indices: [&quot; + result[0] + &quot;, &quot; + result[1] + &quot;]&quot;);
    }

    public static int[] twoSum(int[] nums, int target) {
        return IntStream.range(0, nums.length)          // stream of indices i
                .boxed()
                .flatMap(i -&gt; IntStream.range(i + 1, nums.length)  // for each i, pair with j &gt; i
                        .filter(j -&gt; nums[i] + nums[j] == target)
                        .mapToObj(j -&gt; new int[]{i, j}))
                .findFirst()   // return first match
                .orElseThrow(() -&gt; new IllegalArgumentException(&quot;No solution found&quot;));
    }
}
</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Operation</th>
<th>Stream API Used</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td>Generate indices</td>
<td>`IntStream.range(0, n)`</td>
<td>Iterate over all possible `i`.</td>
</tr>
<tr>
<td>Pair with next indices</td>
<td>`flatMap(IntStream.range)`</td>
<td>Generate all pairs `(i, j)` with `j &gt; i`.</td>
</tr>
<tr>
<td>Filter matching sums</td>
<td>`.filter(nums[i] + nums[j] == target)`</td>
<td>Keep only pairs that match the target.</td>
</tr>
<tr>
<td>Return first match</td>
<td>`.findFirst()`</td>
<td>Get first valid pair (since problem guarantees one).</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-output">Example Output</h3>
<pre><code class="language-">
Indices: [0, 1]
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🗂️ 24. Group Employees by Department &amp; Filter by Year using Streams&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Group by Department</strong> → use <em>_CODE</em>PLACEHOLDER<em>0</em>_.  </li>
<li><strong>Filter by Joining Year</strong> → use <em>_CODE</em>PLACEHOLDER<em>0</em>_.  </li>
</ul>
<pre><code class="language-java">
import java.time.LocalDate;
import java.util.*;
import java.util.stream.*;

class Employee {
    private int id;
    private String name;
    private int age;
    private String department;
    private double salary;
    private LocalDate joiningDate;

    public Employee(int id, String name, int age, String department, double salary, LocalDate joiningDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
    }

    public String getDepartment() {
        return department;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public String getName() {
        return name;
    }

    public String toString() {
        return name + &quot; (&quot; + department + &quot;, &quot; + joiningDate + &quot;)&quot;;
    }
}

public class EmployeeGroupFilter {
    public static void main(String[] args) {
        List&lt;Employee&gt; employees = Arrays.asList(
            new Employee(1, &quot;Alice&quot;, 28, &quot;HR&quot;, 55000, LocalDate.of(2020, 1, 10)),
            new Employee(2, &quot;Bob&quot;, 35, &quot;IT&quot;, 75000, LocalDate.of(2017, 3, 15)),
            new Employee(3, &quot;Charlie&quot;, 30, &quot;IT&quot;, 80000, LocalDate.of(2021, 6, 20)),
            new Employee(4, &quot;David&quot;, 40, &quot;Finance&quot;, 90000, LocalDate.of(2016, 11, 30)),
            new Employee(5, &quot;Eva&quot;, 22, &quot;HR&quot;, 45000, LocalDate.of(2022, 7, 5)),
            new Employee(6, &quot;Frank&quot;, 26, &quot;Finance&quot;, 65000, LocalDate.of(2019, 5, 18))
        );

        // 1️⃣ Group employees by department
        Map&lt;String, List&lt;Employee&gt;&gt; groupedByDept = employees.stream()
            .collect(Collectors.groupingBy(Employee::getDepartment));

        // 2️⃣ Filter employees who joined after 2018
        List&lt;Employee&gt; joinedAfter2018 = employees.stream()
            .filter(e -&gt; e.getJoiningDate().getYear() &gt; 2018)
            .collect(Collectors.toList());

        System.out.println(&quot;Grouped by Department: &quot; + groupedByDept);
        System.out.println(&quot;Joined after 2018: &quot; + joinedAfter2018);

        // 1️⃣ Sort by joining date ascending
        List&lt;Employee&gt; asc = employees.stream()
            .sorted(Comparator.comparing(Employee::getJoiningDate))
            .collect(Collectors.toList());

        // 2️⃣ Sort by joining date descending
        List&lt;Employee&gt; desc = employees.stream()
            .sorted(Comparator.comparing(Employee::getJoiningDate).reversed())
            .collect(Collectors.toList());

        System.out.println(&quot;Ascending: &quot; + asc);
        System.out.println(&quot;Descending: &quot; + desc);

        // Find the second highest salary
        Optional&lt;Employee&gt; secondHighestPaidEmployee = employees.stream()
                // Sort employees by salary in descending order
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                // Remove employees with duplicate salaries
                .distinct()
                // Skip the first employee (the one with the highest salary)
                .skip(1)
                // Find the next employee
                .findFirst().;
  
        // Print the result if an employee is found
        secondHighestPaidEmployee.ifPresentOrElse(
                employee -&gt; System.out.println(&quot;Second highest paid employee: &quot; + employee),
                () -&gt; System.out.println(&quot;Could not find the second highest paid employee.&quot;)
        );
    }
}
</code></pre>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List&lt;Integer&gt; numList = Arrays.asList(20000, 30000, 50000, 90000, 50000, 40000, 70000);

        Integer secondLargest = numList.stream()
                .distinct()                                  // remove duplicates
                .sorted(Comparator.reverseOrder())            // sort in descending order
                .skip(1)                                      // skip the largest
                .findFirst()                                  // get the next one
                .orElse(null);                                // handle empty list

        System.out.println(&quot;Second largest number: &quot; + secondLargest);
    }
}

</code></pre>
<hr>
<h3 id="explanation">Explanation</h3>
<table>
<thead><tr>
<th>Operation</th>
<th>Stream API</th>
</tr></thead><tbody>
<tr>
<td>Group by department</td>
<td>`Collectors.groupingBy(Employee::getDepartment)`</td>
</tr>
<tr>
<td>Filter by year</td>
<td>`.filter(e -&gt; e.getJoiningDate().getYear() &gt; 2018)`</td>
</tr>
<tr>
<td>Collect results</td>
<td>`.collect(Collectors.toList())`</td>
</tr>
<tr>
<td>Sort by date asc</td>
<td>`.sorted(Comparator.comparing(Employee::getJoiningDate))`</td>
</tr>
<tr>
<td>Sort by date desc</td>
<td>`.sorted(Comparator.comparing(Employee::getJoiningDate).reversed())`</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-output">Example Output</h3>
<pre><code class="language-">
Grouped by Department: 
{HR=[Alice (HR, 2020-01-10), Eva (HR, 2022-07-05)], 
 IT=[Bob (IT, 2017-03-15), Charlie (IT, 2021-06-20)], 
 Finance=[David (Finance, 2016-11-30), Frank (Finance, 2019-05-18)]}

Joined after 2018: 
[Alice (HR, 2020-01-10), Charlie (IT, 2021-06-20), Eva (HR, 2022-07-05), Frank (Finance, 2019-05-18)]
Ascending: [David (2016-11-30), Bob (2017-03-15), Frank (2019-05-18), Alice (2020-01-10), Charlie (2021-06-20), Eva (2022-07-05)]
Descending: [Eva (2022-07-05), Charlie (2021-06-20), Alice (2020-01-10), Frank (2019-05-18), Bob (2017-03-15), David (2016-11-30)]
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Sort by value in Map&lt;/strong&gt;&lt;/summary&gt;</p>
<p>In Java, a <em>_CODE</em>PLACEHOLDER<em>0</em><em> doesn’t maintain any order. If you want to sort it <strong>by values</strong>, you can use streams (Java 8+) or a </em><em>CODE</em>PLACEHOLDER<em>1</em>_ with a comparator.</p>
<p>Here’s a simple <strong>Java 8+ solution</strong> using streams:</p>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class SortMapByValue {
    public static void main(String[] args) {
        Map&lt;String, Integer&gt; unsortMap = new HashMap&lt;&gt;();

        unsortMap.put(&quot;z&quot;, 10);
        unsortMap.put(&quot;b&quot;, 5);
        unsortMap.put(&quot;a&quot;, 6);
        unsortMap.put(&quot;c&quot;, 20);
        unsortMap.put(&quot;d&quot;, 1);
        unsortMap.put(&quot;e&quot;, 7);
        unsortMap.put(&quot;y&quot;, 8);
        unsortMap.put(&quot;n&quot;, 99);
        unsortMap.put(&quot;g&quot;, 50);
        unsortMap.put(&quot;m&quot;, 2);
        unsortMap.put(&quot;f&quot;, 9);

        System.out.println(&quot;Original Map...&quot;);
        System.out.println(unsortMap);

        // Sort by value
        Map&lt;String, Integer&gt; sortedMap = unsortMap.entrySet()
            .stream()
            .sorted(Map.Entry.comparingByValue()) // ascending
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (oldValue, newValue) -&gt; oldValue,
                LinkedHashMap::new  // preserve order
            ));

        System.out.println(&quot;Sorted Map by Value...&quot;);
        System.out.println(sortedMap);
    }
}

</code></pre>
<h3 id="output">Output:</h3>
<pre><code class="language-">
Original Map...
{a=6, b=5, c=20, d=1, e=7, f=9, g=50, m=2, n=99, y=8, z=10}

Sorted Map by Value...
{d=1, m=2, b=5, a=6, e=7, y=8, f=9, z=10, c=20, g=50, n=99}
</code></pre>
<hr>
<p>👉 If you want it in <strong>descending order</strong>, just replace:</p>
<pre><code class="language-java">
.sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt; Reorder numbers so that negative/positive pairs appear together &lt;/strong&gt;&lt;/summary&gt;</p>
<p>Example:</p>
<p>Input:</p>
<pre><code class="language-java">
{-2, 2, 1, 3, -1, -3}
</code></pre>
<p>Output:</p>
<pre><code class="language-java">
{-1, 1, -2, 2, -3, 3}
</code></pre>
<p>Here’s a clean <strong>Java Streams</strong> solution:</p>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class PairOrdering {
    public static void main(String[] args) {
        List&lt;Integer&gt; input = Arrays.asList(-2, 2, 1, 3, -1, -3);

        // Group by absolute value
        Map&lt;Integer, List&lt;Integer&gt;&gt; grouped = input.stream()
                .collect(Collectors.groupingBy(Math::abs));

        // Sort by order of first occurrence (based on index in input)
        List&lt;Integer&gt; output = grouped.entrySet().stream()
                .sorted(Comparator.comparingInt(e -&gt; input.indexOf(e.getValue().get(0))))
                .flatMap(e -&gt; e.getValue().stream()
                        .sorted(Comparator.comparingInt(Math::abs))) // order within pair
                .collect(Collectors.toList());

        System.out.println(output);
    }
}
</code></pre>
<h3 id="output">✅ Output:</h3>
<pre><code class="language-">
[-1, 1, -2, 2, -3, 3]
</code></pre>
<hr>
<p>🔎 Explanation:</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ → groups numbers by absolute value.</li>
</ul>
<p>   ```</p>
<p>   {2=[-2, 2], 1=[1, -1], 3=[3, -3]}</p>
<p>   ```</p>
<ul>
<li>Sort groups by the <strong>first occurrence in the input</strong>.</li>
<li>Flatten each group with <em>_CODE</em>PLACEHOLDER<em>0</em>_, sorting inside the group so negatives come before positives.</li>
</ul>
<hr>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Count how many times each number occurs&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>pair</strong> → how many complete pairs (count ÷ 2)</li>
<li><strong>odd</strong> → leftover count (count % 2)</li>
</ul>
<p>Here’s how you can do it with <strong>Java Streams</strong>:</p>
<pre><code class="language-java">
import java.util.*;
import java.util.stream.*;

public class PairOddCounter {
    public static void main(String[] args) {
        List&lt;Integer&gt; input = Arrays.asList(1, 2, 2, 3, 1, 2, 3, 1, 1, 1);

        Map&lt;Integer, String&gt; result = input.stream()
                .collect(Collectors.groupingBy(
                        n -&gt; n,
                        LinkedHashMap::new, // preserve insertion order
                        Collectors.counting()
                ))
                .entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -&gt; String.format(&quot;[pair = %d, odd = %d]&quot;, e.getValue() / 2, e.getValue() % 2),
                        (a, b) -&gt; a,
                        LinkedHashMap::new
                ));

        result.forEach((k, v) -&gt; System.out.println(k + &quot;, &quot; + v));
    }
}
</code></pre>
<hr>
<h3 id="output">✅ Output:</h3>
<pre><code class="language-">
1, [pair = 2, odd = 1]
2, [pair = 1, odd = 1]
3, [pair = 1, odd = 0]
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;Palindrome Check Using Java Streams&lt;/summary&gt;</p>
<hr>
<h3 id="palindrome-check-using-java-streams">✅ **Palindrome Check Using Java Streams**</h3>
<pre><code class="language-java">
import java.util.stream.IntStream;

public class PalindromeCheck {
    public static boolean isPalindrome(String str) {
        String cleaned = str.replaceAll(&quot;[^a-zA-Z0-9]&quot;, &quot;&quot;).toLowerCase();
        return IntStream.range(0, cleaned.length() / 2)
                .allMatch(i -&gt; cleaned.charAt(i) == cleaned.charAt(cleaned.length() - i - 1));
    }

    public static void main(String[] args) {
        String input1 = &quot;Madam&quot;;
        String input2 = &quot;Hello&quot;;

        System.out.println(input1 + &quot; → &quot; + isPalindrome(input1)); // true
        System.out.println(input2 + &quot; → &quot; + isPalindrome(input2)); // false
    }
}

import java.util.stream.IntStream;

public class ParallelPalindrome {
  public static boolean isPalindrome(String str) {
    String cleaned = str.replaceAll(&quot;[^a-zA-Z0-9]&quot;, &quot;&quot;).toLowerCase();

    return IntStream.range(0, cleaned.length() / 2)
            .parallel() // 👈 enable parallel processing
            .allMatch(i -&gt; cleaned.charAt(i) == cleaned.charAt(cleaned.length() - i - 1));
  }

  public static void main(String[] args) {
    String input1 = &quot;Madam&quot;;
    String input2 = &quot;Hello&quot;;

    System.out.println(input1 + &quot; → &quot; + isPalindrome(input1)); // true
    System.out.println(input2 + &quot; → &quot; + isPalindrome(input2)); // false
  }
}

</code></pre>
<hr>
<h3 id="explanation">🧠 **Explanation**</h3>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_: removes all non-alphanumeric characters.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_: makes the comparison case-insensitive.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_: iterates from start to the middle.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_: ensures all symmetric character pairs match.</li>
</ul>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ → generates index positions to compare.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ → splits the range across multiple threads.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> → ensures all comparisons return </em><em>CODE</em>PLACEHOLDER<em>1</em>_ in all threads.</li>
</ul>
<p>If <strong>any</strong> pair doesn’t match, it short-circuits and returns <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<hr>
<h4 id="example-output">Example Output</h4>
<pre><code class="language-">
Madam → true
Hello → false
</code></pre>
<hr>
<h3 id="is-parallel-really-faster">⚙️ **Is parallel really faster?**</h3>
<p>In this case, <strong>no</strong> — not for small or medium-sized strings.</p>
<p>Parallel streams add thread-splitting and coordination overhead.</p>
<table>
<thead><tr>
<th>String Size</th>
<th>Sequential Time</th>
<th>Parallel Time</th>
</tr></thead><tbody>
<tr>
<td>Short (like &quot;madam&quot;)</td>
<td>✅ Faster</td>
<td>❌ Slower (overhead)</td>
</tr>
<tr>
<td>Large (like 1 million chars)</td>
<td>⚠️ Slower</td>
<td>✅ Can be faster</td>
</tr>
</tbody></table>
<p>So:</p>
<ul>
<li>✅ Works perfectly fine.</li>
<li>⚡ Only beneficial for <strong>very large strings</strong>.</li>
</ul>
<hr>
<p>&lt;/details&gt;</p>
<h2 id="find-both-the-count-of-h-and-its-positions-in-the-given-string">Find both the count of `&#x27;h&#x27;` and its positions in the given string.</h2>
<h3 id="solution">Solution:</h3>
<pre><code class="language-java">
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class CharStreamExample {
    public static void main(String[] args) {
        String name = &quot;sarathkumar&quot;;
        char target = &#x27;h&#x27;;

        // Count occurrences of &#x27;h&#x27;
        long count = name.chars()
                         .filter(ch -&gt; ch == target)
                         .count();

        // Find positions of &#x27;h&#x27;
        List&lt;Integer&gt; positions = IntStream.range(0, name.length())
                                           .filter(i -&gt; name.charAt(i) == target)
                                           .boxed()
                                           .collect(Collectors.toList());

        System.out.println(&quot;Count of &#x27;&quot; + target + &quot;&#x27;: &quot; + count);
        System.out.println(&quot;Positions of &#x27;&quot; + target + &quot;&#x27;: &quot; + positions);
    }
}
</code></pre>
<h3 id="explanation">Explanation:</h3>
<ul>
<li><strong>Counting &#x27;h&#x27; occurrences</strong>:</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ converts the string into an IntStream of ASCII values.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> filters out only the occurrences of </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ gives the total count.</li>
</ul>
<ul>
<li><strong>Finding positions of &#x27;h&#x27;</strong>:</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> generates indices from </em><em>CODE</em>PLACEHOLDER<em>1</em><em> to </em><em>CODE</em>PLACEHOLDER<em>2</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> keeps only the indices where </em><em>CODE</em>PLACEHOLDER<em>1</em>_ appears.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ converts the stream into a list.</li>
</ul>
<h3 id="output">Output:</h3>
<pre><code class="language-">
Count of &#x27;h&#x27;: 1
Positions of &#x27;h&#x27;: [5]
</code></pre>
<p>&lt;/details&gt;</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = javaquestionsContentData;
}

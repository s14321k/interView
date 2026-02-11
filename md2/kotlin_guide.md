# Kotlin vs Java: Complete Guide

## Table of Contents
1. [Key Differences Between Kotlin and Java](#key-differences)
2. [Kotlin Basics](#kotlin-basics)
3. [Essential Kotlin Features](#essential-features)
4. [Advanced Concepts](#advanced-concepts)

---

## Key Differences Between Kotlin and Java

### 1. **Null Safety**
**Java:**
```java
String name = null; // NPE waiting to happen
int length = name.length(); // NullPointerException
```

**Kotlin:**
```kotlin
var name: String? = null // Explicit nullable type
val length = name?.length // Safe call, returns null
val length2 = name?.length ?: 0 // Elvis operator, default value
```

### 2. **Conciseness**
**Java:**
```java
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
```

**Kotlin:**
```kotlin
data class Person(var name: String, var age: Int)
// Automatically generates getters, setters, equals(), hashCode(), toString(), copy()
```

### 3. **Type Inference**
**Java:**
```java
Map<String, List<Integer>> map = new HashMap<String, List<Integer>>();
```

**Kotlin:**
```kotlin
val map = mutableMapOf<String, List<Int>>() // Type inferred
```

### 4. **String Templates**
**Java:**
```java
String message = "Hello, " + name + "! You are " + age + " years old.";
```

**Kotlin:**
```kotlin
val message = "Hello, $name! You are $age years old."
val complex = "Next year: ${age + 1}"
```

### 5. **Function Declaration**
**Java:**
```java
public int sum(int a, int b) {
    return a + b;
}
```

**Kotlin:**
```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}
// Or single expression
fun sum(a: Int, b: Int) = a + b
```

### 6. **Smart Casts**
**Java:**
```java
if (obj instanceof String) {
    String str = (String) obj; // Manual cast needed
    System.out.println(str.length());
}
```

**Kotlin:**
```kotlin
if (obj is String) {
    println(obj.length) // Automatically cast
}
```

### 7. **Extension Functions**
**Java:** Not available (need utility classes)

**Kotlin:**
```kotlin
fun String.addExclamation() = this + "!"
val excited = "Hello".addExclamation() // "Hello!"
```

---

## Kotlin Basics

### Variables and Constants

```kotlin
// Immutable (read-only) - prefer this
val name = "John"  // Type inferred
val age: Int = 25  // Explicit type

// Mutable
var count = 0
count += 1

// Compile-time constants
const val PI = 3.14159
```

### Basic Types

```kotlin
// Numbers
val byte: Byte = 127
val short: Short = 32767
val int: Int = 2147483647
val long: Long = 9223372036854775807L
val float: Float = 3.14F
val double: Double = 3.14159

// Characters and Strings
val char: Char = 'A'
val string: String = "Hello"
val multiline = """
    Line 1
    Line 2
    Line 3
""".trimIndent()

// Booleans
val isTrue: Boolean = true
```

### Nullable Types

```kotlin
var nullable: String? = null
var nonNull: String = "Cannot be null"

// Safe call
val length = nullable?.length

// Elvis operator (default value)
val length2 = nullable?.length ?: 0

// Non-null assertion (use carefully!)
val length3 = nullable!!.length // Throws NPE if null

// Safe cast
val str: String? = obj as? String
```

### Control Flow

#### If Expression
```kotlin
val max = if (a > b) a else b

val result = if (condition) {
    println("True branch")
    "Success"
} else {
    println("False branch")
    "Failure"
}
```

#### When Expression (Switch replacement)
```kotlin
when (x) {
    1 -> println("One")
    2, 3 -> println("Two or Three")
    in 4..10 -> println("Between 4 and 10")
    is String -> println("It's a string")
    else -> println("Something else")
}

val result = when {
    x > 0 -> "Positive"
    x < 0 -> "Negative"
    else -> "Zero"
}
```

### Loops

```kotlin
// For loop
for (i in 1..5) {
    println(i) // 1, 2, 3, 4, 5
}

for (i in 1 until 5) {
    println(i) // 1, 2, 3, 4
}

for (i in 5 downTo 1) {
    println(i) // 5, 4, 3, 2, 1
}

for (i in 0..10 step 2) {
    println(i) // 0, 2, 4, 6, 8, 10
}

// Iterate collections
val list = listOf("a", "b", "c")
for (item in list) {
    println(item)
}

for ((index, value) in list.withIndex()) {
    println("$index: $value")
}

// While loop
while (condition) {
    // code
}

// Do-while loop
do {
    // code
} while (condition)
```

### Functions

```kotlin
// Basic function
fun greet(name: String): String {
    return "Hello, $name"
}

// Single expression
fun add(a: Int, b: Int) = a + b

// Default parameters
fun greet(name: String = "Guest", greeting: String = "Hello") {
    println("$greeting, $name!")
}

// Named arguments
greet(greeting = "Hi", name = "Alice")

// Variable arguments
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}
sum(1, 2, 3, 4, 5)

// Extension function
fun String.reverse(): String {
    return this.reversed()
}
"hello".reverse() // "olleh"

// Infix function
infix fun Int.times(str: String) = str.repeat(this)
val result = 3 times "Ha" // "HaHaHa"
```

---

## Essential Kotlin Features

### 1. Data Classes

```kotlin
data class User(
    val id: Int,
    val name: String,
    val email: String
)

val user1 = User(1, "Alice", "alice@example.com")
val user2 = user1.copy(name = "Bob") // Copy with modification

// Destructuring
val (id, name, email) = user1
println("$id, $name, $email")
```

### 2. Collections

```kotlin
// Immutable (read-only)
val list = listOf(1, 2, 3)
val set = setOf("a", "b", "c")
val map = mapOf("key1" to "value1", "key2" to "value2")

// Mutable
val mutableList = mutableListOf(1, 2, 3)
mutableList.add(4)

val mutableSet = mutableSetOf("a", "b")
mutableSet.add("c")

val mutableMap = mutableMapOf("a" to 1)
mutableMap["b"] = 2

// Collection operations
val numbers = listOf(1, 2, 3, 4, 5)
numbers.filter { it > 2 }        // [3, 4, 5]
numbers.map { it * 2 }           // [2, 4, 6, 8, 10]
numbers.any { it > 3 }           // true
numbers.all { it > 0 }           // true
numbers.find { it == 3 }         // 3
numbers.first()                  // 1
numbers.last()                   // 5
numbers.sum()                    // 15
numbers.average()                // 3.0
```

### 3. Lambda Expressions

```kotlin
// Basic lambda
val sum = { a: Int, b: Int -> a + b }
println(sum(2, 3)) // 5

// Lambda with single parameter (it)
val doubled = listOf(1, 2, 3).map { it * 2 }

// Lambda as last parameter (trailing lambda)
fun operation(a: Int, b: Int, op: (Int, Int) -> Int): Int {
    return op(a, b)
}
val result = operation(5, 3) { x, y -> x + y }

// Higher-order functions
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}
calculate(4, 5) { a, b -> a * b } // 20
```

### 4. Classes and Objects

```kotlin
// Primary constructor
class Person(val name: String, var age: Int) {
    // Init block
    init {
        println("Person created: $name, $age")
    }
    
    // Secondary constructor
    constructor(name: String) : this(name, 0)
    
    // Methods
    fun greet() = "Hello, I'm $name"
}

// Inheritance
open class Animal(val name: String) {
    open fun makeSound() {
        println("Some sound")
    }
}

class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println("Woof!")
    }
}

// Abstract classes
abstract class Shape {
    abstract fun area(): Double
}

class Circle(val radius: Double) : Shape() {
    override fun area() = Math.PI * radius * radius
}

// Interfaces
interface Clickable {
    fun click()
    fun showOff() = println("I'm clickable!") // Default implementation
}

class Button : Clickable {
    override fun click() = println("Button clicked")
}
```

### 5. Object Declarations

```kotlin
// Singleton
object Database {
    fun connect() {
        println("Connected to database")
    }
}
Database.connect()

// Companion object (similar to static in Java)
class MyClass {
    companion object {
        const val CONSTANT = "constant value"
        fun create(): MyClass = MyClass()
    }
}
val instance = MyClass.create()

// Object expression (anonymous object)
val clickListener = object : Clickable {
    override fun click() {
        println("Clicked!")
    }
}
```

### 6. Sealed Classes

```kotlin
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
    object Loading : Result()
}

fun handleResult(result: Result) = when (result) {
    is Result.Success -> println("Data: ${result.data}")
    is Result.Error -> println("Error: ${result.message}")
    Result.Loading -> println("Loading...")
}
```

### 7. Scope Functions

```kotlin
// let - null check and transformation
val length = nullableString?.let {
    println("String: $it")
    it.length
}

// apply - configure object
val person = Person("Alice", 25).apply {
    age = 26
}

// also - additional operations
val numbers = mutableListOf(1, 2, 3).also {
    println("Original: $it")
}.apply {
    add(4)
}

// run - execute code block
val result = "hello".run {
    println("Length: $length")
    uppercase()
}

// with - multiple operations on object
with(person) {
    println(name)
    println(age)
}
```

### 8. Exception Handling

```kotlin
try {
    val result = 10 / 0
} catch (e: ArithmeticException) {
    println("Cannot divide by zero")
} finally {
    println("Cleanup")
}

// Try as expression
val number = try {
    input.toInt()
} catch (e: NumberFormatException) {
    0
}

// throw is an expression
val value = input ?: throw IllegalArgumentException("Input required")
```

---

## Advanced Concepts

### 1. Generics

```kotlin
// Generic class
class Box<T>(var item: T)

val intBox = Box(42)
val stringBox = Box("Hello")

// Generic function
fun <T> singletonList(item: T): List<T> {
    return listOf(item)
}

// Variance
interface Producer<out T> {  // Covariant (out)
    fun produce(): T
}

interface Consumer<in T> {   // Contravariant (in)
    fun consume(item: T)
}
```

### 2. Delegation

```kotlin
// Class delegation
interface Base {
    fun print()
}

class BaseImpl(val x: Int) : Base {
    override fun print() = println(x)
}

class Derived(b: Base) : Base by b

// Property delegation
class Example {
    var property: String by Delegates.observable("initial") { _, old, new ->
        println("$old -> $new")
    }
}

// Lazy initialization
val lazyValue: String by lazy {
    println("Computed!")
    "Hello"
}
```

### 3. Coroutines (Basics)

```kotlin
import kotlinx.coroutines.*

// Launch a coroutine
fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}

// Async/await
suspend fun fetchData(): String {
    delay(1000L)
    return "Data"
}

fun main() = runBlocking {
    val data = async { fetchData() }
    println(data.await())
}
```

### 4. Inline Functions

```kotlin
inline fun <T> measureTime(block: () -> T): T {
    val start = System.currentTimeMillis()
    val result = block()
    val end = System.currentTimeMillis()
    println("Took ${end - start}ms")
    return result
}

measureTime {
    // Some operation
}
```

---

## Best Practices

1. **Prefer `val` over `var`** - immutability is safer
2. **Use data classes** for simple data holders
3. **Leverage null safety** - use `?` and safe calls
4. **Use when instead of if-else chains**
5. **Prefer extension functions** over utility classes
6. **Use scope functions** appropriately
7. **Make use of default parameters** instead of overloading
8. **Use sealed classes** for restricted hierarchies
9. **Leverage collection operations** instead of manual loops
10. **Use coroutines** for asynchronous programming

---

## Quick Comparison Table

| Feature | Java | Kotlin |
|---------|------|--------|
| Null Safety | Manual checks | Built-in with `?` |
| Boilerplate | High | Low |
| Type Inference | Limited | Extensive |
| Extension Functions | No | Yes |
| Data Classes | Manual | One line |
| Coroutines | No | Built-in |
| Smart Casts | No | Yes |
| Default Parameters | No | Yes |
| String Templates | No | Yes |
| Semicolons | Required | Optional |
| Primary Constructor | No | Yes |
| Singleton | Manual | `object` |

---

## Useful Resources

- [Official Kotlin Documentation](https://kotlinlang.org/docs/home.html)
- [Kotlin Koans](https://play.kotlinlang.org/koans)
- [Kotlin Playground](https://play.kotlinlang.org/)
- [Android Kotlin Guides](https://developer.android.com/kotlin)

---

**Remember:** Kotlin is 100% interoperable with Java, so you can use Java libraries in Kotlin projects and vice versa!

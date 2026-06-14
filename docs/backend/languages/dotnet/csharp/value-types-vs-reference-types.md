# Tipos por Valor y Tipos por Referencia

## Introducción

La distinción entre tipos por valor (*value types*) y tipos por referencia (*reference types*) constituye uno de los conceptos fundamentales del sistema de tipos de C# y de la plataforma .NET.

Aunque ambos permiten representar datos y construir programas funcionalmente equivalentes, su comportamiento difiere significativamente en aspectos relacionados con asignación, copia, comparación, paso de parámetros, consumo de memoria y rendimiento.

Comprender estas diferencias resulta esencial para diseñar correctamente modelos de dominio, evitar errores sutiles, optimizar el uso de memoria y entender conceptos posteriores como boxing, garbage collection, nullability, generics y concurrencia.

---

# Motivación

Considérese el siguiente ejemplo:

```csharp
int x = 10;
int y = x;

y = 20;
```

Resultado:

```text
x = 10
y = 20
```

Ahora compárese con:

```csharp
Customer customer1 = new();

Customer customer2 = customer1;

customer2.Name = "John";
```

Resultado:

```text
customer1.Name = "John"
customer2.Name = "John"
```

Ambos ejemplos utilizan una asignación aparentemente similar:

```csharp
variable2 = variable1;
```

Sin embargo, el comportamiento es completamente distinto.

La razón radica en la diferencia entre tipos por valor y tipos por referencia.

---

# Clasificación General

El Common Type System divide los tipos en dos categorías principales:

```text
Value Types
Reference Types
```

La clasificación determina:

* Cómo se almacenan los datos.
* Cómo se copian.
* Cómo se comparan.
* Cómo se pasan a métodos.
* Cómo interactúan con el CLR.
* Cómo afectan al rendimiento.

---

# Tipos por Valor

Un tipo por valor contiene directamente sus datos.

Cuando una variable de este tipo se asigna a otra variable, se realiza una copia completa del valor.

Ejemplo:

```csharp
int x = 10;
int y = x;
```

Representación conceptual:

```text
x ──► 10

y ──► 10
```

Cada variable posee su propia copia.

Modificación posterior:

```csharp
y = 20;
```

Resultado:

```text
x ──► 10

y ──► 20
```

No existe relación entre ambas variables después de la copia.

---

# Tipos por Referencia

Un tipo por referencia almacena una referencia a un objeto.

Cuando una variable se asigna a otra, se copia la referencia, no el objeto.

Ejemplo:

```csharp
Customer customer1 = new();

Customer customer2 = customer1;
```

Representación conceptual:

```text
customer1
      \
       ──► Customer Object
      /
customer2
```

Ambas variables apuntan al mismo objeto.

Una modificación realizada desde cualquiera de las referencias será visible desde la otra.

Ejemplo:

```csharp
customer2.Name = "John";
```

Resultado:

```csharp
customer1.Name // John
customer2.Name // John
```

---

# Tipos por Valor Incorporados

C# incluye numerosos tipos por valor integrados.

Ejemplos:

```csharp
bool
byte
sbyte
short
ushort
int
uint
long
ulong
char
float
double
decimal
```

Ejemplo:

```csharp
int age = 30;
decimal amount = 1000m;
bool isActive = true;
```

Todos contienen directamente su valor.

---

# Structs

Los structs son tipos por valor definidos por el usuario.

Ejemplo:

```csharp
public struct Point
{
    public int X;
    public int Y;
}
```

Uso:

```csharp
Point p1 = new()
{
    X = 10,
    Y = 20
};

Point p2 = p1;

p2.X = 50;
```

Resultado:

```csharp
p1.X // 10
p2.X // 50
```

La asignación crea una copia completa del struct.

---

# Enumeraciones

Las enumeraciones son tipos por valor.

Ejemplo:

```csharp
public enum CustomerStatus
{
    Pending,
    Active,
    Suspended
}
```

Internamente representan un valor numérico.

```csharp
CustomerStatus status =
    CustomerStatus.Active;
```

---

# Nullable Value Types

Los tipos por valor normalmente no admiten null.

Ejemplo inválido:

```csharp
int age = null;
```

Para representar ausencia de valor se utiliza:

```csharp
int? age = null;
```

Internamente:

```csharp
Nullable<int>
```

---

# Tipos por Referencia Comunes

Son tipos por referencia:

```text
Classes
Records (record class)
Interfaces
Delegates
Arrays
Strings
```

Ejemplos:

```csharp
Customer
List<T>
Dictionary<TKey, TValue>
string
object
Exception
HttpClient
```

Todos ellos almacenan referencias a objetos.

---

# Clases

Las clases son el mecanismo principal para modelar objetos con identidad.

Ejemplo:

```csharp
public class Customer
{
    public string Name { get; set; }
}
```

Asignación:

```csharp
Customer customer1 =
    new Customer();

Customer customer2 =
    customer1;
```

Ambas variables apuntan al mismo objeto.

---

# Arrays

Los arrays son tipos por referencia.

Ejemplo:

```csharp
int[] values = { 1, 2, 3 };
```

Asignación:

```csharp
int[] copy = values;
```

Resultado:

```text
values
     \
      ──► [1][2][3]
     /
copy
```

Modificar un elemento afecta al mismo array.

---

# Strings

Las cadenas son tipos por referencia.

```csharp
string name = "Joaquin";
```

Sin embargo poseen una característica especial:

```text
Inmutabilidad
```

Una vez creada una cadena, su contenido no puede modificarse.

Ejemplo:

```csharp
string a = "hello";

string b = a;

b = "world";
```

Resultado:

```csharp
a // hello
b // world
```

No porque sean tipos por valor, sino porque las cadenas son inmutables.

---

# Records

Los records pueden existir en dos variantes:

```csharp
record class
record struct
```

Ejemplos:

```csharp
public record CustomerDto(
    Guid Id,
    string Name);
```

Tipo por referencia.

---

```csharp
public readonly record struct Money(
    decimal Amount,
    string Currency);
```

Tipo por valor.

Esta diferencia es importante porque afecta comportamiento y rendimiento.

---

# Copia de Datos

La diferencia fundamental puede resumirse así:

Value Type:

```text
Variable A ──► Valor

Variable B ──► Copia del Valor
```

Reference Type:

```text
Variable A
      \
       ──► Objeto
      /
Variable B
```

La copia de un tipo por valor duplica los datos.

La copia de un tipo por referencia duplica únicamente la referencia.

---

# Igualdad

La igualdad se comporta de forma diferente.

---

## Igualdad en Value Types

Por defecto se compara el contenido.

Ejemplo:

```csharp
int a = 10;
int b = 10;
```

```csharp
a == b
```

Resultado:

```text
true
```

---

## Igualdad en Reference Types

Por defecto se compara identidad.

Ejemplo:

```csharp
Customer a = new();
Customer b = new();
```

```csharp
a == b
```

Resultado:

```text
false
```

Aunque tengan exactamente los mismos datos.

---

# Paso de Parámetros

Comprender el sistema de tipos es fundamental para entender cómo funcionan los parámetros.

---

## Value Types

```csharp
void Increment(int value)
{
    value++;
}
```

Uso:

```csharp
int x = 10;

Increment(x);
```

Resultado:

```csharp
x == 10
```

El método recibe una copia.

---

## Reference Types

```csharp
void Rename(Customer customer)
{
    customer.Name = "John";
}
```

Uso:

```csharp
Customer customer = new();

Rename(customer);
```

Resultado:

```csharp
customer.Name == "John"
```

El método puede modificar el objeto apuntado por la referencia.

---

# Paso por Referencia

C# permite pasar variables por referencia explícitamente.

Palabras clave:

```csharp
ref
out
in
```

Ejemplo:

```csharp
void Increment(ref int value)
{
    value++;
}
```

Uso:

```csharp
int x = 10;

Increment(ref x);
```

Resultado:

```csharp
x == 11
```

Aquí ya no se trabaja sobre una copia.

---

# Inmutabilidad

La inmutabilidad suele ser más sencilla de lograr con tipos por valor.

Ejemplo:

```csharp
public readonly struct Money
{
    public decimal Amount { get; }

    public Money(decimal amount)
    {
        Amount = amount;
    }
}
```

Sin embargo también puede aplicarse a tipos por referencia.

Ejemplo:

```csharp
public sealed record CustomerDto(
    Guid Id,
    string Name);
```

La inmutabilidad reduce errores relacionados con estado compartido y concurrencia.

---

# Costes de Copia

Una ventaja de los tipos por referencia es que copiar referencias suele ser barato.

Ejemplo:

```csharp
LargeObject a = new();

LargeObject b = a;
```

Solo se copia una referencia.

Por el contrario:

```csharp
LargeStruct a = new();

LargeStruct b = a;
```

Puede implicar copiar una cantidad considerable de memoria.

Por esta razón los structs suelen mantenerse:

* Pequeños.
* Inmutables.
* Representando valores.

---

# Implicancias de Diseño

La elección entre tipo por valor y tipo por referencia no es únicamente una cuestión técnica.

También es una decisión de modelado.

Generalmente:

Utilizar tipos por valor cuando:

* Representan un valor.
* No poseen identidad.
* Son pequeños.
* Son inmutables.

Ejemplos:

```text
Money
Percentage
Coordinate
Temperature
DateRange
```

Utilizar tipos por referencia cuando:

* Poseen identidad.
* Poseen ciclo de vida.
* Cambian de estado.
* Son entidades del dominio.

Ejemplos:

```text
Customer
Order
Reservation
Invoice
Product
```

---

# Errores Comunes

## Asumir que todos los tipos se comportan igual

Error frecuente:

```csharp
Customer a = new();

Customer b = a;
```

Suponer que existe una copia independiente.

---

## Crear Structs Grandes

Ejemplo problemático:

```csharp
public struct HugeStruct
{
    // decenas de campos
}
```

Las copias pueden resultar costosas.

---

## Structs Mutables

Ejemplo:

```csharp
public struct Point
{
    public int X;
    public int Y;
}
```

Los structs mutables suelen producir comportamientos inesperados debido a las copias implícitas.

---

## Comparar Referencias Cuando Se Desea Comparar Valores

```csharp
customer1 == customer2
```

No necesariamente implica igualdad de contenido.

---

# Relación con Otros Conceptos

Este tema constituye la base para comprender:

* Memory Model.
* Boxing y Unboxing.
* Garbage Collection.
* Generics.
* Records.
* Nullable Types.
* Async/Await.
* Entity Framework Core.
* Domain-Driven Design.

Una comprensión incorrecta de la diferencia entre tipos por valor y tipos por referencia suele ser la causa de numerosos errores de diseño, rendimiento y comportamiento en aplicaciones .NET.

---

# Referencias

* ECMA-334 C# Language Specification.
* ECMA-335 Common Language Infrastructure.
* Microsoft Learn — Value Types.
* Microsoft Learn — Reference Types.
* Microsoft Learn — Struct Types.
* Microsoft Learn — Record Types.
* Microsoft Learn — Parameter Passing.
* Microsoft Learn — Equality Operators.
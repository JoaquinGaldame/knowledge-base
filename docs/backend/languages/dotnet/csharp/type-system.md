# Sistema de Tipos de C#

## Introducción

El sistema de tipos constituye uno de los pilares fundamentales del lenguaje C# y de la plataforma .NET. Define cómo se representan los datos, cómo interactúan entre sí, qué operaciones son válidas sobre ellos y qué garantías puede ofrecer el compilador antes de la ejecución.

Comprender el sistema de tipos resulta esencial para diseñar APIs robustas, modelar dominios complejos, optimizar el uso de memoria y entender conceptos avanzados como generics, nullability, boxing, reflection, delegates, records y programación asincrónica.

Desde la perspectiva de la plataforma .NET, el sistema de tipos de C# no existe de manera aislada. Está construido sobre el Common Type System (CTS), una especificación definida por el Common Language Infrastructure (CLI) que permite la interoperabilidad entre todos los lenguajes de .NET.

---

# Motivación

Todo programa manipula datos.

Las preguntas fundamentales que debe responder un lenguaje son:

* ¿Qué representa un dato?
* ¿Qué operaciones son válidas sobre él?
* ¿Dónde se almacena?
* ¿Cómo se transfiere?
* ¿Cómo se compara?
* ¿Cómo se valida?

El sistema de tipos proporciona respuestas formales a estas preguntas.

Por ejemplo:

```csharp
int age = 30;
```

El compilador sabe que:

* `age` representa un entero de 32 bits.
* Puede sumarse, restarse o compararse.
* No puede recibir una cadena de texto.
* Tiene un tamaño conocido.
* Su representación en memoria está definida.

Gracias a esta información, el compilador puede detectar errores antes de la ejecución.

---

# Definición Formal

La especificación de C# define un tipo como una entidad que describe:

* Un conjunto de valores.
* Un conjunto de operaciones válidas.
* Una representación determinada en tiempo de ejecución.

Un tipo establece:

```text
Qué datos pueden almacenarse.
Qué comportamiento poseen.
Cómo se representan en memoria.
Cómo interactúan con otros tipos.
```

---

# Common Type System (CTS)

El Common Type System es el modelo de tipos utilizado por el CLR.

Su objetivo es permitir que distintos lenguajes de .NET compartan tipos y puedan interoperar de manera segura.

Por ejemplo:

```text
C#
F#
Visual Basic
PowerShell
```

Todos comparten el mismo sistema de tipos subyacente.

El CTS define:

* Tipos por valor.
* Tipos por referencia.
* Herencia.
* Interfaces.
* Delegates.
* Enumeraciones.
* Genéricos.
* Visibilidad.

Gracias a esto, una clase escrita en C# puede ser consumida por otro lenguaje compatible con .NET.

---

# Common Language Specification (CLS)

El CLS es un subconjunto del CTS.

Su objetivo es definir las reglas mínimas que deben seguir los lenguajes para garantizar interoperabilidad.

Ejemplo:

```csharp
public uint GetValue()
{
    return 10;
}
```

Aunque `uint` existe en C#, no todos los lenguajes .NET lo soportan completamente.

Por ello, una API pública destinada a interoperabilidad suele limitarse a tipos CLS-compliant.

---

# Jerarquía del Sistema de Tipos

Todos los tipos de .NET derivan directa o indirectamente de:

```csharp
System.Object
```

Esto convierte al sistema de tipos en un sistema unificado.

Ejemplo:

```csharp
int number = 10;

object value = number;
```

Aunque `int` parece un tipo primitivo, en realidad es:

```csharp
System.Int32
```

Y hereda indirectamente de:

```csharp
System.Object
```

Jerarquía simplificada:

```text
System.Object
│
├── Reference Types
│   ├── string
│   ├── class
│   ├── array
│   ├── delegate
│   └── interface
│
└── Value Types
    ├── int
    ├── bool
    ├── decimal
    ├── enum
    └── struct
```

Esta unificación permite tratar cualquier valor como un objeto cuando sea necesario.

---

# Clasificación General de Tipos

La especificación divide los tipos en dos grandes categorías:

```text
Value Types
Reference Types
```

Esta distinción afecta:

* Asignación.
* Comparación.
* Copia.
* Consumo de memoria.
* Rendimiento.
* Semántica del dominio.

---

# Value Types

Los tipos por valor contienen directamente sus datos.

Ejemplos:

```csharp
int
double
decimal
bool
char
DateTime
Guid
enum
struct
```

Ejemplo:

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

La asignación crea una copia independiente.

Representación conceptual:

```text
x -> 10

y -> 10
```

Después:

```text
x -> 10

y -> 20
```

---

# Reference Types

Los tipos por referencia almacenan una referencia a un objeto.

Ejemplos:

```csharp
class
string
array
delegate
interface
record class
```

Ejemplo:

```csharp
Customer customer1 = new();

Customer customer2 = customer1;
```

Representación conceptual:

```text
customer1
      \
       -> Customer Object
      /
customer2
```

Ambas variables apuntan al mismo objeto.

Modificarlo desde una referencia afecta al mismo objeto.

---

# Tipos Integrados

C# proporciona alias para tipos definidos por .NET.

Ejemplo:

```csharp
int
string
bool
decimal
double
float
char
object
```

Correspondencias:

```csharp
int      -> System.Int32
string   -> System.String
bool     -> System.Boolean
double   -> System.Double
object   -> System.Object
```

Por convención, en código C# se utilizan los aliases del lenguaje.

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

Los structs son apropiados cuando:

* Representan un valor.
* Son pequeños.
* Son inmutables.
* No poseen identidad propia.

Ejemplos comunes:

```csharp
DateTime
Guid
TimeSpan
decimal
```

---

# Enumeraciones

Las enumeraciones representan conjuntos finitos de constantes.

Ejemplo:

```csharp
public enum CustomerStatus
{
    Pending,
    Active,
    Suspended
}
```

Internamente un enum es un tipo por valor basado en un tipo numérico.

Por defecto:

```csharp
int
```

---

# Clases

Las clases representan tipos por referencia.

Ejemplo:

```csharp
public class Customer
{
}
```

Características:

* Herencia.
* Polimorfismo.
* Encapsulación.
* Identidad.

Las clases son el principal mecanismo de modelado en sistemas orientados a objetos.

---

# Interfaces

Las interfaces definen contratos.

Ejemplo:

```csharp
public interface IRepository<T>
{
    Task<T?> GetByIdAsync(Guid id);
}
```

Las interfaces:

* No contienen estado.
* Definen comportamiento esperado.
* Permiten desacoplamiento.

---

# Delegates

Un delegate representa una referencia segura a métodos.

Ejemplo:

```csharp
public delegate void NotificationHandler(string message);
```

Conceptualmente:

```text
Método como valor
```

Los delegates constituyen la base de:

* Eventos.
* Expresiones lambda.
* LINQ.
* Programación funcional en C#.

---

# Arrays

Los arrays son tipos por referencia.

Ejemplo:

```csharp
int[] values = { 1, 2, 3 };
```

Aunque contienen elementos por valor, el array en sí es un objeto administrado.

```text
values
   ↓
[1][2][3]
```

---

# Strings

Las cadenas son tipos por referencia.

Ejemplo:

```csharp
string name = "Joaquin";
```

Sin embargo, poseen comportamiento similar a tipos inmutables por valor.

Ejemplo:

```csharp
string a = "hello";
string b = a;

b = "world";
```

Resultado:

```text
a = hello
b = world
```

Esto ocurre porque las cadenas son inmutables.

---

# Nullable Value Types

Los tipos por valor no admiten null.

Ejemplo:

```csharp
int age = null;
```

Inválido.

Para permitir null:

```csharp
int? age = null;
```

Internamente:

```csharp
Nullable<int>
```

Equivale a:

```csharp
System.Nullable<T>
```

---

# Nullable Reference Types

Desde C# 8 existe soporte para expresar intención de nulabilidad.

Ejemplo:

```csharp
string name;
```

No debería ser nulo.

```csharp
string? description;
```

Puede ser nulo.

Esto permite análisis estático por parte del compilador.

---

# Conversiones

El sistema de tipos define conversiones implícitas y explícitas.

---

## Conversión Implícita

No existe riesgo de pérdida de información.

```csharp
int value = 10;

long result = value;
```

---

## Conversión Explícita

Puede existir pérdida de información.

```csharp
double value = 10.8;

int result = (int)value;
```

Resultado:

```text
10
```

---

# Upcasting

Conversión hacia un tipo base.

```csharp
Customer customer = new();

object value = customer;
```

Siempre segura.

---

# Downcasting

Conversión hacia un tipo derivado.

```csharp
object value = new Customer();

Customer customer = (Customer)value;
```

Puede fallar en tiempo de ejecución.

Por ello suele utilizarse:

```csharp
is
as
pattern matching
```

---

# Covarianza y Contravarianza

Permiten sustitución segura entre tipos relacionados.

Ejemplo:

```csharp
IEnumerable<string>
```

Puede tratarse como:

```csharp
IEnumerable<object>
```

Esto es covarianza.

Son conceptos fundamentales para comprender:

* LINQ.
* Delegates.
* Interfaces genéricas.

---

# Dynamic

El tipo:

```csharp
dynamic
```

Desactiva gran parte de la comprobación estática.

Ejemplo:

```csharp
dynamic value = "hello";

value.NonExistingMethod();
```

Compila.

El error aparece en ejecución.

Su uso suele limitarse a interoperabilidad o escenarios dinámicos específicos.

---

# Object

Todo tipo puede convertirse a:

```csharp
object
```

Ejemplo:

```csharp
int value = 10;

object obj = value;
```

Esto introduce el concepto de boxing.

Tema que se estudia en profundidad en:

```text
boxing-unboxing.md
```

---

# Runtime Type Information

Los tipos contienen metadatos accesibles durante la ejecución.

Ejemplo:

```csharp
Type type = typeof(Customer);
```

Permite:

* Reflection.
* Dependency Injection.
* Serialización.
* ORMs.
* Frameworks de testing.

---

# Reflection

Reflection permite inspeccionar tipos en tiempo de ejecución.

Ejemplo:

```csharp
Type type = typeof(Customer);

PropertyInfo[] properties =
    type.GetProperties();
```

La reflexión es una capacidad poderosa pero con costes de rendimiento que deben considerarse.

---

# Implicancias Arquitectónicas

Comprender el sistema de tipos es esencial para:

* Diseñar modelos de dominio.
* Crear APIs públicas.
* Utilizar correctamente generics.
* Optimizar memoria.
* Evitar boxing innecesario.
* Diseñar Value Objects.
* Comprender Entity Framework Core.
* Comprender Dependency Injection.
* Comprender serialización.

Gran parte de los patrones utilizados en aplicaciones empresariales modernas se apoyan directamente sobre las características del sistema de tipos.

---

# Referencias

* ECMA-334 C# Language Specification.
* ECMA-335 Common Language Infrastructure.
* Microsoft Learn — Common Type System.
* Microsoft Learn — C# Type System.
* Microsoft Learn — Value Types.
* Microsoft Learn — Reference Types.
* Microsoft Learn — Nullable Reference Types.
* Microsoft Learn — Generics.
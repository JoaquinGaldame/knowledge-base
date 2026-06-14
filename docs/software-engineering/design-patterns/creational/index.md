# Creational Design Patterns

## Introducción

Los patrones creacionales se enfocan en la creación de objetos y en cómo desacoplar el proceso de instanciación de la lógica de negocio.

Su objetivo es reducir dependencias directas sobre implementaciones concretas y facilitar la extensibilidad del sistema.

## Patrones incluidos

### Factory Method

Define una interfaz para crear objetos, permitiendo que las subclases decidan qué implementación concreta instanciar.

- [Ir a Factory Method](./factory-method.md)

### Abstract Factory

Permite crear familias de objetos relacionados sin depender de clases concretas.

- [Ir a Abstract Factory](./abstract-factory.md)

### Builder

Permite construir objetos complejos paso a paso, separando el proceso de construcción de la representación final.

- [Ir a Builder](./builder.md)

### Prototype

Permite crear nuevos objetos clonando instancias existentes.

- [Ir a Prototype](./prototype.md)

### Singleton

Garantiza que una clase tenga una única instancia y proporciona un punto global de acceso a ella.

- [Ir a Singleton](./singleton.md)

## Cuándo estudiar estos patrones

* Cuando la lógica de creación comienza a volverse compleja.
* Cuando existen múltiples variantes de objetos.
* Cuando se busca desacoplar la creación de la utilización.
* Cuando se trabaja con frameworks empresariales.

## Siguiente paso

Una vez comprendidos los patrones creacionales, continuar con los patrones estructurales.

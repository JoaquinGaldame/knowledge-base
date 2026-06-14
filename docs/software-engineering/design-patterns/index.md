# Design Patterns

Los patrones de diseño son soluciones reutilizables a problemas recurrentes de diseño de software.

No son recetas obligatorias ni estructuras que deban aplicarse en todos los proyectos. Su valor está en proporcionar un vocabulario común para razonar sobre diseño, extensibilidad, acoplamiento, cohesión y mantenibilidad.

## Categorías

### Patrones Creacionales

Se enfocan en la creación de objetos y en cómo desacoplar el código cliente de las clases concretas que instancia.

- [Factory Method](./creational/factory-method.md)
- [Abstract Factory](./creational/abstract-factory.md)
- [Builder](./creational/builder.md)
- [Singleton](./creational/singleton.md)

### Patrones Estructurales

Se enfocan en cómo componer clases y objetos para formar estructuras más grandes y flexibles.

- [Adapter](./structural/adapter.md)
- [Facade](./structural/facade.md)
- [Decorator](./structural/decorator.md)

### Patrones de Comportamiento

Se enfocan en la comunicación, responsabilidades e interacción entre objetos.

- [Strategy](./behavioral/strategy.md)
- [Observer](./behavioral/observer.md)
- [Command](./behavioral/command.md)

## Regla personal

Antes de aplicar un patrón, responder:

1. ¿Qué problema concreto estoy resolviendo?
2. ¿El patrón reduce complejidad o la aumenta?
3. ¿Existe una solución más simple?
4. ¿El equipo entenderá fácilmente esta decisión?
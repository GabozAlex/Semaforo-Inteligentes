# Semaforo-Inteligentes
Descripción del Proyecto

Este proyecto es una implementación completa de un Sistema de Semáforo Digital Controlado Remotamente, desarrollado como prueba de concepto para un sistema de gestión de tráfico en entornos de Internet de las Cosas (IoT).

El sistema fusiona el hardware físico (sistema embebido) con una interfaz web (servidor), permitiendo la simulación, monitoreo y control a distancia de las fases semafóricas.

✨ Componentes y Funcionalidades Clave
El proyecto se divide en dos módulos principales interconectados:

1. Módulo Físico (Sistema Embebido)
Hardware Base: Desarrollado sobre un microcontrolador ESP32, elegido por su capacidad Wi-Fi y su robustez para proyectos IoT.

Componente de Actuación: Circuito electrónico que simula o actúa como un semáforo real (luces LED, etc.).

Función de Servidor: El ESP32 funciona como un servidor web integrado, alojando la lógica del semáforo y aceptando comandos HTTP/WebSocket.

2. Módulo de Interfaz (Página Web)
Función de Control: La página web sirve como Panel de Control (Dashboard), permitiendo al usuario enviar comandos al ESP32 para forzar cambios de fase o establecer patrones de tiempo de forma remota.

Simulación Visual: La interfaz no solo controla el sistema físico, sino que también simula visualmente el estado actual del semáforo.

Monitoreo en Tiempo Real: Muestra el estado actual del semáforo embebido (qué luz está encendida y el tiempo restante de la fase), asegurando una sincronización constante entre la simulación digital y el hardware físico.

🔬 Logros y Relevancia Técnica
Integración Hardware-Software: Demostración exitosa de la comunicación bidireccional entre un dispositivo embebido (ESP32) y un cliente web a través de una red local o internet.

Base para Sistemas IoT: El proyecto establece los cimientos para sistemas de control más complejos, como la gestión de múltiples intersecciones o la integración con sensores de tráfico real.

Demostración Universitaria: Cumple con la evaluación demostrando habilidades en programación embebida (C++), desarrollo web (HTML/CSS/JS) y comunicaciones de red.

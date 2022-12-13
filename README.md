# Introducción a webhooks con Node.js

1. Clonar el repositorio:

```bash
git clone https://github.com/gacanepa/webhooks.git
```

2. Instalar paquetes localmente para el proyecto:

```bash
cd webhooks
npm install
```

3. Instalar PM2 de forma global:

```bash
npm install pm2@latest -g
```

4. Iniciar la API (se puede omitir la extensión .js del archivo):

```bash
pm2 start index
```

El resultado debería ser similar al siguiente:

![image](https://user-images.githubusercontent.com/2545170/207328125-91303012-3a41-4f75-9d2c-b153ba3910d5.png)

5. Opcionalmente, monitorear el archivo principal de log:

```bash
cd ~/.pm2/logs
tail -f index-out.log
```

> **IMPORTANTE**: El código de la ruta `/hook` en el archivo **index.js** asume que dentro del directorio personal existe una subcarpeta llamada **web**. Dentro de esta debe existir un repositorio con un archivo HTML minimalista. En el remoto correspondiente se debe crear el webhook que apunte a la dirección IP o nombre del servidor actual, el puerto, y la ruta antes mencionada.

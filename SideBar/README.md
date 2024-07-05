# Sidebar Component

Este repositorio contiene componentes de sidebar para una aplicación en React utilizando Next.js y Lucide-react.

## Dependencias

Para este proyecto, necesitas instalar las siguientes dependencias:

```json
"dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.4",
    "lucide-react": "latest"
}
```

## Imágenes de Ejemplo

### Sidebar Colapsado
<img src="https://github.com/JCardenas05/React_Components/blob/main/SideBar/previews/collapsed.jpeg?raw=true" style="width: 400px; height: 300px; display: block; margin: 0 auto; text-align: center;">

### Sidebar Expandido
<img src="https://github.com/JCardenas05/React_Components/blob/main/SideBar/previews/expanded.jpeg?raw=true" style="width: 400px; height: 300px; display: block; margin: 0 auto; text-align: center;">

## Características
- **Expandible/Colapsable:** El sidebar se puede expandir y colapsar, y recuerda su estado usando localStorage.
- **Submenús:** Soporte para submenús anidados.
- **Iconos y Alertas:** Uso de iconos de lucide-react y alertas visuales.
- **Estilo Personalizado:** Completamente estilizado con clases CSS.
- **Hover:** Efectos al hacer hover sobre los elementos

### Cómo Usarlo
Por ejemplo, en el siguiente componente:

```jsx
<SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" link="/dashboard" active={pathname === "/dashboard"} alert/>
```

* **icon:** Este prop define el icono que se mostrará en el item del sidebar. Puedes elegir cualquier icono de la biblioteca lucide-react u otra de tu preferencia.
* **text:** El texto que se mostrará junto al icono.
* **link:** El enlace de redirección al hacer clic en el item.
* **active:** Indica si el item está activo (resaltado), basado en la ruta actual (pathname). Es necesario para que el sidebar sepa en qué ruta se encuentra para resaltarla en un color diferente sobre las demás opciones.

* **alert:**  Muestra un indicador de notificación sobre el elemento.

Puedes agregar líneas separadoras con:

```jsx
<hr className="my-3" />

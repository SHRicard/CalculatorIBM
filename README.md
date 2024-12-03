# Calculadora de IMC
Una función simple y reutilizable para calcular el Índice de Masa Corporal (IMC) en TypeScript. Ideal para desarrolladores que trabajan en aplicaciones de salud, fitness o bienestar.

# Características 🚀 
- **Cálculo Preciso del IMC:** Soporta entradas de peso y altura como cadenas de texto con manejo de errores.
- **Uso Flexible:** Compatible con frameworks web y móviles como React o React Native.
- **Salida Amigable para el Usuario:** Devuelve el valor del IMC formateado junto con una categoría, como "Peso normal" u "Obesidad".

# ¿Cómo Funciona? 🛠️
La función `calcularIMC` acepta dos parámetros como cadenas de texto:

- **weight:** Peso del usuario (en kilogramos).
- **height:** Altura del usuario (en metros).

Valida las entradas, las convierte a números y calcula el IMC utilizando la fórmula:

\[
\text{IMC} = \frac{\text{Peso (kg)}}{\text{Altura (m)}^2}
\]

La función devuelve el valor del IMC redondeado a un decimal, junto con una categoría.
# Ejemplo 🔍

Código de la función:

```typescript
export const calcularIMC = (weight: string, height: string): string => {
  const weightNum = parseFloat(weight.trim());
  const heightNum = parseFloat(height.trim());

  if (
    isNaN(weightNum) ||
    isNaN(heightNum) ||
    weightNum <= 0 ||
    heightNum <= 0
  ) {
    return "";
  }

  const IMC = weightNum / (heightNum * heightNum);
  const IMCRounded = Math.round(IMC * 10) / 10;

  let categoria = "";
  if (IMCRounded < 18.5) {
    categoria = "Bajo peso";
  } else if (IMCRounded >= 18.5 && IMCRounded < 24.9) {
    categoria = "Peso normal";
  } else if (IMCRounded >= 25 && IMCRounded < 29.9) {
    categoria = "Sobrepeso";
  } else if (IMCRounded >= 30) {
    categoria = "Obesidad";
  }

  return `${IMCRounded} - ${categoria}`;
};
```
# Uso en un componente de React Native
```typescript
import { calcularIMC } from "./path-to-function";

const weight = watch("weight");
const height = watch("height");
const imc = calcularIMC(weight, height);

<View style={[styles.alert, { backgroundColor: theme.colors.onSecondary }]}>
  <Label
    style={{ color: theme.colors.textPrimary, fontSize: 13 }}
    text={`Índice de Masa Corporal: ${imc}`}
  />
</View>;
```
### Clasificación del Índice de Masa Corporal (IMC)

- **Bajo peso:** IMC < 18.5  
- **Peso normal:** 18.5 ≤ IMC < 24.9  
- **Sobrepeso:** 25 ≤ IMC < 29.9  
- **Obesidad:** IMC ≥ 30  

### Fórmula del IMC
\[
\text{IMC} = \frac{\text{Peso (kg)}}{\text{Altura (m)}^2}
\]

La función devuelve el valor del IMC redondeado a un decimal, junto con una categoría como:

- **Bajo peso:** IMC < 18.5
- **Peso normal:** 18.5 ≤ IMC < 24.9
- **Sobrepeso:** 25 ≤ IMC < 29.9
- **Obesidad:** IMC ≥ 30

## 🏆 ¡Apóyanos con una Estrella! 🌟

Si este proyecto te ha sido útil o te ha gustado, no dudes en darle una estrella ⭐️ en GitHub. ¡Tu apoyo nos motiva a seguir mejorando! 😊

[¡Dale una estrella aquí!](https://github.com/SHRicard/CalculatorIBM)

¡Gracias por contribuir al open-source! 🎉


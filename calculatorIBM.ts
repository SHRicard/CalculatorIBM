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

  const altura = heightNum;
  const IMC = weightNum / (altura * altura);

  const factor = 10 ** 1;
  const IMCRounded = Math.round(IMC * factor) / factor;

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

  const formattedIMC = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(IMCRounded);

  return `${formattedIMC} - ${categoria}`;
};

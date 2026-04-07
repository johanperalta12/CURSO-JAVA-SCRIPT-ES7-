"use strict"; 
// Esto hace que JavaScript sea más estricto y evite algunos errores

// ===============================
// FUNCIONES PARA REVISAR DATOS
// ===============================

function convertirANumero(valor, nombre = "Dato") {
  // intenta convertir el valor a número
  const numero = Number(valor);

  // revisa si realmente es un número válido
  if (!Number.isFinite(numero)) {
    throw new Error(`${nombre} debe ser un número válido`);
  }

  // devuelve el número ya convertido
  return numero;
}

function revisarNoNegativo(valor, nombre = "Dato") {
  // revisa que el número no sea menor que 0
  if (valor < 0) {
    throw new Error(`${nombre} no puede ser negativo`);
  }
}

function textoNoVacio(valor, nombre = "Dato") {
  // convierte el valor a texto
  const texto = String(valor).trim();

  // revisa que el texto no esté vacío
  if (texto.length === 0) {
    throw new Error(`${nombre} no puede estar vacío`);
  }

  // devuelve el texto limpio
  return texto;
}

// ===============================
// FUNCIÓN PARA PREPARAR UN GASTO
// ===============================

function prepararGasto(datos) {
  // convierte y revisa el id
  const id = textoNoVacio(datos.id, "ID");

  // revisa la fecha
  const fecha = textoNoVacio(datos.fecha, "Fecha");

  // revisa la categoría
  const categoria = textoNoVacio(datos.categoria, "Categoría");

  // revisa la descripción
  const descripcion = textoNoVacio(datos.descripcion, "Descripción");

  // convierte el monto a número
  const monto = convertirANumero(datos.monto, "Monto");

  // revisa que el monto no sea negativo
  revisarNoNegativo(monto, "Monto");

  // devuelve el gasto ya ordenado
  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto
  };
}

// ===============================
// LISTA DE GASTOS DE EJEMPLO
// ===============================

const gastos = [
  prepararGasto({
    id: "g1",
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 8500000,
  }),

  prepararGasto({
    id: "g2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),

  prepararGasto({
    id: "g3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),

  prepararGasto({
    id: "g4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 2000000,
  }),

  prepararGasto({
    id: "g5",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso online",
    monto: 1200000,
  })
];

// ===============================
// ESTADÍSTICAS BÁSICAS
// ===============================

function calcularResumen(lista) {
  // si no hay gastos devuelve todo en 0
  if (lista.length === 0) {
    return {
      total: 0,
      promedio: 0,
      mayor: 0,
      menor: 0
    };
  }

  // saca solo los montos
  const montos = lista.map(g => g.monto);

  // suma todos los montos
  const total = montos.reduce((acum, n) => acum + n, 0);

  // busca el monto más pequeño
  const menor = Math.min(...montos);

  // busca el monto más grande
  const mayor = Math.max(...montos);

  // calcula el promedio
  const promedio = total / montos.length;

  // devuelve los resultados
  return { total, promedio, mayor, menor };
}

// ===============================
// TOTAL POR CATEGORÍA
// ===============================

function gastoPorCategoria(lista) {
  // agrupa los gastos por categoría
  return lista.reduce((acum, gasto) => {

    // si la categoría no existe la crea en 0
    if (!acum[gasto.categoria]) {
      acum[gasto.categoria] = 0;
    }

    // suma el monto del gasto
    acum[gasto.categoria] += gasto.monto;

    return acum;
  }, {});
}

// ===============================
// FORMATO DE DINERO
// ===============================

function formatoPesos(valor) {
  // convierte el número a formato de pesos colombianos
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

// ===============================
// MOSTRAR REPORTE EN CONSOLA
// ===============================

function mostrarReporte(lista) {

  // calcula estadísticas
  const resumen = calcularResumen(lista);

  // calcula gastos por categoría
  const categorias = gastoPorCategoria(lista);

  console.group("REPORTE DE GASTOS");

  console.log("Resumen general:");

  console.table([
    {
      Total: formatoPesos(resumen.total),
      Promedio: formatoPesos(resumen.promedio),
      Mayor: formatoPesos(resumen.mayor),
      Menor: formatoPesos(resumen.menor),
      Registros: lista.length
    }
  ]);

  console.log("Gasto por categoría:");
  console.table(categorias);

  console.groupEnd();
}

// ejecuta el reporte
mostrarReporte(gastos);
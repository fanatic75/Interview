export function sortData(
  arr: Data[],
  order: "asc" | "desc" | "createdAt" = "asc"
) {
  arr.sort(function (a, b) {
    if (order === "asc" || order === "desc") {
      return orderByFileName(a.fileName, b.fileName, order);
    } else {
      return orderByCreatedAt(a.createdAt, b.createdAt, 'asc');
    }
  });

  return arr;
}

function orderByFileName(fileName1:string, fileName2:string, order:"asc" | "desc") {
  let num1 = extractNumericValueFromFileName(fileName1);
  let num2 = extractNumericValueFromFileName(fileName2);
  if (num1 !== null && num2 !== null) {
    if (order === "asc") {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  } else {
    // If one or both filenames don't contain numeric values, fall back to string comparison
    if (order === "asc") {
      return fileName1.localeCompare(fileName2);
    } else {
      return fileName2.localeCompare(fileName1);
    }
  }
}

function extractNumericValueFromFileName(fileName:string) {
  let numericValues = fileName.match(/\d+/g);
  if (numericValues) {
    let maxNumericValue = Math.max(...numericValues.map(Number));
    return maxNumericValue;
}
return null;
}

function orderByCreatedAt(createdAt1:string, createdAt2:string, order:"asc" | "desc") {
  if (order === "asc") {
    return new Date(createdAt1).getTime() - new Date(createdAt2).getTime();
  } else {
    return new Date(createdAt2).getTime() - new Date(createdAt1).getTime();
  }
}

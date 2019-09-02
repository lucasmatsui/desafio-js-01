function Test(a1 = null, a2 = null, a3 = null) {
  if(a1 !== null && a2 === null && a3 === null){
    return a1;
  }

  if(a1 !== null && a2 !== null && a3 === null){
    return a1 + a2;
  }

  if(a1 !== null && a2 !== null && a3 !== null){
    if(a3 === 0) return "Não existe divisão por 0";
    return (a1 + a2) / a3;
  }

  if(a1 === null && a2 === null && a3 === null){
    return false;
  }

  return null;
}


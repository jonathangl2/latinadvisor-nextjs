
export function resolveDictPath(path: string, dict: any): string {
  // Si no empieza con "dict.", retornar el path original
  if (!path.startsWith('dict.')) {
    return path;
  }

  // Remover "dict." del inicio
  const cleanPath = path.replace(/^dict\./, '');
  
  // Dividir por puntos y navegar el objeto
  const keys = cleanPath.split('.');
  let result: any = dict;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      // Si no encuentra el path, retornar el path original como fallback
      console.warn(`Dictionary path not found: ${path}`);
      return path;
    }
  }
  
  return typeof result === 'string' ? result : path;
}
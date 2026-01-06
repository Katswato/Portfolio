
export function isArrayContentsEqual (a1: any[], a2: any[]) {
  if (a1.length != a2.length) {
    return false;
  }
  let contentMap = new Map();
  for (let i = 0; i < a1.length; ++i) {
    const element = a1[i];
    if (!contentMap.has(element)) {
      contentMap.set(element, 1);
    } else {
      contentMap.set(a1[i], (prev: number) => prev + 1);
    }
  }
  for (let i = 0; i < a2.length; ++i) {
    const element = a2[i];
    if (!contentMap.has(element)) {
      contentMap.set(element, 1);
    } else {
      contentMap.set(a2[i], (prev: number) => prev + 1);
    }
  }
  for (let i = 0; i < a1.length; ++i) {
      if (contentMap.get(a1[i]) < 2) {
          return false;
      }
  }
  return true;
}

export function isArraySubset (source: any[], subset: any[]) {
  if (source.length == 0) { return false; }
  if (subset.length == 0) { return false; }

  let sharedCount: number = 0;
  for (let i: number = 0; i < subset.length; ++i) {
      if (source.includes(subset[i])) {
          sharedCount++;
      }
  }
  if (sharedCount == subset.length) { return true; }
  return false;
}

export function isArrayPartial (source: any[], subset: any[]) {
  if (source.length == 0) { return false; }
  if (subset.length == 0) { return false; }

  for (let i: number = 0; i < subset.length; ++i) {
      if (source.includes(subset[i])) {
          return true;
      }
  }
  return false;
}

export function removeSubset (source: any[], subset: any[]) {
    for (let i: number = 0; i < subset.length; ++i) {
    }
}

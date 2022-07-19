function enough(cap, on, wait) {
    let value = (cap - on - wait);
    
    if (cap - on - wait >= 0) {
      return 0;
    } else {
      return value * -1;
    }
}
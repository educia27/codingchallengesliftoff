function bonusTime(salary, bonus) {
    let total = 0;
    
    if (bonus) {
      total += (salary * 10);
    } else {
      total += salary
    }
    
    return `£${total}`
}
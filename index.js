class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  } 
  static sanitize(string){
    return string.replace(/[^-a-z0-9\s']/gmi, '')
  } 
  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'] 
    
     let formatted = string.split(' ').map(word => {
      if (!exceptions.includes(word)){
        return word[0].toUpperCase() + word.slice(1)
      }
      return word
    }).join(' ')
    return formatted[0].toUpperCase() + formatted.slice(1)
  }
} 

console.log(Formatter.sanitize("a hl-lo 'everybody' the movement a"))
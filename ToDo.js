class ToDo {
  constructor(text) {
    this.text = text;
    this.complete = false;
  }
  

  set ItemComplete(complete){
    this.complete = complete;
  }
}
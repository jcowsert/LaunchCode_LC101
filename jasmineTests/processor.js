function process(transmission){
  if(transmission.indexOf("::") < 0) {
    return -1;
  }
  return {}
}

module.exports = process;
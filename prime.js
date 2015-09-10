var Main = function( data ){
  var debug = true;

  var input = data.split( "\n" );

  if( debug) console.time('t');

  var result = [];
  var inputNum = parseInt(input[0], 10);

  if(inputNum < 2){
    console.log ('not valid number');
    return false;
  }
  var i = 2;
  while(i > 0){
    if( isPrime(i, result) ){
      result.push(i);
    }
    if(result.length === inputNum ) break;
    i++;
  }
  console.log(input + 'th prime:'+ result[result.length-1] );
  if( debug ) console.timeEnd('t');

}

// param {int} n {array} primeArray
// return boolean
var isPrime = function( n, primeArray ){
  var l = primeArray.length;
  var currentMax = 1;
  if( l > 0){
    // 素数そのものだったらfalse
    if( n in primeArray) return false;

    // 素数で割り切れたらfalse
    for(var i=0; i<l; i++){
      if( n % primeArray[i] === 0 ) return false;
    }
    //currentMax = Math.max.apply(null, primeArray);
    currentMax = primeArray[l-1];
  }
  // nが自身でしか割り切れなければtrue
  for( var j= currentMax;j< n-1; j++){
    if ( n % j === 0 ) return false;
  }
  return true;
};

/* 考え方
素数配列で割れれば素数、割なければ素数配列の最大値からnまでをインクリメントして割り切れるかチェック
*/




Main(require("fs").readFileSync("/dev/stdin", "utf8"));


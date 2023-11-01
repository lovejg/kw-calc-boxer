function avg(numbers)
{
  let s=numbers.reduce((prev,curr)=>prev+curr,0);
  return s/numbers.length;
}

function prime(num)
{
  if(num==2) // 2 is prime number
    return true;
  let i=2;
  for(i=2;i<num;i++) // check from 2 to num-1
    if(num%i==0) // find divisor(not 1 and num)
      return false;
  if(i==num) // after normal loop, i should be num
    return true;
}

function fact(num)
{
  if(num>15) // out of range
    return -1;
  if(num==0) // exception case
    return 1;
  let s=1;
  for(let i=1;i<=num;i++) // multiply from 1 to num
    s*=i;
  return s;
}

module.exports={
  avg,
  prime,
  fact
}
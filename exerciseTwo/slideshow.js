let imgArr = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
let imgArrLength = imgArr.length;
let count = 1;
function Previous()
{
  count--;
  if(count == 0)
  {
    count = imgArrLength;
  }
  document.getElementById("Move").src = imgArr[count-1];
}

function Next()
{
  count++;
  if(count == imgArrLength+1)
  {
    count = 1;
  }
  document.getElementById("Move").src = imgArr[count-1];
}

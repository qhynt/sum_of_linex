/*定义函数*/


function myAdd()
{
var x=6;
var y=6;
return (x + y);
}


function StringToDigit(str)
{
	//var str="line1234";
	var nIdx;
	var varTest;

    nIdx = str.search(/[0-9]/);
    
    return Number(str.substr(nIdx));
    
    
}

/* 用函数来获取表格*/
function GetTableLen(window1, tagName)
{
	
	return window1.document.getElementsByTagName(tagName);
}

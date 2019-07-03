const rect = require('./Shape/rectangle');
const file = require('./File/FileManager')
// let http = require('http');
// const port = 3000;
// const server = http.createServer((request,respone) => {
// 	respone.write('This is a response for request');
// 	const ipAddress = request.socket.remoteAddress;
// 	respone.write(`This is access IP ${ipAddress} \r\n`);
// }).listen(port);

//file.CreateFolder('NgocSon');
//file.CreateFileText('NgocSon','SonDepTrai.txt','Son la mot nguoi rat dep trai');
//file.RenameFile('NgocSon','SonDepTrai.txt','MyXinhDep.txt');
file.DeleteFile('NgocSon','MyXinhDep.txt');
console.log('Server is running');	
console.log(`Dien tich hinh chu nhat, chieu dai 30 chieu rong 15 la ${rect.area(15,30)}`);
// Hoc ve String trong node.Js 
var str = 'abcdef'
console.log(str.length)
var pos = str.indexOf('bc')
console.log(pos)
function CheckString(str1,str2){
	if(str1.indexOf(str2) != -1)
	{
		return true
	}
	return false
}
if(CheckString('abcde','c')== true)
{
	console.log('Ton tai');
}
var versionString = "aosdjpasjdpajsdjpasjpdasdasfsfsafsdfas"
console.log(versionString)
// if (versionString) {
//     filePath = filePath.concat(`_v${versionString.replace('/', '-')}`)
//     console.log(filePath)
// }
var s1 = "MotHaiBa";
var s2 = "BonNamSau";
var s3 = s1.concat(s2);
console.log(s3);
const arr=['abcd']
var arrNumber  = [1,2,3,4,5,6,7,8,9]
console.log(arrNumber);
console.log(arrNumber);
function convertToMatrix(arr, width) {
  return arr.reduce((rows, key, index) => (index % width == 0
    ? rows.push([key])
    : rows[rows.length-1].push(key)) && rows, []);
}
var arr1 = convertToMatrix(arr,3);
var a = 'chrome'
console.log(arr1);
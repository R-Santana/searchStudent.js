var message = '';
var student;
var request;
var multiStudents =[];
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function getStudentReport(student){
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}
function noStudent(student){
  var noreport = '<h2>Sorry, there is no student by that name of "'+student+'" in our recordes.</h2>';
  return noreport;
}
function multiple(count){
  var multiName= (' We have '+count+' students in our recordes with that name:'); 
for (var i =0; i <multiStudents.length; i +=1){  
  multiName += '<h2>Student: ' + multiStudents[i].name + '</h2>';
  multiName += '<p>Track: ' + multiStudents[i].track + '</p>';
  multiName += '<p>Points: ' + multiStudents[i].points + '</p>';
  multiName += '<p>Achievements: ' + multiStudents[i].achievements + '</p>';
}
  return multiName; 
}
while(true) {
     request= prompt('Search student recordes: type a name[Jody] (or type "quit" to end)');
 var count=0;
 var studentRecords = false;
    if (request === null || request.toLowerCase() === 'quit'){
      break;
    } 
       for (var i = 0 ; i < students.length; i+=1){
           student = students[i];
         if (student.name ===request){
           for(var j=1;j<=1; j+=1){
              studName = students[j];
            if (student.name===studName.name){
                multiStudents.push(student);
                count+=1; 
            } 
           }
         }
       }
  if (count>=1){
          message= multiple(count);
          print(message);   
    break;
        }           
      for (var i = 0; i < students.length; i += 1) {
           student = students[i];
        if(student.name === request){
           studentRecords= true;
           message= getStudentReport(student);
           print(message);
        }             
       } 
        if (studentRecords===false){
            message = noStudent(request);
            print(message);
        }
       }
         
            

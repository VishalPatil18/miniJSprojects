const calcy = () =>{
    let maths = document.getElementById('maths').value;
    let machines = document.getElementById('machines').value;
    let networks = document.getElementById('networks').value;
    let edc = document.getElementById('edc').value;
    let powersystems = document.getElementById('powersystems').value;
    let machineslab = document.getElementById('machineslab').value;
    let edclab = document.getElementById('edclab').value;
    let grades = "";
        
    if (maths == 'AA' || maths == 'aa') {maths = 10;}
    else if (maths == 'AB' || maths == 'ab') {maths = 9;}
    else if (maths == 'BB' || maths == 'bb') {maths = 8;}
    else if (maths == 'BC' || maths == 'bc') {maths = 7;}
    else if (maths == 'CC' || maths == 'cc') {maths = 6;}
    else if (maths == 'CD' || maths == 'cd') {maths = 5;}
    else if (maths == 'DD' || maths == 'dd') {maths = 4;}
    else {maths = 0;}

    if (machines == 'AA' || machines == 'aa') {machines = 10;}
    else if (machines == 'AB' || machines == 'ab') {machines = 9;}
    else if (machines == 'BB' || machines == 'bb') {machines = 8;}
    else if (machines == 'BC' || machines == 'bc') {machines = 7;}
    else if (machines == 'CC' || machines == 'cc') {machines = 6;}
    else if (machines == 'CD' || machines == 'cd') {machines = 5;}
    else if (machines == 'DD' || machines == 'dd') {machines = 4;}
    else {machines = 0;}

    if (networks == 'AA' || networks == 'aa') {networks = 10;}
    else if (networks == 'AB' || networks == 'ab') {networks = 9;}
    else if (networks == 'BB' || networks == 'bb') {networks = 8;}
    else if (networks == 'BC' || networks == 'bc') {networks = 7;}
    else if (networks == 'CC' || networks == 'cc') {networks = 6;}
    else if (networks == 'CD' || networks == 'cd') {networks = 5;}
    else if (networks == 'DD' || networks == 'dd') {networks = 4;}
    else {networks = 0;}

    if (edc == 'AA' || edc == 'aa') {edc = 10;}
    else if (edc == 'AB' || edc == 'ab') {edc = 9;}
    else if (edc == 'BB' || edc == 'bb') {edc = 8;}
    else if (edc == 'BC' || edc == 'bc') {edc = 7;}
    else if (edc == 'CC' || edc == 'cc') {edc = 6;}
    else if (edc == 'CD' || edc == 'cd') {edc = 5;}
    else if (edc == 'DD' || edc == 'dd') {edc = 4;}
    else {edc = 0;}

    if (powersystems == 'AA' || powersystems == 'aa') {powersystems = 10;}
    else if (powersystems == 'AB' || powersystems == 'ab') {powersystems = 9;}
    else if (powersystems == 'BB' || powersystems == 'bb') {powersystems = 8;}
    else if (powersystems == 'BC' || powersystems == 'bc') {powersystems = 7;}
    else if (powersystems == 'CC' || powersystems == 'cc') {powersystems = 6;}
    else if (powersystems == 'CD' || powersystems == 'cd') {powersystems = 5;}
    else if (powersystems == 'DD' || powersystems == 'dd') {powersystems = 4;}
    else {powersystems = 0;}

    if (machineslab == 'AA' || machineslab == 'aa') {machineslab = 10;}
    else if (machineslab == 'AB' || machineslab == 'ab') {machineslab = 9;}
    else if (machineslab == 'BB' || machineslab == 'bb') {machineslab = 8;}
    else if (machineslab == 'BC' || machineslab == 'bc') {machineslab = 7;}
    else if (machineslab == 'CC' || machineslab == 'cc') {machineslab = 6;}
    else if (machineslab == 'CD' || machineslab == 'cd') {machineslab = 5;}
    else if (machineslab == 'DD' || machineslab == 'dd') {machineslab = 4;}
    else {machineslab = 0;}

    if (edclab == 'AA' || edclab == 'aa') {edclab = 10;}
    else if (edclab == 'AB' || edclab == 'ab') {edclab = 9;}
    else if (edclab == 'BB' || edclab == 'bb') {edclab = 8;}
    else if (edclab == 'BC' || edclab == 'bc') {edclab = 7;}
    else if (edclab == 'CC' || edclab == 'cc') {edclab = 6;}
    else if (edclab == 'CD' || edclab == 'cd') {edclab = 5;}
    else if (edclab == 'DD' || edclab == 'dd') {edclab = 4;}
    else {edclab = 0;}


    let totalGradesSubs = parseFloat(maths) +
                          parseFloat(machines) +
                          parseFloat(networks) +
                          parseFloat(edc) +
                          parseFloat(powersystems);

    let totalGradesLabs = parseFloat(machineslab) + parseFloat(edclab);
    let perc = ((totalGradesSubs*3) + (totalGradesLabs*1.5))/18;
    perc = perc.toFixed(2);

    // debugger;
    // console.log(maths);

    if(perc > 4) grades = 'PASS';
    else grades = 'FAILED';

    if(perc >= 4){
      document.getElementById('showData').innerHTML = `Your CGPA is ${perc}🤩 and guess what you're ${grades}🥳`
    }
    else{
      document.getElementById('showData').innerHTML = `You're Failed☹️. BuckleUp Champ you can do it😀. Just STUDY HARD🤠`
    }       
}
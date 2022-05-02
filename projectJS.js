
document.getElementById("myButton").addEventListener('click',myWindow)
    function myWindow()
    {
        visitorName = document.getElementById("myName").value;
        visitorAddress = document.getElementById("myAddress").value;
        visitorPhone = document.getElementById("myPhone").value;
        visitorEmail = document.getElementById("myEmail").value;
        visitorLinkedIn = document.getElementById("myLinkedIn").value;
        visitorPortfolio = document.getElementById("myPortfolio").value;
        myHeader = ("<html><head><link rel='stylesheet' type='text/css' href='finalProjectCSS.css' /></head><h1>"+visitorName+"'s Contact Info</h1><ul><li>"+ visitorName +"</li> <li>"+ visitorAddress +"</li> <li>" + visitorPhone + "</li> <li>" + visitorEmail + "</li> <li>"+ visitorLinkedIn +"</li> <li>" + visitorPortfolio + "</li> </ul></html>");
        let mySkills = document.getElementById("mySkills").value;

        skillsArray = mySkills.split(",");
        skills = ('<h2>Notable Skills</h2>');
        skills += ('<ul>');
        skillsArray.forEach(function(skill) {
            skills += '<li>' + skill + '</li>';
        });
        skills += ('</ul>');

        visitorEDU = document.getElementById("myEducation").value;
        education = ("<h2>Educational Information</h2>")
        education += (visitorEDU)

        recentEmp = document.getElementById("myEmployment").value;
        recentEmpDate = document.getElementById("empDate").value;
        prevEmp2 = document.getElementById("myEmployment2").value;
        prevEmp2Start = document.getElementById("empDate2Start").value;
        prevEmp2Fin = document.getElementById("empDate2Fin").value;
        prevEmp3 = document.getElementById("myEmployment3").value;
        prevEmp3Start = document.getElementById("empDate3Start").value;
        prevEmp3Fin = document.getElementById("empDate3Fin").value;
        employmentHist = ("<h2>Most Recent Employment</h2>");
        employmentHist += (recentEmpDate + "  ---  Present <br></br>");
        employmentHist += (recentEmp + "<br></br>");
        employmentHist += (prevEmp2Start + "  ---  " + prevEmp2Fin + "<br></br>" + prevEmp2 + "<br></br>");
        employmentHist += (prevEmp3Start + "  ---  " + prevEmp3Fin + "<br></br>" + prevEmp3);


        profRef = document.getElementById("myReferences").value;
        professionalRef = ("<h2>Professional References</h2>" + profRef);

        newWindow = window.open('about:blank','myPop','width=600,height=600,left=600,top=600');
        newWindow.document.write(myHeader);
        newWindow.document.write(skills);
        newWindow.document.write(education);
        newWindow.document.write(employmentHist);
        newWindow.document.write(professionalRef);
    }
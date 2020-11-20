var cont=document.createElement("div")
      cont.classList.add("profile")
var image=document.createElement("img")
       image.src="1599280742234.jpg"
       image.classList.add("avatar")
cont.append(image)
var srik=document.createElement("div")
        srik.classList.add("sri")
var nam=document.createElement("div")
        nam.classList.add("name")
var title=document.createElement("h1")
         title.innerHTML="SRIKANTH"
nam.append(title)
var address=document.createElement("h1")
         address.innerHTML="Chikkadapally Hyderabad 500020|9848282503|kasireddysrikanth27@gmail.com"
cont.append(srik,nam,address)
var row=document.createElement("div")
         row.classList.add("row")
var column=document.createElement("div")
         column.classList.add("column")
row.append(column)
cont.append(row)
var pof=document.createElement("h1")
var badge=document.createElement("i")
          badge.classList.add("farfa-id-badge")
          badge.innerHTML="Profile"
pof.append(badge)
cont.append(pof)
var des=document.createElement("p")
        des.innerHTML="Seeking dynamic training with a work designed to provide hands on experience to explore a challenging career as an engineer that may offer an opportunity to apply abilities and knowledge towards achieving the overall goal and to use these skills in future."
var sk=document.createElement("h1")
var skill=document.createElement("i")
          skill.classList.add("fasfa-book-open")
          skill.innerHTML="Skills"
des.append(sk)
sk.append(skill)
cont.append(des)
var skill1=document.createElement("p")
        skill1.innerHTML="HTML"
var html=document.createElement("div")
        html.classList.add("container")
var html1=document.createElement("div")
         html1.classList.add("html")
         html1.innerHTML="50%"
skill1.append(html,html1)
var skill2=document.createElement("p")
         skill2.innerHTML="CSS"
var css=document.createElement("div")
         html.classList.add("container")
var css1=document.createElement("div")
          css1.classList.add("css")
          css1.innerHTML="50%"
skill2.append(css,css1)
var skill3=document.createElement("p")
          skill3.innerHTML="JavaScript"
var js=document.createElement("div")
          js.classList.add("container")
var js1=document.createElement("div")
           js1.classList.add("js")
           js1.innerHTML="65%"
skill3.append(js,js1)
column.append(pof,des,skill1,skill2,skill3)
row.append(column)
var column1=document.createElement("div")
           column1.classList.add("column")
var edu=document.createElement("h1")
var cap=document.createElement("i")
          badge.classList.add("fasfa-graduation-cap")
          badge.innerHTML="Education"
edu.append(cap)
var tab=document.createElement("table")
          tab.style.width="100%"
          tab.classList.add("jo")
var tr1=document.createElement("tr")
var th1=document.createElement("th")
           th1.innerHTML="Course"
var th2=document.createElement("th")
           th2.innerHTML="Inistitution"
var th3=document.createElement("th")
           th3.innerHTML="Percentage"
tr1.append(th1,th2,th3)
tab.append(tr1)
var tr2=document.createElement("tr")
var td1=document.createElement("td")
           td1.innerHTML="B.TECH(mechanical engineering)"
var td2=document.createElement("td")
           td2.innerHTML="Vignan's university"
var td3=document.createElement("td")
           td3.innerHTML="77.6%"
tr2.append(td1,td2,td3)
tab.append(tr2)
var tr3=document.createElement("tr")
var td4=document.createElement("td")
            td4.innerHTML="Intermediate(M.P.C)"
var td5=document.createElement("td")
            td5.innerHTML="Narayana junior college"
var td6=document.createElement("td")
            td6.innerHTML="89.2%"
tr3.append(td4,td5,td6)
tab.append(tr3)
var tr4=document.createElement("tr")
var td7=document.createElement("td")
            td7.innerHTML="S.S.C"
var td8=document.createElement("td")
            td8.innerHTML="Sri chaitanya techno school"
var td9=document.createElement("td")
            td9.innerHTML="82.65%"
tr4.append(td7,td8,td9)
tab.append(tr4)
var str=document.createElement("h1")
var dumb=document.createElement("i")
            dumb.classList.add("fasfa-dumbbell")
            dumb.innerHTML="Strengths"
str.append(dumb)
var ul1=document.createElement("ul")
var li1=document.createElement("li")
            li1.innerHTML="Adaptability"
var li2=document.createElement("li")
            li2.innerHTML="Time management"
ul1.append(li1,li2)
var cer=document.createElement("h1")
var ti=document.createElement("i")
            ti.classList.add("fasfa-certificate")
            ti.innerHTML="Certifications"
cer.append(ti)
var ul2=document.createElement("ul")
     
var li3=document.createElement("li")
            li3.innerHTML="Certified in Preliminary English test at VFSTR university conducted by Cambridge University"
var li4=document.createElement("li")
            li4.innerHTML="Certified in Business English Certificate at VFSTR university conducted by Cambridge University"
ul2.append(li3,li4)
column1.append(edu,tab,str,ul1,cer,ul2)
row.append(column1)
cont.append(row)
document.body.append(cont)
 

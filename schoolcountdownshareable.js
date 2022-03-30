// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

today = new Date()
month = today.getMonth() + 1
year = today.getFullYear()

selectedDate = new Date("01/01/1900")
selectedContent = ""

varLength = 50
var entryDate = new Array(varLength)
var entryContent = new Array(varLength)

entryDate[0] = "03/30/2022"
entryContent[0] = "34 School Days Until the Last Day!"

entryDate[1] = " 03/31/2022"
entryContent[1] = "33 School Days Until the Last Day!"

entryDate[2] = " 04/01/2022"
entryContent[2] = "32 School Days Until the Last Day!"

entryDate[3] = " 04/02/2022"
entryContent[3] = "31 School Days Until the Last Day!"

entryDate[4] = " 04/03/2022"
entryContent[4] = "31 School Days Until the Last Day!"

entryDate[5] = " 04/04/2022"
entryContent[5] = "31 School Days Until the Last Day!"

entryDate[6] = " 04/05/2022"
entryContent[6] = "30 School Days Until the Last Day!"

entryDate[7] = " 04/06/2022"
entryContent[7] = "29 School Days Until the Last Day!"

entryDate[8] = " 04/07/2022"
entryContent[8] = "28 School Days Until the Last Day!"

entryDate[9] = " 04/08/2022"
entryContent[9] = "27 School Days Until the Last Day!"

entryDate[10] = " 04/09/2022"
entryContent[10] = "26 School Days Until the Last Day!"

entryDate[11] = " 04/010/2022"
entryContent[11] = "26 School Days Until the Last Day!"

entryDate[12] = " 04/11/2022"
entryContent[12] = "26 School Days Until the Last Day!"

entryDate[13] = " 04/12/2022"
entryContent[13] = "25 School Days Until the Last Day!"

entryDate[14] = " 04/13/2022"
entryContent[14] = "24 School Days Until the Last Day!"

entryDate[15] = " 04/14/2022"
entryContent[15] = "23 School Days Until the Last Day!"

entryDate[16] = " 04/15/2022"
entryContent[16] = "22 School Days Until the Last Day!"

entryDate[17] = " 04/16/2022"
entryContent[17] = "21 School Days Until the Last Day!"

entryDate[18] = " 04/17/2022"
entryContent[18] = "21 School Days Until the Last Day!"

entryDate[19] = " 04/18/2022"
entryContent[19] = "21 School Days Until the Last Day!"

entryDate[20] = " 04/19/2022"
entryContent[20] = "21 School Days Until the Last Day!"

entryDate[21] = " 04/20/2022"
entryContent[21] = "20 School Days Until the Last Day!"

entryDate[22] = " 04/21/2022"
entryContent[22] = "19 School Days Until the Last Day!"

entryDate[23] = " 04/22/2022"
entryContent[23] = "18 School Days Until the Last Day!"

entryDate[24] = " 04/23/2022"
entryContent[24] = "17 School Days Until the Last Day!"

entryDate[25] = " 04/24/2022"
entryContent[25] = "17 School Days Until the Last Day!"

entryDate[26] = " 04/25/2022"
entryContent[26] = "17 School Days Until the Last Day!"

entryDate[27] = " 04/26/2022"
entryContent[27] = "16 School Days Until the Last Day!"

entryDate[28] = " 04/27/2022"
entryContent[28] = "15 School Days Until the Last Day!"

entryDate[29] = " 04/28/2022"
entryContent[29] = "14 School Days Until the Last Day!"

entryDate[30] = " 04/29/2022"
entryContent[30] = "13 School Days Until the Last Day!"

entryDate[31] = " 04/30/2022"
entryContent[31] = "12 School Days Until the Last Day!"

entryDate[32] = " 05/01/2022"
entryContent[32] = "12 School Days Until the Last Day!"

entryDate[33] = " 05/02/2022"
entryContent[33] = "12 School Days Until the Last Day!"

entryDate[34] = " 05/03/2022"
entryContent[34] = "11 School Days Until the Last Day!"

entryDate[35] = " 05/04/2022"
entryContent[35] = "10 School Days Until the Last Day!"

entryDate[36] = " 05/05/2022"
entryContent[36] = "9 School Days Until the Last Day!"

entryDate[37] = " 05/06/2022"
entryContent[37] = "8 School Days Until the Last Day!"

entryDate[38] = " 05/07/2022"
entryContent[38] = "7 School Days Until the Last Day!"

entryDate[39] = " 05/08/2022"
entryContent[39] = "7 School Days Until the Last Day!"

entryDate[40] = " 05/09/2022"
entryContent[40] = "7 School Days Until the Last Day!"

entryDate[41] = " 05/10/2022"
entryContent[41] = "6 School Days Until the Last Day!"

entryDate[42] = " 05/11/2022"
entryContent[42] = "5 School Days Until the Last Day!"

entryDate[43] = " 05/12/2022"
entryContent[43] = "4 School Days Until the Last Day!"

entryDate[44] = " 05/13/2022"
entryContent[44] = "3 School Days Until the Last Day!"

entryDate[45] = " 05/14/2022"
entryContent[45] = "2 School Days Until the Last Day!"

entryDate[46] = " 05/15/2022"
entryContent[46] = "2 School Days Until the Last Day!"

entryDate[47] = " 05/16/2022"
entryContent[47] = "2 School Days Until the Last Day!"

entryDate[48] = " 05/17/2022"
entryContent[48] = "1 School Day Until the Last Day!"

entryDate[49] = " 05/18/2022"
entryContent[49] = "Last Day of School! Have a Great Summer!"

if (typeof display == "undefined") { var display = "date" }

if (display == "random")
{
  var randomNumber = Math.random()
  randomNumber *= varLength
  randomNumber = parseInt(randomNumber)
  if(isNaN(randomNumber)) randomNumber = 0
  else randomNumber %= varLength
  selectedContent = entryContent[randomNumber]
}
else
{
  for (x=0; x<(entryContent.length); x++)
  {
    tempDate = new Date(entryDate[x])
    tempContent = entryContent[x]
    if ((tempDate <= today) && (tempDate > selectedDate))
    {
      selectedContent = tempContent
      selectDate = tempDate
    }
  }
}

document.write (selectedContent)
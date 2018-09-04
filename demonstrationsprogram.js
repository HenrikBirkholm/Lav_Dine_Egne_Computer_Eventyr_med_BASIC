/*
10 REM DEMONSTRATIONSPROGRAM TIL EVENTYRSPIL -X-***F* 
20 REM AL=ANTALLET AF LOKALITETER * AN=ANTALLET AF 
  NAVNEORD **.-***
30 REM AU=ANTALLET AF UDSAGNSORD *** -3F*
40 REM GL=ANTALLET AF GENSTANDE, DER BEFINDER SIG PA 
  EN LOKALITET ******

50 AL=10:AN=10:AU=3:GL=6
*/
var antal_lokationer = 10;
var antal_navneord = 10;
var antal_udsagnsord = 3;
var antal_genstande = 6;

/*
60 REM VERDENSHJØRNER=NORDPA, SYDPA, ØSTPA, VESTPA 
  ***' **
70 REM NAVNEORD=FLASKE, ÆBLE, BOG, BLYANT, SVERD, 
  SPEJL ****CF
80 REM UDSAGNSORD = GA, TAGE, LIEGGE ******
90 REM L$()=BESKRIVELSE AF LOKALITET -)F L()=DATA FOR 
  DØRE ***** *
100 REM V$()=VERDENSHJØRNER (TIL BRUG I MENUEN) * 
  G'()=GENSTANDENS LOKALITET ******
110 REM G$()=BESKRIVELSE AF GENSTAND * U$()=DATA FOR 
  UDSAGNSORD * ****
120 REM N$()=DATA FOR NAVNEORD ***1F**

130 DIM L$(AL),L(AL,4),V$(4),G(GL),G$(GL),U$(AU), 
  N$(AN)
*/

var lokationer = [{'RUM NR. 1', 0,5,2,0},
                  {'RUM NR. 2', 0,0,3,1},
                  {'RUM NR. 3', 0,7,4,2},
                  {'RUM NR. 4', 0,0,0,3},
                  {'RUM NR. 5', 1,0,0,0},
                  {'RUM NR. 6', 0,9,7,0},
                  {'RUM NR. 7', 3,10,8,6},
                  {'RUM NR. 8', 0,0,0,7},
                  {'RUM NR. 9', 6,0,10,0},
                  {'RUM NR. 10', 7,0,0,9}];

var verdenshjoerner = ['NORDPÅ', 'SYDPÅ', 'ØSTPÅ', 'VESTPÅ'];

var genstands_lokalitet = [2,3,4,6,8,10];
var genstand_beskrivelse = ['EN BLYANT', 'ET SVÆRD', 'ET SPEJL', 'ET ÆBLE', 'EN 
  FLASKE' ,'EN BOG'];

var udsagnsord = ['GÅ', 'TAG', 'LÆG'];
var navneord = ['BLY', 'SVÆ', 'SPE', 'ÆBL', 'FLA', 'BOG', 'NOR', 'SYD', 'ØST', 'VES'];
var lo = 3;

/*
140 FOR I=1 TO AL:FOR J=1 TO 4:READ L(I,J):
  NEXT J:NEXT I
150 FOR I=1 TO 4:READ V$(I):NEXT I
160 FOR I=1 TO GL:READ G(I):NEXT I
170 FOR I=1 TO GL:READ G$(I):NEXT I
180 FOR I=1 TO AU:READ U$(I):NEXT I
190 FOR I=1 TO AN:READ N$(I):NEXT I
200 L$(1)= 'RUM NR. 1' 
210 DATA 0,5,2,0
220 L$(2)ø 'RUM NR. 2' 
230 DATA 0,0,3,1
240 L$(3)= 'RUM NR. 3' 
250 DATA 0,7,4,2
260 L$(4)= 'RUM NR. 4' 
270 DATA 0,0,0,3
280 L$(5)= 'RUM NR. 5' 
290 DATA 1,0,0,0
300 L$(6)= 'RUM NR. 6' 
310 DATA 0,9,7,0
320 L$(7)= 'RUM NR. 7" 
330 DATA 3,10,8,6
340 L$(8)= 'RUM NR. 8" 
350 DATA 0,0,0,7
360 L$(9)= 'RUM NR. 9' 
370 DATA 6,0,10,0
380 L$(10)ø 'RUM NR. 10" 
 390 DATA 7,0,0,9
 400 DATA NORDPA,SYDPA,ØSTPA,VESTPA
 410 DATA 2,3,4,6,8,10
 420 DATA EN BLYANT, ET SVÆRDET SPEJL, ET EBLE, EN 
  FLASKE,EN BOG
 430 DATA GA,TAG,LSG
440 DATA BLY,SVÆ,SPEOEBL,FLA,BOG,NOR,SYD,ØST,VES
450 LO=3

460 GOSUB 920 :REM GA NED TIL SKÆRMTEKST-SUBRUTINEN

919 REM SKERMTEKST-SUBRUTINE *****
920 CLS:REM COMMODORE-BRUGER, SKRIV I STEDET: PRINT 
    CHR$ (147) *****
930 PRINT "DU ER I ";L$(LO)
940 FOR I=1 TO GL:IF G(I)<>LO THEN 980
950 PRINT:PRINT"DU KAN SE:"
960 FOR I=1 TO GL:IF G(I)=LO THEN PRINT G$(I)
970 NEXT I:GOTO990
980 NEXT I
990 PRINT:PRINT"DU KAN GA:"
1000 FOR I=1 TO4:IF L(LO,I)<>0 THEN PRINT V$(I)
1010 NEXT I
1020 RETURN
*/

print(skaermtekst_subrutine);

function skaermtekst_subrutine() {
  var skaermtekst = 'DU ER I ' + lokationer[lo-1][0] + '.\n\n';
  for (var l = 0; i < antal_genstande; l++) {
    if genstands_lokalitet[l] = lo {
      skaermtekst += 'DU KAN SE: ' + genstand_beskrivelse[l] + '.\n\n'; 
    }
  }
  for (var retning = 1; retning <= 4; retning++) {
    skaermtekst += 'DU KAN GÅ: ';
    if lokationer[lo][retning] > 0 {
      skaermtekst += verdenshjoerner[retning] + ' ';
    }
  }
  return skaermtekst;
  }
  
}

print('HVAD VIL DU GØRE?\n');

function parsning(input_streng) {
  var is = input_streng.toUpperCase().trim();
  switch(is) {}
  case "STATUS": 
    status();
    break;
  case "N":
    is = "GÅ NORDPR";
    break;
  case "S":
    is = "GÅ SYDPÅ";
    break;
  case "Ø": 
  case "E":
    is = "GÅ ØSTPÅ";
    break;
  case "V":
  case "W":
    is = "GÅ VESTPÅ";
    break;
}

if (!is.indexOf(" ")>0) om_igen();

var ord = is.split(" ");
var udsagnsordet = ord[0].slice(0, 3);
var navneordet = ord[1].slice(0, 3);

var udsagnsord_nummer = -1;
for (var u=0; u < udsagnsord.length; u ++) {
  if (udsagnsordet === udsagnsord[u]) {
    udsagnsord_nummer = u;
    break;
  }
}

var navnesord_nummer = -1;
for (var n=0; u < navneord.length; n ++) {
  if (navneordet === navneord[n]) {
    navnesord_nummer = n;
    break;
  }
}

switch (udsagnsord_nummer) {
  case 0: // GÅ
    gaa();
    break:
  case 1: // TAG
    tag();
    break:
  case 2: // LÆG
    laeg();
    break:
  else:
}

/*
470 PRINT:PRINT 'HVAD VIL DU GORE"I
480 INPUT B$
490 PRINT
499 REM STRENGDELINGS-RUTINE ******
500 IF B*iu'R' THEN 460:REM RYD SKÆRM OG VIS 
  LOKALITETSBESKRIVELSE IGEN *ifr***
510 IF B$="STATUS' THEN 860
520 IF B$="N" THEN B$="GA NORDPR"
530 IF B$="S" THEN B$="GA SYDPA"
540 IF B$="Ø" THEN B$="GA ØSTPA"
550 IF B$="V" THEN B*="GA VESTPR"
560 FOR I=1 TO LEN(B$)
570 IF MID$(B*,I,1)=" " THEN 600
580 NEXT I
590 GOTO 1030:REM HVIS KUN EET ORD ******
600 UO$=LEFT$(B$,I-1)
610 NOS=RIGHT$(B$,(LEN(B$)-I))
620 IF U0$="GA" THEN 670:REM IKKE HVIS A=AA ****** 
630 IF LEN(UO$)<3 THEN 1030
640 UO$=LEFT$(U0$,3):FOR I=1 TO AU:IF UO$=U$(I) THEN 
  680
650 NEXT I
660 UO=0:GOTO 1030
670 UO=1:GOTO 690:REM IKKE HVIS A=AA ******
680 UO=I
690 IF LEN(NO$)<3 THEN 1030
700 NO'S=LEFT$(N0$,3):FOR I=1 TO AN:IF NOS=N$(I) THEN 
  730
710 NEXT I
720 NO=O:GOTO 1030
730 NO=I
739 REM UDSAGNSORD -1HE**HE-)E
740 ON UO GOTO 750,790,830

1029 REM "OM IGEN'-RUTINE ****** 
1030 PRINT "OM IGEN!':GOTO 470
*/

function om_igen () {
  return 'OM IGEN';
}

function gaa(var navnesord_nummer) {
  if (navnesord_nummer<6 || navnesord_nummer > 9) om_igen();
  var retning = navnesord_nummer - 6;
  if (lokationer[lo][retning] == 0) {
    return "DU KAN IKKE GA DEN VEJ.";
  } else {
    lo = lokationer[lo][retning];
    skaermtekst_subrutine();
  }
}

/*
749 REM GA ******
750 IF NO<7 THEN 1030
760 NO=NO-6
770 IF L(LO,N0)=0 THEN PRINT 'DU KAN IKKE GA DEN 
   VEJ.':GOTO 470
780 LO=L(LO,NO):GOTO 460
*/

function tag(var navnesord_nummer) {
  if (navnesord_nummer > navneord.length) om_igen();
  if (genstands_lokalitet[navnesord_nummer] == -1)  {
    return 'DET HAR DU ALLEREDE GJORT.';
  } else if (genstands_lokalitet[navnesord_nummer] == lo) {
    genstands_lokalitet[navnesord_nummer] = -1;
    return 'UDEMÆRKET'; 
  } else {
    return genstand_beskrivelse[navnesord_nummer] + 'FINDES IKKE HER.';
  }

}

/*
789 REM TAGE ******
790 IF NO>6 THEN 1030
800 IF G(NO)=-1 THEN PRINT 'DET HAR DU ALLEREDE 
   GJORT.":GOTO 470
810 IF G(NO)<>L0 THEN PRINT 'FINDES IKKE HER':GOTO 
   470
820 G(NO)=-1:PRINT 'UDMIERKET.':FOR I=1 TO
   500:NEXT I:GOTO 460
*/

function laeg(var navnesord_nummer) {
  if (navnesord_nummer > navneord.length) om_igen();
  if (genstands_lokalitet[navnesord_nummer] == -1)  {
    genstands_lokalitet[navnesord_nummer] = lo;
    return 'UDEMÆRKET';  
  } else {
    return 'FOR AT KUNNE LÆGGE NOGET, MÅ MAN 
   HAVE DET PA SIG.';
  }
}

/*
829 REM LEGGE * ***
830 IF NO>6 THEN 1030
840 IF GCNO)=-1 THEN PRINT "UDMÆERKET.':FOR I=1 TO 
   500:NEXT I:G(NO)aLO:GOTO 460
850 PRINT FOR AT KUNNE LIEGGE NOGET':PRINT "MA MAN 
   HAVE DET PA SIG.":GOTO 470
 */

function status() {
  var status = 'DU BÆRER FØLGENDE: \n ';
  var bp = 0;
  for (var i = 0; i < genstands_lokalitet.length; i++) {
    if (genstands_lokalitet[i] == -1) {
      bp++;
      status += genstand_beskrivelse[i] + '\n';
    }
  }
  if (bp == 0) {
    return 'INGENTING';
  } else {
    return status;
  }

}
/*
859 REM STATUS ******
860 PRINT:PRINT "DU BÆRER FØLGENDE:"
870 BP=0
880 FOR I=1 TO GL:IF G(I)=-1 THEN PRINT G$(1):BP=1 
890 NEXT I
900 IF BP=0 THEN PRINT "INGENTING"
910 GOTO 470
*/


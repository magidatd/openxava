// ** I18N
// Calendar PL language
// Author: Artur Filipiak, <imagen@poczta.fm>
// January, 2004
// Encoding: UTF-8
Calendar._DN = new Array
("Niedziela", "Poniedzia�ek", "Wtorek", "�roda", "Czwartek", "Pi�tek", "Sobota", "Niedziela");

Calendar._SDN = new Array
("N", "Pn", "Wt", "�r", "Cz", "Pt", "So", "N");

Calendar._MN = new Array
("Stycze�", "Luty", "Marzec", "Kwiecie�", "Maj", "Czerwiec", "Lipiec", "Sierpie�", "Wrzesie�", "Pa�dziernik", "Listopad", "Grudzie�");

Calendar._SMN = new Array
("Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa�", "Lis", "Gru");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "O kalendarzu";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Autor: Mihai Bazon\n" + // don't translate this this ;-)
"Aby pobra� najnowsz� wersj�, odwied�: http://www.dynarch.com/projects/calendar/\n" +
"Dost�pny na licencji GNU LGPL. Zobacz szczeg�y na http://gnu.org/licenses/lgpl.html." +
"\n\n" +
"Wyb�r daty:\n" +
"- aby wybra� rok u�yj przycisk�w \xab, \xbb\n" +
"- aby wybra� miesi�c u�yj przycisk�w " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + "\n" +
"- aby przyspieszy� wyb�r przytrzymaj wci�ni�ty przycisk myszy nad ww. przyciskami.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Wyb�r czasu:\n" +
"- aby zwi�kszy� warto�� kliknij na dowolnym elemencie selekcji czasu\n" +
"- aby zmniejszy� warto�� u�yj dodatkowo klawisza Shift\n" +
"- mo�esz r�wnie� porusza� myszk� w lewo i prawo wraz z wci�ni�tym lewym klawiszem.";

Calendar._TT["PREV_YEAR"] = "Poprz. rok (przytrzymaj dla menu)";
Calendar._TT["PREV_MONTH"] = "Poprz. miesi�c (przytrzymaj dla menu)";
Calendar._TT["GO_TODAY"] = "Poka� dzi�";
Calendar._TT["NEXT_MONTH"] = "Nast. miesi�c (przytrzymaj dla menu)";
Calendar._TT["NEXT_YEAR"] = "Nast. rok (przytrzymaj dla menu)";
Calendar._TT["SEL_DATE"] = "Wybierz dat�";
Calendar._TT["DRAG_TO_MOVE"] = "Przesu� okienko";
Calendar._TT["PART_TODAY"] = " (dzi�)";

//the following is to inform that "%s" is to be the first day of week
//%s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Poka� %s jako pierwszy";

//This may be locale-dependent.  It specifies the week-end days, as an array
//of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
//means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Zamknij";
Calendar._TT["TODAY"] = "Dzi�";
Calendar._TT["TIME_PART"] = "(Shift-)klik | drag, aby zmieni� warto��";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "Czas:";
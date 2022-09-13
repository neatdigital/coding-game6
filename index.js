// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*{
MODE PLUS RAPIDE
  Il faut passer le plus de tests, le plus rapidement possible.

  Objectif
  Find the sum of N complex numbers and print the square of that number. The symbol i represents the imaginary unit which is equal to the square root of -1.

  The sum of two complex numbers can be calculated using equation:
  a+bi + c+di = (a+c) + (b+d)i

  The square of a complex number a+bi can be calculated using binomial theorem:
  (a + bi)^2 = a^2 + (2*a*b)i + (bi)^2 = (a^2 - b^2) + (2*a*b)i

  For example the sum of the complex numbers 0+1i, -2-3i and 4+5i is
  (0-2+4) + (1-3+5)i = 2+3i

  and the square of that number is
  (2+3i)^2 = (2*2) + (2*2*3)i + (3i*3i) = -5+12i

  Entrée

  Line 1: An integer N for the number of complex numbers.
  Next N lines: N strings representing complex numbers, for example "-3+1i". If either the real or the imaginary part is 0 they will still be printed (for example 0 would be printed as "0+0i").

  Sortie

  A string representing a complex number, for example "4-3i". If either real or imaginary part is 0 it should still be printed (for example 0 would be printed as "0+0i").

  Contraintes

  1 ≤ N ≤ 100
  - 2^32 < real part, imaginary part < 2^32

  Exemple

  Entrée

  1
  4+2i

  Sortie

  12+16i

  =================================
  Entrée

  6
  7+1i
  3+2i
  3+6i
  -4-3i
  -2-5i
  -7-1i

  Sortie

  0+0i

  =================================
  Entrée

  100
  15+52i
  -43-12i
  -81-94i
  68-97i
  124+48i
  -46-85i
  -51-32i
  25+70i
  -112+94i
  -90-102i
  -12-38i
  -36-81i
  49+82i
  -62+25i
  -26+78i
  -111+20i
  -35+60i
  -15+99i
  -27-45i
  -31-36i
  -108+109i
  18-9i
  54+65i
  -7-84i
  31+6i
  6+20i
  65+100i
  85-50i
  15+67i
  -112+9i
  -62-94i
  -98+41i
  103-87i
  101-87i
  44+78i
  37-43i
  6+53i
  -73+76i
  -82+107i
  -80-60i
  117-81i
  32+98i
  -97-111i
  22-83i
  62+1i
  -109+120i
  93-9i
  -81-58i
  22-41i
  -125-2i
  -104-46i
  -97+113i
  -75+82i
  -77-78i
  54-106i
  28+111i
  -28+101i
  -100-35i
  92-124i
  5+106i
  -87-112i
  -22-33i
  74+114i
  -39+19i
  15-34i
  -80-117i
  107+2i
  -80-31i
  124+120i
  119-67i
  -42+24i
  83+52i
  0-82i
  -1+50i
  118+110i
  25+45i
  -111-106i
  16+41i
  -122-107i
  -71+30i
  21-84i
  61-22i
  64-94i
  99-61i
  -3+59i
  -57-88i
  -54+54i
  114+25i
  21-106i
  -17-119i
  49-35i
  121-87i
  -108-92i
  9+37i
  -114+103i
  11-101i
  -24+41i
  29+45i
  -75+50i
  -74+33i

  Sortie

  556392+563206i
  =================================
  Entrée

  20
  18085-27174i
  15469-23922i
  -2216+13061i
  -21303-11888i
  -6012+12050i
  -11621-15707i
  26984-6229i
  18352-14535i
  7188+11739i
  5510-30247i
  8801-3924i
  -28453+18155i
  12399+23706i
  -15519+19652i
  19379+9462i
  10806-10471i
  -28297+1071i
  -11671+25593i
  -24559+30298i
  6014-19849i

  Sortie

  -266385-1116848i

  =================================
  Entrée

  7
  0+7i
  0-23i
  0+131i
  0+77i
  0+34i
  0+6i
  0-231i

  Sortie

  -1+0i
  =================================
  Entrée

  8
  7+8i
  3+3i
  -6-4i
  1+2i
  -5+4i
  2-3i
  6-3i
  4-7i

  Sortie

  144+0i

}*/
//*{
const str = `1
  4+2i`;
//}*/
/*{
const str = `6
  7+1i
  3+2i
  3+6i
  -4-3i
  -2-5i
  -7-1i`;
//}*/
/*{
const str = `100
  15+52i
  -43-12i
  -81-94i
  68-97i
  124+48i
  -46-85i
  -51-32i
  25+70i
  -112+94i
  -90-102i
  -12-38i
  -36-81i
  49+82i
  -62+25i
  -26+78i
  -111+20i
  -35+60i
  -15+99i
  -27-45i
  -31-36i
  -108+109i
  18-9i
  54+65i
  -7-84i
  31+6i
  6+20i
  65+100i
  85-50i
  15+67i
  -112+9i
  -62-94i
  -98+41i
  103-87i
  101-87i
  44+78i
  37-43i
  6+53i
  -73+76i
  -82+107i
  -80-60i
  117-81i
  32+98i
  -97-111i
  22-83i
  62+1i
  -109+120i
  93-9i
  -81-58i
  22-41i
  -125-2i
  -104-46i
  -97+113i
  -75+82i
  -77-78i
  54-106i
  28+111i
  -28+101i
  -100-35i
  92-124i
  5+106i
  -87-112i
  -22-33i
  74+114i
  -39+19i
  15-34i
  -80-117i
  107+2i
  -80-31i
  124+120i
  119-67i
  -42+24i
  83+52i
  0-82i
  -1+50i
  118+110i
  25+45i
  -111-106i
  16+41i
  -122-107i
  -71+30i
  21-84i
  61-22i
  64-94i
  99-61i
  -3+59i
  -57-88i
  -54+54i
  114+25i
  21-106i
  -17-119i
  49-35i
  121-87i
  -108-92i
  9+37i
  -114+103i
  11-101i
  -24+41i
  29+45i
  -75+50i
  -74+33i`;
/}*/
/*{
const str = `20
  18085-27174i
  15469-23922i
  -2216+13061i
  -21303-11888i
  -6012+12050i
  -11621-15707i
  26984-6229i
  18352-14535i
  7188+11739i
  5510-30247i
  8801-3924i
  -28453+18155i
  12399+23706i
  -15519+19652i
  19379+9462i
  10806-10471i
  -28297+1071i
  -11671+25593i
  -24559+30298i
  6014-19849i`;
/}*/
/*{
const str = `7
  0+7i
  0-23i
  0+131i
  0+77i
  0+34i
  0+6i
  0-231i`;
/}*/
/*{
const str = `8
  7+8i
  3+3i
  -6-4i
  1+2i
  -5+4i
  2-3i
  6-3i
  4-7i`;
/}*/
for (const num of str.split(/\r?\n/)) {
  console.log(num);
}

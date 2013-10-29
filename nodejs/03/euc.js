exports.char_conv = function(str){
	str = new Buffer(str);
	var conv_str="";
	var n;
	for(var i=0;i<=str.length-1;i++){
		if(str[i]<=0x7F){
			var n = str[i];
		}else{
			var n = str[i]*0x100+str[i+1];
			i++;
		}
		switch(n){
case 0:
conv_str += "%00";
break;
case 1:
conv_str += "%01";
break;
case 2:
conv_str += "%02";
break;
case 3:
conv_str += "%03";
break;
case 4:
conv_str += "%04";
break;
case 5:
conv_str += "%05";
break;
case 6:
conv_str += "%06";
break;
case 7:
conv_str += "%07";
break;
case 8:
conv_str += "%08";
break;
case 9:
conv_str += "%09";
break;
case 10:
conv_str += "%0a";
break;
case 11:
conv_str += "%0b";
break;
case 12:
conv_str += "%0c";
break;
case 13:
conv_str += "%0d";
break;
case 14:
conv_str += "%0e";
break;
case 15:
conv_str += "%0f";
break;
case 16:
conv_str += "%10";
break;
case 17:
conv_str += "%11";
break;
case 18:
conv_str += "%12";
break;
case 19:
conv_str += "%13";
break;
case 20:
conv_str += "%14";
break;
case 21:
conv_str += "%15";
break;
case 22:
conv_str += "%16";
break;
case 23:
conv_str += "%17";
break;
case 24:
conv_str += "%18";
break;
case 25:
conv_str += "%19";
break;
case 26:
conv_str += "%1a";
break;
case 27:
conv_str += "%1b";
break;
case 28:
conv_str += "%1c";
break;
case 29:
conv_str += "%1d";
break;
case 30:
conv_str += "%1e";
break;
case 31:
conv_str += "%1f";
break;
case 32:
conv_str += " ";
break;
case 33:
conv_str += "!";
break;
case 34:
conv_str += "\"";
break;
case 35:
conv_str += "#";
break;
case 36:
conv_str += "$";
break;
case 37:
conv_str += "%";
break;
case 38:
conv_str += "&";
break;
case 39:
conv_str += "'";
break;
case 40:
conv_str += "(";
break;
case 41:
conv_str += ")";
break;
case 42:
conv_str += "*";
break;
case 43:
conv_str += "+";
break;
case 44:
conv_str += ",";
break;
case 45:
conv_str += "-";
break;
case 46:
conv_str += ".";
break;
case 47:
conv_str += "%2f";
break;
case 48:
conv_str += "0";
break;
case 49:
conv_str += "1";
break;
case 50:
conv_str += "2";
break;
case 51:
conv_str += "3";
break;
case 52:
conv_str += "4";
break;
case 53:
conv_str += "5";
break;
case 54:
conv_str += "6";
break;
case 55:
conv_str += "7";
break;
case 56:
conv_str += "8";
break;
case 57:
conv_str += "9";
break;
case 58:
conv_str += "%3a";
break;
case 59:
conv_str += "%3b";
break;
case 60:
conv_str += "<";
break;
case 61:
conv_str += "=";
break;
case 62:
conv_str += ">";
break;
case 63:
conv_str += "%3f";
break;
case 64:
conv_str += "@";
break;
case 65:
conv_str += "A";
break;
case 66:
conv_str += "B";
break;
case 67:
conv_str += "C";
break;
case 68:
conv_str += "D";
break;
case 69:
conv_str += "E";
break;
case 70:
conv_str += "F";
break;
case 71:
conv_str += "G";
break;
case 72:
conv_str += "H";
break;
case 73:
conv_str += "I";
break;
case 74:
conv_str += "J";
break;
case 75:
conv_str += "K";
break;
case 76:
conv_str += "L";
break;
case 77:
conv_str += "M";
break;
case 78:
conv_str += "N";
break;
case 79:
conv_str += "O";
break;
case 80:
conv_str += "P";
break;
case 81:
conv_str += "Q";
break;
case 82:
conv_str += "R";
break;
case 83:
conv_str += "S";
break;
case 84:
conv_str += "T";
break;
case 85:
conv_str += "U";
break;
case 86:
conv_str += "V";
break;
case 87:
conv_str += "W";
break;
case 88:
conv_str += "X";
break;
case 89:
conv_str += "Y";
break;
case 90:
conv_str += "Z";
break;
case 91:
conv_str += "[";
break;
case 92:
conv_str += "\\";
break;
case 93:
conv_str += "]";
break;
case 94:
conv_str += "^";
break;
case 95:
conv_str += "_";
break;
case 96:
conv_str += "`";
break;
case 97:
conv_str += "a";
break;
case 98:
conv_str += "b";
break;
case 99:
conv_str += "c";
break;
case 100:
conv_str += "d";
break;
case 101:
conv_str += "e";
break;
case 102:
conv_str += "f";
break;
case 103:
conv_str += "g";
break;
case 104:
conv_str += "h";
break;
case 105:
conv_str += "i";
break;
case 106:
conv_str += "j";
break;
case 107:
conv_str += "k";
break;
case 108:
conv_str += "l";
break;
case 109:
conv_str += "m";
break;
case 110:
conv_str += "n";
break;
case 111:
conv_str += "o";
break;
case 112:
conv_str += "p";
break;
case 113:
conv_str += "q";
break;
case 114:
conv_str += "r";
break;
case 115:
conv_str += "s";
break;
case 116:
conv_str += "t";
break;
case 117:
conv_str += "u";
break;
case 118:
conv_str += "v";
break;
case 119:
conv_str += "w";
break;
case 120:
conv_str += "x";
break;
case 121:
conv_str += "y";
break;
case 122:
conv_str += "z";
break;
case 123:
conv_str += "{";
break;
case 124:
conv_str += "|";
break;
case 125:
conv_str += "}";
break;
case 126:
conv_str += "~";
break;
case 127:
conv_str += "";
break;
case 41377:
conv_str += "%e3%80%80";
break;
case 41378:
conv_str += "%e3%80%81";
break;
case 41379:
conv_str += "%e3%80%82";
break;
case 41380:
conv_str += "%ef%bc%8c";
break;
case 41381:
conv_str += "%ef%bc%8e";
break;
case 41382:
conv_str += "%e3%83%bb";
break;
case 41383:
conv_str += "%ef%bc%9a";
break;
case 41384:
conv_str += "%ef%bc%9b";
break;
case 41385:
conv_str += "%ef%bc%9f";
break;
case 41386:
conv_str += "%ef%bc%81";
break;
case 41387:
conv_str += "%e3%82%9b";
break;
case 41388:
conv_str += "%e3%82%9c";
break;
case 41389:
conv_str += "%c2%b4";
break;
case 41390:
conv_str += "%ef%bd%80";
break;
case 41391:
conv_str += "%c2%a8";
break;
case 41392:
conv_str += "%ef%bc%be";
break;
case 41393:
conv_str += "%ef%bf%a3";
break;
case 41394:
conv_str += "%ef%bc%bf";
break;
case 41395:
conv_str += "%e3%83%bd";
break;
case 41396:
conv_str += "%e3%83%be";
break;
case 41397:
conv_str += "%e3%82%9d";
break;
case 41398:
conv_str += "%e3%82%9e";
break;
case 41399:
conv_str += "%e3%80%83";
break;
case 41400:
conv_str += "%e4%bb%9d";
break;
case 41401:
conv_str += "%e3%80%85";
break;
case 41402:
conv_str += "%e3%80%86";
break;
case 41403:
conv_str += "%e3%80%87";
break;
case 41404:
conv_str += "%e3%83%bc";
break;
case 41405:
conv_str += "%e2%80%94";
break;
case 41406:
conv_str += "%e2%80%90";
break;
case 41407:
conv_str += "%ef%bc%8f";
break;
case 41408:
conv_str += "%ef%bc%bc";
break;
case 41409:
conv_str += "%e3%80%9c";
break;
case 41410:
conv_str += "%e2%80%96";
break;
case 41411:
conv_str += "%ef%bd%9c";
break;
case 41412:
conv_str += "%e2%80%a6";
break;
case 41413:
conv_str += "%e2%80%a5";
break;
case 41414:
conv_str += "%e2%80%98";
break;
case 41415:
conv_str += "%e2%80%99";
break;
case 41416:
conv_str += "%e2%80%9c";
break;
case 41417:
conv_str += "%e2%80%9d";
break;
case 41418:
conv_str += "%ef%bc%88";
break;
case 41419:
conv_str += "%ef%bc%89";
break;
case 41420:
conv_str += "%e3%80%94";
break;
case 41421:
conv_str += "%e3%80%95";
break;
case 41422:
conv_str += "%ef%bc%bb";
break;
case 41423:
conv_str += "%ef%bc%bd";
break;
case 41424:
conv_str += "%ef%bd%9b";
break;
case 41425:
conv_str += "%ef%bd%9d";
break;
case 41426:
conv_str += "%e3%80%88";
break;
case 41427:
conv_str += "%e3%80%89";
break;
case 41428:
conv_str += "%e3%80%8a";
break;
case 41429:
conv_str += "%e3%80%8b";
break;
case 41430:
conv_str += "%e3%80%8c";
break;
case 41431:
conv_str += "%e3%80%8d";
break;
case 41432:
conv_str += "%e3%80%8e";
break;
case 41433:
conv_str += "%e3%80%8f";
break;
case 41434:
conv_str += "%e3%80%90";
break;
case 41435:
conv_str += "%e3%80%91";
break;
case 41436:
conv_str += "%ef%bc%8b";
break;
case 41437:
conv_str += "%e2%88%92";
break;
case 41438:
conv_str += "%c2%b1";
break;
case 41439:
conv_str += "%c3%97";
break;
case 41440:
conv_str += "%c3%b7";
break;
case 41441:
conv_str += "%ef%bc%9d";
break;
case 41442:
conv_str += "%e2%89%a0";
break;
case 41443:
conv_str += "%ef%bc%9c";
break;
case 41444:
conv_str += "%ef%bc%9e";
break;
case 41445:
conv_str += "%e2%89%a6";
break;
case 41446:
conv_str += "%e2%89%a7";
break;
case 41447:
conv_str += "%e2%88%9e";
break;
case 41448:
conv_str += "%e2%88%b4";
break;
case 41449:
conv_str += "%e2%99%82";
break;
case 41450:
conv_str += "%e2%99%80";
break;
case 41451:
conv_str += "%c2%b0";
break;
case 41452:
conv_str += "%e2%80%b2";
break;
case 41453:
conv_str += "%e2%80%b3";
break;
case 41454:
conv_str += "%e2%84%83";
break;
case 41455:
conv_str += "%ef%bf%a5";
break;
case 41456:
conv_str += "%ef%bc%84";
break;
case 41457:
conv_str += "%c2%a2";
break;
case 41458:
conv_str += "%c2%a3";
break;
case 41459:
conv_str += "%ef%bc%85";
break;
case 41460:
conv_str += "%ef%bc%83";
break;
case 41461:
conv_str += "%ef%bc%86";
break;
case 41462:
conv_str += "%ef%bc%8a";
break;
case 41463:
conv_str += "%ef%bc%a0";
break;
case 41464:
conv_str += "%c2%a7";
break;
case 41465:
conv_str += "%e2%98%86";
break;
case 41466:
conv_str += "%e2%98%85";
break;
case 41467:
conv_str += "%e2%97%8b";
break;
case 41468:
conv_str += "%e2%97%8f";
break;
case 41469:
conv_str += "%e2%97%8e";
break;
case 41470:
conv_str += "%e2%97%87";
break;
case 41633:
conv_str += "%e2%97%86";
break;
case 41634:
conv_str += "%e2%96%a1";
break;
case 41635:
conv_str += "%e2%96%a0";
break;
case 41636:
conv_str += "%e2%96%b3";
break;
case 41637:
conv_str += "%e2%96%b2";
break;
case 41638:
conv_str += "%e2%96%bd";
break;
case 41639:
conv_str += "%e2%96%bc";
break;
case 41640:
conv_str += "%e2%80%bb";
break;
case 41641:
conv_str += "%e3%80%92";
break;
case 41642:
conv_str += "%e2%86%92";
break;
case 41643:
conv_str += "%e2%86%90";
break;
case 41644:
conv_str += "%e2%86%91";
break;
case 41645:
conv_str += "%e2%86%93";
break;
case 41646:
conv_str += "%e3%80%93";
break;
case 41658:
conv_str += "%e2%88%88";
break;
case 41659:
conv_str += "%e2%88%8b";
break;
case 41660:
conv_str += "%e2%8a%86";
break;
case 41661:
conv_str += "%e2%8a%87";
break;
case 41662:
conv_str += "%e2%8a%82";
break;
case 41663:
conv_str += "%e2%8a%83";
break;
case 41664:
conv_str += "%e2%88%aa";
break;
case 41665:
conv_str += "%e2%88%a9";
break;
case 41674:
conv_str += "%e2%88%a7";
break;
case 41675:
conv_str += "%e2%88%a8";
break;
case 41676:
conv_str += "%c2%ac";
break;
case 41677:
conv_str += "%e2%87%92";
break;
case 41678:
conv_str += "%e2%87%94";
break;
case 41679:
conv_str += "%e2%88%80";
break;
case 41680:
conv_str += "%e2%88%83";
break;
case 41692:
conv_str += "%e2%88%a0";
break;
case 41693:
conv_str += "%e2%8a%a5";
break;
case 41694:
conv_str += "%e2%8c%92";
break;
case 41695:
conv_str += "%e2%88%82";
break;
case 41696:
conv_str += "%e2%88%87";
break;
case 41697:
conv_str += "%e2%89%a1";
break;
case 41698:
conv_str += "%e2%89%92";
break;
case 41699:
conv_str += "%e2%89%aa";
break;
case 41700:
conv_str += "%e2%89%ab";
break;
case 41701:
conv_str += "%e2%88%9a";
break;
case 41702:
conv_str += "%e2%88%bd";
break;
case 41703:
conv_str += "%e2%88%9d";
break;
case 41704:
conv_str += "%e2%88%b5";
break;
case 41705:
conv_str += "%e2%88%ab";
break;
case 41706:
conv_str += "%e2%88%ac";
break;
case 41714:
conv_str += "%e2%84%ab";
break;
case 41715:
conv_str += "%e2%80%b0";
break;
case 41716:
conv_str += "%e2%99%af";
break;
case 41717:
conv_str += "%e2%99%ad";
break;
case 41718:
conv_str += "%e2%99%aa";
break;
case 41719:
conv_str += "%e2%80%a0";
break;
case 41720:
conv_str += "%e2%80%a1";
break;
case 41721:
conv_str += "%c2%b6";
break;
case 41726:
conv_str += "%e2%97%af";
break;
case 41904:
conv_str += "%ef%bc%90";
break;
case 41905:
conv_str += "%ef%bc%91";
break;
case 41906:
conv_str += "%ef%bc%92";
break;
case 41907:
conv_str += "%ef%bc%93";
break;
case 41908:
conv_str += "%ef%bc%94";
break;
case 41909:
conv_str += "%ef%bc%95";
break;
case 41910:
conv_str += "%ef%bc%96";
break;
case 41911:
conv_str += "%ef%bc%97";
break;
case 41912:
conv_str += "%ef%bc%98";
break;
case 41913:
conv_str += "%ef%bc%99";
break;
case 41921:
conv_str += "%ef%bc%a1";
break;
case 41922:
conv_str += "%ef%bc%a2";
break;
case 41923:
conv_str += "%ef%bc%a3";
break;
case 41924:
conv_str += "%ef%bc%a4";
break;
case 41925:
conv_str += "%ef%bc%a5";
break;
case 41926:
conv_str += "%ef%bc%a6";
break;
case 41927:
conv_str += "%ef%bc%a7";
break;
case 41928:
conv_str += "%ef%bc%a8";
break;
case 41929:
conv_str += "%ef%bc%a9";
break;
case 41930:
conv_str += "%ef%bc%aa";
break;
case 41931:
conv_str += "%ef%bc%ab";
break;
case 41932:
conv_str += "%ef%bc%ac";
break;
case 41933:
conv_str += "%ef%bc%ad";
break;
case 41934:
conv_str += "%ef%bc%ae";
break;
case 41935:
conv_str += "%ef%bc%af";
break;
case 41936:
conv_str += "%ef%bc%b0";
break;
case 41937:
conv_str += "%ef%bc%b1";
break;
case 41938:
conv_str += "%ef%bc%b2";
break;
case 41939:
conv_str += "%ef%bc%b3";
break;
case 41940:
conv_str += "%ef%bc%b4";
break;
case 41941:
conv_str += "%ef%bc%b5";
break;
case 41942:
conv_str += "%ef%bc%b6";
break;
case 41943:
conv_str += "%ef%bc%b7";
break;
case 41944:
conv_str += "%ef%bc%b8";
break;
case 41945:
conv_str += "%ef%bc%b9";
break;
case 41946:
conv_str += "%ef%bc%ba";
break;
case 41953:
conv_str += "%ef%bd%81";
break;
case 41954:
conv_str += "%ef%bd%82";
break;
case 41955:
conv_str += "%ef%bd%83";
break;
case 41956:
conv_str += "%ef%bd%84";
break;
case 41957:
conv_str += "%ef%bd%85";
break;
case 41958:
conv_str += "%ef%bd%86";
break;
case 41959:
conv_str += "%ef%bd%87";
break;
case 41960:
conv_str += "%ef%bd%88";
break;
case 41961:
conv_str += "%ef%bd%89";
break;
case 41962:
conv_str += "%ef%bd%8a";
break;
case 41963:
conv_str += "%ef%bd%8b";
break;
case 41964:
conv_str += "%ef%bd%8c";
break;
case 41965:
conv_str += "%ef%bd%8d";
break;
case 41966:
conv_str += "%ef%bd%8e";
break;
case 41967:
conv_str += "%ef%bd%8f";
break;
case 41968:
conv_str += "%ef%bd%90";
break;
case 41969:
conv_str += "%ef%bd%91";
break;
case 41970:
conv_str += "%ef%bd%92";
break;
case 41971:
conv_str += "%ef%bd%93";
break;
case 41972:
conv_str += "%ef%bd%94";
break;
case 41973:
conv_str += "%ef%bd%95";
break;
case 41974:
conv_str += "%ef%bd%96";
break;
case 41975:
conv_str += "%ef%bd%97";
break;
case 41976:
conv_str += "%ef%bd%98";
break;
case 41977:
conv_str += "%ef%bd%99";
break;
case 41978:
conv_str += "%ef%bd%9a";
break;
case 42145:
conv_str += "%e3%81%81";
break;
case 42146:
conv_str += "%e3%81%82";
break;
case 42147:
conv_str += "%e3%81%83";
break;
case 42148:
conv_str += "%e3%81%84";
break;
case 42149:
conv_str += "%e3%81%85";
break;
case 42150:
conv_str += "%e3%81%86";
break;
case 42151:
conv_str += "%e3%81%87";
break;
case 42152:
conv_str += "%e3%81%88";
break;
case 42153:
conv_str += "%e3%81%89";
break;
case 42154:
conv_str += "%e3%81%8a";
break;
case 42155:
conv_str += "%e3%81%8b";
break;
case 42156:
conv_str += "%e3%81%8c";
break;
case 42157:
conv_str += "%e3%81%8d";
break;
case 42158:
conv_str += "%e3%81%8e";
break;
case 42159:
conv_str += "%e3%81%8f";
break;
case 42160:
conv_str += "%e3%81%90";
break;
case 42161:
conv_str += "%e3%81%91";
break;
case 42162:
conv_str += "%e3%81%92";
break;
case 42163:
conv_str += "%e3%81%93";
break;
case 42164:
conv_str += "%e3%81%94";
break;
case 42165:
conv_str += "%e3%81%95";
break;
case 42166:
conv_str += "%e3%81%96";
break;
case 42167:
conv_str += "%e3%81%97";
break;
case 42168:
conv_str += "%e3%81%98";
break;
case 42169:
conv_str += "%e3%81%99";
break;
case 42170:
conv_str += "%e3%81%9a";
break;
case 42171:
conv_str += "%e3%81%9b";
break;
case 42172:
conv_str += "%e3%81%9c";
break;
case 42173:
conv_str += "%e3%81%9d";
break;
case 42174:
conv_str += "%e3%81%9e";
break;
case 42175:
conv_str += "%e3%81%9f";
break;
case 42176:
conv_str += "%e3%81%a0";
break;
case 42177:
conv_str += "%e3%81%a1";
break;
case 42178:
conv_str += "%e3%81%a2";
break;
case 42179:
conv_str += "%e3%81%a3";
break;
case 42180:
conv_str += "%e3%81%a4";
break;
case 42181:
conv_str += "%e3%81%a5";
break;
case 42182:
conv_str += "%e3%81%a6";
break;
case 42183:
conv_str += "%e3%81%a7";
break;
case 42184:
conv_str += "%e3%81%a8";
break;
case 42185:
conv_str += "%e3%81%a9";
break;
case 42186:
conv_str += "%e3%81%aa";
break;
case 42187:
conv_str += "%e3%81%ab";
break;
case 42188:
conv_str += "%e3%81%ac";
break;
case 42189:
conv_str += "%e3%81%ad";
break;
case 42190:
conv_str += "%e3%81%ae";
break;
case 42191:
conv_str += "%e3%81%af";
break;
case 42192:
conv_str += "%e3%81%b0";
break;
case 42193:
conv_str += "%e3%81%b1";
break;
case 42194:
conv_str += "%e3%81%b2";
break;
case 42195:
conv_str += "%e3%81%b3";
break;
case 42196:
conv_str += "%e3%81%b4";
break;
case 42197:
conv_str += "%e3%81%b5";
break;
case 42198:
conv_str += "%e3%81%b6";
break;
case 42199:
conv_str += "%e3%81%b7";
break;
case 42200:
conv_str += "%e3%81%b8";
break;
case 42201:
conv_str += "%e3%81%b9";
break;
case 42202:
conv_str += "%e3%81%ba";
break;
case 42203:
conv_str += "%e3%81%bb";
break;
case 42204:
conv_str += "%e3%81%bc";
break;
case 42205:
conv_str += "%e3%81%bd";
break;
case 42206:
conv_str += "%e3%81%be";
break;
case 42207:
conv_str += "%e3%81%bf";
break;
case 42208:
conv_str += "%e3%82%80";
break;
case 42209:
conv_str += "%e3%82%81";
break;
case 42210:
conv_str += "%e3%82%82";
break;
case 42211:
conv_str += "%e3%82%83";
break;
case 42212:
conv_str += "%e3%82%84";
break;
case 42213:
conv_str += "%e3%82%85";
break;
case 42214:
conv_str += "%e3%82%86";
break;
case 42215:
conv_str += "%e3%82%87";
break;
case 42216:
conv_str += "%e3%82%88";
break;
case 42217:
conv_str += "%e3%82%89";
break;
case 42218:
conv_str += "%e3%82%8a";
break;
case 42219:
conv_str += "%e3%82%8b";
break;
case 42220:
conv_str += "%e3%82%8c";
break;
case 42221:
conv_str += "%e3%82%8d";
break;
case 42222:
conv_str += "%e3%82%8e";
break;
case 42223:
conv_str += "%e3%82%8f";
break;
case 42224:
conv_str += "%e3%82%90";
break;
case 42225:
conv_str += "%e3%82%91";
break;
case 42226:
conv_str += "%e3%82%92";
break;
case 42227:
conv_str += "%e3%82%93";
break;
case 42401:
conv_str += "%e3%82%a1";
break;
case 42402:
conv_str += "%e3%82%a2";
break;
case 42403:
conv_str += "%e3%82%a3";
break;
case 42404:
conv_str += "%e3%82%a4";
break;
case 42405:
conv_str += "%e3%82%a5";
break;
case 42406:
conv_str += "%e3%82%a6";
break;
case 42407:
conv_str += "%e3%82%a7";
break;
case 42408:
conv_str += "%e3%82%a8";
break;
case 42409:
conv_str += "%e3%82%a9";
break;
case 42410:
conv_str += "%e3%82%aa";
break;
case 42411:
conv_str += "%e3%82%ab";
break;
case 42412:
conv_str += "%e3%82%ac";
break;
case 42413:
conv_str += "%e3%82%ad";
break;
case 42414:
conv_str += "%e3%82%ae";
break;
case 42415:
conv_str += "%e3%82%af";
break;
case 42416:
conv_str += "%e3%82%b0";
break;
case 42417:
conv_str += "%e3%82%b1";
break;
case 42418:
conv_str += "%e3%82%b2";
break;
case 42419:
conv_str += "%e3%82%b3";
break;
case 42420:
conv_str += "%e3%82%b4";
break;
case 42421:
conv_str += "%e3%82%b5";
break;
case 42422:
conv_str += "%e3%82%b6";
break;
case 42423:
conv_str += "%e3%82%b7";
break;
case 42424:
conv_str += "%e3%82%b8";
break;
case 42425:
conv_str += "%e3%82%b9";
break;
case 42426:
conv_str += "%e3%82%ba";
break;
case 42427:
conv_str += "%e3%82%bb";
break;
case 42428:
conv_str += "%e3%82%bc";
break;
case 42429:
conv_str += "%e3%82%bd";
break;
case 42430:
conv_str += "%e3%82%be";
break;
case 42431:
conv_str += "%e3%82%bf";
break;
case 42432:
conv_str += "%e3%83%80";
break;
case 42433:
conv_str += "%e3%83%81";
break;
case 42434:
conv_str += "%e3%83%82";
break;
case 42435:
conv_str += "%e3%83%83";
break;
case 42436:
conv_str += "%e3%83%84";
break;
case 42437:
conv_str += "%e3%83%85";
break;
case 42438:
conv_str += "%e3%83%86";
break;
case 42439:
conv_str += "%e3%83%87";
break;
case 42440:
conv_str += "%e3%83%88";
break;
case 42441:
conv_str += "%e3%83%89";
break;
case 42442:
conv_str += "%e3%83%8a";
break;
case 42443:
conv_str += "%e3%83%8b";
break;
case 42444:
conv_str += "%e3%83%8c";
break;
case 42445:
conv_str += "%e3%83%8d";
break;
case 42446:
conv_str += "%e3%83%8e";
break;
case 42447:
conv_str += "%e3%83%8f";
break;
case 42448:
conv_str += "%e3%83%90";
break;
case 42449:
conv_str += "%e3%83%91";
break;
case 42450:
conv_str += "%e3%83%92";
break;
case 42451:
conv_str += "%e3%83%93";
break;
case 42452:
conv_str += "%e3%83%94";
break;
case 42453:
conv_str += "%e3%83%95";
break;
case 42454:
conv_str += "%e3%83%96";
break;
case 42455:
conv_str += "%e3%83%97";
break;
case 42456:
conv_str += "%e3%83%98";
break;
case 42457:
conv_str += "%e3%83%99";
break;
case 42458:
conv_str += "%e3%83%9a";
break;
case 42459:
conv_str += "%e3%83%9b";
break;
case 42460:
conv_str += "%e3%83%9c";
break;
case 42461:
conv_str += "%e3%83%9d";
break;
case 42462:
conv_str += "%e3%83%9e";
break;
case 42463:
conv_str += "%e3%83%9f";
break;
case 42464:
conv_str += "%e3%83%a0";
break;
case 42465:
conv_str += "%e3%83%a1";
break;
case 42466:
conv_str += "%e3%83%a2";
break;
case 42467:
conv_str += "%e3%83%a3";
break;
case 42468:
conv_str += "%e3%83%a4";
break;
case 42469:
conv_str += "%e3%83%a5";
break;
case 42470:
conv_str += "%e3%83%a6";
break;
case 42471:
conv_str += "%e3%83%a7";
break;
case 42472:
conv_str += "%e3%83%a8";
break;
case 42473:
conv_str += "%e3%83%a9";
break;
case 42474:
conv_str += "%e3%83%aa";
break;
case 42475:
conv_str += "%e3%83%ab";
break;
case 42476:
conv_str += "%e3%83%ac";
break;
case 42477:
conv_str += "%e3%83%ad";
break;
case 42478:
conv_str += "%e3%83%ae";
break;
case 42479:
conv_str += "%e3%83%af";
break;
case 42480:
conv_str += "%e3%83%b0";
break;
case 42481:
conv_str += "%e3%83%b1";
break;
case 42482:
conv_str += "%e3%83%b2";
break;
case 42483:
conv_str += "%e3%83%b3";
break;
case 42484:
conv_str += "%e3%83%b4";
break;
case 42485:
conv_str += "%e3%83%b5";
break;
case 42486:
conv_str += "%e3%83%b6";
break;
case 42657:
conv_str += "%ce%91";
break;
case 42658:
conv_str += "%ce%92";
break;
case 42659:
conv_str += "%ce%93";
break;
case 42660:
conv_str += "%ce%94";
break;
case 42661:
conv_str += "%ce%95";
break;
case 42662:
conv_str += "%ce%96";
break;
case 42663:
conv_str += "%ce%97";
break;
case 42664:
conv_str += "%ce%98";
break;
case 42665:
conv_str += "%ce%99";
break;
case 42666:
conv_str += "%ce%9a";
break;
case 42667:
conv_str += "%ce%9b";
break;
case 42668:
conv_str += "%ce%9c";
break;
case 42669:
conv_str += "%ce%9d";
break;
case 42670:
conv_str += "%ce%9e";
break;
case 42671:
conv_str += "%ce%9f";
break;
case 42672:
conv_str += "%ce%a0";
break;
case 42673:
conv_str += "%ce%a1";
break;
case 42674:
conv_str += "%ce%a3";
break;
case 42675:
conv_str += "%ce%a4";
break;
case 42676:
conv_str += "%ce%a5";
break;
case 42677:
conv_str += "%ce%a6";
break;
case 42678:
conv_str += "%ce%a7";
break;
case 42679:
conv_str += "%ce%a8";
break;
case 42680:
conv_str += "%ce%a9";
break;
case 42689:
conv_str += "%ce%b1";
break;
case 42690:
conv_str += "%ce%b2";
break;
case 42691:
conv_str += "%ce%b3";
break;
case 42692:
conv_str += "%ce%b4";
break;
case 42693:
conv_str += "%ce%b5";
break;
case 42694:
conv_str += "%ce%b6";
break;
case 42695:
conv_str += "%ce%b7";
break;
case 42696:
conv_str += "%ce%b8";
break;
case 42697:
conv_str += "%ce%b9";
break;
case 42698:
conv_str += "%ce%ba";
break;
case 42699:
conv_str += "%ce%bb";
break;
case 42700:
conv_str += "%ce%bc";
break;
case 42701:
conv_str += "%ce%bd";
break;
case 42702:
conv_str += "%ce%be";
break;
case 42703:
conv_str += "%ce%bf";
break;
case 42704:
conv_str += "%cf%80";
break;
case 42705:
conv_str += "%cf%81";
break;
case 42706:
conv_str += "%cf%83";
break;
case 42707:
conv_str += "%cf%84";
break;
case 42708:
conv_str += "%cf%85";
break;
case 42709:
conv_str += "%cf%86";
break;
case 42710:
conv_str += "%cf%87";
break;
case 42711:
conv_str += "%cf%88";
break;
case 42712:
conv_str += "%cf%89";
break;
case 42913:
conv_str += "%d0%90";
break;
case 42914:
conv_str += "%d0%91";
break;
case 42915:
conv_str += "%d0%92";
break;
case 42916:
conv_str += "%d0%93";
break;
case 42917:
conv_str += "%d0%94";
break;
case 42918:
conv_str += "%d0%95";
break;
case 42919:
conv_str += "%d0%81";
break;
case 42920:
conv_str += "%d0%96";
break;
case 42921:
conv_str += "%d0%97";
break;
case 42922:
conv_str += "%d0%98";
break;
case 42923:
conv_str += "%d0%99";
break;
case 42924:
conv_str += "%d0%9a";
break;
case 42925:
conv_str += "%d0%9b";
break;
case 42926:
conv_str += "%d0%9c";
break;
case 42927:
conv_str += "%d0%9d";
break;
case 42928:
conv_str += "%d0%9e";
break;
case 42929:
conv_str += "%d0%9f";
break;
case 42930:
conv_str += "%d0%a0";
break;
case 42931:
conv_str += "%d0%a1";
break;
case 42932:
conv_str += "%d0%a2";
break;
case 42933:
conv_str += "%d0%a3";
break;
case 42934:
conv_str += "%d0%a4";
break;
case 42935:
conv_str += "%d0%a5";
break;
case 42936:
conv_str += "%d0%a6";
break;
case 42937:
conv_str += "%d0%a7";
break;
case 42938:
conv_str += "%d0%a8";
break;
case 42939:
conv_str += "%d0%a9";
break;
case 42940:
conv_str += "%d0%aa";
break;
case 42941:
conv_str += "%d0%ab";
break;
case 42942:
conv_str += "%d0%ac";
break;
case 42943:
conv_str += "%d0%ad";
break;
case 42944:
conv_str += "%d0%ae";
break;
case 42945:
conv_str += "%d0%af";
break;
case 42961:
conv_str += "%d0%b0";
break;
case 42962:
conv_str += "%d0%b1";
break;
case 42963:
conv_str += "%d0%b2";
break;
case 42964:
conv_str += "%d0%b3";
break;
case 42965:
conv_str += "%d0%b4";
break;
case 42966:
conv_str += "%d0%b5";
break;
case 42967:
conv_str += "%d1%91";
break;
case 42968:
conv_str += "%d0%b6";
break;
case 42969:
conv_str += "%d0%b7";
break;
case 42970:
conv_str += "%d0%b8";
break;
case 42971:
conv_str += "%d0%b9";
break;
case 42972:
conv_str += "%d0%ba";
break;
case 42973:
conv_str += "%d0%bb";
break;
case 42974:
conv_str += "%d0%bc";
break;
case 42975:
conv_str += "%d0%bd";
break;
case 42976:
conv_str += "%d0%be";
break;
case 42977:
conv_str += "%d0%bf";
break;
case 42978:
conv_str += "%d1%80";
break;
case 42979:
conv_str += "%d1%81";
break;
case 42980:
conv_str += "%d1%82";
break;
case 42981:
conv_str += "%d1%83";
break;
case 42982:
conv_str += "%d1%84";
break;
case 42983:
conv_str += "%d1%85";
break;
case 42984:
conv_str += "%d1%86";
break;
case 42985:
conv_str += "%d1%87";
break;
case 42986:
conv_str += "%d1%88";
break;
case 42987:
conv_str += "%d1%89";
break;
case 42988:
conv_str += "%d1%8a";
break;
case 42989:
conv_str += "%d1%8b";
break;
case 42990:
conv_str += "%d1%8c";
break;
case 42991:
conv_str += "%d1%8d";
break;
case 42992:
conv_str += "%d1%8e";
break;
case 42993:
conv_str += "%d1%8f";
break;
case 43169:
conv_str += "%e2%94%80";
break;
case 43170:
conv_str += "%e2%94%82";
break;
case 43171:
conv_str += "%e2%94%8c";
break;
case 43172:
conv_str += "%e2%94%90";
break;
case 43173:
conv_str += "%e2%94%98";
break;
case 43174:
conv_str += "%e2%94%94";
break;
case 43175:
conv_str += "%e2%94%9c";
break;
case 43176:
conv_str += "%e2%94%ac";
break;
case 43177:
conv_str += "%e2%94%a4";
break;
case 43178:
conv_str += "%e2%94%b4";
break;
case 43179:
conv_str += "%e2%94%bc";
break;
case 43180:
conv_str += "%e2%94%81";
break;
case 43181:
conv_str += "%e2%94%83";
break;
case 43182:
conv_str += "%e2%94%8f";
break;
case 43183:
conv_str += "%e2%94%93";
break;
case 43184:
conv_str += "%e2%94%9b";
break;
case 43185:
conv_str += "%e2%94%97";
break;
case 43186:
conv_str += "%e2%94%a3";
break;
case 43187:
conv_str += "%e2%94%b3";
break;
case 43188:
conv_str += "%e2%94%ab";
break;
case 43189:
conv_str += "%e2%94%bb";
break;
case 43190:
conv_str += "%e2%95%8b";
break;
case 43191:
conv_str += "%e2%94%a0";
break;
case 43192:
conv_str += "%e2%94%af";
break;
case 43193:
conv_str += "%e2%94%a8";
break;
case 43194:
conv_str += "%e2%94%b7";
break;
case 43195:
conv_str += "%e2%94%bf";
break;
case 43196:
conv_str += "%e2%94%9d";
break;
case 43197:
conv_str += "%e2%94%b0";
break;
case 43198:
conv_str += "%e2%94%a5";
break;
case 43199:
conv_str += "%e2%94%b8";
break;
case 43200:
conv_str += "%e2%95%82";
break;
case 45217:
conv_str += "%e4%ba%9c";
break;
case 45218:
conv_str += "%e5%94%96";
break;
case 45219:
conv_str += "%e5%a8%83";
break;
case 45220:
conv_str += "%e9%98%bf";
break;
case 45221:
conv_str += "%e5%93%80";
break;
case 45222:
conv_str += "%e6%84%9b";
break;
case 45223:
conv_str += "%e6%8c%a8";
break;
case 45224:
conv_str += "%e5%a7%b6";
break;
case 45225:
conv_str += "%e9%80%a2";
break;
case 45226:
conv_str += "%e8%91%b5";
break;
case 45227:
conv_str += "%e8%8c%9c";
break;
case 45228:
conv_str += "%e7%a9%90";
break;
case 45229:
conv_str += "%e6%82%aa";
break;
case 45230:
conv_str += "%e6%8f%a1";
break;
case 45231:
conv_str += "%e6%b8%a5";
break;
case 45232:
conv_str += "%e6%97%ad";
break;
case 45233:
conv_str += "%e8%91%a6";
break;
case 45234:
conv_str += "%e8%8a%a6";
break;
case 45235:
conv_str += "%e9%af%b5";
break;
case 45236:
conv_str += "%e6%a2%93";
break;
case 45237:
conv_str += "%e5%9c%a7";
break;
case 45238:
conv_str += "%e6%96%a1";
break;
case 45239:
conv_str += "%e6%89%b1";
break;
case 45240:
conv_str += "%e5%ae%9b";
break;
case 45241:
conv_str += "%e5%a7%90";
break;
case 45242:
conv_str += "%e8%99%bb";
break;
case 45243:
conv_str += "%e9%a3%b4";
break;
case 45244:
conv_str += "%e7%b5%a2";
break;
case 45245:
conv_str += "%e7%b6%be";
break;
case 45246:
conv_str += "%e9%ae%8e";
break;
case 45247:
conv_str += "%e6%88%96";
break;
case 45248:
conv_str += "%e7%b2%9f";
break;
case 45249:
conv_str += "%e8%a2%b7";
break;
case 45250:
conv_str += "%e5%ae%89";
break;
case 45251:
conv_str += "%e5%ba%b5";
break;
case 45252:
conv_str += "%e6%8c%89";
break;
case 45253:
conv_str += "%e6%9a%97";
break;
case 45254:
conv_str += "%e6%a1%88";
break;
case 45255:
conv_str += "%e9%97%87";
break;
case 45256:
conv_str += "%e9%9e%8d";
break;
case 45257:
conv_str += "%e6%9d%8f";
break;
case 45258:
conv_str += "%e4%bb%a5";
break;
case 45259:
conv_str += "%e4%bc%8a";
break;
case 45260:
conv_str += "%e4%bd%8d";
break;
case 45261:
conv_str += "%e4%be%9d";
break;
case 45262:
conv_str += "%e5%81%89";
break;
case 45263:
conv_str += "%e5%9b%b2";
break;
case 45264:
conv_str += "%e5%a4%b7";
break;
case 45265:
conv_str += "%e5%a7%94";
break;
case 45266:
conv_str += "%e5%a8%81";
break;
case 45267:
conv_str += "%e5%b0%89";
break;
case 45268:
conv_str += "%e6%83%9f";
break;
case 45269:
conv_str += "%e6%84%8f";
break;
case 45270:
conv_str += "%e6%85%b0";
break;
case 45271:
conv_str += "%e6%98%93";
break;
case 45272:
conv_str += "%e6%a4%85";
break;
case 45273:
conv_str += "%e7%82%ba";
break;
case 45274:
conv_str += "%e7%95%8f";
break;
case 45275:
conv_str += "%e7%95%b0";
break;
case 45276:
conv_str += "%e7%a7%bb";
break;
case 45277:
conv_str += "%e7%b6%ad";
break;
case 45278:
conv_str += "%e7%b7%af";
break;
case 45279:
conv_str += "%e8%83%83";
break;
case 45280:
conv_str += "%e8%90%8e";
break;
case 45281:
conv_str += "%e8%a1%a3";
break;
case 45282:
conv_str += "%e8%ac%82";
break;
case 45283:
conv_str += "%e9%81%95";
break;
case 45284:
conv_str += "%e9%81%ba";
break;
case 45285:
conv_str += "%e5%8c%bb";
break;
case 45286:
conv_str += "%e4%ba%95";
break;
case 45287:
conv_str += "%e4%ba%a5";
break;
case 45288:
conv_str += "%e5%9f%9f";
break;
case 45289:
conv_str += "%e8%82%b2";
break;
case 45290:
conv_str += "%e9%83%81";
break;
case 45291:
conv_str += "%e7%a3%af";
break;
case 45292:
conv_str += "%e4%b8%80";
break;
case 45293:
conv_str += "%e5%a3%b1";
break;
case 45294:
conv_str += "%e6%ba%a2";
break;
case 45295:
conv_str += "%e9%80%b8";
break;
case 45296:
conv_str += "%e7%a8%b2";
break;
case 45297:
conv_str += "%e8%8c%a8";
break;
case 45298:
conv_str += "%e8%8a%8b";
break;
case 45299:
conv_str += "%e9%b0%af";
break;
case 45300:
conv_str += "%e5%85%81";
break;
case 45301:
conv_str += "%e5%8d%b0";
break;
case 45302:
conv_str += "%e5%92%bd";
break;
case 45303:
conv_str += "%e5%93%a1";
break;
case 45304:
conv_str += "%e5%9b%a0";
break;
case 45305:
conv_str += "%e5%a7%bb";
break;
case 45306:
conv_str += "%e5%bc%95";
break;
case 45307:
conv_str += "%e9%a3%b2";
break;
case 45308:
conv_str += "%e6%b7%ab";
break;
case 45309:
conv_str += "%e8%83%a4";
break;
case 45310:
conv_str += "%e8%94%ad";
break;
case 45473:
conv_str += "%e9%99%a2";
break;
case 45474:
conv_str += "%e9%99%b0";
break;
case 45475:
conv_str += "%e9%9a%a0";
break;
case 45476:
conv_str += "%e9%9f%bb";
break;
case 45477:
conv_str += "%e5%90%8b";
break;
case 45478:
conv_str += "%e5%8f%b3";
break;
case 45479:
conv_str += "%e5%ae%87";
break;
case 45480:
conv_str += "%e7%83%8f";
break;
case 45481:
conv_str += "%e7%be%bd";
break;
case 45482:
conv_str += "%e8%bf%82";
break;
case 45483:
conv_str += "%e9%9b%a8";
break;
case 45484:
conv_str += "%e5%8d%af";
break;
case 45485:
conv_str += "%e9%b5%9c";
break;
case 45486:
conv_str += "%e7%aa%ba";
break;
case 45487:
conv_str += "%e4%b8%91";
break;
case 45488:
conv_str += "%e7%a2%93";
break;
case 45489:
conv_str += "%e8%87%bc";
break;
case 45490:
conv_str += "%e6%b8%a6";
break;
case 45491:
conv_str += "%e5%98%98";
break;
case 45492:
conv_str += "%e5%94%84";
break;
case 45493:
conv_str += "%e6%ac%9d";
break;
case 45494:
conv_str += "%e8%94%9a";
break;
case 45495:
conv_str += "%e9%b0%bb";
break;
case 45496:
conv_str += "%e5%a7%a5";
break;
case 45497:
conv_str += "%e5%8e%a9";
break;
case 45498:
conv_str += "%e6%b5%a6";
break;
case 45499:
conv_str += "%e7%93%9c";
break;
case 45500:
conv_str += "%e9%96%8f";
break;
case 45501:
conv_str += "%e5%99%82";
break;
case 45502:
conv_str += "%e4%ba%91";
break;
case 45503:
conv_str += "%e9%81%8b";
break;
case 45504:
conv_str += "%e9%9b%b2";
break;
case 45505:
conv_str += "%e8%8d%8f";
break;
case 45506:
conv_str += "%e9%a4%8c";
break;
case 45507:
conv_str += "%e5%8f%a1";
break;
case 45508:
conv_str += "%e5%96%b6";
break;
case 45509:
conv_str += "%e5%ac%b0";
break;
case 45510:
conv_str += "%e5%bd%b1";
break;
case 45511:
conv_str += "%e6%98%a0";
break;
case 45512:
conv_str += "%e6%9b%b3";
break;
case 45513:
conv_str += "%e6%a0%84";
break;
case 45514:
conv_str += "%e6%b0%b8";
break;
case 45515:
conv_str += "%e6%b3%b3";
break;
case 45516:
conv_str += "%e6%b4%a9";
break;
case 45517:
conv_str += "%e7%91%9b";
break;
case 45518:
conv_str += "%e7%9b%88";
break;
case 45519:
conv_str += "%e7%a9%8e";
break;
case 45520:
conv_str += "%e9%a0%b4";
break;
case 45521:
conv_str += "%e8%8b%b1";
break;
case 45522:
conv_str += "%e8%a1%9b";
break;
case 45523:
conv_str += "%e8%a9%a0";
break;
case 45524:
conv_str += "%e9%8b%ad";
break;
case 45525:
conv_str += "%e6%b6%b2";
break;
case 45526:
conv_str += "%e7%96%ab";
break;
case 45527:
conv_str += "%e7%9b%8a";
break;
case 45528:
conv_str += "%e9%a7%85";
break;
case 45529:
conv_str += "%e6%82%a6";
break;
case 45530:
conv_str += "%e8%ac%81";
break;
case 45531:
conv_str += "%e8%b6%8a";
break;
case 45532:
conv_str += "%e9%96%b2";
break;
case 45533:
conv_str += "%e6%a6%8e";
break;
case 45534:
conv_str += "%e5%8e%ad";
break;
case 45535:
conv_str += "%e5%86%86";
break;
case 45536:
conv_str += "%e5%9c%92";
break;
case 45537:
conv_str += "%e5%a0%b0";
break;
case 45538:
conv_str += "%e5%a5%84";
break;
case 45539:
conv_str += "%e5%ae%b4";
break;
case 45540:
conv_str += "%e5%bb%b6";
break;
case 45541:
conv_str += "%e6%80%a8";
break;
case 45542:
conv_str += "%e6%8e%a9";
break;
case 45543:
conv_str += "%e6%8f%b4";
break;
case 45544:
conv_str += "%e6%b2%bf";
break;
case 45545:
conv_str += "%e6%bc%94";
break;
case 45546:
conv_str += "%e7%82%8e";
break;
case 45547:
conv_str += "%e7%84%94";
break;
case 45548:
conv_str += "%e7%85%99";
break;
case 45549:
conv_str += "%e7%87%95";
break;
case 45550:
conv_str += "%e7%8c%bf";
break;
case 45551:
conv_str += "%e7%b8%81";
break;
case 45552:
conv_str += "%e8%89%b6";
break;
case 45553:
conv_str += "%e8%8b%91";
break;
case 45554:
conv_str += "%e8%96%97";
break;
case 45555:
conv_str += "%e9%81%a0";
break;
case 45556:
conv_str += "%e9%89%9b";
break;
case 45557:
conv_str += "%e9%b4%9b";
break;
case 45558:
conv_str += "%e5%a1%a9";
break;
case 45559:
conv_str += "%e6%96%bc";
break;
case 45560:
conv_str += "%e6%b1%9a";
break;
case 45561:
conv_str += "%e7%94%a5";
break;
case 45562:
conv_str += "%e5%87%b9";
break;
case 45563:
conv_str += "%e5%a4%ae";
break;
case 45564:
conv_str += "%e5%a5%a5";
break;
case 45565:
conv_str += "%e5%be%80";
break;
case 45566:
conv_str += "%e5%bf%9c";
break;
case 45729:
conv_str += "%e6%8a%bc";
break;
case 45730:
conv_str += "%e6%97%ba";
break;
case 45731:
conv_str += "%e6%a8%aa";
break;
case 45732:
conv_str += "%e6%ac%a7";
break;
case 45733:
conv_str += "%e6%ae%b4";
break;
case 45734:
conv_str += "%e7%8e%8b";
break;
case 45735:
conv_str += "%e7%bf%81";
break;
case 45736:
conv_str += "%e8%a5%96";
break;
case 45737:
conv_str += "%e9%b4%ac";
break;
case 45738:
conv_str += "%e9%b4%8e";
break;
case 45739:
conv_str += "%e9%bb%84";
break;
case 45740:
conv_str += "%e5%b2%a1";
break;
case 45741:
conv_str += "%e6%b2%96";
break;
case 45742:
conv_str += "%e8%8d%bb";
break;
case 45743:
conv_str += "%e5%84%84";
break;
case 45744:
conv_str += "%e5%b1%8b";
break;
case 45745:
conv_str += "%e6%86%b6";
break;
case 45746:
conv_str += "%e8%87%86";
break;
case 45747:
conv_str += "%e6%a1%b6";
break;
case 45748:
conv_str += "%e7%89%a1";
break;
case 45749:
conv_str += "%e4%b9%99";
break;
case 45750:
conv_str += "%e4%bf%ba";
break;
case 45751:
conv_str += "%e5%8d%b8";
break;
case 45752:
conv_str += "%e6%81%a9";
break;
case 45753:
conv_str += "%e6%b8%a9";
break;
case 45754:
conv_str += "%e7%a9%8f";
break;
case 45755:
conv_str += "%e9%9f%b3";
break;
case 45756:
conv_str += "%e4%b8%8b";
break;
case 45757:
conv_str += "%e5%8c%96";
break;
case 45758:
conv_str += "%e4%bb%ae";
break;
case 45759:
conv_str += "%e4%bd%95";
break;
case 45760:
conv_str += "%e4%bc%bd";
break;
case 45761:
conv_str += "%e4%be%a1";
break;
case 45762:
conv_str += "%e4%bd%b3";
break;
case 45763:
conv_str += "%e5%8a%a0";
break;
case 45764:
conv_str += "%e5%8f%af";
break;
case 45765:
conv_str += "%e5%98%89";
break;
case 45766:
conv_str += "%e5%a4%8f";
break;
case 45767:
conv_str += "%e5%ab%81";
break;
case 45768:
conv_str += "%e5%ae%b6";
break;
case 45769:
conv_str += "%e5%af%a1";
break;
case 45770:
conv_str += "%e7%a7%91";
break;
case 45771:
conv_str += "%e6%9a%87";
break;
case 45772:
conv_str += "%e6%9e%9c";
break;
case 45773:
conv_str += "%e6%9e%b6";
break;
case 45774:
conv_str += "%e6%ad%8c";
break;
case 45775:
conv_str += "%e6%b2%b3";
break;
case 45776:
conv_str += "%e7%81%ab";
break;
case 45777:
conv_str += "%e7%8f%82";
break;
case 45778:
conv_str += "%e7%a6%8d";
break;
case 45779:
conv_str += "%e7%a6%be";
break;
case 45780:
conv_str += "%e7%a8%bc";
break;
case 45781:
conv_str += "%e7%ae%87";
break;
case 45782:
conv_str += "%e8%8a%b1";
break;
case 45783:
conv_str += "%e8%8b%9b";
break;
case 45784:
conv_str += "%e8%8c%84";
break;
case 45785:
conv_str += "%e8%8d%b7";
break;
case 45786:
conv_str += "%e8%8f%af";
break;
case 45787:
conv_str += "%e8%8f%93";
break;
case 45788:
conv_str += "%e8%9d%a6";
break;
case 45789:
conv_str += "%e8%aa%b2";
break;
case 45790:
conv_str += "%e5%98%a9";
break;
case 45791:
conv_str += "%e8%b2%a8";
break;
case 45792:
conv_str += "%e8%bf%a6";
break;
case 45793:
conv_str += "%e9%81%8e";
break;
case 45794:
conv_str += "%e9%9c%9e";
break;
case 45795:
conv_str += "%e8%9a%8a";
break;
case 45796:
conv_str += "%e4%bf%84";
break;
case 45797:
conv_str += "%e5%b3%a8";
break;
case 45798:
conv_str += "%e6%88%91";
break;
case 45799:
conv_str += "%e7%89%99";
break;
case 45800:
conv_str += "%e7%94%bb";
break;
case 45801:
conv_str += "%e8%87%a5";
break;
case 45802:
conv_str += "%e8%8a%bd";
break;
case 45803:
conv_str += "%e8%9b%be";
break;
case 45804:
conv_str += "%e8%b3%80";
break;
case 45805:
conv_str += "%e9%9b%85";
break;
case 45806:
conv_str += "%e9%a4%93";
break;
case 45807:
conv_str += "%e9%a7%95";
break;
case 45808:
conv_str += "%e4%bb%8b";
break;
case 45809:
conv_str += "%e4%bc%9a";
break;
case 45810:
conv_str += "%e8%a7%a3";
break;
case 45811:
conv_str += "%e5%9b%9e";
break;
case 45812:
conv_str += "%e5%a1%8a";
break;
case 45813:
conv_str += "%e5%a3%8a";
break;
case 45814:
conv_str += "%e5%bb%bb";
break;
case 45815:
conv_str += "%e5%bf%ab";
break;
case 45816:
conv_str += "%e6%80%aa";
break;
case 45817:
conv_str += "%e6%82%94";
break;
case 45818:
conv_str += "%e6%81%a2";
break;
case 45819:
conv_str += "%e6%87%90";
break;
case 45820:
conv_str += "%e6%88%92";
break;
case 45821:
conv_str += "%e6%8b%90";
break;
case 45822:
conv_str += "%e6%94%b9";
break;
case 45985:
conv_str += "%e9%ad%81";
break;
case 45986:
conv_str += "%e6%99%a6";
break;
case 45987:
conv_str += "%e6%a2%b0";
break;
case 45988:
conv_str += "%e6%b5%b7";
break;
case 45989:
conv_str += "%e7%81%b0";
break;
case 45990:
conv_str += "%e7%95%8c";
break;
case 45991:
conv_str += "%e7%9a%86";
break;
case 45992:
conv_str += "%e7%b5%b5";
break;
case 45993:
conv_str += "%e8%8a%a5";
break;
case 45994:
conv_str += "%e8%9f%b9";
break;
case 45995:
conv_str += "%e9%96%8b";
break;
case 45996:
conv_str += "%e9%9a%8e";
break;
case 45997:
conv_str += "%e8%b2%9d";
break;
case 45998:
conv_str += "%e5%87%b1";
break;
case 45999:
conv_str += "%e5%8a%be";
break;
case 46000:
conv_str += "%e5%a4%96";
break;
case 46001:
conv_str += "%e5%92%b3";
break;
case 46002:
conv_str += "%e5%ae%b3";
break;
case 46003:
conv_str += "%e5%b4%96";
break;
case 46004:
conv_str += "%e6%85%a8";
break;
case 46005:
conv_str += "%e6%a6%82";
break;
case 46006:
conv_str += "%e6%b6%af";
break;
case 46007:
conv_str += "%e7%a2%8d";
break;
case 46008:
conv_str += "%e8%93%8b";
break;
case 46009:
conv_str += "%e8%a1%97";
break;
case 46010:
conv_str += "%e8%a9%b2";
break;
case 46011:
conv_str += "%e9%8e%a7";
break;
case 46012:
conv_str += "%e9%aa%b8";
break;
case 46013:
conv_str += "%e6%b5%ac";
break;
case 46014:
conv_str += "%e9%a6%a8";
break;
case 46015:
conv_str += "%e8%9b%99";
break;
case 46016:
conv_str += "%e5%9e%a3";
break;
case 46017:
conv_str += "%e6%9f%bf";
break;
case 46018:
conv_str += "%e8%9b%8e";
break;
case 46019:
conv_str += "%e9%88%8e";
break;
case 46020:
conv_str += "%e5%8a%83";
break;
case 46021:
conv_str += "%e5%9a%87";
break;
case 46022:
conv_str += "%e5%90%84";
break;
case 46023:
conv_str += "%e5%bb%93";
break;
case 46024:
conv_str += "%e6%8b%a1";
break;
case 46025:
conv_str += "%e6%92%b9";
break;
case 46026:
conv_str += "%e6%a0%bc";
break;
case 46027:
conv_str += "%e6%a0%b8";
break;
case 46028:
conv_str += "%e6%ae%bb";
break;
case 46029:
conv_str += "%e7%8d%b2";
break;
case 46030:
conv_str += "%e7%a2%ba";
break;
case 46031:
conv_str += "%e7%a9%ab";
break;
case 46032:
conv_str += "%e8%a6%9a";
break;
case 46033:
conv_str += "%e8%a7%92";
break;
case 46034:
conv_str += "%e8%b5%ab";
break;
case 46035:
conv_str += "%e8%bc%83";
break;
case 46036:
conv_str += "%e9%83%ad";
break;
case 46037:
conv_str += "%e9%96%a3";
break;
case 46038:
conv_str += "%e9%9a%94";
break;
case 46039:
conv_str += "%e9%9d%a9";
break;
case 46040:
conv_str += "%e5%ad%a6";
break;
case 46041:
conv_str += "%e5%b2%b3";
break;
case 46042:
conv_str += "%e6%a5%bd";
break;
case 46043:
conv_str += "%e9%a1%8d";
break;
case 46044:
conv_str += "%e9%a1%8e";
break;
case 46045:
conv_str += "%e6%8e%9b";
break;
case 46046:
conv_str += "%e7%ac%a0";
break;
case 46047:
conv_str += "%e6%a8%ab";
break;
case 46048:
conv_str += "%e6%a9%bf";
break;
case 46049:
conv_str += "%e6%a2%b6";
break;
case 46050:
conv_str += "%e9%b0%8d";
break;
case 46051:
conv_str += "%e6%bd%9f";
break;
case 46052:
conv_str += "%e5%89%b2";
break;
case 46053:
conv_str += "%e5%96%9d";
break;
case 46054:
conv_str += "%e6%81%b0";
break;
case 46055:
conv_str += "%e6%8b%ac";
break;
case 46056:
conv_str += "%e6%b4%bb";
break;
case 46057:
conv_str += "%e6%b8%87";
break;
case 46058:
conv_str += "%e6%bb%91";
break;
case 46059:
conv_str += "%e8%91%9b";
break;
case 46060:
conv_str += "%e8%a4%90";
break;
case 46061:
conv_str += "%e8%bd%84";
break;
case 46062:
conv_str += "%e4%b8%94";
break;
case 46063:
conv_str += "%e9%b0%b9";
break;
case 46064:
conv_str += "%e5%8f%b6";
break;
case 46065:
conv_str += "%e6%a4%9b";
break;
case 46066:
conv_str += "%e6%a8%ba";
break;
case 46067:
conv_str += "%e9%9e%84";
break;
case 46068:
conv_str += "%e6%a0%aa";
break;
case 46069:
conv_str += "%e5%85%9c";
break;
case 46070:
conv_str += "%e7%ab%83";
break;
case 46071:
conv_str += "%e8%92%b2";
break;
case 46072:
conv_str += "%e9%87%9c";
break;
case 46073:
conv_str += "%e9%8e%8c";
break;
case 46074:
conv_str += "%e5%99%9b";
break;
case 46075:
conv_str += "%e9%b4%a8";
break;
case 46076:
conv_str += "%e6%a0%a2";
break;
case 46077:
conv_str += "%e8%8c%85";
break;
case 46078:
conv_str += "%e8%90%b1";
break;
case 46241:
conv_str += "%e7%b2%a5";
break;
case 46242:
conv_str += "%e5%88%88";
break;
case 46243:
conv_str += "%e8%8b%85";
break;
case 46244:
conv_str += "%e7%93%a6";
break;
case 46245:
conv_str += "%e4%b9%be";
break;
case 46246:
conv_str += "%e4%be%83";
break;
case 46247:
conv_str += "%e5%86%a0";
break;
case 46248:
conv_str += "%e5%af%92";
break;
case 46249:
conv_str += "%e5%88%8a";
break;
case 46250:
conv_str += "%e5%8b%98";
break;
case 46251:
conv_str += "%e5%8b%a7";
break;
case 46252:
conv_str += "%e5%b7%bb";
break;
case 46253:
conv_str += "%e5%96%9a";
break;
case 46254:
conv_str += "%e5%a0%aa";
break;
case 46255:
conv_str += "%e5%a7%a6";
break;
case 46256:
conv_str += "%e5%ae%8c";
break;
case 46257:
conv_str += "%e5%ae%98";
break;
case 46258:
conv_str += "%e5%af%9b";
break;
case 46259:
conv_str += "%e5%b9%b2";
break;
case 46260:
conv_str += "%e5%b9%b9";
break;
case 46261:
conv_str += "%e6%82%a3";
break;
case 46262:
conv_str += "%e6%84%9f";
break;
case 46263:
conv_str += "%e6%85%a3";
break;
case 46264:
conv_str += "%e6%86%be";
break;
case 46265:
conv_str += "%e6%8f%9b";
break;
case 46266:
conv_str += "%e6%95%a2";
break;
case 46267:
conv_str += "%e6%9f%91";
break;
case 46268:
conv_str += "%e6%a1%93";
break;
case 46269:
conv_str += "%e6%a3%ba";
break;
case 46270:
conv_str += "%e6%ac%be";
break;
case 46271:
conv_str += "%e6%ad%93";
break;
case 46272:
conv_str += "%e6%b1%97";
break;
case 46273:
conv_str += "%e6%bc%a2";
break;
case 46274:
conv_str += "%e6%be%97";
break;
case 46275:
conv_str += "%e6%bd%85";
break;
case 46276:
conv_str += "%e7%92%b0";
break;
case 46277:
conv_str += "%e7%94%98";
break;
case 46278:
conv_str += "%e7%9b%a3";
break;
case 46279:
conv_str += "%e7%9c%8b";
break;
case 46280:
conv_str += "%e7%ab%bf";
break;
case 46281:
conv_str += "%e7%ae%a1";
break;
case 46282:
conv_str += "%e7%b0%a1";
break;
case 46283:
conv_str += "%e7%b7%a9";
break;
case 46284:
conv_str += "%e7%bc%b6";
break;
case 46285:
conv_str += "%e7%bf%b0";
break;
case 46286:
conv_str += "%e8%82%9d";
break;
case 46287:
conv_str += "%e8%89%a6";
break;
case 46288:
conv_str += "%e8%8e%9e";
break;
case 46289:
conv_str += "%e8%a6%b3";
break;
case 46290:
conv_str += "%e8%ab%8c";
break;
case 46291:
conv_str += "%e8%b2%ab";
break;
case 46292:
conv_str += "%e9%82%84";
break;
case 46293:
conv_str += "%e9%91%91";
break;
case 46294:
conv_str += "%e9%96%93";
break;
case 46295:
conv_str += "%e9%96%91";
break;
case 46296:
conv_str += "%e9%96%a2";
break;
case 46297:
conv_str += "%e9%99%a5";
break;
case 46298:
conv_str += "%e9%9f%93";
break;
case 46299:
conv_str += "%e9%a4%a8";
break;
case 46300:
conv_str += "%e8%88%98";
break;
case 46301:
conv_str += "%e4%b8%b8";
break;
case 46302:
conv_str += "%e5%90%ab";
break;
case 46303:
conv_str += "%e5%b2%b8";
break;
case 46304:
conv_str += "%e5%b7%8c";
break;
case 46305:
conv_str += "%e7%8e%a9";
break;
case 46306:
conv_str += "%e7%99%8c";
break;
case 46307:
conv_str += "%e7%9c%bc";
break;
case 46308:
conv_str += "%e5%b2%a9";
break;
case 46309:
conv_str += "%e7%bf%ab";
break;
case 46310:
conv_str += "%e8%b4%8b";
break;
case 46311:
conv_str += "%e9%9b%81";
break;
case 46312:
conv_str += "%e9%a0%91";
break;
case 46313:
conv_str += "%e9%a1%94";
break;
case 46314:
conv_str += "%e9%a1%98";
break;
case 46315:
conv_str += "%e4%bc%81";
break;
case 46316:
conv_str += "%e4%bc%8e";
break;
case 46317:
conv_str += "%e5%8d%b1";
break;
case 46318:
conv_str += "%e5%96%9c";
break;
case 46319:
conv_str += "%e5%99%a8";
break;
case 46320:
conv_str += "%e5%9f%ba";
break;
case 46321:
conv_str += "%e5%a5%87";
break;
case 46322:
conv_str += "%e5%ac%89";
break;
case 46323:
conv_str += "%e5%af%84";
break;
case 46324:
conv_str += "%e5%b2%90";
break;
case 46325:
conv_str += "%e5%b8%8c";
break;
case 46326:
conv_str += "%e5%b9%be";
break;
case 46327:
conv_str += "%e5%bf%8c";
break;
case 46328:
conv_str += "%e6%8f%ae";
break;
case 46329:
conv_str += "%e6%9c%ba";
break;
case 46330:
conv_str += "%e6%97%97";
break;
case 46331:
conv_str += "%e6%97%a2";
break;
case 46332:
conv_str += "%e6%9c%9f";
break;
case 46333:
conv_str += "%e6%a3%8b";
break;
case 46334:
conv_str += "%e6%a3%84";
break;
case 46497:
conv_str += "%e6%a9%9f";
break;
case 46498:
conv_str += "%e5%b8%b0";
break;
case 46499:
conv_str += "%e6%af%85";
break;
case 46500:
conv_str += "%e6%b0%97";
break;
case 46501:
conv_str += "%e6%b1%bd";
break;
case 46502:
conv_str += "%e7%95%bf";
break;
case 46503:
conv_str += "%e7%a5%88";
break;
case 46504:
conv_str += "%e5%ad%a3";
break;
case 46505:
conv_str += "%e7%a8%80";
break;
case 46506:
conv_str += "%e7%b4%80";
break;
case 46507:
conv_str += "%e5%be%bd";
break;
case 46508:
conv_str += "%e8%a6%8f";
break;
case 46509:
conv_str += "%e8%a8%98";
break;
case 46510:
conv_str += "%e8%b2%b4";
break;
case 46511:
conv_str += "%e8%b5%b7";
break;
case 46512:
conv_str += "%e8%bb%8c";
break;
case 46513:
conv_str += "%e8%bc%9d";
break;
case 46514:
conv_str += "%e9%a3%a2";
break;
case 46515:
conv_str += "%e9%a8%8e";
break;
case 46516:
conv_str += "%e9%ac%bc";
break;
case 46517:
conv_str += "%e4%ba%80";
break;
case 46518:
conv_str += "%e5%81%bd";
break;
case 46519:
conv_str += "%e5%84%80";
break;
case 46520:
conv_str += "%e5%a6%93";
break;
case 46521:
conv_str += "%e5%ae%9c";
break;
case 46522:
conv_str += "%e6%88%af";
break;
case 46523:
conv_str += "%e6%8a%80";
break;
case 46524:
conv_str += "%e6%93%ac";
break;
case 46525:
conv_str += "%e6%ac%ba";
break;
case 46526:
conv_str += "%e7%8a%a0";
break;
case 46527:
conv_str += "%e7%96%91";
break;
case 46528:
conv_str += "%e7%a5%87";
break;
case 46529:
conv_str += "%e7%be%a9";
break;
case 46530:
conv_str += "%e8%9f%bb";
break;
case 46531:
conv_str += "%e8%aa%bc";
break;
case 46532:
conv_str += "%e8%ad%b0";
break;
case 46533:
conv_str += "%e6%8e%ac";
break;
case 46534:
conv_str += "%e8%8f%8a";
break;
case 46535:
conv_str += "%e9%9e%a0";
break;
case 46536:
conv_str += "%e5%90%89";
break;
case 46537:
conv_str += "%e5%90%83";
break;
case 46538:
conv_str += "%e5%96%ab";
break;
case 46539:
conv_str += "%e6%a1%94";
break;
case 46540:
conv_str += "%e6%a9%98";
break;
case 46541:
conv_str += "%e8%a9%b0";
break;
case 46542:
conv_str += "%e7%a0%a7";
break;
case 46543:
conv_str += "%e6%9d%b5";
break;
case 46544:
conv_str += "%e9%bb%8d";
break;
case 46545:
conv_str += "%e5%8d%b4";
break;
case 46546:
conv_str += "%e5%ae%a2";
break;
case 46547:
conv_str += "%e8%84%9a";
break;
case 46548:
conv_str += "%e8%99%90";
break;
case 46549:
conv_str += "%e9%80%86";
break;
case 46550:
conv_str += "%e4%b8%98";
break;
case 46551:
conv_str += "%e4%b9%85";
break;
case 46552:
conv_str += "%e4%bb%87";
break;
case 46553:
conv_str += "%e4%bc%91";
break;
case 46554:
conv_str += "%e5%8f%8a";
break;
case 46555:
conv_str += "%e5%90%b8";
break;
case 46556:
conv_str += "%e5%ae%ae";
break;
case 46557:
conv_str += "%e5%bc%93";
break;
case 46558:
conv_str += "%e6%80%a5";
break;
case 46559:
conv_str += "%e6%95%91";
break;
case 46560:
conv_str += "%e6%9c%bd";
break;
case 46561:
conv_str += "%e6%b1%82";
break;
case 46562:
conv_str += "%e6%b1%b2";
break;
case 46563:
conv_str += "%e6%b3%a3";
break;
case 46564:
conv_str += "%e7%81%b8";
break;
case 46565:
conv_str += "%e7%90%83";
break;
case 46566:
conv_str += "%e7%a9%b6";
break;
case 46567:
conv_str += "%e7%aa%ae";
break;
case 46568:
conv_str += "%e7%ac%88";
break;
case 46569:
conv_str += "%e7%b4%9a";
break;
case 46570:
conv_str += "%e7%b3%be";
break;
case 46571:
conv_str += "%e7%b5%a6";
break;
case 46572:
conv_str += "%e6%97%a7";
break;
case 46573:
conv_str += "%e7%89%9b";
break;
case 46574:
conv_str += "%e5%8e%bb";
break;
case 46575:
conv_str += "%e5%b1%85";
break;
case 46576:
conv_str += "%e5%b7%a8";
break;
case 46577:
conv_str += "%e6%8b%92";
break;
case 46578:
conv_str += "%e6%8b%a0";
break;
case 46579:
conv_str += "%e6%8c%99";
break;
case 46580:
conv_str += "%e6%b8%a0";
break;
case 46581:
conv_str += "%e8%99%9a";
break;
case 46582:
conv_str += "%e8%a8%b1";
break;
case 46583:
conv_str += "%e8%b7%9d";
break;
case 46584:
conv_str += "%e9%8b%b8";
break;
case 46585:
conv_str += "%e6%bc%81";
break;
case 46586:
conv_str += "%e7%a6%a6";
break;
case 46587:
conv_str += "%e9%ad%9a";
break;
case 46588:
conv_str += "%e4%ba%a8";
break;
case 46589:
conv_str += "%e4%ba%ab";
break;
case 46590:
conv_str += "%e4%ba%ac";
break;
case 46753:
conv_str += "%e4%be%9b";
break;
case 46754:
conv_str += "%e4%be%a0";
break;
case 46755:
conv_str += "%e5%83%91";
break;
case 46756:
conv_str += "%e5%85%87";
break;
case 46757:
conv_str += "%e7%ab%b6";
break;
case 46758:
conv_str += "%e5%85%b1";
break;
case 46759:
conv_str += "%e5%87%b6";
break;
case 46760:
conv_str += "%e5%8d%94";
break;
case 46761:
conv_str += "%e5%8c%a1";
break;
case 46762:
conv_str += "%e5%8d%bf";
break;
case 46763:
conv_str += "%e5%8f%ab";
break;
case 46764:
conv_str += "%e5%96%ac";
break;
case 46765:
conv_str += "%e5%a2%83";
break;
case 46766:
conv_str += "%e5%b3%a1";
break;
case 46767:
conv_str += "%e5%bc%b7";
break;
case 46768:
conv_str += "%e5%bd%8a";
break;
case 46769:
conv_str += "%e6%80%af";
break;
case 46770:
conv_str += "%e6%81%90";
break;
case 46771:
conv_str += "%e6%81%ad";
break;
case 46772:
conv_str += "%e6%8c%9f";
break;
case 46773:
conv_str += "%e6%95%99";
break;
case 46774:
conv_str += "%e6%a9%8b";
break;
case 46775:
conv_str += "%e6%b3%81";
break;
case 46776:
conv_str += "%e7%8b%82";
break;
case 46777:
conv_str += "%e7%8b%ad";
break;
case 46778:
conv_str += "%e7%9f%af";
break;
case 46779:
conv_str += "%e8%83%b8";
break;
case 46780:
conv_str += "%e8%84%85";
break;
case 46781:
conv_str += "%e8%88%88";
break;
case 46782:
conv_str += "%e8%95%8e";
break;
case 46783:
conv_str += "%e9%83%b7";
break;
case 46784:
conv_str += "%e9%8f%a1";
break;
case 46785:
conv_str += "%e9%9f%bf";
break;
case 46786:
conv_str += "%e9%a5%97";
break;
case 46787:
conv_str += "%e9%a9%9a";
break;
case 46788:
conv_str += "%e4%bb%b0";
break;
case 46789:
conv_str += "%e5%87%9d";
break;
case 46790:
conv_str += "%e5%b0%ad";
break;
case 46791:
conv_str += "%e6%9a%81";
break;
case 46792:
conv_str += "%e6%a5%ad";
break;
case 46793:
conv_str += "%e5%b1%80";
break;
case 46794:
conv_str += "%e6%9b%b2";
break;
case 46795:
conv_str += "%e6%a5%b5";
break;
case 46796:
conv_str += "%e7%8e%89";
break;
case 46797:
conv_str += "%e6%a1%90";
break;
case 46798:
conv_str += "%e7%b2%81";
break;
case 46799:
conv_str += "%e5%83%85";
break;
case 46800:
conv_str += "%e5%8b%a4";
break;
case 46801:
conv_str += "%e5%9d%87";
break;
case 46802:
conv_str += "%e5%b7%be";
break;
case 46803:
conv_str += "%e9%8c%a6";
break;
case 46804:
conv_str += "%e6%96%a4";
break;
case 46805:
conv_str += "%e6%ac%a3";
break;
case 46806:
conv_str += "%e6%ac%bd";
break;
case 46807:
conv_str += "%e7%90%b4";
break;
case 46808:
conv_str += "%e7%a6%81";
break;
case 46809:
conv_str += "%e7%a6%bd";
break;
case 46810:
conv_str += "%e7%ad%8b";
break;
case 46811:
conv_str += "%e7%b7%8a";
break;
case 46812:
conv_str += "%e8%8a%b9";
break;
case 46813:
conv_str += "%e8%8f%8c";
break;
case 46814:
conv_str += "%e8%a1%bf";
break;
case 46815:
conv_str += "%e8%a5%9f";
break;
case 46816:
conv_str += "%e8%ac%b9";
break;
case 46817:
conv_str += "%e8%bf%91";
break;
case 46818:
conv_str += "%e9%87%91";
break;
case 46819:
conv_str += "%e5%90%9f";
break;
case 46820:
conv_str += "%e9%8a%80";
break;
case 46821:
conv_str += "%e4%b9%9d";
break;
case 46822:
conv_str += "%e5%80%b6";
break;
case 46823:
conv_str += "%e5%8f%a5";
break;
case 46824:
conv_str += "%e5%8c%ba";
break;
case 46825:
conv_str += "%e7%8b%97";
break;
case 46826:
conv_str += "%e7%8e%96";
break;
case 46827:
conv_str += "%e7%9f%a9";
break;
case 46828:
conv_str += "%e8%8b%a6";
break;
case 46829:
conv_str += "%e8%ba%af";
break;
case 46830:
conv_str += "%e9%a7%86";
break;
case 46831:
conv_str += "%e9%a7%88";
break;
case 46832:
conv_str += "%e9%a7%92";
break;
case 46833:
conv_str += "%e5%85%b7";
break;
case 46834:
conv_str += "%e6%84%9a";
break;
case 46835:
conv_str += "%e8%99%9e";
break;
case 46836:
conv_str += "%e5%96%b0";
break;
case 46837:
conv_str += "%e7%a9%ba";
break;
case 46838:
conv_str += "%e5%81%b6";
break;
case 46839:
conv_str += "%e5%af%93";
break;
case 46840:
conv_str += "%e9%81%87";
break;
case 46841:
conv_str += "%e9%9a%85";
break;
case 46842:
conv_str += "%e4%b8%b2";
break;
case 46843:
conv_str += "%e6%ab%9b";
break;
case 46844:
conv_str += "%e9%87%a7";
break;
case 46845:
conv_str += "%e5%b1%91";
break;
case 46846:
conv_str += "%e5%b1%88";
break;
case 47009:
conv_str += "%e6%8e%98";
break;
case 47010:
conv_str += "%e7%aa%9f";
break;
case 47011:
conv_str += "%e6%b2%93";
break;
case 47012:
conv_str += "%e9%9d%b4";
break;
case 47013:
conv_str += "%e8%bd%a1";
break;
case 47014:
conv_str += "%e7%aa%aa";
break;
case 47015:
conv_str += "%e7%86%8a";
break;
case 47016:
conv_str += "%e9%9a%88";
break;
case 47017:
conv_str += "%e7%b2%82";
break;
case 47018:
conv_str += "%e6%a0%97";
break;
case 47019:
conv_str += "%e7%b9%b0";
break;
case 47020:
conv_str += "%e6%a1%91";
break;
case 47021:
conv_str += "%e9%8d%ac";
break;
case 47022:
conv_str += "%e5%8b%b2";
break;
case 47023:
conv_str += "%e5%90%9b";
break;
case 47024:
conv_str += "%e8%96%ab";
break;
case 47025:
conv_str += "%e8%a8%93";
break;
case 47026:
conv_str += "%e7%be%a4";
break;
case 47027:
conv_str += "%e8%bb%8d";
break;
case 47028:
conv_str += "%e9%83%a1";
break;
case 47029:
conv_str += "%e5%8d%a6";
break;
case 47030:
conv_str += "%e8%a2%88";
break;
case 47031:
conv_str += "%e7%a5%81";
break;
case 47032:
conv_str += "%e4%bf%82";
break;
case 47033:
conv_str += "%e5%82%be";
break;
case 47034:
conv_str += "%e5%88%91";
break;
case 47035:
conv_str += "%e5%85%84";
break;
case 47036:
conv_str += "%e5%95%93";
break;
case 47037:
conv_str += "%e5%9c%ad";
break;
case 47038:
conv_str += "%e7%8f%aa";
break;
case 47039:
conv_str += "%e5%9e%8b";
break;
case 47040:
conv_str += "%e5%a5%91";
break;
case 47041:
conv_str += "%e5%bd%a2";
break;
case 47042:
conv_str += "%e5%be%84";
break;
case 47043:
conv_str += "%e6%81%b5";
break;
case 47044:
conv_str += "%e6%85%b6";
break;
case 47045:
conv_str += "%e6%85%a7";
break;
case 47046:
conv_str += "%e6%86%a9";
break;
case 47047:
conv_str += "%e6%8e%b2";
break;
case 47048:
conv_str += "%e6%90%ba";
break;
case 47049:
conv_str += "%e6%95%ac";
break;
case 47050:
conv_str += "%e6%99%af";
break;
case 47051:
conv_str += "%e6%a1%82";
break;
case 47052:
conv_str += "%e6%b8%93";
break;
case 47053:
conv_str += "%e7%95%a6";
break;
case 47054:
conv_str += "%e7%a8%bd";
break;
case 47055:
conv_str += "%e7%b3%bb";
break;
case 47056:
conv_str += "%e7%b5%8c";
break;
case 47057:
conv_str += "%e7%b6%99";
break;
case 47058:
conv_str += "%e7%b9%8b";
break;
case 47059:
conv_str += "%e7%bd%ab";
break;
case 47060:
conv_str += "%e8%8c%8e";
break;
case 47061:
conv_str += "%e8%8d%8a";
break;
case 47062:
conv_str += "%e8%9b%8d";
break;
case 47063:
conv_str += "%e8%a8%88";
break;
case 47064:
conv_str += "%e8%a9%a3";
break;
case 47065:
conv_str += "%e8%ad%a6";
break;
case 47066:
conv_str += "%e8%bb%bd";
break;
case 47067:
conv_str += "%e9%a0%9a";
break;
case 47068:
conv_str += "%e9%b6%8f";
break;
case 47069:
conv_str += "%e8%8a%b8";
break;
case 47070:
conv_str += "%e8%bf%8e";
break;
case 47071:
conv_str += "%e9%af%a8";
break;
case 47072:
conv_str += "%e5%8a%87";
break;
case 47073:
conv_str += "%e6%88%9f";
break;
case 47074:
conv_str += "%e6%92%83";
break;
case 47075:
conv_str += "%e6%bf%80";
break;
case 47076:
conv_str += "%e9%9a%99";
break;
case 47077:
conv_str += "%e6%a1%81";
break;
case 47078:
conv_str += "%e5%82%91";
break;
case 47079:
conv_str += "%e6%ac%a0";
break;
case 47080:
conv_str += "%e6%b1%ba";
break;
case 47081:
conv_str += "%e6%bd%94";
break;
case 47082:
conv_str += "%e7%a9%b4";
break;
case 47083:
conv_str += "%e7%b5%90";
break;
case 47084:
conv_str += "%e8%a1%80";
break;
case 47085:
conv_str += "%e8%a8%a3";
break;
case 47086:
conv_str += "%e6%9c%88";
break;
case 47087:
conv_str += "%e4%bb%b6";
break;
case 47088:
conv_str += "%e5%80%b9";
break;
case 47089:
conv_str += "%e5%80%a6";
break;
case 47090:
conv_str += "%e5%81%a5";
break;
case 47091:
conv_str += "%e5%85%bc";
break;
case 47092:
conv_str += "%e5%88%b8";
break;
case 47093:
conv_str += "%e5%89%a3";
break;
case 47094:
conv_str += "%e5%96%a7";
break;
case 47095:
conv_str += "%e5%9c%8f";
break;
case 47096:
conv_str += "%e5%a0%85";
break;
case 47097:
conv_str += "%e5%ab%8c";
break;
case 47098:
conv_str += "%e5%bb%ba";
break;
case 47099:
conv_str += "%e6%86%b2";
break;
case 47100:
conv_str += "%e6%87%b8";
break;
case 47101:
conv_str += "%e6%8b%b3";
break;
case 47102:
conv_str += "%e6%8d%b2";
break;
case 47265:
conv_str += "%e6%a4%9c";
break;
case 47266:
conv_str += "%e6%a8%a9";
break;
case 47267:
conv_str += "%e7%89%bd";
break;
case 47268:
conv_str += "%e7%8a%ac";
break;
case 47269:
conv_str += "%e7%8c%ae";
break;
case 47270:
conv_str += "%e7%a0%94";
break;
case 47271:
conv_str += "%e7%a1%af";
break;
case 47272:
conv_str += "%e7%b5%b9";
break;
case 47273:
conv_str += "%e7%9c%8c";
break;
case 47274:
conv_str += "%e8%82%a9";
break;
case 47275:
conv_str += "%e8%a6%8b";
break;
case 47276:
conv_str += "%e8%ac%99";
break;
case 47277:
conv_str += "%e8%b3%a2";
break;
case 47278:
conv_str += "%e8%bb%92";
break;
case 47279:
conv_str += "%e9%81%a3";
break;
case 47280:
conv_str += "%e9%8d%b5";
break;
case 47281:
conv_str += "%e9%99%ba";
break;
case 47282:
conv_str += "%e9%a1%95";
break;
case 47283:
conv_str += "%e9%a8%93";
break;
case 47284:
conv_str += "%e9%b9%b8";
break;
case 47285:
conv_str += "%e5%85%83";
break;
case 47286:
conv_str += "%e5%8e%9f";
break;
case 47287:
conv_str += "%e5%8e%b3";
break;
case 47288:
conv_str += "%e5%b9%bb";
break;
case 47289:
conv_str += "%e5%bc%a6";
break;
case 47290:
conv_str += "%e6%b8%9b";
break;
case 47291:
conv_str += "%e6%ba%90";
break;
case 47292:
conv_str += "%e7%8e%84";
break;
case 47293:
conv_str += "%e7%8f%be";
break;
case 47294:
conv_str += "%e7%b5%83";
break;
case 47295:
conv_str += "%e8%88%b7";
break;
case 47296:
conv_str += "%e8%a8%80";
break;
case 47297:
conv_str += "%e8%ab%ba";
break;
case 47298:
conv_str += "%e9%99%90";
break;
case 47299:
conv_str += "%e4%b9%8e";
break;
case 47300:
conv_str += "%e5%80%8b";
break;
case 47301:
conv_str += "%e5%8f%a4";
break;
case 47302:
conv_str += "%e5%91%bc";
break;
case 47303:
conv_str += "%e5%9b%ba";
break;
case 47304:
conv_str += "%e5%a7%91";
break;
case 47305:
conv_str += "%e5%ad%a4";
break;
case 47306:
conv_str += "%e5%b7%b1";
break;
case 47307:
conv_str += "%e5%ba%ab";
break;
case 47308:
conv_str += "%e5%bc%a7";
break;
case 47309:
conv_str += "%e6%88%b8";
break;
case 47310:
conv_str += "%e6%95%85";
break;
case 47311:
conv_str += "%e6%9e%af";
break;
case 47312:
conv_str += "%e6%b9%96";
break;
case 47313:
conv_str += "%e7%8b%90";
break;
case 47314:
conv_str += "%e7%b3%8a";
break;
case 47315:
conv_str += "%e8%a2%b4";
break;
case 47316:
conv_str += "%e8%82%a1";
break;
case 47317:
conv_str += "%e8%83%a1";
break;
case 47318:
conv_str += "%e8%8f%b0";
break;
case 47319:
conv_str += "%e8%99%8e";
break;
case 47320:
conv_str += "%e8%aa%87";
break;
case 47321:
conv_str += "%e8%b7%a8";
break;
case 47322:
conv_str += "%e9%88%b7";
break;
case 47323:
conv_str += "%e9%9b%87";
break;
case 47324:
conv_str += "%e9%a1%a7";
break;
case 47325:
conv_str += "%e9%bc%93";
break;
case 47326:
conv_str += "%e4%ba%94";
break;
case 47327:
conv_str += "%e4%ba%92";
break;
case 47328:
conv_str += "%e4%bc%8d";
break;
case 47329:
conv_str += "%e5%8d%88";
break;
case 47330:
conv_str += "%e5%91%89";
break;
case 47331:
conv_str += "%e5%90%be";
break;
case 47332:
conv_str += "%e5%a8%af";
break;
case 47333:
conv_str += "%e5%be%8c";
break;
case 47334:
conv_str += "%e5%be%a1";
break;
case 47335:
conv_str += "%e6%82%9f";
break;
case 47336:
conv_str += "%e6%a2%a7";
break;
case 47337:
conv_str += "%e6%aa%8e";
break;
case 47338:
conv_str += "%e7%91%9a";
break;
case 47339:
conv_str += "%e7%a2%81";
break;
case 47340:
conv_str += "%e8%aa%9e";
break;
case 47341:
conv_str += "%e8%aa%a4";
break;
case 47342:
conv_str += "%e8%ad%b7";
break;
case 47343:
conv_str += "%e9%86%90";
break;
case 47344:
conv_str += "%e4%b9%9e";
break;
case 47345:
conv_str += "%e9%af%89";
break;
case 47346:
conv_str += "%e4%ba%a4";
break;
case 47347:
conv_str += "%e4%bd%bc";
break;
case 47348:
conv_str += "%e4%be%af";
break;
case 47349:
conv_str += "%e5%80%99";
break;
case 47350:
conv_str += "%e5%80%96";
break;
case 47351:
conv_str += "%e5%85%89";
break;
case 47352:
conv_str += "%e5%85%ac";
break;
case 47353:
conv_str += "%e5%8a%9f";
break;
case 47354:
conv_str += "%e5%8a%b9";
break;
case 47355:
conv_str += "%e5%8b%be";
break;
case 47356:
conv_str += "%e5%8e%9a";
break;
case 47357:
conv_str += "%e5%8f%a3";
break;
case 47358:
conv_str += "%e5%90%91";
break;
case 47521:
conv_str += "%e5%90%8e";
break;
case 47522:
conv_str += "%e5%96%89";
break;
case 47523:
conv_str += "%e5%9d%91";
break;
case 47524:
conv_str += "%e5%9e%a2";
break;
case 47525:
conv_str += "%e5%a5%bd";
break;
case 47526:
conv_str += "%e5%ad%94";
break;
case 47527:
conv_str += "%e5%ad%9d";
break;
case 47528:
conv_str += "%e5%ae%8f";
break;
case 47529:
conv_str += "%e5%b7%a5";
break;
case 47530:
conv_str += "%e5%b7%a7";
break;
case 47531:
conv_str += "%e5%b7%b7";
break;
case 47532:
conv_str += "%e5%b9%b8";
break;
case 47533:
conv_str += "%e5%ba%83";
break;
case 47534:
conv_str += "%e5%ba%9a";
break;
case 47535:
conv_str += "%e5%ba%b7";
break;
case 47536:
conv_str += "%e5%bc%98";
break;
case 47537:
conv_str += "%e6%81%92";
break;
case 47538:
conv_str += "%e6%85%8c";
break;
case 47539:
conv_str += "%e6%8a%97";
break;
case 47540:
conv_str += "%e6%8b%98";
break;
case 47541:
conv_str += "%e6%8e%a7";
break;
case 47542:
conv_str += "%e6%94%bb";
break;
case 47543:
conv_str += "%e6%98%82";
break;
case 47544:
conv_str += "%e6%99%83";
break;
case 47545:
conv_str += "%e6%9b%b4";
break;
case 47546:
conv_str += "%e6%9d%ad";
break;
case 47547:
conv_str += "%e6%a0%a1";
break;
case 47548:
conv_str += "%e6%a2%97";
break;
case 47549:
conv_str += "%e6%a7%8b";
break;
case 47550:
conv_str += "%e6%b1%9f";
break;
case 47551:
conv_str += "%e6%b4%aa";
break;
case 47552:
conv_str += "%e6%b5%a9";
break;
case 47553:
conv_str += "%e6%b8%af";
break;
case 47554:
conv_str += "%e6%ba%9d";
break;
case 47555:
conv_str += "%e7%94%b2";
break;
case 47556:
conv_str += "%e7%9a%87";
break;
case 47557:
conv_str += "%e7%a1%ac";
break;
case 47558:
conv_str += "%e7%a8%bf";
break;
case 47559:
conv_str += "%e7%b3%a0";
break;
case 47560:
conv_str += "%e7%b4%85";
break;
case 47561:
conv_str += "%e7%b4%98";
break;
case 47562:
conv_str += "%e7%b5%9e";
break;
case 47563:
conv_str += "%e7%b6%b1";
break;
case 47564:
conv_str += "%e8%80%95";
break;
case 47565:
conv_str += "%e8%80%83";
break;
case 47566:
conv_str += "%e8%82%af";
break;
case 47567:
conv_str += "%e8%82%b1";
break;
case 47568:
conv_str += "%e8%85%94";
break;
case 47569:
conv_str += "%e8%86%8f";
break;
case 47570:
conv_str += "%e8%88%aa";
break;
case 47571:
conv_str += "%e8%8d%92";
break;
case 47572:
conv_str += "%e8%a1%8c";
break;
case 47573:
conv_str += "%e8%a1%a1";
break;
case 47574:
conv_str += "%e8%ac%9b";
break;
case 47575:
conv_str += "%e8%b2%a2";
break;
case 47576:
conv_str += "%e8%b3%bc";
break;
case 47577:
conv_str += "%e9%83%8a";
break;
case 47578:
conv_str += "%e9%85%b5";
break;
case 47579:
conv_str += "%e9%89%b1";
break;
case 47580:
conv_str += "%e7%a0%bf";
break;
case 47581:
conv_str += "%e9%8b%bc";
break;
case 47582:
conv_str += "%e9%96%a4";
break;
case 47583:
conv_str += "%e9%99%8d";
break;
case 47584:
conv_str += "%e9%a0%85";
break;
case 47585:
conv_str += "%e9%a6%99";
break;
case 47586:
conv_str += "%e9%ab%98";
break;
case 47587:
conv_str += "%e9%b4%bb";
break;
case 47588:
conv_str += "%e5%89%9b";
break;
case 47589:
conv_str += "%e5%8a%ab";
break;
case 47590:
conv_str += "%e5%8f%b7";
break;
case 47591:
conv_str += "%e5%90%88";
break;
case 47592:
conv_str += "%e5%a3%95";
break;
case 47593:
conv_str += "%e6%8b%b7";
break;
case 47594:
conv_str += "%e6%bf%a0";
break;
case 47595:
conv_str += "%e8%b1%aa";
break;
case 47596:
conv_str += "%e8%bd%9f";
break;
case 47597:
conv_str += "%e9%ba%b9";
break;
case 47598:
conv_str += "%e5%85%8b";
break;
case 47599:
conv_str += "%e5%88%bb";
break;
case 47600:
conv_str += "%e5%91%8a";
break;
case 47601:
conv_str += "%e5%9b%bd";
break;
case 47602:
conv_str += "%e7%a9%80";
break;
case 47603:
conv_str += "%e9%85%b7";
break;
case 47604:
conv_str += "%e9%b5%a0";
break;
case 47605:
conv_str += "%e9%bb%92";
break;
case 47606:
conv_str += "%e7%8d%84";
break;
case 47607:
conv_str += "%e6%bc%89";
break;
case 47608:
conv_str += "%e8%85%b0";
break;
case 47609:
conv_str += "%e7%94%91";
break;
case 47610:
conv_str += "%e5%bf%bd";
break;
case 47611:
conv_str += "%e6%83%9a";
break;
case 47612:
conv_str += "%e9%aa%a8";
break;
case 47613:
conv_str += "%e7%8b%9b";
break;
case 47614:
conv_str += "%e8%be%bc";
break;
case 47777:
conv_str += "%e6%ad%a4";
break;
case 47778:
conv_str += "%e9%a0%83";
break;
case 47779:
conv_str += "%e4%bb%8a";
break;
case 47780:
conv_str += "%e5%9b%b0";
break;
case 47781:
conv_str += "%e5%9d%a4";
break;
case 47782:
conv_str += "%e5%a2%be";
break;
case 47783:
conv_str += "%e5%a9%9a";
break;
case 47784:
conv_str += "%e6%81%a8";
break;
case 47785:
conv_str += "%e6%87%87";
break;
case 47786:
conv_str += "%e6%98%8f";
break;
case 47787:
conv_str += "%e6%98%86";
break;
case 47788:
conv_str += "%e6%a0%b9";
break;
case 47789:
conv_str += "%e6%a2%b1";
break;
case 47790:
conv_str += "%e6%b7%b7";
break;
case 47791:
conv_str += "%e7%97%95";
break;
case 47792:
conv_str += "%e7%b4%ba";
break;
case 47793:
conv_str += "%e8%89%ae";
break;
case 47794:
conv_str += "%e9%ad%82";
break;
case 47795:
conv_str += "%e4%ba%9b";
break;
case 47796:
conv_str += "%e4%bd%90";
break;
case 47797:
conv_str += "%e5%8f%89";
break;
case 47798:
conv_str += "%e5%94%86";
break;
case 47799:
conv_str += "%e5%b5%af";
break;
case 47800:
conv_str += "%e5%b7%a6";
break;
case 47801:
conv_str += "%e5%b7%ae";
break;
case 47802:
conv_str += "%e6%9f%bb";
break;
case 47803:
conv_str += "%e6%b2%99";
break;
case 47804:
conv_str += "%e7%91%b3";
break;
case 47805:
conv_str += "%e7%a0%82";
break;
case 47806:
conv_str += "%e8%a9%90";
break;
case 47807:
conv_str += "%e9%8e%96";
break;
case 47808:
conv_str += "%e8%a3%9f";
break;
case 47809:
conv_str += "%e5%9d%90";
break;
case 47810:
conv_str += "%e5%ba%a7";
break;
case 47811:
conv_str += "%e6%8c%ab";
break;
case 47812:
conv_str += "%e5%82%b5";
break;
case 47813:
conv_str += "%e5%82%ac";
break;
case 47814:
conv_str += "%e5%86%8d";
break;
case 47815:
conv_str += "%e6%9c%80";
break;
case 47816:
conv_str += "%e5%93%89";
break;
case 47817:
conv_str += "%e5%a1%9e";
break;
case 47818:
conv_str += "%e5%a6%bb";
break;
case 47819:
conv_str += "%e5%ae%b0";
break;
case 47820:
conv_str += "%e5%bd%a9";
break;
case 47821:
conv_str += "%e6%89%8d";
break;
case 47822:
conv_str += "%e6%8e%a1";
break;
case 47823:
conv_str += "%e6%a0%bd";
break;
case 47824:
conv_str += "%e6%ad%b3";
break;
case 47825:
conv_str += "%e6%b8%88";
break;
case 47826:
conv_str += "%e7%81%bd";
break;
case 47827:
conv_str += "%e9%87%87";
break;
case 47828:
conv_str += "%e7%8a%80";
break;
case 47829:
conv_str += "%e7%a0%95";
break;
case 47830:
conv_str += "%e7%a0%a6";
break;
case 47831:
conv_str += "%e7%a5%ad";
break;
case 47832:
conv_str += "%e6%96%8e";
break;
case 47833:
conv_str += "%e7%b4%b0";
break;
case 47834:
conv_str += "%e8%8f%9c";
break;
case 47835:
conv_str += "%e8%a3%81";
break;
case 47836:
conv_str += "%e8%bc%89";
break;
case 47837:
conv_str += "%e9%9a%9b";
break;
case 47838:
conv_str += "%e5%89%a4";
break;
case 47839:
conv_str += "%e5%9c%a8";
break;
case 47840:
conv_str += "%e6%9d%90";
break;
case 47841:
conv_str += "%e7%bd%aa";
break;
case 47842:
conv_str += "%e8%b2%a1";
break;
case 47843:
conv_str += "%e5%86%b4";
break;
case 47844:
conv_str += "%e5%9d%82";
break;
case 47845:
conv_str += "%e9%98%aa";
break;
case 47846:
conv_str += "%e5%a0%ba";
break;
case 47847:
conv_str += "%e6%a6%8a";
break;
case 47848:
conv_str += "%e8%82%b4";
break;
case 47849:
conv_str += "%e5%92%b2";
break;
case 47850:
conv_str += "%e5%b4%8e";
break;
case 47851:
conv_str += "%e5%9f%bc";
break;
case 47852:
conv_str += "%e7%a2%95";
break;
case 47853:
conv_str += "%e9%b7%ba";
break;
case 47854:
conv_str += "%e4%bd%9c";
break;
case 47855:
conv_str += "%e5%89%8a";
break;
case 47856:
conv_str += "%e5%92%8b";
break;
case 47857:
conv_str += "%e6%90%be";
break;
case 47858:
conv_str += "%e6%98%a8";
break;
case 47859:
conv_str += "%e6%9c%94";
break;
case 47860:
conv_str += "%e6%9f%b5";
break;
case 47861:
conv_str += "%e7%aa%84";
break;
case 47862:
conv_str += "%e7%ad%96";
break;
case 47863:
conv_str += "%e7%b4%a2";
break;
case 47864:
conv_str += "%e9%8c%af";
break;
case 47865:
conv_str += "%e6%a1%9c";
break;
case 47866:
conv_str += "%e9%ae%ad";
break;
case 47867:
conv_str += "%e7%ac%b9";
break;
case 47868:
conv_str += "%e5%8c%99";
break;
case 47869:
conv_str += "%e5%86%8a";
break;
case 47870:
conv_str += "%e5%88%b7";
break;
case 48033:
conv_str += "%e5%af%9f";
break;
case 48034:
conv_str += "%e6%8b%b6";
break;
case 48035:
conv_str += "%e6%92%ae";
break;
case 48036:
conv_str += "%e6%93%a6";
break;
case 48037:
conv_str += "%e6%9c%ad";
break;
case 48038:
conv_str += "%e6%ae%ba";
break;
case 48039:
conv_str += "%e8%96%a9";
break;
case 48040:
conv_str += "%e9%9b%91";
break;
case 48041:
conv_str += "%e7%9a%90";
break;
case 48042:
conv_str += "%e9%af%96";
break;
case 48043:
conv_str += "%e6%8d%8c";
break;
case 48044:
conv_str += "%e9%8c%86";
break;
case 48045:
conv_str += "%e9%ae%ab";
break;
case 48046:
conv_str += "%e7%9a%bf";
break;
case 48047:
conv_str += "%e6%99%92";
break;
case 48048:
conv_str += "%e4%b8%89";
break;
case 48049:
conv_str += "%e5%82%98";
break;
case 48050:
conv_str += "%e5%8f%82";
break;
case 48051:
conv_str += "%e5%b1%b1";
break;
case 48052:
conv_str += "%e6%83%a8";
break;
case 48053:
conv_str += "%e6%92%92";
break;
case 48054:
conv_str += "%e6%95%a3";
break;
case 48055:
conv_str += "%e6%a1%9f";
break;
case 48056:
conv_str += "%e7%87%a6";
break;
case 48057:
conv_str += "%e7%8f%8a";
break;
case 48058:
conv_str += "%e7%94%a3";
break;
case 48059:
conv_str += "%e7%ae%97";
break;
case 48060:
conv_str += "%e7%ba%82";
break;
case 48061:
conv_str += "%e8%9a%95";
break;
case 48062:
conv_str += "%e8%ae%83";
break;
case 48063:
conv_str += "%e8%b3%9b";
break;
case 48064:
conv_str += "%e9%85%b8";
break;
case 48065:
conv_str += "%e9%a4%90";
break;
case 48066:
conv_str += "%e6%96%ac";
break;
case 48067:
conv_str += "%e6%9a%ab";
break;
case 48068:
conv_str += "%e6%ae%8b";
break;
case 48069:
conv_str += "%e4%bb%95";
break;
case 48070:
conv_str += "%e4%bb%94";
break;
case 48071:
conv_str += "%e4%bc%ba";
break;
case 48072:
conv_str += "%e4%bd%bf";
break;
case 48073:
conv_str += "%e5%88%ba";
break;
case 48074:
conv_str += "%e5%8f%b8";
break;
case 48075:
conv_str += "%e5%8f%b2";
break;
case 48076:
conv_str += "%e5%97%a3";
break;
case 48077:
conv_str += "%e5%9b%9b";
break;
case 48078:
conv_str += "%e5%a3%ab";
break;
case 48079:
conv_str += "%e5%a7%8b";
break;
case 48080:
conv_str += "%e5%a7%89";
break;
case 48081:
conv_str += "%e5%a7%bf";
break;
case 48082:
conv_str += "%e5%ad%90";
break;
case 48083:
conv_str += "%e5%b1%8d";
break;
case 48084:
conv_str += "%e5%b8%82";
break;
case 48085:
conv_str += "%e5%b8%ab";
break;
case 48086:
conv_str += "%e5%bf%97";
break;
case 48087:
conv_str += "%e6%80%9d";
break;
case 48088:
conv_str += "%e6%8c%87";
break;
case 48089:
conv_str += "%e6%94%af";
break;
case 48090:
conv_str += "%e5%ad%9c";
break;
case 48091:
conv_str += "%e6%96%af";
break;
case 48092:
conv_str += "%e6%96%bd";
break;
case 48093:
conv_str += "%e6%97%a8";
break;
case 48094:
conv_str += "%e6%9e%9d";
break;
case 48095:
conv_str += "%e6%ad%a2";
break;
case 48096:
conv_str += "%e6%ad%bb";
break;
case 48097:
conv_str += "%e6%b0%8f";
break;
case 48098:
conv_str += "%e7%8d%85";
break;
case 48099:
conv_str += "%e7%a5%89";
break;
case 48100:
conv_str += "%e7%a7%81";
break;
case 48101:
conv_str += "%e7%b3%b8";
break;
case 48102:
conv_str += "%e7%b4%99";
break;
case 48103:
conv_str += "%e7%b4%ab";
break;
case 48104:
conv_str += "%e8%82%a2";
break;
case 48105:
conv_str += "%e8%84%82";
break;
case 48106:
conv_str += "%e8%87%b3";
break;
case 48107:
conv_str += "%e8%a6%96";
break;
case 48108:
conv_str += "%e8%a9%9e";
break;
case 48109:
conv_str += "%e8%a9%a9";
break;
case 48110:
conv_str += "%e8%a9%a6";
break;
case 48111:
conv_str += "%e8%aa%8c";
break;
case 48112:
conv_str += "%e8%ab%ae";
break;
case 48113:
conv_str += "%e8%b3%87";
break;
case 48114:
conv_str += "%e8%b3%9c";
break;
case 48115:
conv_str += "%e9%9b%8c";
break;
case 48116:
conv_str += "%e9%a3%bc";
break;
case 48117:
conv_str += "%e6%ad%af";
break;
case 48118:
conv_str += "%e4%ba%8b";
break;
case 48119:
conv_str += "%e4%bc%bc";
break;
case 48120:
conv_str += "%e4%be%8d";
break;
case 48121:
conv_str += "%e5%85%90";
break;
case 48122:
conv_str += "%e5%ad%97";
break;
case 48123:
conv_str += "%e5%af%ba";
break;
case 48124:
conv_str += "%e6%85%88";
break;
case 48125:
conv_str += "%e6%8c%81";
break;
case 48126:
conv_str += "%e6%99%82";
break;
case 48289:
conv_str += "%e6%ac%a1";
break;
case 48290:
conv_str += "%e6%bb%8b";
break;
case 48291:
conv_str += "%e6%b2%bb";
break;
case 48292:
conv_str += "%e7%88%be";
break;
case 48293:
conv_str += "%e7%92%bd";
break;
case 48294:
conv_str += "%e7%97%94";
break;
case 48295:
conv_str += "%e7%a3%81";
break;
case 48296:
conv_str += "%e7%a4%ba";
break;
case 48297:
conv_str += "%e8%80%8c";
break;
case 48298:
conv_str += "%e8%80%b3";
break;
case 48299:
conv_str += "%e8%87%aa";
break;
case 48300:
conv_str += "%e8%92%94";
break;
case 48301:
conv_str += "%e8%be%9e";
break;
case 48302:
conv_str += "%e6%b1%90";
break;
case 48303:
conv_str += "%e9%b9%bf";
break;
case 48304:
conv_str += "%e5%bc%8f";
break;
case 48305:
conv_str += "%e8%ad%98";
break;
case 48306:
conv_str += "%e9%b4%ab";
break;
case 48307:
conv_str += "%e7%ab%ba";
break;
case 48308:
conv_str += "%e8%bb%b8";
break;
case 48309:
conv_str += "%e5%ae%8d";
break;
case 48310:
conv_str += "%e9%9b%ab";
break;
case 48311:
conv_str += "%e4%b8%83";
break;
case 48312:
conv_str += "%e5%8f%b1";
break;
case 48313:
conv_str += "%e5%9f%b7";
break;
case 48314:
conv_str += "%e5%a4%b1";
break;
case 48315:
conv_str += "%e5%ab%89";
break;
case 48316:
conv_str += "%e5%ae%a4";
break;
case 48317:
conv_str += "%e6%82%89";
break;
case 48318:
conv_str += "%e6%b9%bf";
break;
case 48319:
conv_str += "%e6%bc%86";
break;
case 48320:
conv_str += "%e7%96%be";
break;
case 48321:
conv_str += "%e8%b3%aa";
break;
case 48322:
conv_str += "%e5%ae%9f";
break;
case 48323:
conv_str += "%e8%94%80";
break;
case 48324:
conv_str += "%e7%af%a0";
break;
case 48325:
conv_str += "%e5%81%b2";
break;
case 48326:
conv_str += "%e6%9f%b4";
break;
case 48327:
conv_str += "%e8%8a%9d";
break;
case 48328:
conv_str += "%e5%b1%a1";
break;
case 48329:
conv_str += "%e8%95%8a";
break;
case 48330:
conv_str += "%e7%b8%9e";
break;
case 48331:
conv_str += "%e8%88%8e";
break;
case 48332:
conv_str += "%e5%86%99";
break;
case 48333:
conv_str += "%e5%b0%84";
break;
case 48334:
conv_str += "%e6%8d%a8";
break;
case 48335:
conv_str += "%e8%b5%a6";
break;
case 48336:
conv_str += "%e6%96%9c";
break;
case 48337:
conv_str += "%e7%85%ae";
break;
case 48338:
conv_str += "%e7%a4%be";
break;
case 48339:
conv_str += "%e7%b4%97";
break;
case 48340:
conv_str += "%e8%80%85";
break;
case 48341:
conv_str += "%e8%ac%9d";
break;
case 48342:
conv_str += "%e8%bb%8a";
break;
case 48343:
conv_str += "%e9%81%ae";
break;
case 48344:
conv_str += "%e8%9b%87";
break;
case 48345:
conv_str += "%e9%82%aa";
break;
case 48346:
conv_str += "%e5%80%9f";
break;
case 48347:
conv_str += "%e5%8b%ba";
break;
case 48348:
conv_str += "%e5%b0%ba";
break;
case 48349:
conv_str += "%e6%9d%93";
break;
case 48350:
conv_str += "%e7%81%bc";
break;
case 48351:
conv_str += "%e7%88%b5";
break;
case 48352:
conv_str += "%e9%85%8c";
break;
case 48353:
conv_str += "%e9%87%88";
break;
case 48354:
conv_str += "%e9%8c%ab";
break;
case 48355:
conv_str += "%e8%8b%a5";
break;
case 48356:
conv_str += "%e5%af%82";
break;
case 48357:
conv_str += "%e5%bc%b1";
break;
case 48358:
conv_str += "%e6%83%b9";
break;
case 48359:
conv_str += "%e4%b8%bb";
break;
case 48360:
conv_str += "%e5%8f%96";
break;
case 48361:
conv_str += "%e5%ae%88";
break;
case 48362:
conv_str += "%e6%89%8b";
break;
case 48363:
conv_str += "%e6%9c%b1";
break;
case 48364:
conv_str += "%e6%ae%8a";
break;
case 48365:
conv_str += "%e7%8b%a9";
break;
case 48366:
conv_str += "%e7%8f%a0";
break;
case 48367:
conv_str += "%e7%a8%ae";
break;
case 48368:
conv_str += "%e8%85%ab";
break;
case 48369:
conv_str += "%e8%b6%a3";
break;
case 48370:
conv_str += "%e9%85%92";
break;
case 48371:
conv_str += "%e9%a6%96";
break;
case 48372:
conv_str += "%e5%84%92";
break;
case 48373:
conv_str += "%e5%8f%97";
break;
case 48374:
conv_str += "%e5%91%aa";
break;
case 48375:
conv_str += "%e5%af%bf";
break;
case 48376:
conv_str += "%e6%8e%88";
break;
case 48377:
conv_str += "%e6%a8%b9";
break;
case 48378:
conv_str += "%e7%b6%ac";
break;
case 48379:
conv_str += "%e9%9c%80";
break;
case 48380:
conv_str += "%e5%9b%9a";
break;
case 48381:
conv_str += "%e5%8f%8e";
break;
case 48382:
conv_str += "%e5%91%a8";
break;
case 48545:
conv_str += "%e5%ae%97";
break;
case 48546:
conv_str += "%e5%b0%b1";
break;
case 48547:
conv_str += "%e5%b7%9e";
break;
case 48548:
conv_str += "%e4%bf%ae";
break;
case 48549:
conv_str += "%e6%84%81";
break;
case 48550:
conv_str += "%e6%8b%be";
break;
case 48551:
conv_str += "%e6%b4%b2";
break;
case 48552:
conv_str += "%e7%a7%80";
break;
case 48553:
conv_str += "%e7%a7%8b";
break;
case 48554:
conv_str += "%e7%b5%82";
break;
case 48555:
conv_str += "%e7%b9%8d";
break;
case 48556:
conv_str += "%e7%bf%92";
break;
case 48557:
conv_str += "%e8%87%ad";
break;
case 48558:
conv_str += "%e8%88%9f";
break;
case 48559:
conv_str += "%e8%92%90";
break;
case 48560:
conv_str += "%e8%a1%86";
break;
case 48561:
conv_str += "%e8%a5%b2";
break;
case 48562:
conv_str += "%e8%ae%90";
break;
case 48563:
conv_str += "%e8%b9%b4";
break;
case 48564:
conv_str += "%e8%bc%af";
break;
case 48565:
conv_str += "%e9%80%b1";
break;
case 48566:
conv_str += "%e9%85%8b";
break;
case 48567:
conv_str += "%e9%85%ac";
break;
case 48568:
conv_str += "%e9%9b%86";
break;
case 48569:
conv_str += "%e9%86%9c";
break;
case 48570:
conv_str += "%e4%bb%80";
break;
case 48571:
conv_str += "%e4%bd%8f";
break;
case 48572:
conv_str += "%e5%85%85";
break;
case 48573:
conv_str += "%e5%8d%81";
break;
case 48574:
conv_str += "%e5%be%93";
break;
case 48575:
conv_str += "%e6%88%8e";
break;
case 48576:
conv_str += "%e6%9f%94";
break;
case 48577:
conv_str += "%e6%b1%81";
break;
case 48578:
conv_str += "%e6%b8%8b";
break;
case 48579:
conv_str += "%e7%8d%a3";
break;
case 48580:
conv_str += "%e7%b8%a6";
break;
case 48581:
conv_str += "%e9%87%8d";
break;
case 48582:
conv_str += "%e9%8a%83";
break;
case 48583:
conv_str += "%e5%8f%94";
break;
case 48584:
conv_str += "%e5%a4%99";
break;
case 48585:
conv_str += "%e5%ae%bf";
break;
case 48586:
conv_str += "%e6%b7%91";
break;
case 48587:
conv_str += "%e7%a5%9d";
break;
case 48588:
conv_str += "%e7%b8%ae";
break;
case 48589:
conv_str += "%e7%b2%9b";
break;
case 48590:
conv_str += "%e5%a1%be";
break;
case 48591:
conv_str += "%e7%86%9f";
break;
case 48592:
conv_str += "%e5%87%ba";
break;
case 48593:
conv_str += "%e8%a1%93";
break;
case 48594:
conv_str += "%e8%bf%b0";
break;
case 48595:
conv_str += "%e4%bf%8a";
break;
case 48596:
conv_str += "%e5%b3%bb";
break;
case 48597:
conv_str += "%e6%98%a5";
break;
case 48598:
conv_str += "%e7%9e%ac";
break;
case 48599:
conv_str += "%e7%ab%a3";
break;
case 48600:
conv_str += "%e8%88%9c";
break;
case 48601:
conv_str += "%e9%a7%bf";
break;
case 48602:
conv_str += "%e5%87%86";
break;
case 48603:
conv_str += "%e5%be%aa";
break;
case 48604:
conv_str += "%e6%97%ac";
break;
case 48605:
conv_str += "%e6%a5%af";
break;
case 48606:
conv_str += "%e6%ae%89";
break;
case 48607:
conv_str += "%e6%b7%b3";
break;
case 48608:
conv_str += "%e6%ba%96";
break;
case 48609:
conv_str += "%e6%bd%a4";
break;
case 48610:
conv_str += "%e7%9b%be";
break;
case 48611:
conv_str += "%e7%b4%94";
break;
case 48612:
conv_str += "%e5%b7%a1";
break;
case 48613:
conv_str += "%e9%81%b5";
break;
case 48614:
conv_str += "%e9%86%87";
break;
case 48615:
conv_str += "%e9%a0%86";
break;
case 48616:
conv_str += "%e5%87%a6";
break;
case 48617:
conv_str += "%e5%88%9d";
break;
case 48618:
conv_str += "%e6%89%80";
break;
case 48619:
conv_str += "%e6%9a%91";
break;
case 48620:
conv_str += "%e6%9b%99";
break;
case 48621:
conv_str += "%e6%b8%9a";
break;
case 48622:
conv_str += "%e5%ba%b6";
break;
case 48623:
conv_str += "%e7%b7%92";
break;
case 48624:
conv_str += "%e7%bd%b2";
break;
case 48625:
conv_str += "%e6%9b%b8";
break;
case 48626:
conv_str += "%e8%96%af";
break;
case 48627:
conv_str += "%e8%97%b7";
break;
case 48628:
conv_str += "%e8%ab%b8";
break;
case 48629:
conv_str += "%e5%8a%a9";
break;
case 48630:
conv_str += "%e5%8f%99";
break;
case 48631:
conv_str += "%e5%a5%b3";
break;
case 48632:
conv_str += "%e5%ba%8f";
break;
case 48633:
conv_str += "%e5%be%90";
break;
case 48634:
conv_str += "%e6%81%95";
break;
case 48635:
conv_str += "%e9%8b%a4";
break;
case 48636:
conv_str += "%e9%99%a4";
break;
case 48637:
conv_str += "%e5%82%b7";
break;
case 48638:
conv_str += "%e5%84%9f";
break;
case 48801:
conv_str += "%e5%8b%9d";
break;
case 48802:
conv_str += "%e5%8c%a0";
break;
case 48803:
conv_str += "%e5%8d%87";
break;
case 48804:
conv_str += "%e5%8f%ac";
break;
case 48805:
conv_str += "%e5%93%a8";
break;
case 48806:
conv_str += "%e5%95%86";
break;
case 48807:
conv_str += "%e5%94%b1";
break;
case 48808:
conv_str += "%e5%98%97";
break;
case 48809:
conv_str += "%e5%a5%a8";
break;
case 48810:
conv_str += "%e5%a6%be";
break;
case 48811:
conv_str += "%e5%a8%bc";
break;
case 48812:
conv_str += "%e5%ae%b5";
break;
case 48813:
conv_str += "%e5%b0%86";
break;
case 48814:
conv_str += "%e5%b0%8f";
break;
case 48815:
conv_str += "%e5%b0%91";
break;
case 48816:
conv_str += "%e5%b0%9a";
break;
case 48817:
conv_str += "%e5%ba%84";
break;
case 48818:
conv_str += "%e5%ba%8a";
break;
case 48819:
conv_str += "%e5%bb%a0";
break;
case 48820:
conv_str += "%e5%bd%b0";
break;
case 48821:
conv_str += "%e6%89%bf";
break;
case 48822:
conv_str += "%e6%8a%84";
break;
case 48823:
conv_str += "%e6%8b%9b";
break;
case 48824:
conv_str += "%e6%8e%8c";
break;
case 48825:
conv_str += "%e6%8d%b7";
break;
case 48826:
conv_str += "%e6%98%87";
break;
case 48827:
conv_str += "%e6%98%8c";
break;
case 48828:
conv_str += "%e6%98%ad";
break;
case 48829:
conv_str += "%e6%99%b6";
break;
case 48830:
conv_str += "%e6%9d%be";
break;
case 48831:
conv_str += "%e6%a2%a2";
break;
case 48832:
conv_str += "%e6%a8%9f";
break;
case 48833:
conv_str += "%e6%a8%b5";
break;
case 48834:
conv_str += "%e6%b2%bc";
break;
case 48835:
conv_str += "%e6%b6%88";
break;
case 48836:
conv_str += "%e6%b8%89";
break;
case 48837:
conv_str += "%e6%b9%98";
break;
case 48838:
conv_str += "%e7%84%bc";
break;
case 48839:
conv_str += "%e7%84%a6";
break;
case 48840:
conv_str += "%e7%85%a7";
break;
case 48841:
conv_str += "%e7%97%87";
break;
case 48842:
conv_str += "%e7%9c%81";
break;
case 48843:
conv_str += "%e7%a1%9d";
break;
case 48844:
conv_str += "%e7%a4%81";
break;
case 48845:
conv_str += "%e7%a5%a5";
break;
case 48846:
conv_str += "%e7%a7%b0";
break;
case 48847:
conv_str += "%e7%ab%a0";
break;
case 48848:
conv_str += "%e7%ac%91";
break;
case 48849:
conv_str += "%e7%b2%a7";
break;
case 48850:
conv_str += "%e7%b4%b9";
break;
case 48851:
conv_str += "%e8%82%96";
break;
case 48852:
conv_str += "%e8%8f%96";
break;
case 48853:
conv_str += "%e8%92%8b";
break;
case 48854:
conv_str += "%e8%95%89";
break;
case 48855:
conv_str += "%e8%a1%9d";
break;
case 48856:
conv_str += "%e8%a3%b3";
break;
case 48857:
conv_str += "%e8%a8%9f";
break;
case 48858:
conv_str += "%e8%a8%bc";
break;
case 48859:
conv_str += "%e8%a9%94";
break;
case 48860:
conv_str += "%e8%a9%b3";
break;
case 48861:
conv_str += "%e8%b1%a1";
break;
case 48862:
conv_str += "%e8%b3%9e";
break;
case 48863:
conv_str += "%e9%86%a4";
break;
case 48864:
conv_str += "%e9%89%a6";
break;
case 48865:
conv_str += "%e9%8d%be";
break;
case 48866:
conv_str += "%e9%90%98";
break;
case 48867:
conv_str += "%e9%9a%9c";
break;
case 48868:
conv_str += "%e9%9e%98";
break;
case 48869:
conv_str += "%e4%b8%8a";
break;
case 48870:
conv_str += "%e4%b8%88";
break;
case 48871:
conv_str += "%e4%b8%9e";
break;
case 48872:
conv_str += "%e4%b9%97";
break;
case 48873:
conv_str += "%e5%86%97";
break;
case 48874:
conv_str += "%e5%89%b0";
break;
case 48875:
conv_str += "%e5%9f%8e";
break;
case 48876:
conv_str += "%e5%a0%b4";
break;
case 48877:
conv_str += "%e5%a3%8c";
break;
case 48878:
conv_str += "%e5%ac%a2";
break;
case 48879:
conv_str += "%e5%b8%b8";
break;
case 48880:
conv_str += "%e6%83%85";
break;
case 48881:
conv_str += "%e6%93%be";
break;
case 48882:
conv_str += "%e6%9d%a1";
break;
case 48883:
conv_str += "%e6%9d%96";
break;
case 48884:
conv_str += "%e6%b5%84";
break;
case 48885:
conv_str += "%e7%8a%b6";
break;
case 48886:
conv_str += "%e7%95%b3";
break;
case 48887:
conv_str += "%e7%a9%a3";
break;
case 48888:
conv_str += "%e8%92%b8";
break;
case 48889:
conv_str += "%e8%ad%b2";
break;
case 48890:
conv_str += "%e9%86%b8";
break;
case 48891:
conv_str += "%e9%8c%a0";
break;
case 48892:
conv_str += "%e5%98%b1";
break;
case 48893:
conv_str += "%e5%9f%b4";
break;
case 48894:
conv_str += "%e9%a3%be";
break;
case 49057:
conv_str += "%e6%8b%ad";
break;
case 49058:
conv_str += "%e6%a4%8d";
break;
case 49059:
conv_str += "%e6%ae%96";
break;
case 49060:
conv_str += "%e7%87%ad";
break;
case 49061:
conv_str += "%e7%b9%94";
break;
case 49062:
conv_str += "%e8%81%b7";
break;
case 49063:
conv_str += "%e8%89%b2";
break;
case 49064:
conv_str += "%e8%a7%a6";
break;
case 49065:
conv_str += "%e9%a3%9f";
break;
case 49066:
conv_str += "%e8%9d%95";
break;
case 49067:
conv_str += "%e8%be%b1";
break;
case 49068:
conv_str += "%e5%b0%bb";
break;
case 49069:
conv_str += "%e4%bc%b8";
break;
case 49070:
conv_str += "%e4%bf%a1";
break;
case 49071:
conv_str += "%e4%be%b5";
break;
case 49072:
conv_str += "%e5%94%87";
break;
case 49073:
conv_str += "%e5%a8%a0";
break;
case 49074:
conv_str += "%e5%af%9d";
break;
case 49075:
conv_str += "%e5%af%a9";
break;
case 49076:
conv_str += "%e5%bf%83";
break;
case 49077:
conv_str += "%e6%85%8e";
break;
case 49078:
conv_str += "%e6%8c%af";
break;
case 49079:
conv_str += "%e6%96%b0";
break;
case 49080:
conv_str += "%e6%99%8b";
break;
case 49081:
conv_str += "%e6%a3%ae";
break;
case 49082:
conv_str += "%e6%a6%9b";
break;
case 49083:
conv_str += "%e6%b5%b8";
break;
case 49084:
conv_str += "%e6%b7%b1";
break;
case 49085:
conv_str += "%e7%94%b3";
break;
case 49086:
conv_str += "%e7%96%b9";
break;
case 49087:
conv_str += "%e7%9c%9f";
break;
case 49088:
conv_str += "%e7%a5%9e";
break;
case 49089:
conv_str += "%e7%a7%a6";
break;
case 49090:
conv_str += "%e7%b4%b3";
break;
case 49091:
conv_str += "%e8%87%a3";
break;
case 49092:
conv_str += "%e8%8a%af";
break;
case 49093:
conv_str += "%e8%96%aa";
break;
case 49094:
conv_str += "%e8%a6%aa";
break;
case 49095:
conv_str += "%e8%a8%ba";
break;
case 49096:
conv_str += "%e8%ba%ab";
break;
case 49097:
conv_str += "%e8%be%9b";
break;
case 49098:
conv_str += "%e9%80%b2";
break;
case 49099:
conv_str += "%e9%87%9d";
break;
case 49100:
conv_str += "%e9%9c%87";
break;
case 49101:
conv_str += "%e4%ba%ba";
break;
case 49102:
conv_str += "%e4%bb%81";
break;
case 49103:
conv_str += "%e5%88%83";
break;
case 49104:
conv_str += "%e5%a1%b5";
break;
case 49105:
conv_str += "%e5%a3%ac";
break;
case 49106:
conv_str += "%e5%b0%8b";
break;
case 49107:
conv_str += "%e7%94%9a";
break;
case 49108:
conv_str += "%e5%b0%bd";
break;
case 49109:
conv_str += "%e8%85%8e";
break;
case 49110:
conv_str += "%e8%a8%8a";
break;
case 49111:
conv_str += "%e8%bf%85";
break;
case 49112:
conv_str += "%e9%99%a3";
break;
case 49113:
conv_str += "%e9%9d%ad";
break;
case 49114:
conv_str += "%e7%ac%a5";
break;
case 49115:
conv_str += "%e8%ab%8f";
break;
case 49116:
conv_str += "%e9%a0%88";
break;
case 49117:
conv_str += "%e9%85%a2";
break;
case 49118:
conv_str += "%e5%9b%b3";
break;
case 49119:
conv_str += "%e5%8e%a8";
break;
case 49120:
conv_str += "%e9%80%97";
break;
case 49121:
conv_str += "%e5%90%b9";
break;
case 49122:
conv_str += "%e5%9e%82";
break;
case 49123:
conv_str += "%e5%b8%a5";
break;
case 49124:
conv_str += "%e6%8e%a8";
break;
case 49125:
conv_str += "%e6%b0%b4";
break;
case 49126:
conv_str += "%e7%82%8a";
break;
case 49127:
conv_str += "%e7%9d%a1";
break;
case 49128:
conv_str += "%e7%b2%8b";
break;
case 49129:
conv_str += "%e7%bf%a0";
break;
case 49130:
conv_str += "%e8%a1%b0";
break;
case 49131:
conv_str += "%e9%81%82";
break;
case 49132:
conv_str += "%e9%85%94";
break;
case 49133:
conv_str += "%e9%8c%90";
break;
case 49134:
conv_str += "%e9%8c%98";
break;
case 49135:
conv_str += "%e9%9a%8f";
break;
case 49136:
conv_str += "%e7%91%9e";
break;
case 49137:
conv_str += "%e9%ab%84";
break;
case 49138:
conv_str += "%e5%b4%87";
break;
case 49139:
conv_str += "%e5%b5%a9";
break;
case 49140:
conv_str += "%e6%95%b0";
break;
case 49141:
conv_str += "%e6%9e%a2";
break;
case 49142:
conv_str += "%e8%b6%a8";
break;
case 49143:
conv_str += "%e9%9b%9b";
break;
case 49144:
conv_str += "%e6%8d%ae";
break;
case 49145:
conv_str += "%e6%9d%89";
break;
case 49146:
conv_str += "%e6%a4%99";
break;
case 49147:
conv_str += "%e8%8f%85";
break;
case 49148:
conv_str += "%e9%a0%97";
break;
case 49149:
conv_str += "%e9%9b%80";
break;
case 49150:
conv_str += "%e8%a3%be";
break;
case 49313:
conv_str += "%e6%be%84";
break;
case 49314:
conv_str += "%e6%91%ba";
break;
case 49315:
conv_str += "%e5%af%b8";
break;
case 49316:
conv_str += "%e4%b8%96";
break;
case 49317:
conv_str += "%e7%80%ac";
break;
case 49318:
conv_str += "%e7%95%9d";
break;
case 49319:
conv_str += "%e6%98%af";
break;
case 49320:
conv_str += "%e5%87%84";
break;
case 49321:
conv_str += "%e5%88%b6";
break;
case 49322:
conv_str += "%e5%8b%a2";
break;
case 49323:
conv_str += "%e5%a7%93";
break;
case 49324:
conv_str += "%e5%be%81";
break;
case 49325:
conv_str += "%e6%80%a7";
break;
case 49326:
conv_str += "%e6%88%90";
break;
case 49327:
conv_str += "%e6%94%bf";
break;
case 49328:
conv_str += "%e6%95%b4";
break;
case 49329:
conv_str += "%e6%98%9f";
break;
case 49330:
conv_str += "%e6%99%b4";
break;
case 49331:
conv_str += "%e6%a3%b2";
break;
case 49332:
conv_str += "%e6%a0%96";
break;
case 49333:
conv_str += "%e6%ad%a3";
break;
case 49334:
conv_str += "%e6%b8%85";
break;
case 49335:
conv_str += "%e7%89%b2";
break;
case 49336:
conv_str += "%e7%94%9f";
break;
case 49337:
conv_str += "%e7%9b%9b";
break;
case 49338:
conv_str += "%e7%b2%be";
break;
case 49339:
conv_str += "%e8%81%96";
break;
case 49340:
conv_str += "%e5%a3%b0";
break;
case 49341:
conv_str += "%e8%a3%bd";
break;
case 49342:
conv_str += "%e8%a5%bf";
break;
case 49343:
conv_str += "%e8%aa%a0";
break;
case 49344:
conv_str += "%e8%aa%93";
break;
case 49345:
conv_str += "%e8%ab%8b";
break;
case 49346:
conv_str += "%e9%80%9d";
break;
case 49347:
conv_str += "%e9%86%92";
break;
case 49348:
conv_str += "%e9%9d%92";
break;
case 49349:
conv_str += "%e9%9d%99";
break;
case 49350:
conv_str += "%e6%96%89";
break;
case 49351:
conv_str += "%e7%a8%8e";
break;
case 49352:
conv_str += "%e8%84%86";
break;
case 49353:
conv_str += "%e9%9a%bb";
break;
case 49354:
conv_str += "%e5%b8%ad";
break;
case 49355:
conv_str += "%e6%83%9c";
break;
case 49356:
conv_str += "%e6%88%9a";
break;
case 49357:
conv_str += "%e6%96%a5";
break;
case 49358:
conv_str += "%e6%98%94";
break;
case 49359:
conv_str += "%e6%9e%90";
break;
case 49360:
conv_str += "%e7%9f%b3";
break;
case 49361:
conv_str += "%e7%a9%8d";
break;
case 49362:
conv_str += "%e7%b1%8d";
break;
case 49363:
conv_str += "%e7%b8%be";
break;
case 49364:
conv_str += "%e8%84%8a";
break;
case 49365:
conv_str += "%e8%b2%ac";
break;
case 49366:
conv_str += "%e8%b5%a4";
break;
case 49367:
conv_str += "%e8%b7%a1";
break;
case 49368:
conv_str += "%e8%b9%9f";
break;
case 49369:
conv_str += "%e7%a2%a9";
break;
case 49370:
conv_str += "%e5%88%87";
break;
case 49371:
conv_str += "%e6%8b%99";
break;
case 49372:
conv_str += "%e6%8e%a5";
break;
case 49373:
conv_str += "%e6%91%82";
break;
case 49374:
conv_str += "%e6%8a%98";
break;
case 49375:
conv_str += "%e8%a8%ad";
break;
case 49376:
conv_str += "%e7%aa%83";
break;
case 49377:
conv_str += "%e7%af%80";
break;
case 49378:
conv_str += "%e8%aa%ac";
break;
case 49379:
conv_str += "%e9%9b%aa";
break;
case 49380:
conv_str += "%e7%b5%b6";
break;
case 49381:
conv_str += "%e8%88%8c";
break;
case 49382:
conv_str += "%e8%9d%89";
break;
case 49383:
conv_str += "%e4%bb%99";
break;
case 49384:
conv_str += "%e5%85%88";
break;
case 49385:
conv_str += "%e5%8d%83";
break;
case 49386:
conv_str += "%e5%8d%a0";
break;
case 49387:
conv_str += "%e5%ae%a3";
break;
case 49388:
conv_str += "%e5%b0%82";
break;
case 49389:
conv_str += "%e5%b0%96";
break;
case 49390:
conv_str += "%e5%b7%9d";
break;
case 49391:
conv_str += "%e6%88%a6";
break;
case 49392:
conv_str += "%e6%89%87";
break;
case 49393:
conv_str += "%e6%92%b0";
break;
case 49394:
conv_str += "%e6%a0%93";
break;
case 49395:
conv_str += "%e6%a0%b4";
break;
case 49396:
conv_str += "%e6%b3%89";
break;
case 49397:
conv_str += "%e6%b5%85";
break;
case 49398:
conv_str += "%e6%b4%97";
break;
case 49399:
conv_str += "%e6%9f%93";
break;
case 49400:
conv_str += "%e6%bd%9c";
break;
case 49401:
conv_str += "%e7%85%8e";
break;
case 49402:
conv_str += "%e7%85%bd";
break;
case 49403:
conv_str += "%e6%97%8b";
break;
case 49404:
conv_str += "%e7%a9%bf";
break;
case 49405:
conv_str += "%e7%ae%ad";
break;
case 49406:
conv_str += "%e7%b7%9a";
break;
case 49569:
conv_str += "%e7%b9%8a";
break;
case 49570:
conv_str += "%e7%be%a8";
break;
case 49571:
conv_str += "%e8%85%ba";
break;
case 49572:
conv_str += "%e8%88%9b";
break;
case 49573:
conv_str += "%e8%88%b9";
break;
case 49574:
conv_str += "%e8%96%a6";
break;
case 49575:
conv_str += "%e8%a9%ae";
break;
case 49576:
conv_str += "%e8%b3%8e";
break;
case 49577:
conv_str += "%e8%b7%b5";
break;
case 49578:
conv_str += "%e9%81%b8";
break;
case 49579:
conv_str += "%e9%81%b7";
break;
case 49580:
conv_str += "%e9%8a%ad";
break;
case 49581:
conv_str += "%e9%8a%91";
break;
case 49582:
conv_str += "%e9%96%83";
break;
case 49583:
conv_str += "%e9%ae%ae";
break;
case 49584:
conv_str += "%e5%89%8d";
break;
case 49585:
conv_str += "%e5%96%84";
break;
case 49586:
conv_str += "%e6%bc%b8";
break;
case 49587:
conv_str += "%e7%84%b6";
break;
case 49588:
conv_str += "%e5%85%a8";
break;
case 49589:
conv_str += "%e7%a6%85";
break;
case 49590:
conv_str += "%e7%b9%95";
break;
case 49591:
conv_str += "%e8%86%b3";
break;
case 49592:
conv_str += "%e7%b3%8e";
break;
case 49593:
conv_str += "%e5%99%8c";
break;
case 49594:
conv_str += "%e5%a1%91";
break;
case 49595:
conv_str += "%e5%b2%a8";
break;
case 49596:
conv_str += "%e6%8e%aa";
break;
case 49597:
conv_str += "%e6%9b%be";
break;
case 49598:
conv_str += "%e6%9b%bd";
break;
case 49599:
conv_str += "%e6%a5%9a";
break;
case 49600:
conv_str += "%e7%8b%99";
break;
case 49601:
conv_str += "%e7%96%8f";
break;
case 49602:
conv_str += "%e7%96%8e";
break;
case 49603:
conv_str += "%e7%a4%8e";
break;
case 49604:
conv_str += "%e7%a5%96";
break;
case 49605:
conv_str += "%e7%a7%9f";
break;
case 49606:
conv_str += "%e7%b2%97";
break;
case 49607:
conv_str += "%e7%b4%a0";
break;
case 49608:
conv_str += "%e7%b5%84";
break;
case 49609:
conv_str += "%e8%98%87";
break;
case 49610:
conv_str += "%e8%a8%b4";
break;
case 49611:
conv_str += "%e9%98%bb";
break;
case 49612:
conv_str += "%e9%81%a1";
break;
case 49613:
conv_str += "%e9%bc%a0";
break;
case 49614:
conv_str += "%e5%83%a7";
break;
case 49615:
conv_str += "%e5%89%b5";
break;
case 49616:
conv_str += "%e5%8f%8c";
break;
case 49617:
conv_str += "%e5%8f%a2";
break;
case 49618:
conv_str += "%e5%80%89";
break;
case 49619:
conv_str += "%e5%96%aa";
break;
case 49620:
conv_str += "%e5%a3%ae";
break;
case 49621:
conv_str += "%e5%a5%8f";
break;
case 49622:
conv_str += "%e7%88%bd";
break;
case 49623:
conv_str += "%e5%ae%8b";
break;
case 49624:
conv_str += "%e5%b1%a4";
break;
case 49625:
conv_str += "%e5%8c%9d";
break;
case 49626:
conv_str += "%e6%83%a3";
break;
case 49627:
conv_str += "%e6%83%b3";
break;
case 49628:
conv_str += "%e6%8d%9c";
break;
case 49629:
conv_str += "%e6%8e%83";
break;
case 49630:
conv_str += "%e6%8c%bf";
break;
case 49631:
conv_str += "%e6%8e%bb";
break;
case 49632:
conv_str += "%e6%93%8d";
break;
case 49633:
conv_str += "%e6%97%a9";
break;
case 49634:
conv_str += "%e6%9b%b9";
break;
case 49635:
conv_str += "%e5%b7%a3";
break;
case 49636:
conv_str += "%e6%a7%8d";
break;
case 49637:
conv_str += "%e6%a7%bd";
break;
case 49638:
conv_str += "%e6%bc%95";
break;
case 49639:
conv_str += "%e7%87%a5";
break;
case 49640:
conv_str += "%e4%ba%89";
break;
case 49641:
conv_str += "%e7%97%a9";
break;
case 49642:
conv_str += "%e7%9b%b8";
break;
case 49643:
conv_str += "%e7%aa%93";
break;
case 49644:
conv_str += "%e7%b3%9f";
break;
case 49645:
conv_str += "%e7%b7%8f";
break;
case 49646:
conv_str += "%e7%b6%9c";
break;
case 49647:
conv_str += "%e8%81%a1";
break;
case 49648:
conv_str += "%e8%8d%89";
break;
case 49649:
conv_str += "%e8%8d%98";
break;
case 49650:
conv_str += "%e8%91%ac";
break;
case 49651:
conv_str += "%e8%92%bc";
break;
case 49652:
conv_str += "%e8%97%bb";
break;
case 49653:
conv_str += "%e8%a3%85";
break;
case 49654:
conv_str += "%e8%b5%b0";
break;
case 49655:
conv_str += "%e9%80%81";
break;
case 49656:
conv_str += "%e9%81%ad";
break;
case 49657:
conv_str += "%e9%8e%97";
break;
case 49658:
conv_str += "%e9%9c%9c";
break;
case 49659:
conv_str += "%e9%a8%92";
break;
case 49660:
conv_str += "%e5%83%8f";
break;
case 49661:
conv_str += "%e5%a2%97";
break;
case 49662:
conv_str += "%e6%86%8e";
break;
case 49825:
conv_str += "%e8%87%93";
break;
case 49826:
conv_str += "%e8%94%b5";
break;
case 49827:
conv_str += "%e8%b4%88";
break;
case 49828:
conv_str += "%e9%80%a0";
break;
case 49829:
conv_str += "%e4%bf%83";
break;
case 49830:
conv_str += "%e5%81%b4";
break;
case 49831:
conv_str += "%e5%89%87";
break;
case 49832:
conv_str += "%e5%8d%b3";
break;
case 49833:
conv_str += "%e6%81%af";
break;
case 49834:
conv_str += "%e6%8d%89";
break;
case 49835:
conv_str += "%e6%9d%9f";
break;
case 49836:
conv_str += "%e6%b8%ac";
break;
case 49837:
conv_str += "%e8%b6%b3";
break;
case 49838:
conv_str += "%e9%80%9f";
break;
case 49839:
conv_str += "%e4%bf%97";
break;
case 49840:
conv_str += "%e5%b1%9e";
break;
case 49841:
conv_str += "%e8%b3%8a";
break;
case 49842:
conv_str += "%e6%97%8f";
break;
case 49843:
conv_str += "%e7%b6%9a";
break;
case 49844:
conv_str += "%e5%8d%92";
break;
case 49845:
conv_str += "%e8%a2%96";
break;
case 49846:
conv_str += "%e5%85%b6";
break;
case 49847:
conv_str += "%e6%8f%83";
break;
case 49848:
conv_str += "%e5%ad%98";
break;
case 49849:
conv_str += "%e5%ad%ab";
break;
case 49850:
conv_str += "%e5%b0%8a";
break;
case 49851:
conv_str += "%e6%90%8d";
break;
case 49852:
conv_str += "%e6%9d%91";
break;
case 49853:
conv_str += "%e9%81%9c";
break;
case 49854:
conv_str += "%e4%bb%96";
break;
case 49855:
conv_str += "%e5%a4%9a";
break;
case 49856:
conv_str += "%e5%a4%aa";
break;
case 49857:
conv_str += "%e6%b1%b0";
break;
case 49858:
conv_str += "%e8%a9%91";
break;
case 49859:
conv_str += "%e5%94%be";
break;
case 49860:
conv_str += "%e5%a0%95";
break;
case 49861:
conv_str += "%e5%a6%a5";
break;
case 49862:
conv_str += "%e6%83%b0";
break;
case 49863:
conv_str += "%e6%89%93";
break;
case 49864:
conv_str += "%e6%9f%81";
break;
case 49865:
conv_str += "%e8%88%b5";
break;
case 49866:
conv_str += "%e6%a5%95";
break;
case 49867:
conv_str += "%e9%99%80";
break;
case 49868:
conv_str += "%e9%a7%84";
break;
case 49869:
conv_str += "%e9%a8%a8";
break;
case 49870:
conv_str += "%e4%bd%93";
break;
case 49871:
conv_str += "%e5%a0%86";
break;
case 49872:
conv_str += "%e5%af%be";
break;
case 49873:
conv_str += "%e8%80%90";
break;
case 49874:
conv_str += "%e5%b2%b1";
break;
case 49875:
conv_str += "%e5%b8%af";
break;
case 49876:
conv_str += "%e5%be%85";
break;
case 49877:
conv_str += "%e6%80%a0";
break;
case 49878:
conv_str += "%e6%85%8b";
break;
case 49879:
conv_str += "%e6%88%b4";
break;
case 49880:
conv_str += "%e6%9b%bf";
break;
case 49881:
conv_str += "%e6%b3%b0";
break;
case 49882:
conv_str += "%e6%bb%9e";
break;
case 49883:
conv_str += "%e8%83%8e";
break;
case 49884:
conv_str += "%e8%85%bf";
break;
case 49885:
conv_str += "%e8%8b%94";
break;
case 49886:
conv_str += "%e8%a2%8b";
break;
case 49887:
conv_str += "%e8%b2%b8";
break;
case 49888:
conv_str += "%e9%80%80";
break;
case 49889:
conv_str += "%e9%80%ae";
break;
case 49890:
conv_str += "%e9%9a%8a";
break;
case 49891:
conv_str += "%e9%bb%9b";
break;
case 49892:
conv_str += "%e9%af%9b";
break;
case 49893:
conv_str += "%e4%bb%a3";
break;
case 49894:
conv_str += "%e5%8f%b0";
break;
case 49895:
conv_str += "%e5%a4%a7";
break;
case 49896:
conv_str += "%e7%ac%ac";
break;
case 49897:
conv_str += "%e9%86%8d";
break;
case 49898:
conv_str += "%e9%a1%8c";
break;
case 49899:
conv_str += "%e9%b7%b9";
break;
case 49900:
conv_str += "%e6%bb%9d";
break;
case 49901:
conv_str += "%e7%80%a7";
break;
case 49902:
conv_str += "%e5%8d%93";
break;
case 49903:
conv_str += "%e5%95%84";
break;
case 49904:
conv_str += "%e5%ae%85";
break;
case 49905:
conv_str += "%e6%89%98";
break;
case 49906:
conv_str += "%e6%8a%9e";
break;
case 49907:
conv_str += "%e6%8b%93";
break;
case 49908:
conv_str += "%e6%b2%a2";
break;
case 49909:
conv_str += "%e6%bf%af";
break;
case 49910:
conv_str += "%e7%90%a2";
break;
case 49911:
conv_str += "%e8%a8%97";
break;
case 49912:
conv_str += "%e9%90%b8";
break;
case 49913:
conv_str += "%e6%bf%81";
break;
case 49914:
conv_str += "%e8%ab%be";
break;
case 49915:
conv_str += "%e8%8c%b8";
break;
case 49916:
conv_str += "%e5%87%a7";
break;
case 49917:
conv_str += "%e8%9b%b8";
break;
case 49918:
conv_str += "%e5%8f%aa";
break;
case 50081:
conv_str += "%e5%8f%a9";
break;
case 50082:
conv_str += "%e4%bd%86";
break;
case 50083:
conv_str += "%e9%81%94";
break;
case 50084:
conv_str += "%e8%be%b0";
break;
case 50085:
conv_str += "%e5%a5%aa";
break;
case 50086:
conv_str += "%e8%84%b1";
break;
case 50087:
conv_str += "%e5%b7%bd";
break;
case 50088:
conv_str += "%e7%ab%aa";
break;
case 50089:
conv_str += "%e8%be%bf";
break;
case 50090:
conv_str += "%e6%a3%9a";
break;
case 50091:
conv_str += "%e8%b0%b7";
break;
case 50092:
conv_str += "%e7%8b%b8";
break;
case 50093:
conv_str += "%e9%b1%88";
break;
case 50094:
conv_str += "%e6%a8%bd";
break;
case 50095:
conv_str += "%e8%aa%b0";
break;
case 50096:
conv_str += "%e4%b8%b9";
break;
case 50097:
conv_str += "%e5%8d%98";
break;
case 50098:
conv_str += "%e5%98%86";
break;
case 50099:
conv_str += "%e5%9d%a6";
break;
case 50100:
conv_str += "%e6%8b%85";
break;
case 50101:
conv_str += "%e6%8e%a2";
break;
case 50102:
conv_str += "%e6%97%a6";
break;
case 50103:
conv_str += "%e6%ad%8e";
break;
case 50104:
conv_str += "%e6%b7%a1";
break;
case 50105:
conv_str += "%e6%b9%9b";
break;
case 50106:
conv_str += "%e7%82%ad";
break;
case 50107:
conv_str += "%e7%9f%ad";
break;
case 50108:
conv_str += "%e7%ab%af";
break;
case 50109:
conv_str += "%e7%ae%aa";
break;
case 50110:
conv_str += "%e7%b6%bb";
break;
case 50111:
conv_str += "%e8%80%bd";
break;
case 50112:
conv_str += "%e8%83%86";
break;
case 50113:
conv_str += "%e8%9b%8b";
break;
case 50114:
conv_str += "%e8%aa%95";
break;
case 50115:
conv_str += "%e9%8d%9b";
break;
case 50116:
conv_str += "%e5%9b%a3";
break;
case 50117:
conv_str += "%e5%a3%87";
break;
case 50118:
conv_str += "%e5%bc%be";
break;
case 50119:
conv_str += "%e6%96%ad";
break;
case 50120:
conv_str += "%e6%9a%96";
break;
case 50121:
conv_str += "%e6%aa%80";
break;
case 50122:
conv_str += "%e6%ae%b5";
break;
case 50123:
conv_str += "%e7%94%b7";
break;
case 50124:
conv_str += "%e8%ab%87";
break;
case 50125:
conv_str += "%e5%80%a4";
break;
case 50126:
conv_str += "%e7%9f%a5";
break;
case 50127:
conv_str += "%e5%9c%b0";
break;
case 50128:
conv_str += "%e5%bc%9b";
break;
case 50129:
conv_str += "%e6%81%a5";
break;
case 50130:
conv_str += "%e6%99%ba";
break;
case 50131:
conv_str += "%e6%b1%a0";
break;
case 50132:
conv_str += "%e7%97%b4";
break;
case 50133:
conv_str += "%e7%a8%9a";
break;
case 50134:
conv_str += "%e7%bd%ae";
break;
case 50135:
conv_str += "%e8%87%b4";
break;
case 50136:
conv_str += "%e8%9c%98";
break;
case 50137:
conv_str += "%e9%81%85";
break;
case 50138:
conv_str += "%e9%a6%b3";
break;
case 50139:
conv_str += "%e7%af%89";
break;
case 50140:
conv_str += "%e7%95%9c";
break;
case 50141:
conv_str += "%e7%ab%b9";
break;
case 50142:
conv_str += "%e7%ad%91";
break;
case 50143:
conv_str += "%e8%93%84";
break;
case 50144:
conv_str += "%e9%80%90";
break;
case 50145:
conv_str += "%e7%a7%a9";
break;
case 50146:
conv_str += "%e7%aa%92";
break;
case 50147:
conv_str += "%e8%8c%b6";
break;
case 50148:
conv_str += "%e5%ab%a1";
break;
case 50149:
conv_str += "%e7%9d%80";
break;
case 50150:
conv_str += "%e4%b8%ad";
break;
case 50151:
conv_str += "%e4%bb%b2";
break;
case 50152:
conv_str += "%e5%ae%99";
break;
case 50153:
conv_str += "%e5%bf%a0";
break;
case 50154:
conv_str += "%e6%8a%bd";
break;
case 50155:
conv_str += "%e6%98%bc";
break;
case 50156:
conv_str += "%e6%9f%b1";
break;
case 50157:
conv_str += "%e6%b3%a8";
break;
case 50158:
conv_str += "%e8%99%ab";
break;
case 50159:
conv_str += "%e8%a1%b7";
break;
case 50160:
conv_str += "%e8%a8%bb";
break;
case 50161:
conv_str += "%e9%85%8e";
break;
case 50162:
conv_str += "%e9%8b%b3";
break;
case 50163:
conv_str += "%e9%a7%90";
break;
case 50164:
conv_str += "%e6%a8%97";
break;
case 50165:
conv_str += "%e7%80%a6";
break;
case 50166:
conv_str += "%e7%8c%aa";
break;
case 50167:
conv_str += "%e8%8b%a7";
break;
case 50168:
conv_str += "%e8%91%97";
break;
case 50169:
conv_str += "%e8%b2%af";
break;
case 50170:
conv_str += "%e4%b8%81";
break;
case 50171:
conv_str += "%e5%85%86";
break;
case 50172:
conv_str += "%e5%87%8b";
break;
case 50173:
conv_str += "%e5%96%8b";
break;
case 50174:
conv_str += "%e5%af%b5";
break;
case 50337:
conv_str += "%e5%b8%96";
break;
case 50338:
conv_str += "%e5%b8%b3";
break;
case 50339:
conv_str += "%e5%ba%81";
break;
case 50340:
conv_str += "%e5%bc%94";
break;
case 50341:
conv_str += "%e5%bc%b5";
break;
case 50342:
conv_str += "%e5%bd%ab";
break;
case 50343:
conv_str += "%e5%be%b4";
break;
case 50344:
conv_str += "%e6%87%b2";
break;
case 50345:
conv_str += "%e6%8c%91";
break;
case 50346:
conv_str += "%e6%9a%a2";
break;
case 50347:
conv_str += "%e6%9c%9d";
break;
case 50348:
conv_str += "%e6%bd%ae";
break;
case 50349:
conv_str += "%e7%89%92";
break;
case 50350:
conv_str += "%e7%94%ba";
break;
case 50351:
conv_str += "%e7%9c%ba";
break;
case 50352:
conv_str += "%e8%81%b4";
break;
case 50353:
conv_str += "%e8%84%b9";
break;
case 50354:
conv_str += "%e8%85%b8";
break;
case 50355:
conv_str += "%e8%9d%b6";
break;
case 50356:
conv_str += "%e8%aa%bf";
break;
case 50357:
conv_str += "%e8%ab%9c";
break;
case 50358:
conv_str += "%e8%b6%85";
break;
case 50359:
conv_str += "%e8%b7%b3";
break;
case 50360:
conv_str += "%e9%8a%9a";
break;
case 50361:
conv_str += "%e9%95%b7";
break;
case 50362:
conv_str += "%e9%a0%82";
break;
case 50363:
conv_str += "%e9%b3%a5";
break;
case 50364:
conv_str += "%e5%8b%85";
break;
case 50365:
conv_str += "%e6%8d%97";
break;
case 50366:
conv_str += "%e7%9b%b4";
break;
case 50367:
conv_str += "%e6%9c%95";
break;
case 50368:
conv_str += "%e6%b2%88";
break;
case 50369:
conv_str += "%e7%8f%8d";
break;
case 50370:
conv_str += "%e8%b3%83";
break;
case 50371:
conv_str += "%e9%8e%ae";
break;
case 50372:
conv_str += "%e9%99%b3";
break;
case 50373:
conv_str += "%e6%b4%a5";
break;
case 50374:
conv_str += "%e5%a2%9c";
break;
case 50375:
conv_str += "%e6%a4%8e";
break;
case 50376:
conv_str += "%e6%a7%8c";
break;
case 50377:
conv_str += "%e8%bf%bd";
break;
case 50378:
conv_str += "%e9%8e%9a";
break;
case 50379:
conv_str += "%e7%97%9b";
break;
case 50380:
conv_str += "%e9%80%9a";
break;
case 50381:
conv_str += "%e5%a1%9a";
break;
case 50382:
conv_str += "%e6%a0%82";
break;
case 50383:
conv_str += "%e6%8e%b4";
break;
case 50384:
conv_str += "%e6%a7%bb";
break;
case 50385:
conv_str += "%e4%bd%83";
break;
case 50386:
conv_str += "%e6%bc%ac";
break;
case 50387:
conv_str += "%e6%9f%98";
break;
case 50388:
conv_str += "%e8%be%bb";
break;
case 50389:
conv_str += "%e8%94%a6";
break;
case 50390:
conv_str += "%e7%b6%b4";
break;
case 50391:
conv_str += "%e9%8d%94";
break;
case 50392:
conv_str += "%e6%a4%bf";
break;
case 50393:
conv_str += "%e6%bd%b0";
break;
case 50394:
conv_str += "%e5%9d%aa";
break;
case 50395:
conv_str += "%e5%a3%b7";
break;
case 50396:
conv_str += "%e5%ac%ac";
break;
case 50397:
conv_str += "%e7%b4%ac";
break;
case 50398:
conv_str += "%e7%88%aa";
break;
case 50399:
conv_str += "%e5%90%8a";
break;
case 50400:
conv_str += "%e9%87%a3";
break;
case 50401:
conv_str += "%e9%b6%b4";
break;
case 50402:
conv_str += "%e4%ba%ad";
break;
case 50403:
conv_str += "%e4%bd%8e";
break;
case 50404:
conv_str += "%e5%81%9c";
break;
case 50405:
conv_str += "%e5%81%b5";
break;
case 50406:
conv_str += "%e5%89%83";
break;
case 50407:
conv_str += "%e8%b2%9e";
break;
case 50408:
conv_str += "%e5%91%88";
break;
case 50409:
conv_str += "%e5%a0%a4";
break;
case 50410:
conv_str += "%e5%ae%9a";
break;
case 50411:
conv_str += "%e5%b8%9d";
break;
case 50412:
conv_str += "%e5%ba%95";
break;
case 50413:
conv_str += "%e5%ba%ad";
break;
case 50414:
conv_str += "%e5%bb%b7";
break;
case 50415:
conv_str += "%e5%bc%9f";
break;
case 50416:
conv_str += "%e6%82%8c";
break;
case 50417:
conv_str += "%e6%8a%b5";
break;
case 50418:
conv_str += "%e6%8c%ba";
break;
case 50419:
conv_str += "%e6%8f%90";
break;
case 50420:
conv_str += "%e6%a2%af";
break;
case 50421:
conv_str += "%e6%b1%80";
break;
case 50422:
conv_str += "%e7%a2%87";
break;
case 50423:
conv_str += "%e7%a6%8e";
break;
case 50424:
conv_str += "%e7%a8%8b";
break;
case 50425:
conv_str += "%e7%b7%a0";
break;
case 50426:
conv_str += "%e8%89%87";
break;
case 50427:
conv_str += "%e8%a8%82";
break;
case 50428:
conv_str += "%e8%ab%a6";
break;
case 50429:
conv_str += "%e8%b9%84";
break;
case 50430:
conv_str += "%e9%80%93";
break;
case 50593:
conv_str += "%e9%82%b8";
break;
case 50594:
conv_str += "%e9%84%ad";
break;
case 50595:
conv_str += "%e9%87%98";
break;
case 50596:
conv_str += "%e9%bc%8e";
break;
case 50597:
conv_str += "%e6%b3%a5";
break;
case 50598:
conv_str += "%e6%91%98";
break;
case 50599:
conv_str += "%e6%93%a2";
break;
case 50600:
conv_str += "%e6%95%b5";
break;
case 50601:
conv_str += "%e6%bb%b4";
break;
case 50602:
conv_str += "%e7%9a%84";
break;
case 50603:
conv_str += "%e7%ac%9b";
break;
case 50604:
conv_str += "%e9%81%a9";
break;
case 50605:
conv_str += "%e9%8f%91";
break;
case 50606:
conv_str += "%e6%ba%ba";
break;
case 50607:
conv_str += "%e5%93%b2";
break;
case 50608:
conv_str += "%e5%be%b9";
break;
case 50609:
conv_str += "%e6%92%a4";
break;
case 50610:
conv_str += "%e8%bd%8d";
break;
case 50611:
conv_str += "%e8%bf%ad";
break;
case 50612:
conv_str += "%e9%89%84";
break;
case 50613:
conv_str += "%e5%85%b8";
break;
case 50614:
conv_str += "%e5%a1%ab";
break;
case 50615:
conv_str += "%e5%a4%a9";
break;
case 50616:
conv_str += "%e5%b1%95";
break;
case 50617:
conv_str += "%e5%ba%97";
break;
case 50618:
conv_str += "%e6%b7%bb";
break;
case 50619:
conv_str += "%e7%ba%8f";
break;
case 50620:
conv_str += "%e7%94%9c";
break;
case 50621:
conv_str += "%e8%b2%bc";
break;
case 50622:
conv_str += "%e8%bb%a2";
break;
case 50623:
conv_str += "%e9%a1%9b";
break;
case 50624:
conv_str += "%e7%82%b9";
break;
case 50625:
conv_str += "%e4%bc%9d";
break;
case 50626:
conv_str += "%e6%ae%bf";
break;
case 50627:
conv_str += "%e6%be%b1";
break;
case 50628:
conv_str += "%e7%94%b0";
break;
case 50629:
conv_str += "%e9%9b%bb";
break;
case 50630:
conv_str += "%e5%85%8e";
break;
case 50631:
conv_str += "%e5%90%90";
break;
case 50632:
conv_str += "%e5%a0%b5";
break;
case 50633:
conv_str += "%e5%a1%97";
break;
case 50634:
conv_str += "%e5%a6%ac";
break;
case 50635:
conv_str += "%e5%b1%a0";
break;
case 50636:
conv_str += "%e5%be%92";
break;
case 50637:
conv_str += "%e6%96%97";
break;
case 50638:
conv_str += "%e6%9d%9c";
break;
case 50639:
conv_str += "%e6%b8%a1";
break;
case 50640:
conv_str += "%e7%99%bb";
break;
case 50641:
conv_str += "%e8%8f%9f";
break;
case 50642:
conv_str += "%e8%b3%ad";
break;
case 50643:
conv_str += "%e9%80%94";
break;
case 50644:
conv_str += "%e9%83%bd";
break;
case 50645:
conv_str += "%e9%8d%8d";
break;
case 50646:
conv_str += "%e7%a0%a5";
break;
case 50647:
conv_str += "%e7%a0%ba";
break;
case 50648:
conv_str += "%e5%8a%aa";
break;
case 50649:
conv_str += "%e5%ba%a6";
break;
case 50650:
conv_str += "%e5%9c%9f";
break;
case 50651:
conv_str += "%e5%a5%b4";
break;
case 50652:
conv_str += "%e6%80%92";
break;
case 50653:
conv_str += "%e5%80%92";
break;
case 50654:
conv_str += "%e5%85%9a";
break;
case 50655:
conv_str += "%e5%86%ac";
break;
case 50656:
conv_str += "%e5%87%8d";
break;
case 50657:
conv_str += "%e5%88%80";
break;
case 50658:
conv_str += "%e5%94%90";
break;
case 50659:
conv_str += "%e5%a1%94";
break;
case 50660:
conv_str += "%e5%a1%98";
break;
case 50661:
conv_str += "%e5%a5%97";
break;
case 50662:
conv_str += "%e5%ae%95";
break;
case 50663:
conv_str += "%e5%b3%b6";
break;
case 50664:
conv_str += "%e5%b6%8b";
break;
case 50665:
conv_str += "%e6%82%bc";
break;
case 50666:
conv_str += "%e6%8a%95";
break;
case 50667:
conv_str += "%e6%90%ad";
break;
case 50668:
conv_str += "%e6%9d%b1";
break;
case 50669:
conv_str += "%e6%a1%83";
break;
case 50670:
conv_str += "%e6%a2%bc";
break;
case 50671:
conv_str += "%e6%a3%9f";
break;
case 50672:
conv_str += "%e7%9b%97";
break;
case 50673:
conv_str += "%e6%b7%98";
break;
case 50674:
conv_str += "%e6%b9%af";
break;
case 50675:
conv_str += "%e6%b6%9b";
break;
case 50676:
conv_str += "%e7%81%af";
break;
case 50677:
conv_str += "%e7%87%88";
break;
case 50678:
conv_str += "%e5%bd%93";
break;
case 50679:
conv_str += "%e7%97%98";
break;
case 50680:
conv_str += "%e7%a5%b7";
break;
case 50681:
conv_str += "%e7%ad%89";
break;
case 50682:
conv_str += "%e7%ad%94";
break;
case 50683:
conv_str += "%e7%ad%92";
break;
case 50684:
conv_str += "%e7%b3%96";
break;
case 50685:
conv_str += "%e7%b5%b1";
break;
case 50686:
conv_str += "%e5%88%b0";
break;
case 50849:
conv_str += "%e8%91%a3";
break;
case 50850:
conv_str += "%e8%95%a9";
break;
case 50851:
conv_str += "%e8%97%a4";
break;
case 50852:
conv_str += "%e8%a8%8e";
break;
case 50853:
conv_str += "%e8%ac%84";
break;
case 50854:
conv_str += "%e8%b1%86";
break;
case 50855:
conv_str += "%e8%b8%8f";
break;
case 50856:
conv_str += "%e9%80%83";
break;
case 50857:
conv_str += "%e9%80%8f";
break;
case 50858:
conv_str += "%e9%90%99";
break;
case 50859:
conv_str += "%e9%99%b6";
break;
case 50860:
conv_str += "%e9%a0%ad";
break;
case 50861:
conv_str += "%e9%a8%b0";
break;
case 50862:
conv_str += "%e9%97%98";
break;
case 50863:
conv_str += "%e5%83%8d";
break;
case 50864:
conv_str += "%e5%8b%95";
break;
case 50865:
conv_str += "%e5%90%8c";
break;
case 50866:
conv_str += "%e5%a0%82";
break;
case 50867:
conv_str += "%e5%b0%8e";
break;
case 50868:
conv_str += "%e6%86%a7";
break;
case 50869:
conv_str += "%e6%92%9e";
break;
case 50870:
conv_str += "%e6%b4%9e";
break;
case 50871:
conv_str += "%e7%9e%b3";
break;
case 50872:
conv_str += "%e7%ab%a5";
break;
case 50873:
conv_str += "%e8%83%b4";
break;
case 50874:
conv_str += "%e8%90%84";
break;
case 50875:
conv_str += "%e9%81%93";
break;
case 50876:
conv_str += "%e9%8a%85";
break;
case 50877:
conv_str += "%e5%b3%a0";
break;
case 50878:
conv_str += "%e9%b4%87";
break;
case 50879:
conv_str += "%e5%8c%bf";
break;
case 50880:
conv_str += "%e5%be%97";
break;
case 50881:
conv_str += "%e5%be%b3";
break;
case 50882:
conv_str += "%e6%b6%9c";
break;
case 50883:
conv_str += "%e7%89%b9";
break;
case 50884:
conv_str += "%e7%9d%a3";
break;
case 50885:
conv_str += "%e7%a6%bf";
break;
case 50886:
conv_str += "%e7%af%a4";
break;
case 50887:
conv_str += "%e6%af%92";
break;
case 50888:
conv_str += "%e7%8b%ac";
break;
case 50889:
conv_str += "%e8%aa%ad";
break;
case 50890:
conv_str += "%e6%a0%83";
break;
case 50891:
conv_str += "%e6%a9%a1";
break;
case 50892:
conv_str += "%e5%87%b8";
break;
case 50893:
conv_str += "%e7%aa%81";
break;
case 50894:
conv_str += "%e6%a4%b4";
break;
case 50895:
conv_str += "%e5%b1%8a";
break;
case 50896:
conv_str += "%e9%b3%b6";
break;
case 50897:
conv_str += "%e8%8b%ab";
break;
case 50898:
conv_str += "%e5%af%85";
break;
case 50899:
conv_str += "%e9%85%89";
break;
case 50900:
conv_str += "%e7%80%9e";
break;
case 50901:
conv_str += "%e5%99%b8";
break;
case 50902:
conv_str += "%e5%b1%af";
break;
case 50903:
conv_str += "%e6%83%87";
break;
case 50904:
conv_str += "%e6%95%a6";
break;
case 50905:
conv_str += "%e6%b2%8c";
break;
case 50906:
conv_str += "%e8%b1%9a";
break;
case 50907:
conv_str += "%e9%81%81";
break;
case 50908:
conv_str += "%e9%a0%93";
break;
case 50909:
conv_str += "%e5%91%91";
break;
case 50910:
conv_str += "%e6%9b%87";
break;
case 50911:
conv_str += "%e9%88%8d";
break;
case 50912:
conv_str += "%e5%a5%88";
break;
case 50913:
conv_str += "%e9%82%a3";
break;
case 50914:
conv_str += "%e5%86%85";
break;
case 50915:
conv_str += "%e4%b9%8d";
break;
case 50916:
conv_str += "%e5%87%aa";
break;
case 50917:
conv_str += "%e8%96%99";
break;
case 50918:
conv_str += "%e8%ac%8e";
break;
case 50919:
conv_str += "%e7%81%98";
break;
case 50920:
conv_str += "%e6%8d%ba";
break;
case 50921:
conv_str += "%e9%8d%8b";
break;
case 50922:
conv_str += "%e6%a5%a2";
break;
case 50923:
conv_str += "%e9%a6%b4";
break;
case 50924:
conv_str += "%e7%b8%84";
break;
case 50925:
conv_str += "%e7%95%b7";
break;
case 50926:
conv_str += "%e5%8d%97";
break;
case 50927:
conv_str += "%e6%a5%a0";
break;
case 50928:
conv_str += "%e8%bb%9f";
break;
case 50929:
conv_str += "%e9%9b%a3";
break;
case 50930:
conv_str += "%e6%b1%9d";
break;
case 50931:
conv_str += "%e4%ba%8c";
break;
case 50932:
conv_str += "%e5%b0%bc";
break;
case 50933:
conv_str += "%e5%bc%90";
break;
case 50934:
conv_str += "%e8%bf%a9";
break;
case 50935:
conv_str += "%e5%8c%82";
break;
case 50936:
conv_str += "%e8%b3%91";
break;
case 50937:
conv_str += "%e8%82%89";
break;
case 50938:
conv_str += "%e8%99%b9";
break;
case 50939:
conv_str += "%e5%bb%bf";
break;
case 50940:
conv_str += "%e6%97%a5";
break;
case 50941:
conv_str += "%e4%b9%b3";
break;
case 50942:
conv_str += "%e5%85%a5";
break;
case 51105:
conv_str += "%e5%a6%82";
break;
case 51106:
conv_str += "%e5%b0%bf";
break;
case 51107:
conv_str += "%e9%9f%ae";
break;
case 51108:
conv_str += "%e4%bb%bb";
break;
case 51109:
conv_str += "%e5%a6%8a";
break;
case 51110:
conv_str += "%e5%bf%8d";
break;
case 51111:
conv_str += "%e8%aa%8d";
break;
case 51112:
conv_str += "%e6%bf%a1";
break;
case 51113:
conv_str += "%e7%a6%b0";
break;
case 51114:
conv_str += "%e7%a5%a2";
break;
case 51115:
conv_str += "%e5%af%a7";
break;
case 51116:
conv_str += "%e8%91%b1";
break;
case 51117:
conv_str += "%e7%8c%ab";
break;
case 51118:
conv_str += "%e7%86%b1";
break;
case 51119:
conv_str += "%e5%b9%b4";
break;
case 51120:
conv_str += "%e5%bf%b5";
break;
case 51121:
conv_str += "%e6%8d%bb";
break;
case 51122:
conv_str += "%e6%92%9a";
break;
case 51123:
conv_str += "%e7%87%83";
break;
case 51124:
conv_str += "%e7%b2%98";
break;
case 51125:
conv_str += "%e4%b9%83";
break;
case 51126:
conv_str += "%e5%bb%bc";
break;
case 51127:
conv_str += "%e4%b9%8b";
break;
case 51128:
conv_str += "%e5%9f%9c";
break;
case 51129:
conv_str += "%e5%9a%a2";
break;
case 51130:
conv_str += "%e6%82%a9";
break;
case 51131:
conv_str += "%e6%bf%83";
break;
case 51132:
conv_str += "%e7%b4%8d";
break;
case 51133:
conv_str += "%e8%83%bd";
break;
case 51134:
conv_str += "%e8%84%b3";
break;
case 51135:
conv_str += "%e8%86%bf";
break;
case 51136:
conv_str += "%e8%be%b2";
break;
case 51137:
conv_str += "%e8%a6%97";
break;
case 51138:
conv_str += "%e8%9a%a4";
break;
case 51139:
conv_str += "%e5%b7%b4";
break;
case 51140:
conv_str += "%e6%8a%8a";
break;
case 51141:
conv_str += "%e6%92%ad";
break;
case 51142:
conv_str += "%e8%a6%87";
break;
case 51143:
conv_str += "%e6%9d%b7";
break;
case 51144:
conv_str += "%e6%b3%a2";
break;
case 51145:
conv_str += "%e6%b4%be";
break;
case 51146:
conv_str += "%e7%90%b6";
break;
case 51147:
conv_str += "%e7%a0%b4";
break;
case 51148:
conv_str += "%e5%a9%86";
break;
case 51149:
conv_str += "%e7%bd%b5";
break;
case 51150:
conv_str += "%e8%8a%ad";
break;
case 51151:
conv_str += "%e9%a6%ac";
break;
case 51152:
conv_str += "%e4%bf%b3";
break;
case 51153:
conv_str += "%e5%bb%83";
break;
case 51154:
conv_str += "%e6%8b%9d";
break;
case 51155:
conv_str += "%e6%8e%92";
break;
case 51156:
conv_str += "%e6%95%97";
break;
case 51157:
conv_str += "%e6%9d%af";
break;
case 51158:
conv_str += "%e7%9b%83";
break;
case 51159:
conv_str += "%e7%89%8c";
break;
case 51160:
conv_str += "%e8%83%8c";
break;
case 51161:
conv_str += "%e8%82%ba";
break;
case 51162:
conv_str += "%e8%bc%a9";
break;
case 51163:
conv_str += "%e9%85%8d";
break;
case 51164:
conv_str += "%e5%80%8d";
break;
case 51165:
conv_str += "%e5%9f%b9";
break;
case 51166:
conv_str += "%e5%aa%92";
break;
case 51167:
conv_str += "%e6%a2%85";
break;
case 51168:
conv_str += "%e6%a5%b3";
break;
case 51169:
conv_str += "%e7%85%a4";
break;
case 51170:
conv_str += "%e7%8b%bd";
break;
case 51171:
conv_str += "%e8%b2%b7";
break;
case 51172:
conv_str += "%e5%a3%b2";
break;
case 51173:
conv_str += "%e8%b3%a0";
break;
case 51174:
conv_str += "%e9%99%aa";
break;
case 51175:
conv_str += "%e9%80%99";
break;
case 51176:
conv_str += "%e8%9d%bf";
break;
case 51177:
conv_str += "%e7%a7%a4";
break;
case 51178:
conv_str += "%e7%9f%a7";
break;
case 51179:
conv_str += "%e8%90%a9";
break;
case 51180:
conv_str += "%e4%bc%af";
break;
case 51181:
conv_str += "%e5%89%a5";
break;
case 51182:
conv_str += "%e5%8d%9a";
break;
case 51183:
conv_str += "%e6%8b%8d";
break;
case 51184:
conv_str += "%e6%9f%8f";
break;
case 51185:
conv_str += "%e6%b3%8a";
break;
case 51186:
conv_str += "%e7%99%bd";
break;
case 51187:
conv_str += "%e7%ae%94";
break;
case 51188:
conv_str += "%e7%b2%95";
break;
case 51189:
conv_str += "%e8%88%b6";
break;
case 51190:
conv_str += "%e8%96%84";
break;
case 51191:
conv_str += "%e8%bf%ab";
break;
case 51192:
conv_str += "%e6%9b%9d";
break;
case 51193:
conv_str += "%e6%bc%a0";
break;
case 51194:
conv_str += "%e7%88%86";
break;
case 51195:
conv_str += "%e7%b8%9b";
break;
case 51196:
conv_str += "%e8%8e%ab";
break;
case 51197:
conv_str += "%e9%a7%81";
break;
case 51198:
conv_str += "%e9%ba%a6";
break;
case 51361:
conv_str += "%e5%87%bd";
break;
case 51362:
conv_str += "%e7%ae%b1";
break;
case 51363:
conv_str += "%e7%a1%b2";
break;
case 51364:
conv_str += "%e7%ae%b8";
break;
case 51365:
conv_str += "%e8%82%87";
break;
case 51366:
conv_str += "%e7%ad%88";
break;
case 51367:
conv_str += "%e6%ab%a8";
break;
case 51368:
conv_str += "%e5%b9%a1";
break;
case 51369:
conv_str += "%e8%82%8c";
break;
case 51370:
conv_str += "%e7%95%91";
break;
case 51371:
conv_str += "%e7%95%a0";
break;
case 51372:
conv_str += "%e5%85%ab";
break;
case 51373:
conv_str += "%e9%89%a2";
break;
case 51374:
conv_str += "%e6%ba%8c";
break;
case 51375:
conv_str += "%e7%99%ba";
break;
case 51376:
conv_str += "%e9%86%97";
break;
case 51377:
conv_str += "%e9%ab%aa";
break;
case 51378:
conv_str += "%e4%bc%90";
break;
case 51379:
conv_str += "%e7%bd%b0";
break;
case 51380:
conv_str += "%e6%8a%9c";
break;
case 51381:
conv_str += "%e7%ad%8f";
break;
case 51382:
conv_str += "%e9%96%a5";
break;
case 51383:
conv_str += "%e9%b3%a9";
break;
case 51384:
conv_str += "%e5%99%ba";
break;
case 51385:
conv_str += "%e5%a1%99";
break;
case 51386:
conv_str += "%e8%9b%a4";
break;
case 51387:
conv_str += "%e9%9a%bc";
break;
case 51388:
conv_str += "%e4%bc%b4";
break;
case 51389:
conv_str += "%e5%88%a4";
break;
case 51390:
conv_str += "%e5%8d%8a";
break;
case 51391:
conv_str += "%e5%8f%8d";
break;
case 51392:
conv_str += "%e5%8f%9b";
break;
case 51393:
conv_str += "%e5%b8%86";
break;
case 51394:
conv_str += "%e6%90%ac";
break;
case 51395:
conv_str += "%e6%96%91";
break;
case 51396:
conv_str += "%e6%9d%bf";
break;
case 51397:
conv_str += "%e6%b0%be";
break;
case 51398:
conv_str += "%e6%b1%8e";
break;
case 51399:
conv_str += "%e7%89%88";
break;
case 51400:
conv_str += "%e7%8a%af";
break;
case 51401:
conv_str += "%e7%8f%ad";
break;
case 51402:
conv_str += "%e7%95%94";
break;
case 51403:
conv_str += "%e7%b9%81";
break;
case 51404:
conv_str += "%e8%88%ac";
break;
case 51405:
conv_str += "%e8%97%a9";
break;
case 51406:
conv_str += "%e8%b2%a9";
break;
case 51407:
conv_str += "%e7%af%84";
break;
case 51408:
conv_str += "%e9%87%86";
break;
case 51409:
conv_str += "%e7%85%a9";
break;
case 51410:
conv_str += "%e9%a0%92";
break;
case 51411:
conv_str += "%e9%a3%af";
break;
case 51412:
conv_str += "%e6%8c%bd";
break;
case 51413:
conv_str += "%e6%99%a9";
break;
case 51414:
conv_str += "%e7%95%aa";
break;
case 51415:
conv_str += "%e7%9b%a4";
break;
case 51416:
conv_str += "%e7%a3%90";
break;
case 51417:
conv_str += "%e8%95%83";
break;
case 51418:
conv_str += "%e8%9b%ae";
break;
case 51419:
conv_str += "%e5%8c%aa";
break;
case 51420:
conv_str += "%e5%8d%91";
break;
case 51421:
conv_str += "%e5%90%a6";
break;
case 51422:
conv_str += "%e5%a6%83";
break;
case 51423:
conv_str += "%e5%ba%87";
break;
case 51424:
conv_str += "%e5%bd%bc";
break;
case 51425:
conv_str += "%e6%82%b2";
break;
case 51426:
conv_str += "%e6%89%89";
break;
case 51427:
conv_str += "%e6%89%b9";
break;
case 51428:
conv_str += "%e6%8a%ab";
break;
case 51429:
conv_str += "%e6%96%90";
break;
case 51430:
conv_str += "%e6%af%94";
break;
case 51431:
conv_str += "%e6%b3%8c";
break;
case 51432:
conv_str += "%e7%96%b2";
break;
case 51433:
conv_str += "%e7%9a%ae";
break;
case 51434:
conv_str += "%e7%a2%91";
break;
case 51435:
conv_str += "%e7%a7%98";
break;
case 51436:
conv_str += "%e7%b7%8b";
break;
case 51437:
conv_str += "%e7%bd%b7";
break;
case 51438:
conv_str += "%e8%82%a5";
break;
case 51439:
conv_str += "%e8%a2%ab";
break;
case 51440:
conv_str += "%e8%aa%b9";
break;
case 51441:
conv_str += "%e8%b2%bb";
break;
case 51442:
conv_str += "%e9%81%bf";
break;
case 51443:
conv_str += "%e9%9d%9e";
break;
case 51444:
conv_str += "%e9%a3%9b";
break;
case 51445:
conv_str += "%e6%a8%8b";
break;
case 51446:
conv_str += "%e7%b0%b8";
break;
case 51447:
conv_str += "%e5%82%99";
break;
case 51448:
conv_str += "%e5%b0%be";
break;
case 51449:
conv_str += "%e5%be%ae";
break;
case 51450:
conv_str += "%e6%9e%87";
break;
case 51451:
conv_str += "%e6%af%98";
break;
case 51452:
conv_str += "%e7%90%b5";
break;
case 51453:
conv_str += "%e7%9c%89";
break;
case 51454:
conv_str += "%e7%be%8e";
break;
case 51617:
conv_str += "%e9%bc%bb";
break;
case 51618:
conv_str += "%e6%9f%8a";
break;
case 51619:
conv_str += "%e7%a8%97";
break;
case 51620:
conv_str += "%e5%8c%b9";
break;
case 51621:
conv_str += "%e7%96%8b";
break;
case 51622:
conv_str += "%e9%ab%ad";
break;
case 51623:
conv_str += "%e5%bd%a6";
break;
case 51624:
conv_str += "%e8%86%9d";
break;
case 51625:
conv_str += "%e8%8f%b1";
break;
case 51626:
conv_str += "%e8%82%98";
break;
case 51627:
conv_str += "%e5%bc%bc";
break;
case 51628:
conv_str += "%e5%bf%85";
break;
case 51629:
conv_str += "%e7%95%a2";
break;
case 51630:
conv_str += "%e7%ad%86";
break;
case 51631:
conv_str += "%e9%80%bc";
break;
case 51632:
conv_str += "%e6%a1%a7";
break;
case 51633:
conv_str += "%e5%a7%ab";
break;
case 51634:
conv_str += "%e5%aa%9b";
break;
case 51635:
conv_str += "%e7%b4%90";
break;
case 51636:
conv_str += "%e7%99%be";
break;
case 51637:
conv_str += "%e8%ac%ac";
break;
case 51638:
conv_str += "%e4%bf%b5";
break;
case 51639:
conv_str += "%e5%bd%aa";
break;
case 51640:
conv_str += "%e6%a8%99";
break;
case 51641:
conv_str += "%e6%b0%b7";
break;
case 51642:
conv_str += "%e6%bc%82";
break;
case 51643:
conv_str += "%e7%93%a2";
break;
case 51644:
conv_str += "%e7%a5%a8";
break;
case 51645:
conv_str += "%e8%a1%a8";
break;
case 51646:
conv_str += "%e8%a9%95";
break;
case 51647:
conv_str += "%e8%b1%b9";
break;
case 51648:
conv_str += "%e5%bb%9f";
break;
case 51649:
conv_str += "%e6%8f%8f";
break;
case 51650:
conv_str += "%e7%97%85";
break;
case 51651:
conv_str += "%e7%a7%92";
break;
case 51652:
conv_str += "%e8%8b%97";
break;
case 51653:
conv_str += "%e9%8c%a8";
break;
case 51654:
conv_str += "%e9%8b%b2";
break;
case 51655:
conv_str += "%e8%92%9c";
break;
case 51656:
conv_str += "%e8%9b%ad";
break;
case 51657:
conv_str += "%e9%b0%ad";
break;
case 51658:
conv_str += "%e5%93%81";
break;
case 51659:
conv_str += "%e5%bd%ac";
break;
case 51660:
conv_str += "%e6%96%8c";
break;
case 51661:
conv_str += "%e6%b5%9c";
break;
case 51662:
conv_str += "%e7%80%95";
break;
case 51663:
conv_str += "%e8%b2%a7";
break;
case 51664:
conv_str += "%e8%b3%93";
break;
case 51665:
conv_str += "%e9%a0%bb";
break;
case 51666:
conv_str += "%e6%95%8f";
break;
case 51667:
conv_str += "%e7%93%b6";
break;
case 51668:
conv_str += "%e4%b8%8d";
break;
case 51669:
conv_str += "%e4%bb%98";
break;
case 51670:
conv_str += "%e5%9f%a0";
break;
case 51671:
conv_str += "%e5%a4%ab";
break;
case 51672:
conv_str += "%e5%a9%a6";
break;
case 51673:
conv_str += "%e5%af%8c";
break;
case 51674:
conv_str += "%e5%86%a8";
break;
case 51675:
conv_str += "%e5%b8%83";
break;
case 51676:
conv_str += "%e5%ba%9c";
break;
case 51677:
conv_str += "%e6%80%96";
break;
case 51678:
conv_str += "%e6%89%b6";
break;
case 51679:
conv_str += "%e6%95%b7";
break;
case 51680:
conv_str += "%e6%96%a7";
break;
case 51681:
conv_str += "%e6%99%ae";
break;
case 51682:
conv_str += "%e6%b5%ae";
break;
case 51683:
conv_str += "%e7%88%b6";
break;
case 51684:
conv_str += "%e7%ac%a6";
break;
case 51685:
conv_str += "%e8%85%90";
break;
case 51686:
conv_str += "%e8%86%9a";
break;
case 51687:
conv_str += "%e8%8a%99";
break;
case 51688:
conv_str += "%e8%ad%9c";
break;
case 51689:
conv_str += "%e8%b2%a0";
break;
case 51690:
conv_str += "%e8%b3%a6";
break;
case 51691:
conv_str += "%e8%b5%b4";
break;
case 51692:
conv_str += "%e9%98%9c";
break;
case 51693:
conv_str += "%e9%99%84";
break;
case 51694:
conv_str += "%e4%be%ae";
break;
case 51695:
conv_str += "%e6%92%ab";
break;
case 51696:
conv_str += "%e6%ad%a6";
break;
case 51697:
conv_str += "%e8%88%9e";
break;
case 51698:
conv_str += "%e8%91%a1";
break;
case 51699:
conv_str += "%e8%95%aa";
break;
case 51700:
conv_str += "%e9%83%a8";
break;
case 51701:
conv_str += "%e5%b0%81";
break;
case 51702:
conv_str += "%e6%a5%93";
break;
case 51703:
conv_str += "%e9%a2%a8";
break;
case 51704:
conv_str += "%e8%91%ba";
break;
case 51705:
conv_str += "%e8%95%97";
break;
case 51706:
conv_str += "%e4%bc%8f";
break;
case 51707:
conv_str += "%e5%89%af";
break;
case 51708:
conv_str += "%e5%be%a9";
break;
case 51709:
conv_str += "%e5%b9%85";
break;
case 51710:
conv_str += "%e6%9c%8d";
break;
case 51873:
conv_str += "%e7%a6%8f";
break;
case 51874:
conv_str += "%e8%85%b9";
break;
case 51875:
conv_str += "%e8%a4%87";
break;
case 51876:
conv_str += "%e8%a6%86";
break;
case 51877:
conv_str += "%e6%b7%b5";
break;
case 51878:
conv_str += "%e5%bc%97";
break;
case 51879:
conv_str += "%e6%89%95";
break;
case 51880:
conv_str += "%e6%b2%b8";
break;
case 51881:
conv_str += "%e4%bb%8f";
break;
case 51882:
conv_str += "%e7%89%a9";
break;
case 51883:
conv_str += "%e9%ae%92";
break;
case 51884:
conv_str += "%e5%88%86";
break;
case 51885:
conv_str += "%e5%90%bb";
break;
case 51886:
conv_str += "%e5%99%b4";
break;
case 51887:
conv_str += "%e5%a2%b3";
break;
case 51888:
conv_str += "%e6%86%a4";
break;
case 51889:
conv_str += "%e6%89%ae";
break;
case 51890:
conv_str += "%e7%84%9a";
break;
case 51891:
conv_str += "%e5%a5%ae";
break;
case 51892:
conv_str += "%e7%b2%89";
break;
case 51893:
conv_str += "%e7%b3%9e";
break;
case 51894:
conv_str += "%e7%b4%9b";
break;
case 51895:
conv_str += "%e9%9b%b0";
break;
case 51896:
conv_str += "%e6%96%87";
break;
case 51897:
conv_str += "%e8%81%9e";
break;
case 51898:
conv_str += "%e4%b8%99";
break;
case 51899:
conv_str += "%e4%bd%b5";
break;
case 51900:
conv_str += "%e5%85%b5";
break;
case 51901:
conv_str += "%e5%a1%80";
break;
case 51902:
conv_str += "%e5%b9%a3";
break;
case 51903:
conv_str += "%e5%b9%b3";
break;
case 51904:
conv_str += "%e5%bc%8a";
break;
case 51905:
conv_str += "%e6%9f%84";
break;
case 51906:
conv_str += "%e4%b8%a6";
break;
case 51907:
conv_str += "%e8%94%bd";
break;
case 51908:
conv_str += "%e9%96%89";
break;
case 51909:
conv_str += "%e9%99%9b";
break;
case 51910:
conv_str += "%e7%b1%b3";
break;
case 51911:
conv_str += "%e9%a0%81";
break;
case 51912:
conv_str += "%e5%83%bb";
break;
case 51913:
conv_str += "%e5%a3%81";
break;
case 51914:
conv_str += "%e7%99%96";
break;
case 51915:
conv_str += "%e7%a2%a7";
break;
case 51916:
conv_str += "%e5%88%a5";
break;
case 51917:
conv_str += "%e7%9e%a5";
break;
case 51918:
conv_str += "%e8%94%91";
break;
case 51919:
conv_str += "%e7%ae%86";
break;
case 51920:
conv_str += "%e5%81%8f";
break;
case 51921:
conv_str += "%e5%a4%89";
break;
case 51922:
conv_str += "%e7%89%87";
break;
case 51923:
conv_str += "%e7%af%87";
break;
case 51924:
conv_str += "%e7%b7%a8";
break;
case 51925:
conv_str += "%e8%be%ba";
break;
case 51926:
conv_str += "%e8%bf%94";
break;
case 51927:
conv_str += "%e9%81%8d";
break;
case 51928:
conv_str += "%e4%be%bf";
break;
case 51929:
conv_str += "%e5%8b%89";
break;
case 51930:
conv_str += "%e5%a8%a9";
break;
case 51931:
conv_str += "%e5%bc%81";
break;
case 51932:
conv_str += "%e9%9e%ad";
break;
case 51933:
conv_str += "%e4%bf%9d";
break;
case 51934:
conv_str += "%e8%88%97";
break;
case 51935:
conv_str += "%e9%8b%aa";
break;
case 51936:
conv_str += "%e5%9c%83";
break;
case 51937:
conv_str += "%e6%8d%95";
break;
case 51938:
conv_str += "%e6%ad%a9";
break;
case 51939:
conv_str += "%e7%94%ab";
break;
case 51940:
conv_str += "%e8%a3%9c";
break;
case 51941:
conv_str += "%e8%bc%94";
break;
case 51942:
conv_str += "%e7%a9%82";
break;
case 51943:
conv_str += "%e5%8b%9f";
break;
case 51944:
conv_str += "%e5%a2%93";
break;
case 51945:
conv_str += "%e6%85%95";
break;
case 51946:
conv_str += "%e6%88%8a";
break;
case 51947:
conv_str += "%e6%9a%ae";
break;
case 51948:
conv_str += "%e6%af%8d";
break;
case 51949:
conv_str += "%e7%b0%bf";
break;
case 51950:
conv_str += "%e8%8f%a9";
break;
case 51951:
conv_str += "%e5%80%a3";
break;
case 51952:
conv_str += "%e4%bf%b8";
break;
case 51953:
conv_str += "%e5%8c%85";
break;
case 51954:
conv_str += "%e5%91%86";
break;
case 51955:
conv_str += "%e5%a0%b1";
break;
case 51956:
conv_str += "%e5%a5%89";
break;
case 51957:
conv_str += "%e5%ae%9d";
break;
case 51958:
conv_str += "%e5%b3%b0";
break;
case 51959:
conv_str += "%e5%b3%af";
break;
case 51960:
conv_str += "%e5%b4%a9";
break;
case 51961:
conv_str += "%e5%ba%96";
break;
case 51962:
conv_str += "%e6%8a%b1";
break;
case 51963:
conv_str += "%e6%8d%a7";
break;
case 51964:
conv_str += "%e6%94%be";
break;
case 51965:
conv_str += "%e6%96%b9";
break;
case 51966:
conv_str += "%e6%9c%8b";
break;
case 52129:
conv_str += "%e6%b3%95";
break;
case 52130:
conv_str += "%e6%b3%a1";
break;
case 52131:
conv_str += "%e7%83%b9";
break;
case 52132:
conv_str += "%e7%a0%b2";
break;
case 52133:
conv_str += "%e7%b8%ab";
break;
case 52134:
conv_str += "%e8%83%9e";
break;
case 52135:
conv_str += "%e8%8a%b3";
break;
case 52136:
conv_str += "%e8%90%8c";
break;
case 52137:
conv_str += "%e8%93%ac";
break;
case 52138:
conv_str += "%e8%9c%82";
break;
case 52139:
conv_str += "%e8%a4%92";
break;
case 52140:
conv_str += "%e8%a8%aa";
break;
case 52141:
conv_str += "%e8%b1%8a";
break;
case 52142:
conv_str += "%e9%82%a6";
break;
case 52143:
conv_str += "%e9%8b%92";
break;
case 52144:
conv_str += "%e9%a3%bd";
break;
case 52145:
conv_str += "%e9%b3%b3";
break;
case 52146:
conv_str += "%e9%b5%ac";
break;
case 52147:
conv_str += "%e4%b9%8f";
break;
case 52148:
conv_str += "%e4%ba%a1";
break;
case 52149:
conv_str += "%e5%82%8d";
break;
case 52150:
conv_str += "%e5%89%96";
break;
case 52151:
conv_str += "%e5%9d%8a";
break;
case 52152:
conv_str += "%e5%a6%a8";
break;
case 52153:
conv_str += "%e5%b8%bd";
break;
case 52154:
conv_str += "%e5%bf%98";
break;
case 52155:
conv_str += "%e5%bf%99";
break;
case 52156:
conv_str += "%e6%88%bf";
break;
case 52157:
conv_str += "%e6%9a%b4";
break;
case 52158:
conv_str += "%e6%9c%9b";
break;
case 52159:
conv_str += "%e6%9f%90";
break;
case 52160:
conv_str += "%e6%a3%92";
break;
case 52161:
conv_str += "%e5%86%92";
break;
case 52162:
conv_str += "%e7%b4%a1";
break;
case 52163:
conv_str += "%e8%82%aa";
break;
case 52164:
conv_str += "%e8%86%a8";
break;
case 52165:
conv_str += "%e8%ac%80";
break;
case 52166:
conv_str += "%e8%b2%8c";
break;
case 52167:
conv_str += "%e8%b2%bf";
break;
case 52168:
conv_str += "%e9%89%be";
break;
case 52169:
conv_str += "%e9%98%b2";
break;
case 52170:
conv_str += "%e5%90%a0";
break;
case 52171:
conv_str += "%e9%a0%ac";
break;
case 52172:
conv_str += "%e5%8c%97";
break;
case 52173:
conv_str += "%e5%83%95";
break;
case 52174:
conv_str += "%e5%8d%9c";
break;
case 52175:
conv_str += "%e5%a2%a8";
break;
case 52176:
conv_str += "%e6%92%b2";
break;
case 52177:
conv_str += "%e6%9c%b4";
break;
case 52178:
conv_str += "%e7%89%a7";
break;
case 52179:
conv_str += "%e7%9d%a6";
break;
case 52180:
conv_str += "%e7%a9%86";
break;
case 52181:
conv_str += "%e9%87%a6";
break;
case 52182:
conv_str += "%e5%8b%83";
break;
case 52183:
conv_str += "%e6%b2%a1";
break;
case 52184:
conv_str += "%e6%ae%86";
break;
case 52185:
conv_str += "%e5%a0%80";
break;
case 52186:
conv_str += "%e5%b9%8c";
break;
case 52187:
conv_str += "%e5%a5%94";
break;
case 52188:
conv_str += "%e6%9c%ac";
break;
case 52189:
conv_str += "%e7%bf%bb";
break;
case 52190:
conv_str += "%e5%87%a1";
break;
case 52191:
conv_str += "%e7%9b%86";
break;
case 52192:
conv_str += "%e6%91%a9";
break;
case 52193:
conv_str += "%e7%a3%a8";
break;
case 52194:
conv_str += "%e9%ad%94";
break;
case 52195:
conv_str += "%e9%ba%bb";
break;
case 52196:
conv_str += "%e5%9f%8b";
break;
case 52197:
conv_str += "%e5%a6%b9";
break;
case 52198:
conv_str += "%e6%98%a7";
break;
case 52199:
conv_str += "%e6%9e%9a";
break;
case 52200:
conv_str += "%e6%af%8e";
break;
case 52201:
conv_str += "%e5%93%a9";
break;
case 52202:
conv_str += "%e6%a7%99";
break;
case 52203:
conv_str += "%e5%b9%95";
break;
case 52204:
conv_str += "%e8%86%9c";
break;
case 52205:
conv_str += "%e6%9e%95";
break;
case 52206:
conv_str += "%e9%ae%aa";
break;
case 52207:
conv_str += "%e6%9f%be";
break;
case 52208:
conv_str += "%e9%b1%92";
break;
case 52209:
conv_str += "%e6%a1%9d";
break;
case 52210:
conv_str += "%e4%ba%a6";
break;
case 52211:
conv_str += "%e4%bf%a3";
break;
case 52212:
conv_str += "%e5%8f%88";
break;
case 52213:
conv_str += "%e6%8a%b9";
break;
case 52214:
conv_str += "%e6%9c%ab";
break;
case 52215:
conv_str += "%e6%b2%ab";
break;
case 52216:
conv_str += "%e8%bf%84";
break;
case 52217:
conv_str += "%e4%be%ad";
break;
case 52218:
conv_str += "%e7%b9%ad";
break;
case 52219:
conv_str += "%e9%ba%bf";
break;
case 52220:
conv_str += "%e4%b8%87";
break;
case 52221:
conv_str += "%e6%85%a2";
break;
case 52222:
conv_str += "%e6%ba%80";
break;
case 52385:
conv_str += "%e6%bc%ab";
break;
case 52386:
conv_str += "%e8%94%93";
break;
case 52387:
conv_str += "%e5%91%b3";
break;
case 52388:
conv_str += "%e6%9c%aa";
break;
case 52389:
conv_str += "%e9%ad%85";
break;
case 52390:
conv_str += "%e5%b7%b3";
break;
case 52391:
conv_str += "%e7%ae%95";
break;
case 52392:
conv_str += "%e5%b2%ac";
break;
case 52393:
conv_str += "%e5%af%86";
break;
case 52394:
conv_str += "%e8%9c%9c";
break;
case 52395:
conv_str += "%e6%b9%8a";
break;
case 52396:
conv_str += "%e8%93%91";
break;
case 52397:
conv_str += "%e7%a8%94";
break;
case 52398:
conv_str += "%e8%84%88";
break;
case 52399:
conv_str += "%e5%a6%99";
break;
case 52400:
conv_str += "%e7%b2%8d";
break;
case 52401:
conv_str += "%e6%b0%91";
break;
case 52402:
conv_str += "%e7%9c%a0";
break;
case 52403:
conv_str += "%e5%8b%99";
break;
case 52404:
conv_str += "%e5%a4%a2";
break;
case 52405:
conv_str += "%e7%84%a1";
break;
case 52406:
conv_str += "%e7%89%9f";
break;
case 52407:
conv_str += "%e7%9f%9b";
break;
case 52408:
conv_str += "%e9%9c%a7";
break;
case 52409:
conv_str += "%e9%b5%a1";
break;
case 52410:
conv_str += "%e6%a4%8b";
break;
case 52411:
conv_str += "%e5%a9%bf";
break;
case 52412:
conv_str += "%e5%a8%98";
break;
case 52413:
conv_str += "%e5%86%a5";
break;
case 52414:
conv_str += "%e5%90%8d";
break;
case 52415:
conv_str += "%e5%91%bd";
break;
case 52416:
conv_str += "%e6%98%8e";
break;
case 52417:
conv_str += "%e7%9b%9f";
break;
case 52418:
conv_str += "%e8%bf%b7";
break;
case 52419:
conv_str += "%e9%8a%98";
break;
case 52420:
conv_str += "%e9%b3%b4";
break;
case 52421:
conv_str += "%e5%a7%aa";
break;
case 52422:
conv_str += "%e7%89%9d";
break;
case 52423:
conv_str += "%e6%bb%85";
break;
case 52424:
conv_str += "%e5%85%8d";
break;
case 52425:
conv_str += "%e6%a3%89";
break;
case 52426:
conv_str += "%e7%b6%bf";
break;
case 52427:
conv_str += "%e7%b7%ac";
break;
case 52428:
conv_str += "%e9%9d%a2";
break;
case 52429:
conv_str += "%e9%ba%ba";
break;
case 52430:
conv_str += "%e6%91%b8";
break;
case 52431:
conv_str += "%e6%a8%a1";
break;
case 52432:
conv_str += "%e8%8c%82";
break;
case 52433:
conv_str += "%e5%a6%84";
break;
case 52434:
conv_str += "%e5%ad%9f";
break;
case 52435:
conv_str += "%e6%af%9b";
break;
case 52436:
conv_str += "%e7%8c%9b";
break;
case 52437:
conv_str += "%e7%9b%b2";
break;
case 52438:
conv_str += "%e7%b6%b2";
break;
case 52439:
conv_str += "%e8%80%97";
break;
case 52440:
conv_str += "%e8%92%99";
break;
case 52441:
conv_str += "%e5%84%b2";
break;
case 52442:
conv_str += "%e6%9c%a8";
break;
case 52443:
conv_str += "%e9%bb%99";
break;
case 52444:
conv_str += "%e7%9b%ae";
break;
case 52445:
conv_str += "%e6%9d%a2";
break;
case 52446:
conv_str += "%e5%8b%bf";
break;
case 52447:
conv_str += "%e9%a4%85";
break;
case 52448:
conv_str += "%e5%b0%a4";
break;
case 52449:
conv_str += "%e6%88%bb";
break;
case 52450:
conv_str += "%e7%b1%be";
break;
case 52451:
conv_str += "%e8%b2%b0";
break;
case 52452:
conv_str += "%e5%95%8f";
break;
case 52453:
conv_str += "%e6%82%b6";
break;
case 52454:
conv_str += "%e7%b4%8b";
break;
case 52455:
conv_str += "%e9%96%80";
break;
case 52456:
conv_str += "%e5%8c%81";
break;
case 52457:
conv_str += "%e4%b9%9f";
break;
case 52458:
conv_str += "%e5%86%b6";
break;
case 52459:
conv_str += "%e5%a4%9c";
break;
case 52460:
conv_str += "%e7%88%ba";
break;
case 52461:
conv_str += "%e8%80%b6";
break;
case 52462:
conv_str += "%e9%87%8e";
break;
case 52463:
conv_str += "%e5%bc%a5";
break;
case 52464:
conv_str += "%e7%9f%a2";
break;
case 52465:
conv_str += "%e5%8e%84";
break;
case 52466:
conv_str += "%e5%bd%b9";
break;
case 52467:
conv_str += "%e7%b4%84";
break;
case 52468:
conv_str += "%e8%96%ac";
break;
case 52469:
conv_str += "%e8%a8%b3";
break;
case 52470:
conv_str += "%e8%ba%8d";
break;
case 52471:
conv_str += "%e9%9d%96";
break;
case 52472:
conv_str += "%e6%9f%b3";
break;
case 52473:
conv_str += "%e8%96%ae";
break;
case 52474:
conv_str += "%e9%91%93";
break;
case 52475:
conv_str += "%e6%84%89";
break;
case 52476:
conv_str += "%e6%84%88";
break;
case 52477:
conv_str += "%e6%b2%b9";
break;
case 52478:
conv_str += "%e7%99%92";
break;
case 52641:
conv_str += "%e8%ab%ad";
break;
case 52642:
conv_str += "%e8%bc%b8";
break;
case 52643:
conv_str += "%e5%94%af";
break;
case 52644:
conv_str += "%e4%bd%91";
break;
case 52645:
conv_str += "%e5%84%aa";
break;
case 52646:
conv_str += "%e5%8b%87";
break;
case 52647:
conv_str += "%e5%8f%8b";
break;
case 52648:
conv_str += "%e5%ae%a5";
break;
case 52649:
conv_str += "%e5%b9%bd";
break;
case 52650:
conv_str += "%e6%82%a0";
break;
case 52651:
conv_str += "%e6%86%82";
break;
case 52652:
conv_str += "%e6%8f%96";
break;
case 52653:
conv_str += "%e6%9c%89";
break;
case 52654:
conv_str += "%e6%9f%9a";
break;
case 52655:
conv_str += "%e6%b9%a7";
break;
case 52656:
conv_str += "%e6%b6%8c";
break;
case 52657:
conv_str += "%e7%8c%b6";
break;
case 52658:
conv_str += "%e7%8c%b7";
break;
case 52659:
conv_str += "%e7%94%b1";
break;
case 52660:
conv_str += "%e7%a5%90";
break;
case 52661:
conv_str += "%e8%a3%95";
break;
case 52662:
conv_str += "%e8%aa%98";
break;
case 52663:
conv_str += "%e9%81%8a";
break;
case 52664:
conv_str += "%e9%82%91";
break;
case 52665:
conv_str += "%e9%83%b5";
break;
case 52666:
conv_str += "%e9%9b%84";
break;
case 52667:
conv_str += "%e8%9e%8d";
break;
case 52668:
conv_str += "%e5%a4%95";
break;
case 52669:
conv_str += "%e4%ba%88";
break;
case 52670:
conv_str += "%e4%bd%99";
break;
case 52671:
conv_str += "%e4%b8%8e";
break;
case 52672:
conv_str += "%e8%aa%89";
break;
case 52673:
conv_str += "%e8%bc%bf";
break;
case 52674:
conv_str += "%e9%a0%90";
break;
case 52675:
conv_str += "%e5%82%ad";
break;
case 52676:
conv_str += "%e5%b9%bc";
break;
case 52677:
conv_str += "%e5%a6%96";
break;
case 52678:
conv_str += "%e5%ae%b9";
break;
case 52679:
conv_str += "%e5%ba%b8";
break;
case 52680:
conv_str += "%e6%8f%9a";
break;
case 52681:
conv_str += "%e6%8f%ba";
break;
case 52682:
conv_str += "%e6%93%81";
break;
case 52683:
conv_str += "%e6%9b%9c";
break;
case 52684:
conv_str += "%e6%a5%8a";
break;
case 52685:
conv_str += "%e6%a7%98";
break;
case 52686:
conv_str += "%e6%b4%8b";
break;
case 52687:
conv_str += "%e6%ba%b6";
break;
case 52688:
conv_str += "%e7%86%94";
break;
case 52689:
conv_str += "%e7%94%a8";
break;
case 52690:
conv_str += "%e7%aa%af";
break;
case 52691:
conv_str += "%e7%be%8a";
break;
case 52692:
conv_str += "%e8%80%80";
break;
case 52693:
conv_str += "%e8%91%89";
break;
case 52694:
conv_str += "%e8%93%89";
break;
case 52695:
conv_str += "%e8%a6%81";
break;
case 52696:
conv_str += "%e8%ac%a1";
break;
case 52697:
conv_str += "%e8%b8%8a";
break;
case 52698:
conv_str += "%e9%81%a5";
break;
case 52699:
conv_str += "%e9%99%bd";
break;
case 52700:
conv_str += "%e9%a4%8a";
break;
case 52701:
conv_str += "%e6%85%be";
break;
case 52702:
conv_str += "%e6%8a%91";
break;
case 52703:
conv_str += "%e6%ac%b2";
break;
case 52704:
conv_str += "%e6%b2%83";
break;
case 52705:
conv_str += "%e6%b5%b4";
break;
case 52706:
conv_str += "%e7%bf%8c";
break;
case 52707:
conv_str += "%e7%bf%bc";
break;
case 52708:
conv_str += "%e6%b7%80";
break;
case 52709:
conv_str += "%e7%be%85";
break;
case 52710:
conv_str += "%e8%9e%ba";
break;
case 52711:
conv_str += "%e8%a3%b8";
break;
case 52712:
conv_str += "%e6%9d%a5";
break;
case 52713:
conv_str += "%e8%8e%b1";
break;
case 52714:
conv_str += "%e9%a0%bc";
break;
case 52715:
conv_str += "%e9%9b%b7";
break;
case 52716:
conv_str += "%e6%b4%9b";
break;
case 52717:
conv_str += "%e7%b5%a1";
break;
case 52718:
conv_str += "%e8%90%bd";
break;
case 52719:
conv_str += "%e9%85%aa";
break;
case 52720:
conv_str += "%e4%b9%b1";
break;
case 52721:
conv_str += "%e5%8d%b5";
break;
case 52722:
conv_str += "%e5%b5%90";
break;
case 52723:
conv_str += "%e6%ac%84";
break;
case 52724:
conv_str += "%e6%bf%ab";
break;
case 52725:
conv_str += "%e8%97%8d";
break;
case 52726:
conv_str += "%e8%98%ad";
break;
case 52727:
conv_str += "%e8%a6%a7";
break;
case 52728:
conv_str += "%e5%88%a9";
break;
case 52729:
conv_str += "%e5%90%8f";
break;
case 52730:
conv_str += "%e5%b1%a5";
break;
case 52731:
conv_str += "%e6%9d%8e";
break;
case 52732:
conv_str += "%e6%a2%a8";
break;
case 52733:
conv_str += "%e7%90%86";
break;
case 52734:
conv_str += "%e7%92%83";
break;
case 52897:
conv_str += "%e7%97%a2";
break;
case 52898:
conv_str += "%e8%a3%8f";
break;
case 52899:
conv_str += "%e8%a3%a1";
break;
case 52900:
conv_str += "%e9%87%8c";
break;
case 52901:
conv_str += "%e9%9b%a2";
break;
case 52902:
conv_str += "%e9%99%b8";
break;
case 52903:
conv_str += "%e5%be%8b";
break;
case 52904:
conv_str += "%e7%8e%87";
break;
case 52905:
conv_str += "%e7%ab%8b";
break;
case 52906:
conv_str += "%e8%91%8e";
break;
case 52907:
conv_str += "%e6%8e%a0";
break;
case 52908:
conv_str += "%e7%95%a5";
break;
case 52909:
conv_str += "%e5%8a%89";
break;
case 52910:
conv_str += "%e6%b5%81";
break;
case 52911:
conv_str += "%e6%ba%9c";
break;
case 52912:
conv_str += "%e7%90%89";
break;
case 52913:
conv_str += "%e7%95%99";
break;
case 52914:
conv_str += "%e7%a1%ab";
break;
case 52915:
conv_str += "%e7%b2%92";
break;
case 52916:
conv_str += "%e9%9a%86";
break;
case 52917:
conv_str += "%e7%ab%9c";
break;
case 52918:
conv_str += "%e9%be%8d";
break;
case 52919:
conv_str += "%e4%be%b6";
break;
case 52920:
conv_str += "%e6%85%ae";
break;
case 52921:
conv_str += "%e6%97%85";
break;
case 52922:
conv_str += "%e8%99%9c";
break;
case 52923:
conv_str += "%e4%ba%86";
break;
case 52924:
conv_str += "%e4%ba%ae";
break;
case 52925:
conv_str += "%e5%83%9a";
break;
case 52926:
conv_str += "%e4%b8%a1";
break;
case 52927:
conv_str += "%e5%87%8c";
break;
case 52928:
conv_str += "%e5%af%ae";
break;
case 52929:
conv_str += "%e6%96%99";
break;
case 52930:
conv_str += "%e6%a2%81";
break;
case 52931:
conv_str += "%e6%b6%bc";
break;
case 52932:
conv_str += "%e7%8c%9f";
break;
case 52933:
conv_str += "%e7%99%82";
break;
case 52934:
conv_str += "%e7%9e%ad";
break;
case 52935:
conv_str += "%e7%a8%9c";
break;
case 52936:
conv_str += "%e7%b3%a7";
break;
case 52937:
conv_str += "%e8%89%af";
break;
case 52938:
conv_str += "%e8%ab%92";
break;
case 52939:
conv_str += "%e9%81%bc";
break;
case 52940:
conv_str += "%e9%87%8f";
break;
case 52941:
conv_str += "%e9%99%b5";
break;
case 52942:
conv_str += "%e9%a0%98";
break;
case 52943:
conv_str += "%e5%8a%9b";
break;
case 52944:
conv_str += "%e7%b7%91";
break;
case 52945:
conv_str += "%e5%80%ab";
break;
case 52946:
conv_str += "%e5%8e%98";
break;
case 52947:
conv_str += "%e6%9e%97";
break;
case 52948:
conv_str += "%e6%b7%8b";
break;
case 52949:
conv_str += "%e7%87%90";
break;
case 52950:
conv_str += "%e7%90%b3";
break;
case 52951:
conv_str += "%e8%87%a8";
break;
case 52952:
conv_str += "%e8%bc%aa";
break;
case 52953:
conv_str += "%e9%9a%a3";
break;
case 52954:
conv_str += "%e9%b1%97";
break;
case 52955:
conv_str += "%e9%ba%9f";
break;
case 52956:
conv_str += "%e7%91%a0";
break;
case 52957:
conv_str += "%e5%a1%81";
break;
case 52958:
conv_str += "%e6%b6%99";
break;
case 52959:
conv_str += "%e7%b4%af";
break;
case 52960:
conv_str += "%e9%a1%9e";
break;
case 52961:
conv_str += "%e4%bb%a4";
break;
case 52962:
conv_str += "%e4%bc%b6";
break;
case 52963:
conv_str += "%e4%be%8b";
break;
case 52964:
conv_str += "%e5%86%b7";
break;
case 52965:
conv_str += "%e5%8a%b1";
break;
case 52966:
conv_str += "%e5%b6%ba";
break;
case 52967:
conv_str += "%e6%80%9c";
break;
case 52968:
conv_str += "%e7%8e%b2";
break;
case 52969:
conv_str += "%e7%a4%bc";
break;
case 52970:
conv_str += "%e8%8b%93";
break;
case 52971:
conv_str += "%e9%88%b4";
break;
case 52972:
conv_str += "%e9%9a%b7";
break;
case 52973:
conv_str += "%e9%9b%b6";
break;
case 52974:
conv_str += "%e9%9c%8a";
break;
case 52975:
conv_str += "%e9%ba%97";
break;
case 52976:
conv_str += "%e9%bd%a2";
break;
case 52977:
conv_str += "%e6%9a%a6";
break;
case 52978:
conv_str += "%e6%ad%b4";
break;
case 52979:
conv_str += "%e5%88%97";
break;
case 52980:
conv_str += "%e5%8a%a3";
break;
case 52981:
conv_str += "%e7%83%88";
break;
case 52982:
conv_str += "%e8%a3%82";
break;
case 52983:
conv_str += "%e5%bb%89";
break;
case 52984:
conv_str += "%e6%81%8b";
break;
case 52985:
conv_str += "%e6%86%90";
break;
case 52986:
conv_str += "%e6%bc%a3";
break;
case 52987:
conv_str += "%e7%85%89";
break;
case 52988:
conv_str += "%e7%b0%be";
break;
case 52989:
conv_str += "%e7%b7%b4";
break;
case 52990:
conv_str += "%e8%81%af";
break;
case 53153:
conv_str += "%e8%93%ae";
break;
case 53154:
conv_str += "%e9%80%a3";
break;
case 53155:
conv_str += "%e9%8c%ac";
break;
case 53156:
conv_str += "%e5%91%82";
break;
case 53157:
conv_str += "%e9%ad%af";
break;
case 53158:
conv_str += "%e6%ab%93";
break;
case 53159:
conv_str += "%e7%82%89";
break;
case 53160:
conv_str += "%e8%b3%82";
break;
case 53161:
conv_str += "%e8%b7%af";
break;
case 53162:
conv_str += "%e9%9c%b2";
break;
case 53163:
conv_str += "%e5%8a%b4";
break;
case 53164:
conv_str += "%e5%a9%81";
break;
case 53165:
conv_str += "%e5%bb%8a";
break;
case 53166:
conv_str += "%e5%bc%84";
break;
case 53167:
conv_str += "%e6%9c%97";
break;
case 53168:
conv_str += "%e6%a5%bc";
break;
case 53169:
conv_str += "%e6%a6%94";
break;
case 53170:
conv_str += "%e6%b5%aa";
break;
case 53171:
conv_str += "%e6%bc%8f";
break;
case 53172:
conv_str += "%e7%89%a2";
break;
case 53173:
conv_str += "%e7%8b%bc";
break;
case 53174:
conv_str += "%e7%af%ad";
break;
case 53175:
conv_str += "%e8%80%81";
break;
case 53176:
conv_str += "%e8%81%be";
break;
case 53177:
conv_str += "%e8%9d%8b";
break;
case 53178:
conv_str += "%e9%83%8e";
break;
case 53179:
conv_str += "%e5%85%ad";
break;
case 53180:
conv_str += "%e9%ba%93";
break;
case 53181:
conv_str += "%e7%a6%84";
break;
case 53182:
conv_str += "%e8%82%8b";
break;
case 53183:
conv_str += "%e9%8c%b2";
break;
case 53184:
conv_str += "%e8%ab%96";
break;
case 53185:
conv_str += "%e5%80%ad";
break;
case 53186:
conv_str += "%e5%92%8c";
break;
case 53187:
conv_str += "%e8%a9%b1";
break;
case 53188:
conv_str += "%e6%ad%aa";
break;
case 53189:
conv_str += "%e8%b3%84";
break;
case 53190:
conv_str += "%e8%84%87";
break;
case 53191:
conv_str += "%e6%83%91";
break;
case 53192:
conv_str += "%e6%9e%a0";
break;
case 53193:
conv_str += "%e9%b7%b2";
break;
case 53194:
conv_str += "%e4%ba%99";
break;
case 53195:
conv_str += "%e4%ba%98";
break;
case 53196:
conv_str += "%e9%b0%90";
break;
case 53197:
conv_str += "%e8%a9%ab";
break;
case 53198:
conv_str += "%e8%97%81";
break;
case 53199:
conv_str += "%e8%95%a8";
break;
case 53200:
conv_str += "%e6%a4%80";
break;
case 53201:
conv_str += "%e6%b9%be";
break;
case 53202:
conv_str += "%e7%a2%97";
break;
case 53203:
conv_str += "%e8%85%95";
break;
case 53409:
conv_str += "%e5%bc%8c";
break;
case 53410:
conv_str += "%e4%b8%90";
break;
case 53411:
conv_str += "%e4%b8%95";
break;
case 53412:
conv_str += "%e4%b8%aa";
break;
case 53413:
conv_str += "%e4%b8%b1";
break;
case 53414:
conv_str += "%e4%b8%b6";
break;
case 53415:
conv_str += "%e4%b8%bc";
break;
case 53416:
conv_str += "%e4%b8%bf";
break;
case 53417:
conv_str += "%e4%b9%82";
break;
case 53418:
conv_str += "%e4%b9%96";
break;
case 53419:
conv_str += "%e4%b9%98";
break;
case 53420:
conv_str += "%e4%ba%82";
break;
case 53421:
conv_str += "%e4%ba%85";
break;
case 53422:
conv_str += "%e8%b1%ab";
break;
case 53423:
conv_str += "%e4%ba%8a";
break;
case 53424:
conv_str += "%e8%88%92";
break;
case 53425:
conv_str += "%e5%bc%8d";
break;
case 53426:
conv_str += "%e4%ba%8e";
break;
case 53427:
conv_str += "%e4%ba%9e";
break;
case 53428:
conv_str += "%e4%ba%9f";
break;
case 53429:
conv_str += "%e4%ba%a0";
break;
case 53430:
conv_str += "%e4%ba%a2";
break;
case 53431:
conv_str += "%e4%ba%b0";
break;
case 53432:
conv_str += "%e4%ba%b3";
break;
case 53433:
conv_str += "%e4%ba%b6";
break;
case 53434:
conv_str += "%e4%bb%8e";
break;
case 53435:
conv_str += "%e4%bb%8d";
break;
case 53436:
conv_str += "%e4%bb%84";
break;
case 53437:
conv_str += "%e4%bb%86";
break;
case 53438:
conv_str += "%e4%bb%82";
break;
case 53439:
conv_str += "%e4%bb%97";
break;
case 53440:
conv_str += "%e4%bb%9e";
break;
case 53441:
conv_str += "%e4%bb%ad";
break;
case 53442:
conv_str += "%e4%bb%9f";
break;
case 53443:
conv_str += "%e4%bb%b7";
break;
case 53444:
conv_str += "%e4%bc%89";
break;
case 53445:
conv_str += "%e4%bd%9a";
break;
case 53446:
conv_str += "%e4%bc%b0";
break;
case 53447:
conv_str += "%e4%bd%9b";
break;
case 53448:
conv_str += "%e4%bd%9d";
break;
case 53449:
conv_str += "%e4%bd%97";
break;
case 53450:
conv_str += "%e4%bd%87";
break;
case 53451:
conv_str += "%e4%bd%b6";
break;
case 53452:
conv_str += "%e4%be%88";
break;
case 53453:
conv_str += "%e4%be%8f";
break;
case 53454:
conv_str += "%e4%be%98";
break;
case 53455:
conv_str += "%e4%bd%bb";
break;
case 53456:
conv_str += "%e4%bd%a9";
break;
case 53457:
conv_str += "%e4%bd%b0";
break;
case 53458:
conv_str += "%e4%be%91";
break;
case 53459:
conv_str += "%e4%bd%af";
break;
case 53460:
conv_str += "%e4%be%86";
break;
case 53461:
conv_str += "%e4%be%96";
break;
case 53462:
conv_str += "%e5%84%98";
break;
case 53463:
conv_str += "%e4%bf%94";
break;
case 53464:
conv_str += "%e4%bf%9f";
break;
case 53465:
conv_str += "%e4%bf%8e";
break;
case 53466:
conv_str += "%e4%bf%98";
break;
case 53467:
conv_str += "%e4%bf%9b";
break;
case 53468:
conv_str += "%e4%bf%91";
break;
case 53469:
conv_str += "%e4%bf%9a";
break;
case 53470:
conv_str += "%e4%bf%90";
break;
case 53471:
conv_str += "%e4%bf%a4";
break;
case 53472:
conv_str += "%e4%bf%a5";
break;
case 53473:
conv_str += "%e5%80%9a";
break;
case 53474:
conv_str += "%e5%80%a8";
break;
case 53475:
conv_str += "%e5%80%94";
break;
case 53476:
conv_str += "%e5%80%aa";
break;
case 53477:
conv_str += "%e5%80%a5";
break;
case 53478:
conv_str += "%e5%80%85";
break;
case 53479:
conv_str += "%e4%bc%9c";
break;
case 53480:
conv_str += "%e4%bf%b6";
break;
case 53481:
conv_str += "%e5%80%a1";
break;
case 53482:
conv_str += "%e5%80%a9";
break;
case 53483:
conv_str += "%e5%80%ac";
break;
case 53484:
conv_str += "%e4%bf%be";
break;
case 53485:
conv_str += "%e4%bf%af";
break;
case 53486:
conv_str += "%e5%80%91";
break;
case 53487:
conv_str += "%e5%80%86";
break;
case 53488:
conv_str += "%e5%81%83";
break;
case 53489:
conv_str += "%e5%81%87";
break;
case 53490:
conv_str += "%e6%9c%83";
break;
case 53491:
conv_str += "%e5%81%95";
break;
case 53492:
conv_str += "%e5%81%90";
break;
case 53493:
conv_str += "%e5%81%88";
break;
case 53494:
conv_str += "%e5%81%9a";
break;
case 53495:
conv_str += "%e5%81%96";
break;
case 53496:
conv_str += "%e5%81%ac";
break;
case 53497:
conv_str += "%e5%81%b8";
break;
case 53498:
conv_str += "%e5%82%80";
break;
case 53499:
conv_str += "%e5%82%9a";
break;
case 53500:
conv_str += "%e5%82%85";
break;
case 53501:
conv_str += "%e5%82%b4";
break;
case 53502:
conv_str += "%e5%82%b2";
break;
case 53665:
conv_str += "%e5%83%89";
break;
case 53666:
conv_str += "%e5%83%8a";
break;
case 53667:
conv_str += "%e5%82%b3";
break;
case 53668:
conv_str += "%e5%83%82";
break;
case 53669:
conv_str += "%e5%83%96";
break;
case 53670:
conv_str += "%e5%83%9e";
break;
case 53671:
conv_str += "%e5%83%a5";
break;
case 53672:
conv_str += "%e5%83%ad";
break;
case 53673:
conv_str += "%e5%83%a3";
break;
case 53674:
conv_str += "%e5%83%ae";
break;
case 53675:
conv_str += "%e5%83%b9";
break;
case 53676:
conv_str += "%e5%83%b5";
break;
case 53677:
conv_str += "%e5%84%89";
break;
case 53678:
conv_str += "%e5%84%81";
break;
case 53679:
conv_str += "%e5%84%82";
break;
case 53680:
conv_str += "%e5%84%96";
break;
case 53681:
conv_str += "%e5%84%95";
break;
case 53682:
conv_str += "%e5%84%94";
break;
case 53683:
conv_str += "%e5%84%9a";
break;
case 53684:
conv_str += "%e5%84%a1";
break;
case 53685:
conv_str += "%e5%84%ba";
break;
case 53686:
conv_str += "%e5%84%b7";
break;
case 53687:
conv_str += "%e5%84%bc";
break;
case 53688:
conv_str += "%e5%84%bb";
break;
case 53689:
conv_str += "%e5%84%bf";
break;
case 53690:
conv_str += "%e5%85%80";
break;
case 53691:
conv_str += "%e5%85%92";
break;
case 53692:
conv_str += "%e5%85%8c";
break;
case 53693:
conv_str += "%e5%85%94";
break;
case 53694:
conv_str += "%e5%85%a2";
break;
case 53695:
conv_str += "%e7%ab%b8";
break;
case 53696:
conv_str += "%e5%85%a9";
break;
case 53697:
conv_str += "%e5%85%aa";
break;
case 53698:
conv_str += "%e5%85%ae";
break;
case 53699:
conv_str += "%e5%86%80";
break;
case 53700:
conv_str += "%e5%86%82";
break;
case 53701:
conv_str += "%e5%9b%98";
break;
case 53702:
conv_str += "%e5%86%8c";
break;
case 53703:
conv_str += "%e5%86%89";
break;
case 53704:
conv_str += "%e5%86%8f";
break;
case 53705:
conv_str += "%e5%86%91";
break;
case 53706:
conv_str += "%e5%86%93";
break;
case 53707:
conv_str += "%e5%86%95";
break;
case 53708:
conv_str += "%e5%86%96";
break;
case 53709:
conv_str += "%e5%86%a4";
break;
case 53710:
conv_str += "%e5%86%a6";
break;
case 53711:
conv_str += "%e5%86%a2";
break;
case 53712:
conv_str += "%e5%86%a9";
break;
case 53713:
conv_str += "%e5%86%aa";
break;
case 53714:
conv_str += "%e5%86%ab";
break;
case 53715:
conv_str += "%e5%86%b3";
break;
case 53716:
conv_str += "%e5%86%b1";
break;
case 53717:
conv_str += "%e5%86%b2";
break;
case 53718:
conv_str += "%e5%86%b0";
break;
case 53719:
conv_str += "%e5%86%b5";
break;
case 53720:
conv_str += "%e5%86%bd";
break;
case 53721:
conv_str += "%e5%87%85";
break;
case 53722:
conv_str += "%e5%87%89";
break;
case 53723:
conv_str += "%e5%87%9b";
break;
case 53724:
conv_str += "%e5%87%a0";
break;
case 53725:
conv_str += "%e8%99%95";
break;
case 53726:
conv_str += "%e5%87%a9";
break;
case 53727:
conv_str += "%e5%87%ad";
break;
case 53728:
conv_str += "%e5%87%b0";
break;
case 53729:
conv_str += "%e5%87%b5";
break;
case 53730:
conv_str += "%e5%87%be";
break;
case 53731:
conv_str += "%e5%88%84";
break;
case 53732:
conv_str += "%e5%88%8b";
break;
case 53733:
conv_str += "%e5%88%94";
break;
case 53734:
conv_str += "%e5%88%8e";
break;
case 53735:
conv_str += "%e5%88%a7";
break;
case 53736:
conv_str += "%e5%88%aa";
break;
case 53737:
conv_str += "%e5%88%ae";
break;
case 53738:
conv_str += "%e5%88%b3";
break;
case 53739:
conv_str += "%e5%88%b9";
break;
case 53740:
conv_str += "%e5%89%8f";
break;
case 53741:
conv_str += "%e5%89%84";
break;
case 53742:
conv_str += "%e5%89%8b";
break;
case 53743:
conv_str += "%e5%89%8c";
break;
case 53744:
conv_str += "%e5%89%9e";
break;
case 53745:
conv_str += "%e5%89%94";
break;
case 53746:
conv_str += "%e5%89%aa";
break;
case 53747:
conv_str += "%e5%89%b4";
break;
case 53748:
conv_str += "%e5%89%a9";
break;
case 53749:
conv_str += "%e5%89%b3";
break;
case 53750:
conv_str += "%e5%89%bf";
break;
case 53751:
conv_str += "%e5%89%bd";
break;
case 53752:
conv_str += "%e5%8a%8d";
break;
case 53753:
conv_str += "%e5%8a%94";
break;
case 53754:
conv_str += "%e5%8a%92";
break;
case 53755:
conv_str += "%e5%89%b1";
break;
case 53756:
conv_str += "%e5%8a%88";
break;
case 53757:
conv_str += "%e5%8a%91";
break;
case 53758:
conv_str += "%e8%be%a8";
break;
case 53921:
conv_str += "%e8%be%a7";
break;
case 53922:
conv_str += "%e5%8a%ac";
break;
case 53923:
conv_str += "%e5%8a%ad";
break;
case 53924:
conv_str += "%e5%8a%bc";
break;
case 53925:
conv_str += "%e5%8a%b5";
break;
case 53926:
conv_str += "%e5%8b%81";
break;
case 53927:
conv_str += "%e5%8b%8d";
break;
case 53928:
conv_str += "%e5%8b%97";
break;
case 53929:
conv_str += "%e5%8b%9e";
break;
case 53930:
conv_str += "%e5%8b%a3";
break;
case 53931:
conv_str += "%e5%8b%a6";
break;
case 53932:
conv_str += "%e9%a3%ad";
break;
case 53933:
conv_str += "%e5%8b%a0";
break;
case 53934:
conv_str += "%e5%8b%b3";
break;
case 53935:
conv_str += "%e5%8b%b5";
break;
case 53936:
conv_str += "%e5%8b%b8";
break;
case 53937:
conv_str += "%e5%8b%b9";
break;
case 53938:
conv_str += "%e5%8c%86";
break;
case 53939:
conv_str += "%e5%8c%88";
break;
case 53940:
conv_str += "%e7%94%b8";
break;
case 53941:
conv_str += "%e5%8c%8d";
break;
case 53942:
conv_str += "%e5%8c%90";
break;
case 53943:
conv_str += "%e5%8c%8f";
break;
case 53944:
conv_str += "%e5%8c%95";
break;
case 53945:
conv_str += "%e5%8c%9a";
break;
case 53946:
conv_str += "%e5%8c%a3";
break;
case 53947:
conv_str += "%e5%8c%af";
break;
case 53948:
conv_str += "%e5%8c%b1";
break;
case 53949:
conv_str += "%e5%8c%b3";
break;
case 53950:
conv_str += "%e5%8c%b8";
break;
case 53951:
conv_str += "%e5%8d%80";
break;
case 53952:
conv_str += "%e5%8d%86";
break;
case 53953:
conv_str += "%e5%8d%85";
break;
case 53954:
conv_str += "%e4%b8%97";
break;
case 53955:
conv_str += "%e5%8d%89";
break;
case 53956:
conv_str += "%e5%8d%8d";
break;
case 53957:
conv_str += "%e5%87%96";
break;
case 53958:
conv_str += "%e5%8d%9e";
break;
case 53959:
conv_str += "%e5%8d%a9";
break;
case 53960:
conv_str += "%e5%8d%ae";
break;
case 53961:
conv_str += "%e5%a4%98";
break;
case 53962:
conv_str += "%e5%8d%bb";
break;
case 53963:
conv_str += "%e5%8d%b7";
break;
case 53964:
conv_str += "%e5%8e%82";
break;
case 53965:
conv_str += "%e5%8e%96";
break;
case 53966:
conv_str += "%e5%8e%a0";
break;
case 53967:
conv_str += "%e5%8e%a6";
break;
case 53968:
conv_str += "%e5%8e%a5";
break;
case 53969:
conv_str += "%e5%8e%ae";
break;
case 53970:
conv_str += "%e5%8e%b0";
break;
case 53971:
conv_str += "%e5%8e%b6";
break;
case 53972:
conv_str += "%e5%8f%83";
break;
case 53973:
conv_str += "%e7%b0%92";
break;
case 53974:
conv_str += "%e9%9b%99";
break;
case 53975:
conv_str += "%e5%8f%9f";
break;
case 53976:
conv_str += "%e6%9b%bc";
break;
case 53977:
conv_str += "%e7%87%ae";
break;
case 53978:
conv_str += "%e5%8f%ae";
break;
case 53979:
conv_str += "%e5%8f%a8";
break;
case 53980:
conv_str += "%e5%8f%ad";
break;
case 53981:
conv_str += "%e5%8f%ba";
break;
case 53982:
conv_str += "%e5%90%81";
break;
case 53983:
conv_str += "%e5%90%bd";
break;
case 53984:
conv_str += "%e5%91%80";
break;
case 53985:
conv_str += "%e5%90%ac";
break;
case 53986:
conv_str += "%e5%90%ad";
break;
case 53987:
conv_str += "%e5%90%bc";
break;
case 53988:
conv_str += "%e5%90%ae";
break;
case 53989:
conv_str += "%e5%90%b6";
break;
case 53990:
conv_str += "%e5%90%a9";
break;
case 53991:
conv_str += "%e5%90%9d";
break;
case 53992:
conv_str += "%e5%91%8e";
break;
case 53993:
conv_str += "%e5%92%8f";
break;
case 53994:
conv_str += "%e5%91%b5";
break;
case 53995:
conv_str += "%e5%92%8e";
break;
case 53996:
conv_str += "%e5%91%9f";
break;
case 53997:
conv_str += "%e5%91%b1";
break;
case 53998:
conv_str += "%e5%91%b7";
break;
case 53999:
conv_str += "%e5%91%b0";
break;
case 54000:
conv_str += "%e5%92%92";
break;
case 54001:
conv_str += "%e5%91%bb";
break;
case 54002:
conv_str += "%e5%92%80";
break;
case 54003:
conv_str += "%e5%91%b6";
break;
case 54004:
conv_str += "%e5%92%84";
break;
case 54005:
conv_str += "%e5%92%90";
break;
case 54006:
conv_str += "%e5%92%86";
break;
case 54007:
conv_str += "%e5%93%87";
break;
case 54008:
conv_str += "%e5%92%a2";
break;
case 54009:
conv_str += "%e5%92%b8";
break;
case 54010:
conv_str += "%e5%92%a5";
break;
case 54011:
conv_str += "%e5%92%ac";
break;
case 54012:
conv_str += "%e5%93%84";
break;
case 54013:
conv_str += "%e5%93%88";
break;
case 54014:
conv_str += "%e5%92%a8";
break;
case 54177:
conv_str += "%e5%92%ab";
break;
case 54178:
conv_str += "%e5%93%82";
break;
case 54179:
conv_str += "%e5%92%a4";
break;
case 54180:
conv_str += "%e5%92%be";
break;
case 54181:
conv_str += "%e5%92%bc";
break;
case 54182:
conv_str += "%e5%93%98";
break;
case 54183:
conv_str += "%e5%93%a5";
break;
case 54184:
conv_str += "%e5%93%a6";
break;
case 54185:
conv_str += "%e5%94%8f";
break;
case 54186:
conv_str += "%e5%94%94";
break;
case 54187:
conv_str += "%e5%93%bd";
break;
case 54188:
conv_str += "%e5%93%ae";
break;
case 54189:
conv_str += "%e5%93%ad";
break;
case 54190:
conv_str += "%e5%93%ba";
break;
case 54191:
conv_str += "%e5%93%a2";
break;
case 54192:
conv_str += "%e5%94%b9";
break;
case 54193:
conv_str += "%e5%95%80";
break;
case 54194:
conv_str += "%e5%95%a3";
break;
case 54195:
conv_str += "%e5%95%8c";
break;
case 54196:
conv_str += "%e5%94%ae";
break;
case 54197:
conv_str += "%e5%95%9c";
break;
case 54198:
conv_str += "%e5%95%85";
break;
case 54199:
conv_str += "%e5%95%96";
break;
case 54200:
conv_str += "%e5%95%97";
break;
case 54201:
conv_str += "%e5%94%b8";
break;
case 54202:
conv_str += "%e5%94%b3";
break;
case 54203:
conv_str += "%e5%95%9d";
break;
case 54204:
conv_str += "%e5%96%99";
break;
case 54205:
conv_str += "%e5%96%80";
break;
case 54206:
conv_str += "%e5%92%af";
break;
case 54207:
conv_str += "%e5%96%8a";
break;
case 54208:
conv_str += "%e5%96%9f";
break;
case 54209:
conv_str += "%e5%95%bb";
break;
case 54210:
conv_str += "%e5%95%be";
break;
case 54211:
conv_str += "%e5%96%98";
break;
case 54212:
conv_str += "%e5%96%9e";
break;
case 54213:
conv_str += "%e5%96%ae";
break;
case 54214:
conv_str += "%e5%95%bc";
break;
case 54215:
conv_str += "%e5%96%83";
break;
case 54216:
conv_str += "%e5%96%a9";
break;
case 54217:
conv_str += "%e5%96%87";
break;
case 54218:
conv_str += "%e5%96%a8";
break;
case 54219:
conv_str += "%e5%97%9a";
break;
case 54220:
conv_str += "%e5%97%85";
break;
case 54221:
conv_str += "%e5%97%9f";
break;
case 54222:
conv_str += "%e5%97%84";
break;
case 54223:
conv_str += "%e5%97%9c";
break;
case 54224:
conv_str += "%e5%97%a4";
break;
case 54225:
conv_str += "%e5%97%94";
break;
case 54226:
conv_str += "%e5%98%94";
break;
case 54227:
conv_str += "%e5%97%b7";
break;
case 54228:
conv_str += "%e5%98%96";
break;
case 54229:
conv_str += "%e5%97%be";
break;
case 54230:
conv_str += "%e5%97%bd";
break;
case 54231:
conv_str += "%e5%98%9b";
break;
case 54232:
conv_str += "%e5%97%b9";
break;
case 54233:
conv_str += "%e5%99%8e";
break;
case 54234:
conv_str += "%e5%99%90";
break;
case 54235:
conv_str += "%e7%87%9f";
break;
case 54236:
conv_str += "%e5%98%b4";
break;
case 54237:
conv_str += "%e5%98%b6";
break;
case 54238:
conv_str += "%e5%98%b2";
break;
case 54239:
conv_str += "%e5%98%b8";
break;
case 54240:
conv_str += "%e5%99%ab";
break;
case 54241:
conv_str += "%e5%99%a4";
break;
case 54242:
conv_str += "%e5%98%af";
break;
case 54243:
conv_str += "%e5%99%ac";
break;
case 54244:
conv_str += "%e5%99%aa";
break;
case 54245:
conv_str += "%e5%9a%86";
break;
case 54246:
conv_str += "%e5%9a%80";
break;
case 54247:
conv_str += "%e5%9a%8a";
break;
case 54248:
conv_str += "%e5%9a%a0";
break;
case 54249:
conv_str += "%e5%9a%94";
break;
case 54250:
conv_str += "%e5%9a%8f";
break;
case 54251:
conv_str += "%e5%9a%a5";
break;
case 54252:
conv_str += "%e5%9a%ae";
break;
case 54253:
conv_str += "%e5%9a%b6";
break;
case 54254:
conv_str += "%e5%9a%b4";
break;
case 54255:
conv_str += "%e5%9b%82";
break;
case 54256:
conv_str += "%e5%9a%bc";
break;
case 54257:
conv_str += "%e5%9b%81";
break;
case 54258:
conv_str += "%e5%9b%83";
break;
case 54259:
conv_str += "%e5%9b%80";
break;
case 54260:
conv_str += "%e5%9b%88";
break;
case 54261:
conv_str += "%e5%9b%8e";
break;
case 54262:
conv_str += "%e5%9b%91";
break;
case 54263:
conv_str += "%e5%9b%93";
break;
case 54264:
conv_str += "%e5%9b%97";
break;
case 54265:
conv_str += "%e5%9b%ae";
break;
case 54266:
conv_str += "%e5%9b%b9";
break;
case 54267:
conv_str += "%e5%9c%80";
break;
case 54268:
conv_str += "%e5%9b%bf";
break;
case 54269:
conv_str += "%e5%9c%84";
break;
case 54270:
conv_str += "%e5%9c%89";
break;
case 54433:
conv_str += "%e5%9c%88";
break;
case 54434:
conv_str += "%e5%9c%8b";
break;
case 54435:
conv_str += "%e5%9c%8d";
break;
case 54436:
conv_str += "%e5%9c%93";
break;
case 54437:
conv_str += "%e5%9c%98";
break;
case 54438:
conv_str += "%e5%9c%96";
break;
case 54439:
conv_str += "%e5%97%87";
break;
case 54440:
conv_str += "%e5%9c%9c";
break;
case 54441:
conv_str += "%e5%9c%a6";
break;
case 54442:
conv_str += "%e5%9c%b7";
break;
case 54443:
conv_str += "%e5%9c%b8";
break;
case 54444:
conv_str += "%e5%9d%8e";
break;
case 54445:
conv_str += "%e5%9c%bb";
break;
case 54446:
conv_str += "%e5%9d%80";
break;
case 54447:
conv_str += "%e5%9d%8f";
break;
case 54448:
conv_str += "%e5%9d%a9";
break;
case 54449:
conv_str += "%e5%9f%80";
break;
case 54450:
conv_str += "%e5%9e%88";
break;
case 54451:
conv_str += "%e5%9d%a1";
break;
case 54452:
conv_str += "%e5%9d%bf";
break;
case 54453:
conv_str += "%e5%9e%89";
break;
case 54454:
conv_str += "%e5%9e%93";
break;
case 54455:
conv_str += "%e5%9e%a0";
break;
case 54456:
conv_str += "%e5%9e%b3";
break;
case 54457:
conv_str += "%e5%9e%a4";
break;
case 54458:
conv_str += "%e5%9e%aa";
break;
case 54459:
conv_str += "%e5%9e%b0";
break;
case 54460:
conv_str += "%e5%9f%83";
break;
case 54461:
conv_str += "%e5%9f%86";
break;
case 54462:
conv_str += "%e5%9f%94";
break;
case 54463:
conv_str += "%e5%9f%92";
break;
case 54464:
conv_str += "%e5%9f%93";
break;
case 54465:
conv_str += "%e5%a0%8a";
break;
case 54466:
conv_str += "%e5%9f%96";
break;
case 54467:
conv_str += "%e5%9f%a3";
break;
case 54468:
conv_str += "%e5%a0%8b";
break;
case 54469:
conv_str += "%e5%a0%99";
break;
case 54470:
conv_str += "%e5%a0%9d";
break;
case 54471:
conv_str += "%e5%a1%b2";
break;
case 54472:
conv_str += "%e5%a0%a1";
break;
case 54473:
conv_str += "%e5%a1%a2";
break;
case 54474:
conv_str += "%e5%a1%8b";
break;
case 54475:
conv_str += "%e5%a1%b0";
break;
case 54476:
conv_str += "%e6%af%80";
break;
case 54477:
conv_str += "%e5%a1%92";
break;
case 54478:
conv_str += "%e5%a0%bd";
break;
case 54479:
conv_str += "%e5%a1%b9";
break;
case 54480:
conv_str += "%e5%a2%85";
break;
case 54481:
conv_str += "%e5%a2%b9";
break;
case 54482:
conv_str += "%e5%a2%9f";
break;
case 54483:
conv_str += "%e5%a2%ab";
break;
case 54484:
conv_str += "%e5%a2%ba";
break;
case 54485:
conv_str += "%e5%a3%9e";
break;
case 54486:
conv_str += "%e5%a2%bb";
break;
case 54487:
conv_str += "%e5%a2%b8";
break;
case 54488:
conv_str += "%e5%a2%ae";
break;
case 54489:
conv_str += "%e5%a3%85";
break;
case 54490:
conv_str += "%e5%a3%93";
break;
case 54491:
conv_str += "%e5%a3%91";
break;
case 54492:
conv_str += "%e5%a3%97";
break;
case 54493:
conv_str += "%e5%a3%99";
break;
case 54494:
conv_str += "%e5%a3%98";
break;
case 54495:
conv_str += "%e5%a3%a5";
break;
case 54496:
conv_str += "%e5%a3%9c";
break;
case 54497:
conv_str += "%e5%a3%a4";
break;
case 54498:
conv_str += "%e5%a3%9f";
break;
case 54499:
conv_str += "%e5%a3%af";
break;
case 54500:
conv_str += "%e5%a3%ba";
break;
case 54501:
conv_str += "%e5%a3%b9";
break;
case 54502:
conv_str += "%e5%a3%bb";
break;
case 54503:
conv_str += "%e5%a3%bc";
break;
case 54504:
conv_str += "%e5%a3%bd";
break;
case 54505:
conv_str += "%e5%a4%82";
break;
case 54506:
conv_str += "%e5%a4%8a";
break;
case 54507:
conv_str += "%e5%a4%90";
break;
case 54508:
conv_str += "%e5%a4%9b";
break;
case 54509:
conv_str += "%e6%a2%a6";
break;
case 54510:
conv_str += "%e5%a4%a5";
break;
case 54511:
conv_str += "%e5%a4%ac";
break;
case 54512:
conv_str += "%e5%a4%ad";
break;
case 54513:
conv_str += "%e5%a4%b2";
break;
case 54514:
conv_str += "%e5%a4%b8";
break;
case 54515:
conv_str += "%e5%a4%be";
break;
case 54516:
conv_str += "%e7%ab%92";
break;
case 54517:
conv_str += "%e5%a5%95";
break;
case 54518:
conv_str += "%e5%a5%90";
break;
case 54519:
conv_str += "%e5%a5%8e";
break;
case 54520:
conv_str += "%e5%a5%9a";
break;
case 54521:
conv_str += "%e5%a5%98";
break;
case 54522:
conv_str += "%e5%a5%a2";
break;
case 54523:
conv_str += "%e5%a5%a0";
break;
case 54524:
conv_str += "%e5%a5%a7";
break;
case 54525:
conv_str += "%e5%a5%ac";
break;
case 54526:
conv_str += "%e5%a5%a9";
break;
case 54689:
conv_str += "%e5%a5%b8";
break;
case 54690:
conv_str += "%e5%a6%81";
break;
case 54691:
conv_str += "%e5%a6%9d";
break;
case 54692:
conv_str += "%e4%bd%9e";
break;
case 54693:
conv_str += "%e4%be%ab";
break;
case 54694:
conv_str += "%e5%a6%a3";
break;
case 54695:
conv_str += "%e5%a6%b2";
break;
case 54696:
conv_str += "%e5%a7%86";
break;
case 54697:
conv_str += "%e5%a7%a8";
break;
case 54698:
conv_str += "%e5%a7%9c";
break;
case 54699:
conv_str += "%e5%a6%8d";
break;
case 54700:
conv_str += "%e5%a7%99";
break;
case 54701:
conv_str += "%e5%a7%9a";
break;
case 54702:
conv_str += "%e5%a8%a5";
break;
case 54703:
conv_str += "%e5%a8%9f";
break;
case 54704:
conv_str += "%e5%a8%91";
break;
case 54705:
conv_str += "%e5%a8%9c";
break;
case 54706:
conv_str += "%e5%a8%89";
break;
case 54707:
conv_str += "%e5%a8%9a";
break;
case 54708:
conv_str += "%e5%a9%80";
break;
case 54709:
conv_str += "%e5%a9%ac";
break;
case 54710:
conv_str += "%e5%a9%89";
break;
case 54711:
conv_str += "%e5%a8%b5";
break;
case 54712:
conv_str += "%e5%a8%b6";
break;
case 54713:
conv_str += "%e5%a9%a2";
break;
case 54714:
conv_str += "%e5%a9%aa";
break;
case 54715:
conv_str += "%e5%aa%9a";
break;
case 54716:
conv_str += "%e5%aa%bc";
break;
case 54717:
conv_str += "%e5%aa%be";
break;
case 54718:
conv_str += "%e5%ab%8b";
break;
case 54719:
conv_str += "%e5%ab%82";
break;
case 54720:
conv_str += "%e5%aa%bd";
break;
case 54721:
conv_str += "%e5%ab%a3";
break;
case 54722:
conv_str += "%e5%ab%97";
break;
case 54723:
conv_str += "%e5%ab%a6";
break;
case 54724:
conv_str += "%e5%ab%a9";
break;
case 54725:
conv_str += "%e5%ab%96";
break;
case 54726:
conv_str += "%e5%ab%ba";
break;
case 54727:
conv_str += "%e5%ab%bb";
break;
case 54728:
conv_str += "%e5%ac%8c";
break;
case 54729:
conv_str += "%e5%ac%8b";
break;
case 54730:
conv_str += "%e5%ac%96";
break;
case 54731:
conv_str += "%e5%ac%b2";
break;
case 54732:
conv_str += "%e5%ab%90";
break;
case 54733:
conv_str += "%e5%ac%aa";
break;
case 54734:
conv_str += "%e5%ac%b6";
break;
case 54735:
conv_str += "%e5%ac%be";
break;
case 54736:
conv_str += "%e5%ad%83";
break;
case 54737:
conv_str += "%e5%ad%85";
break;
case 54738:
conv_str += "%e5%ad%80";
break;
case 54739:
conv_str += "%e5%ad%91";
break;
case 54740:
conv_str += "%e5%ad%95";
break;
case 54741:
conv_str += "%e5%ad%9a";
break;
case 54742:
conv_str += "%e5%ad%9b";
break;
case 54743:
conv_str += "%e5%ad%a5";
break;
case 54744:
conv_str += "%e5%ad%a9";
break;
case 54745:
conv_str += "%e5%ad%b0";
break;
case 54746:
conv_str += "%e5%ad%b3";
break;
case 54747:
conv_str += "%e5%ad%b5";
break;
case 54748:
conv_str += "%e5%ad%b8";
break;
case 54749:
conv_str += "%e6%96%88";
break;
case 54750:
conv_str += "%e5%ad%ba";
break;
case 54751:
conv_str += "%e5%ae%80";
break;
case 54752:
conv_str += "%e5%ae%83";
break;
case 54753:
conv_str += "%e5%ae%a6";
break;
case 54754:
conv_str += "%e5%ae%b8";
break;
case 54755:
conv_str += "%e5%af%83";
break;
case 54756:
conv_str += "%e5%af%87";
break;
case 54757:
conv_str += "%e5%af%89";
break;
case 54758:
conv_str += "%e5%af%94";
break;
case 54759:
conv_str += "%e5%af%90";
break;
case 54760:
conv_str += "%e5%af%a4";
break;
case 54761:
conv_str += "%e5%af%a6";
break;
case 54762:
conv_str += "%e5%af%a2";
break;
case 54763:
conv_str += "%e5%af%9e";
break;
case 54764:
conv_str += "%e5%af%a5";
break;
case 54765:
conv_str += "%e5%af%ab";
break;
case 54766:
conv_str += "%e5%af%b0";
break;
case 54767:
conv_str += "%e5%af%b6";
break;
case 54768:
conv_str += "%e5%af%b3";
break;
case 54769:
conv_str += "%e5%b0%85";
break;
case 54770:
conv_str += "%e5%b0%87";
break;
case 54771:
conv_str += "%e5%b0%88";
break;
case 54772:
conv_str += "%e5%b0%8d";
break;
case 54773:
conv_str += "%e5%b0%93";
break;
case 54774:
conv_str += "%e5%b0%a0";
break;
case 54775:
conv_str += "%e5%b0%a2";
break;
case 54776:
conv_str += "%e5%b0%a8";
break;
case 54777:
conv_str += "%e5%b0%b8";
break;
case 54778:
conv_str += "%e5%b0%b9";
break;
case 54779:
conv_str += "%e5%b1%81";
break;
case 54780:
conv_str += "%e5%b1%86";
break;
case 54781:
conv_str += "%e5%b1%8e";
break;
case 54782:
conv_str += "%e5%b1%93";
break;
case 54945:
conv_str += "%e5%b1%90";
break;
case 54946:
conv_str += "%e5%b1%8f";
break;
case 54947:
conv_str += "%e5%ad%b1";
break;
case 54948:
conv_str += "%e5%b1%ac";
break;
case 54949:
conv_str += "%e5%b1%ae";
break;
case 54950:
conv_str += "%e4%b9%a2";
break;
case 54951:
conv_str += "%e5%b1%b6";
break;
case 54952:
conv_str += "%e5%b1%b9";
break;
case 54953:
conv_str += "%e5%b2%8c";
break;
case 54954:
conv_str += "%e5%b2%91";
break;
case 54955:
conv_str += "%e5%b2%94";
break;
case 54956:
conv_str += "%e5%a6%9b";
break;
case 54957:
conv_str += "%e5%b2%ab";
break;
case 54958:
conv_str += "%e5%b2%bb";
break;
case 54959:
conv_str += "%e5%b2%b6";
break;
case 54960:
conv_str += "%e5%b2%bc";
break;
case 54961:
conv_str += "%e5%b2%b7";
break;
case 54962:
conv_str += "%e5%b3%85";
break;
case 54963:
conv_str += "%e5%b2%be";
break;
case 54964:
conv_str += "%e5%b3%87";
break;
case 54965:
conv_str += "%e5%b3%99";
break;
case 54966:
conv_str += "%e5%b3%a9";
break;
case 54967:
conv_str += "%e5%b3%bd";
break;
case 54968:
conv_str += "%e5%b3%ba";
break;
case 54969:
conv_str += "%e5%b3%ad";
break;
case 54970:
conv_str += "%e5%b6%8c";
break;
case 54971:
conv_str += "%e5%b3%aa";
break;
case 54972:
conv_str += "%e5%b4%8b";
break;
case 54973:
conv_str += "%e5%b4%95";
break;
case 54974:
conv_str += "%e5%b4%97";
break;
case 54975:
conv_str += "%e5%b5%9c";
break;
case 54976:
conv_str += "%e5%b4%9f";
break;
case 54977:
conv_str += "%e5%b4%9b";
break;
case 54978:
conv_str += "%e5%b4%91";
break;
case 54979:
conv_str += "%e5%b4%94";
break;
case 54980:
conv_str += "%e5%b4%a2";
break;
case 54981:
conv_str += "%e5%b4%9a";
break;
case 54982:
conv_str += "%e5%b4%99";
break;
case 54983:
conv_str += "%e5%b4%98";
break;
case 54984:
conv_str += "%e5%b5%8c";
break;
case 54985:
conv_str += "%e5%b5%92";
break;
case 54986:
conv_str += "%e5%b5%8e";
break;
case 54987:
conv_str += "%e5%b5%8b";
break;
case 54988:
conv_str += "%e5%b5%ac";
break;
case 54989:
conv_str += "%e5%b5%b3";
break;
case 54990:
conv_str += "%e5%b5%b6";
break;
case 54991:
conv_str += "%e5%b6%87";
break;
case 54992:
conv_str += "%e5%b6%84";
break;
case 54993:
conv_str += "%e5%b6%82";
break;
case 54994:
conv_str += "%e5%b6%a2";
break;
case 54995:
conv_str += "%e5%b6%9d";
break;
case 54996:
conv_str += "%e5%b6%ac";
break;
case 54997:
conv_str += "%e5%b6%ae";
break;
case 54998:
conv_str += "%e5%b6%bd";
break;
case 54999:
conv_str += "%e5%b6%90";
break;
case 55000:
conv_str += "%e5%b6%b7";
break;
case 55001:
conv_str += "%e5%b6%bc";
break;
case 55002:
conv_str += "%e5%b7%89";
break;
case 55003:
conv_str += "%e5%b7%8d";
break;
case 55004:
conv_str += "%e5%b7%93";
break;
case 55005:
conv_str += "%e5%b7%92";
break;
case 55006:
conv_str += "%e5%b7%96";
break;
case 55007:
conv_str += "%e5%b7%9b";
break;
case 55008:
conv_str += "%e5%b7%ab";
break;
case 55009:
conv_str += "%e5%b7%b2";
break;
case 55010:
conv_str += "%e5%b7%b5";
break;
case 55011:
conv_str += "%e5%b8%8b";
break;
case 55012:
conv_str += "%e5%b8%9a";
break;
case 55013:
conv_str += "%e5%b8%99";
break;
case 55014:
conv_str += "%e5%b8%91";
break;
case 55015:
conv_str += "%e5%b8%9b";
break;
case 55016:
conv_str += "%e5%b8%b6";
break;
case 55017:
conv_str += "%e5%b8%b7";
break;
case 55018:
conv_str += "%e5%b9%84";
break;
case 55019:
conv_str += "%e5%b9%83";
break;
case 55020:
conv_str += "%e5%b9%80";
break;
case 55021:
conv_str += "%e5%b9%8e";
break;
case 55022:
conv_str += "%e5%b9%97";
break;
case 55023:
conv_str += "%e5%b9%94";
break;
case 55024:
conv_str += "%e5%b9%9f";
break;
case 55025:
conv_str += "%e5%b9%a2";
break;
case 55026:
conv_str += "%e5%b9%a4";
break;
case 55027:
conv_str += "%e5%b9%87";
break;
case 55028:
conv_str += "%e5%b9%b5";
break;
case 55029:
conv_str += "%e5%b9%b6";
break;
case 55030:
conv_str += "%e5%b9%ba";
break;
case 55031:
conv_str += "%e9%ba%bc";
break;
case 55032:
conv_str += "%e5%b9%bf";
break;
case 55033:
conv_str += "%e5%ba%a0";
break;
case 55034:
conv_str += "%e5%bb%81";
break;
case 55035:
conv_str += "%e5%bb%82";
break;
case 55036:
conv_str += "%e5%bb%88";
break;
case 55037:
conv_str += "%e5%bb%90";
break;
case 55038:
conv_str += "%e5%bb%8f";
break;
case 55201:
conv_str += "%e5%bb%96";
break;
case 55202:
conv_str += "%e5%bb%a3";
break;
case 55203:
conv_str += "%e5%bb%9d";
break;
case 55204:
conv_str += "%e5%bb%9a";
break;
case 55205:
conv_str += "%e5%bb%9b";
break;
case 55206:
conv_str += "%e5%bb%a2";
break;
case 55207:
conv_str += "%e5%bb%a1";
break;
case 55208:
conv_str += "%e5%bb%a8";
break;
case 55209:
conv_str += "%e5%bb%a9";
break;
case 55210:
conv_str += "%e5%bb%ac";
break;
case 55211:
conv_str += "%e5%bb%b1";
break;
case 55212:
conv_str += "%e5%bb%b3";
break;
case 55213:
conv_str += "%e5%bb%b0";
break;
case 55214:
conv_str += "%e5%bb%b4";
break;
case 55215:
conv_str += "%e5%bb%b8";
break;
case 55216:
conv_str += "%e5%bb%be";
break;
case 55217:
conv_str += "%e5%bc%83";
break;
case 55218:
conv_str += "%e5%bc%89";
break;
case 55219:
conv_str += "%e5%bd%9d";
break;
case 55220:
conv_str += "%e5%bd%9c";
break;
case 55221:
conv_str += "%e5%bc%8b";
break;
case 55222:
conv_str += "%e5%bc%91";
break;
case 55223:
conv_str += "%e5%bc%96";
break;
case 55224:
conv_str += "%e5%bc%a9";
break;
case 55225:
conv_str += "%e5%bc%ad";
break;
case 55226:
conv_str += "%e5%bc%b8";
break;
case 55227:
conv_str += "%e5%bd%81";
break;
case 55228:
conv_str += "%e5%bd%88";
break;
case 55229:
conv_str += "%e5%bd%8c";
break;
case 55230:
conv_str += "%e5%bd%8e";
break;
case 55231:
conv_str += "%e5%bc%af";
break;
case 55232:
conv_str += "%e5%bd%91";
break;
case 55233:
conv_str += "%e5%bd%96";
break;
case 55234:
conv_str += "%e5%bd%97";
break;
case 55235:
conv_str += "%e5%bd%99";
break;
case 55236:
conv_str += "%e5%bd%a1";
break;
case 55237:
conv_str += "%e5%bd%ad";
break;
case 55238:
conv_str += "%e5%bd%b3";
break;
case 55239:
conv_str += "%e5%bd%b7";
break;
case 55240:
conv_str += "%e5%be%83";
break;
case 55241:
conv_str += "%e5%be%82";
break;
case 55242:
conv_str += "%e5%bd%bf";
break;
case 55243:
conv_str += "%e5%be%8a";
break;
case 55244:
conv_str += "%e5%be%88";
break;
case 55245:
conv_str += "%e5%be%91";
break;
case 55246:
conv_str += "%e5%be%87";
break;
case 55247:
conv_str += "%e5%be%9e";
break;
case 55248:
conv_str += "%e5%be%99";
break;
case 55249:
conv_str += "%e5%be%98";
break;
case 55250:
conv_str += "%e5%be%a0";
break;
case 55251:
conv_str += "%e5%be%a8";
break;
case 55252:
conv_str += "%e5%be%ad";
break;
case 55253:
conv_str += "%e5%be%bc";
break;
case 55254:
conv_str += "%e5%bf%96";
break;
case 55255:
conv_str += "%e5%bf%bb";
break;
case 55256:
conv_str += "%e5%bf%a4";
break;
case 55257:
conv_str += "%e5%bf%b8";
break;
case 55258:
conv_str += "%e5%bf%b1";
break;
case 55259:
conv_str += "%e5%bf%9d";
break;
case 55260:
conv_str += "%e6%82%b3";
break;
case 55261:
conv_str += "%e5%bf%bf";
break;
case 55262:
conv_str += "%e6%80%a1";
break;
case 55263:
conv_str += "%e6%81%a0";
break;
case 55264:
conv_str += "%e6%80%99";
break;
case 55265:
conv_str += "%e6%80%90";
break;
case 55266:
conv_str += "%e6%80%a9";
break;
case 55267:
conv_str += "%e6%80%8e";
break;
case 55268:
conv_str += "%e6%80%b1";
break;
case 55269:
conv_str += "%e6%80%9b";
break;
case 55270:
conv_str += "%e6%80%95";
break;
case 55271:
conv_str += "%e6%80%ab";
break;
case 55272:
conv_str += "%e6%80%a6";
break;
case 55273:
conv_str += "%e6%80%8f";
break;
case 55274:
conv_str += "%e6%80%ba";
break;
case 55275:
conv_str += "%e6%81%9a";
break;
case 55276:
conv_str += "%e6%81%81";
break;
case 55277:
conv_str += "%e6%81%aa";
break;
case 55278:
conv_str += "%e6%81%b7";
break;
case 55279:
conv_str += "%e6%81%9f";
break;
case 55280:
conv_str += "%e6%81%8a";
break;
case 55281:
conv_str += "%e6%81%86";
break;
case 55282:
conv_str += "%e6%81%8d";
break;
case 55283:
conv_str += "%e6%81%a3";
break;
case 55284:
conv_str += "%e6%81%83";
break;
case 55285:
conv_str += "%e6%81%a4";
break;
case 55286:
conv_str += "%e6%81%82";
break;
case 55287:
conv_str += "%e6%81%ac";
break;
case 55288:
conv_str += "%e6%81%ab";
break;
case 55289:
conv_str += "%e6%81%99";
break;
case 55290:
conv_str += "%e6%82%81";
break;
case 55291:
conv_str += "%e6%82%8d";
break;
case 55292:
conv_str += "%e6%83%a7";
break;
case 55293:
conv_str += "%e6%82%83";
break;
case 55294:
conv_str += "%e6%82%9a";
break;
case 55457:
conv_str += "%e6%82%84";
break;
case 55458:
conv_str += "%e6%82%9b";
break;
case 55459:
conv_str += "%e6%82%96";
break;
case 55460:
conv_str += "%e6%82%97";
break;
case 55461:
conv_str += "%e6%82%92";
break;
case 55462:
conv_str += "%e6%82%a7";
break;
case 55463:
conv_str += "%e6%82%8b";
break;
case 55464:
conv_str += "%e6%83%a1";
break;
case 55465:
conv_str += "%e6%82%b8";
break;
case 55466:
conv_str += "%e6%83%a0";
break;
case 55467:
conv_str += "%e6%83%93";
break;
case 55468:
conv_str += "%e6%82%b4";
break;
case 55469:
conv_str += "%e5%bf%b0";
break;
case 55470:
conv_str += "%e6%82%bd";
break;
case 55471:
conv_str += "%e6%83%86";
break;
case 55472:
conv_str += "%e6%82%b5";
break;
case 55473:
conv_str += "%e6%83%98";
break;
case 55474:
conv_str += "%e6%85%8d";
break;
case 55475:
conv_str += "%e6%84%95";
break;
case 55476:
conv_str += "%e6%84%86";
break;
case 55477:
conv_str += "%e6%83%b6";
break;
case 55478:
conv_str += "%e6%83%b7";
break;
case 55479:
conv_str += "%e6%84%80";
break;
case 55480:
conv_str += "%e6%83%b4";
break;
case 55481:
conv_str += "%e6%83%ba";
break;
case 55482:
conv_str += "%e6%84%83";
break;
case 55483:
conv_str += "%e6%84%a1";
break;
case 55484:
conv_str += "%e6%83%bb";
break;
case 55485:
conv_str += "%e6%83%b1";
break;
case 55486:
conv_str += "%e6%84%8d";
break;
case 55487:
conv_str += "%e6%84%8e";
break;
case 55488:
conv_str += "%e6%85%87";
break;
case 55489:
conv_str += "%e6%84%be";
break;
case 55490:
conv_str += "%e6%84%a8";
break;
case 55491:
conv_str += "%e6%84%a7";
break;
case 55492:
conv_str += "%e6%85%8a";
break;
case 55493:
conv_str += "%e6%84%bf";
break;
case 55494:
conv_str += "%e6%84%bc";
break;
case 55495:
conv_str += "%e6%84%ac";
break;
case 55496:
conv_str += "%e6%84%b4";
break;
case 55497:
conv_str += "%e6%84%bd";
break;
case 55498:
conv_str += "%e6%85%82";
break;
case 55499:
conv_str += "%e6%85%84";
break;
case 55500:
conv_str += "%e6%85%b3";
break;
case 55501:
conv_str += "%e6%85%b7";
break;
case 55502:
conv_str += "%e6%85%98";
break;
case 55503:
conv_str += "%e6%85%99";
break;
case 55504:
conv_str += "%e6%85%9a";
break;
case 55505:
conv_str += "%e6%85%ab";
break;
case 55506:
conv_str += "%e6%85%b4";
break;
case 55507:
conv_str += "%e6%85%af";
break;
case 55508:
conv_str += "%e6%85%a5";
break;
case 55509:
conv_str += "%e6%85%b1";
break;
case 55510:
conv_str += "%e6%85%9f";
break;
case 55511:
conv_str += "%e6%85%9d";
break;
case 55512:
conv_str += "%e6%85%93";
break;
case 55513:
conv_str += "%e6%85%b5";
break;
case 55514:
conv_str += "%e6%86%99";
break;
case 55515:
conv_str += "%e6%86%96";
break;
case 55516:
conv_str += "%e6%86%87";
break;
case 55517:
conv_str += "%e6%86%ac";
break;
case 55518:
conv_str += "%e6%86%94";
break;
case 55519:
conv_str += "%e6%86%9a";
break;
case 55520:
conv_str += "%e6%86%8a";
break;
case 55521:
conv_str += "%e6%86%91";
break;
case 55522:
conv_str += "%e6%86%ab";
break;
case 55523:
conv_str += "%e6%86%ae";
break;
case 55524:
conv_str += "%e6%87%8c";
break;
case 55525:
conv_str += "%e6%87%8a";
break;
case 55526:
conv_str += "%e6%87%89";
break;
case 55527:
conv_str += "%e6%87%b7";
break;
case 55528:
conv_str += "%e6%87%88";
break;
case 55529:
conv_str += "%e6%87%83";
break;
case 55530:
conv_str += "%e6%87%86";
break;
case 55531:
conv_str += "%e6%86%ba";
break;
case 55532:
conv_str += "%e6%87%8b";
break;
case 55533:
conv_str += "%e7%bd%b9";
break;
case 55534:
conv_str += "%e6%87%8d";
break;
case 55535:
conv_str += "%e6%87%a6";
break;
case 55536:
conv_str += "%e6%87%a3";
break;
case 55537:
conv_str += "%e6%87%b6";
break;
case 55538:
conv_str += "%e6%87%ba";
break;
case 55539:
conv_str += "%e6%87%b4";
break;
case 55540:
conv_str += "%e6%87%bf";
break;
case 55541:
conv_str += "%e6%87%bd";
break;
case 55542:
conv_str += "%e6%87%bc";
break;
case 55543:
conv_str += "%e6%87%be";
break;
case 55544:
conv_str += "%e6%88%80";
break;
case 55545:
conv_str += "%e6%88%88";
break;
case 55546:
conv_str += "%e6%88%89";
break;
case 55547:
conv_str += "%e6%88%8d";
break;
case 55548:
conv_str += "%e6%88%8c";
break;
case 55549:
conv_str += "%e6%88%94";
break;
case 55550:
conv_str += "%e6%88%9b";
break;
case 55713:
conv_str += "%e6%88%9e";
break;
case 55714:
conv_str += "%e6%88%a1";
break;
case 55715:
conv_str += "%e6%88%aa";
break;
case 55716:
conv_str += "%e6%88%ae";
break;
case 55717:
conv_str += "%e6%88%b0";
break;
case 55718:
conv_str += "%e6%88%b2";
break;
case 55719:
conv_str += "%e6%88%b3";
break;
case 55720:
conv_str += "%e6%89%81";
break;
case 55721:
conv_str += "%e6%89%8e";
break;
case 55722:
conv_str += "%e6%89%9e";
break;
case 55723:
conv_str += "%e6%89%a3";
break;
case 55724:
conv_str += "%e6%89%9b";
break;
case 55725:
conv_str += "%e6%89%a0";
break;
case 55726:
conv_str += "%e6%89%a8";
break;
case 55727:
conv_str += "%e6%89%bc";
break;
case 55728:
conv_str += "%e6%8a%82";
break;
case 55729:
conv_str += "%e6%8a%89";
break;
case 55730:
conv_str += "%e6%89%be";
break;
case 55731:
conv_str += "%e6%8a%92";
break;
case 55732:
conv_str += "%e6%8a%93";
break;
case 55733:
conv_str += "%e6%8a%96";
break;
case 55734:
conv_str += "%e6%8b%94";
break;
case 55735:
conv_str += "%e6%8a%83";
break;
case 55736:
conv_str += "%e6%8a%94";
break;
case 55737:
conv_str += "%e6%8b%97";
break;
case 55738:
conv_str += "%e6%8b%91";
break;
case 55739:
conv_str += "%e6%8a%bb";
break;
case 55740:
conv_str += "%e6%8b%8f";
break;
case 55741:
conv_str += "%e6%8b%bf";
break;
case 55742:
conv_str += "%e6%8b%86";
break;
case 55743:
conv_str += "%e6%93%94";
break;
case 55744:
conv_str += "%e6%8b%88";
break;
case 55745:
conv_str += "%e6%8b%9c";
break;
case 55746:
conv_str += "%e6%8b%8c";
break;
case 55747:
conv_str += "%e6%8b%8a";
break;
case 55748:
conv_str += "%e6%8b%82";
break;
case 55749:
conv_str += "%e6%8b%87";
break;
case 55750:
conv_str += "%e6%8a%9b";
break;
case 55751:
conv_str += "%e6%8b%89";
break;
case 55752:
conv_str += "%e6%8c%8c";
break;
case 55753:
conv_str += "%e6%8b%ae";
break;
case 55754:
conv_str += "%e6%8b%b1";
break;
case 55755:
conv_str += "%e6%8c%a7";
break;
case 55756:
conv_str += "%e6%8c%82";
break;
case 55757:
conv_str += "%e6%8c%88";
break;
case 55758:
conv_str += "%e6%8b%af";
break;
case 55759:
conv_str += "%e6%8b%b5";
break;
case 55760:
conv_str += "%e6%8d%90";
break;
case 55761:
conv_str += "%e6%8c%be";
break;
case 55762:
conv_str += "%e6%8d%8d";
break;
case 55763:
conv_str += "%e6%90%9c";
break;
case 55764:
conv_str += "%e6%8d%8f";
break;
case 55765:
conv_str += "%e6%8e%96";
break;
case 55766:
conv_str += "%e6%8e%8e";
break;
case 55767:
conv_str += "%e6%8e%80";
break;
case 55768:
conv_str += "%e6%8e%ab";
break;
case 55769:
conv_str += "%e6%8d%b6";
break;
case 55770:
conv_str += "%e6%8e%a3";
break;
case 55771:
conv_str += "%e6%8e%8f";
break;
case 55772:
conv_str += "%e6%8e%89";
break;
case 55773:
conv_str += "%e6%8e%9f";
break;
case 55774:
conv_str += "%e6%8e%b5";
break;
case 55775:
conv_str += "%e6%8d%ab";
break;
case 55776:
conv_str += "%e6%8d%a9";
break;
case 55777:
conv_str += "%e6%8e%be";
break;
case 55778:
conv_str += "%e6%8f%a9";
break;
case 55779:
conv_str += "%e6%8f%80";
break;
case 55780:
conv_str += "%e6%8f%86";
break;
case 55781:
conv_str += "%e6%8f%a3";
break;
case 55782:
conv_str += "%e6%8f%89";
break;
case 55783:
conv_str += "%e6%8f%92";
break;
case 55784:
conv_str += "%e6%8f%b6";
break;
case 55785:
conv_str += "%e6%8f%84";
break;
case 55786:
conv_str += "%e6%90%96";
break;
case 55787:
conv_str += "%e6%90%b4";
break;
case 55788:
conv_str += "%e6%90%86";
break;
case 55789:
conv_str += "%e6%90%93";
break;
case 55790:
conv_str += "%e6%90%a6";
break;
case 55791:
conv_str += "%e6%90%b6";
break;
case 55792:
conv_str += "%e6%94%9d";
break;
case 55793:
conv_str += "%e6%90%97";
break;
case 55794:
conv_str += "%e6%90%a8";
break;
case 55795:
conv_str += "%e6%90%8f";
break;
case 55796:
conv_str += "%e6%91%a7";
break;
case 55797:
conv_str += "%e6%91%af";
break;
case 55798:
conv_str += "%e6%91%b6";
break;
case 55799:
conv_str += "%e6%91%8e";
break;
case 55800:
conv_str += "%e6%94%aa";
break;
case 55801:
conv_str += "%e6%92%95";
break;
case 55802:
conv_str += "%e6%92%93";
break;
case 55803:
conv_str += "%e6%92%a5";
break;
case 55804:
conv_str += "%e6%92%a9";
break;
case 55805:
conv_str += "%e6%92%88";
break;
case 55806:
conv_str += "%e6%92%bc";
break;
case 55969:
conv_str += "%e6%93%9a";
break;
case 55970:
conv_str += "%e6%93%92";
break;
case 55971:
conv_str += "%e6%93%85";
break;
case 55972:
conv_str += "%e6%93%87";
break;
case 55973:
conv_str += "%e6%92%bb";
break;
case 55974:
conv_str += "%e6%93%98";
break;
case 55975:
conv_str += "%e6%93%82";
break;
case 55976:
conv_str += "%e6%93%b1";
break;
case 55977:
conv_str += "%e6%93%a7";
break;
case 55978:
conv_str += "%e8%88%89";
break;
case 55979:
conv_str += "%e6%93%a0";
break;
case 55980:
conv_str += "%e6%93%a1";
break;
case 55981:
conv_str += "%e6%8a%ac";
break;
case 55982:
conv_str += "%e6%93%a3";
break;
case 55983:
conv_str += "%e6%93%af";
break;
case 55984:
conv_str += "%e6%94%ac";
break;
case 55985:
conv_str += "%e6%93%b6";
break;
case 55986:
conv_str += "%e6%93%b4";
break;
case 55987:
conv_str += "%e6%93%b2";
break;
case 55988:
conv_str += "%e6%93%ba";
break;
case 55989:
conv_str += "%e6%94%80";
break;
case 55990:
conv_str += "%e6%93%bd";
break;
case 55991:
conv_str += "%e6%94%98";
break;
case 55992:
conv_str += "%e6%94%9c";
break;
case 55993:
conv_str += "%e6%94%85";
break;
case 55994:
conv_str += "%e6%94%a4";
break;
case 55995:
conv_str += "%e6%94%a3";
break;
case 55996:
conv_str += "%e6%94%ab";
break;
case 55997:
conv_str += "%e6%94%b4";
break;
case 55998:
conv_str += "%e6%94%b5";
break;
case 55999:
conv_str += "%e6%94%b7";
break;
case 56000:
conv_str += "%e6%94%b6";
break;
case 56001:
conv_str += "%e6%94%b8";
break;
case 56002:
conv_str += "%e7%95%8b";
break;
case 56003:
conv_str += "%e6%95%88";
break;
case 56004:
conv_str += "%e6%95%96";
break;
case 56005:
conv_str += "%e6%95%95";
break;
case 56006:
conv_str += "%e6%95%8d";
break;
case 56007:
conv_str += "%e6%95%98";
break;
case 56008:
conv_str += "%e6%95%9e";
break;
case 56009:
conv_str += "%e6%95%9d";
break;
case 56010:
conv_str += "%e6%95%b2";
break;
case 56011:
conv_str += "%e6%95%b8";
break;
case 56012:
conv_str += "%e6%96%82";
break;
case 56013:
conv_str += "%e6%96%83";
break;
case 56014:
conv_str += "%e8%ae%8a";
break;
case 56015:
conv_str += "%e6%96%9b";
break;
case 56016:
conv_str += "%e6%96%9f";
break;
case 56017:
conv_str += "%e6%96%ab";
break;
case 56018:
conv_str += "%e6%96%b7";
break;
case 56019:
conv_str += "%e6%97%83";
break;
case 56020:
conv_str += "%e6%97%86";
break;
case 56021:
conv_str += "%e6%97%81";
break;
case 56022:
conv_str += "%e6%97%84";
break;
case 56023:
conv_str += "%e6%97%8c";
break;
case 56024:
conv_str += "%e6%97%92";
break;
case 56025:
conv_str += "%e6%97%9b";
break;
case 56026:
conv_str += "%e6%97%99";
break;
case 56027:
conv_str += "%e6%97%a0";
break;
case 56028:
conv_str += "%e6%97%a1";
break;
case 56029:
conv_str += "%e6%97%b1";
break;
case 56030:
conv_str += "%e6%9d%b2";
break;
case 56031:
conv_str += "%e6%98%8a";
break;
case 56032:
conv_str += "%e6%98%83";
break;
case 56033:
conv_str += "%e6%97%bb";
break;
case 56034:
conv_str += "%e6%9d%b3";
break;
case 56035:
conv_str += "%e6%98%b5";
break;
case 56036:
conv_str += "%e6%98%b6";
break;
case 56037:
conv_str += "%e6%98%b4";
break;
case 56038:
conv_str += "%e6%98%9c";
break;
case 56039:
conv_str += "%e6%99%8f";
break;
case 56040:
conv_str += "%e6%99%84";
break;
case 56041:
conv_str += "%e6%99%89";
break;
case 56042:
conv_str += "%e6%99%81";
break;
case 56043:
conv_str += "%e6%99%9e";
break;
case 56044:
conv_str += "%e6%99%9d";
break;
case 56045:
conv_str += "%e6%99%a4";
break;
case 56046:
conv_str += "%e6%99%a7";
break;
case 56047:
conv_str += "%e6%99%a8";
break;
case 56048:
conv_str += "%e6%99%9f";
break;
case 56049:
conv_str += "%e6%99%a2";
break;
case 56050:
conv_str += "%e6%99%b0";
break;
case 56051:
conv_str += "%e6%9a%83";
break;
case 56052:
conv_str += "%e6%9a%88";
break;
case 56053:
conv_str += "%e6%9a%8e";
break;
case 56054:
conv_str += "%e6%9a%89";
break;
case 56055:
conv_str += "%e6%9a%84";
break;
case 56056:
conv_str += "%e6%9a%98";
break;
case 56057:
conv_str += "%e6%9a%9d";
break;
case 56058:
conv_str += "%e6%9b%81";
break;
case 56059:
conv_str += "%e6%9a%b9";
break;
case 56060:
conv_str += "%e6%9b%89";
break;
case 56061:
conv_str += "%e6%9a%be";
break;
case 56062:
conv_str += "%e6%9a%bc";
break;
case 56225:
conv_str += "%e6%9b%84";
break;
case 56226:
conv_str += "%e6%9a%b8";
break;
case 56227:
conv_str += "%e6%9b%96";
break;
case 56228:
conv_str += "%e6%9b%9a";
break;
case 56229:
conv_str += "%e6%9b%a0";
break;
case 56230:
conv_str += "%e6%98%bf";
break;
case 56231:
conv_str += "%e6%9b%a6";
break;
case 56232:
conv_str += "%e6%9b%a9";
break;
case 56233:
conv_str += "%e6%9b%b0";
break;
case 56234:
conv_str += "%e6%9b%b5";
break;
case 56235:
conv_str += "%e6%9b%b7";
break;
case 56236:
conv_str += "%e6%9c%8f";
break;
case 56237:
conv_str += "%e6%9c%96";
break;
case 56238:
conv_str += "%e6%9c%9e";
break;
case 56239:
conv_str += "%e6%9c%a6";
break;
case 56240:
conv_str += "%e6%9c%a7";
break;
case 56241:
conv_str += "%e9%9c%b8";
break;
case 56242:
conv_str += "%e6%9c%ae";
break;
case 56243:
conv_str += "%e6%9c%bf";
break;
case 56244:
conv_str += "%e6%9c%b6";
break;
case 56245:
conv_str += "%e6%9d%81";
break;
case 56246:
conv_str += "%e6%9c%b8";
break;
case 56247:
conv_str += "%e6%9c%b7";
break;
case 56248:
conv_str += "%e6%9d%86";
break;
case 56249:
conv_str += "%e6%9d%9e";
break;
case 56250:
conv_str += "%e6%9d%a0";
break;
case 56251:
conv_str += "%e6%9d%99";
break;
case 56252:
conv_str += "%e6%9d%a3";
break;
case 56253:
conv_str += "%e6%9d%a4";
break;
case 56254:
conv_str += "%e6%9e%89";
break;
case 56255:
conv_str += "%e6%9d%b0";
break;
case 56256:
conv_str += "%e6%9e%a9";
break;
case 56257:
conv_str += "%e6%9d%bc";
break;
case 56258:
conv_str += "%e6%9d%aa";
break;
case 56259:
conv_str += "%e6%9e%8c";
break;
case 56260:
conv_str += "%e6%9e%8b";
break;
case 56261:
conv_str += "%e6%9e%a6";
break;
case 56262:
conv_str += "%e6%9e%a1";
break;
case 56263:
conv_str += "%e6%9e%85";
break;
case 56264:
conv_str += "%e6%9e%b7";
break;
case 56265:
conv_str += "%e6%9f%af";
break;
case 56266:
conv_str += "%e6%9e%b4";
break;
case 56267:
conv_str += "%e6%9f%ac";
break;
case 56268:
conv_str += "%e6%9e%b3";
break;
case 56269:
conv_str += "%e6%9f%a9";
break;
case 56270:
conv_str += "%e6%9e%b8";
break;
case 56271:
conv_str += "%e6%9f%a4";
break;
case 56272:
conv_str += "%e6%9f%9e";
break;
case 56273:
conv_str += "%e6%9f%9d";
break;
case 56274:
conv_str += "%e6%9f%a2";
break;
case 56275:
conv_str += "%e6%9f%ae";
break;
case 56276:
conv_str += "%e6%9e%b9";
break;
case 56277:
conv_str += "%e6%9f%8e";
break;
case 56278:
conv_str += "%e6%9f%86";
break;
case 56279:
conv_str += "%e6%9f%a7";
break;
case 56280:
conv_str += "%e6%aa%9c";
break;
case 56281:
conv_str += "%e6%a0%9e";
break;
case 56282:
conv_str += "%e6%a1%86";
break;
case 56283:
conv_str += "%e6%a0%a9";
break;
case 56284:
conv_str += "%e6%a1%80";
break;
case 56285:
conv_str += "%e6%a1%8d";
break;
case 56286:
conv_str += "%e6%a0%b2";
break;
case 56287:
conv_str += "%e6%a1%8e";
break;
case 56288:
conv_str += "%e6%a2%b3";
break;
case 56289:
conv_str += "%e6%a0%ab";
break;
case 56290:
conv_str += "%e6%a1%99";
break;
case 56291:
conv_str += "%e6%a1%a3";
break;
case 56292:
conv_str += "%e6%a1%b7";
break;
case 56293:
conv_str += "%e6%a1%bf";
break;
case 56294:
conv_str += "%e6%a2%9f";
break;
case 56295:
conv_str += "%e6%a2%8f";
break;
case 56296:
conv_str += "%e6%a2%ad";
break;
case 56297:
conv_str += "%e6%a2%94";
break;
case 56298:
conv_str += "%e6%a2%9d";
break;
case 56299:
conv_str += "%e6%a2%9b";
break;
case 56300:
conv_str += "%e6%a2%83";
break;
case 56301:
conv_str += "%e6%aa%ae";
break;
case 56302:
conv_str += "%e6%a2%b9";
break;
case 56303:
conv_str += "%e6%a1%b4";
break;
case 56304:
conv_str += "%e6%a2%b5";
break;
case 56305:
conv_str += "%e6%a2%a0";
break;
case 56306:
conv_str += "%e6%a2%ba";
break;
case 56307:
conv_str += "%e6%a4%8f";
break;
case 56308:
conv_str += "%e6%a2%8d";
break;
case 56309:
conv_str += "%e6%a1%be";
break;
case 56310:
conv_str += "%e6%a4%81";
break;
case 56311:
conv_str += "%e6%a3%8a";
break;
case 56312:
conv_str += "%e6%a4%88";
break;
case 56313:
conv_str += "%e6%a3%98";
break;
case 56314:
conv_str += "%e6%a4%a2";
break;
case 56315:
conv_str += "%e6%a4%a6";
break;
case 56316:
conv_str += "%e6%a3%a1";
break;
case 56317:
conv_str += "%e6%a4%8c";
break;
case 56318:
conv_str += "%e6%a3%8d";
break;
case 56481:
conv_str += "%e6%a3%94";
break;
case 56482:
conv_str += "%e6%a3%a7";
break;
case 56483:
conv_str += "%e6%a3%95";
break;
case 56484:
conv_str += "%e6%a4%b6";
break;
case 56485:
conv_str += "%e6%a4%92";
break;
case 56486:
conv_str += "%e6%a4%84";
break;
case 56487:
conv_str += "%e6%a3%97";
break;
case 56488:
conv_str += "%e6%a3%a3";
break;
case 56489:
conv_str += "%e6%a4%a5";
break;
case 56490:
conv_str += "%e6%a3%b9";
break;
case 56491:
conv_str += "%e6%a3%a0";
break;
case 56492:
conv_str += "%e6%a3%af";
break;
case 56493:
conv_str += "%e6%a4%a8";
break;
case 56494:
conv_str += "%e6%a4%aa";
break;
case 56495:
conv_str += "%e6%a4%9a";
break;
case 56496:
conv_str += "%e6%a4%a3";
break;
case 56497:
conv_str += "%e6%a4%a1";
break;
case 56498:
conv_str += "%e6%a3%86";
break;
case 56499:
conv_str += "%e6%a5%b9";
break;
case 56500:
conv_str += "%e6%a5%b7";
break;
case 56501:
conv_str += "%e6%a5%9c";
break;
case 56502:
conv_str += "%e6%a5%b8";
break;
case 56503:
conv_str += "%e6%a5%ab";
break;
case 56504:
conv_str += "%e6%a5%94";
break;
case 56505:
conv_str += "%e6%a5%be";
break;
case 56506:
conv_str += "%e6%a5%ae";
break;
case 56507:
conv_str += "%e6%a4%b9";
break;
case 56508:
conv_str += "%e6%a5%b4";
break;
case 56509:
conv_str += "%e6%a4%bd";
break;
case 56510:
conv_str += "%e6%a5%99";
break;
case 56511:
conv_str += "%e6%a4%b0";
break;
case 56512:
conv_str += "%e6%a5%a1";
break;
case 56513:
conv_str += "%e6%a5%9e";
break;
case 56514:
conv_str += "%e6%a5%9d";
break;
case 56515:
conv_str += "%e6%a6%81";
break;
case 56516:
conv_str += "%e6%a5%aa";
break;
case 56517:
conv_str += "%e6%a6%b2";
break;
case 56518:
conv_str += "%e6%a6%ae";
break;
case 56519:
conv_str += "%e6%a7%90";
break;
case 56520:
conv_str += "%e6%a6%bf";
break;
case 56521:
conv_str += "%e6%a7%81";
break;
case 56522:
conv_str += "%e6%a7%93";
break;
case 56523:
conv_str += "%e6%a6%be";
break;
case 56524:
conv_str += "%e6%a7%8e";
break;
case 56525:
conv_str += "%e5%af%a8";
break;
case 56526:
conv_str += "%e6%a7%8a";
break;
case 56527:
conv_str += "%e6%a7%9d";
break;
case 56528:
conv_str += "%e6%a6%bb";
break;
case 56529:
conv_str += "%e6%a7%83";
break;
case 56530:
conv_str += "%e6%a6%a7";
break;
case 56531:
conv_str += "%e6%a8%ae";
break;
case 56532:
conv_str += "%e6%a6%91";
break;
case 56533:
conv_str += "%e6%a6%a0";
break;
case 56534:
conv_str += "%e6%a6%9c";
break;
case 56535:
conv_str += "%e6%a6%95";
break;
case 56536:
conv_str += "%e6%a6%b4";
break;
case 56537:
conv_str += "%e6%a7%9e";
break;
case 56538:
conv_str += "%e6%a7%a8";
break;
case 56539:
conv_str += "%e6%a8%82";
break;
case 56540:
conv_str += "%e6%a8%9b";
break;
case 56541:
conv_str += "%e6%a7%bf";
break;
case 56542:
conv_str += "%e6%ac%8a";
break;
case 56543:
conv_str += "%e6%a7%b9";
break;
case 56544:
conv_str += "%e6%a7%b2";
break;
case 56545:
conv_str += "%e6%a7%a7";
break;
case 56546:
conv_str += "%e6%a8%85";
break;
case 56547:
conv_str += "%e6%a6%b1";
break;
case 56548:
conv_str += "%e6%a8%9e";
break;
case 56549:
conv_str += "%e6%a7%ad";
break;
case 56550:
conv_str += "%e6%a8%94";
break;
case 56551:
conv_str += "%e6%a7%ab";
break;
case 56552:
conv_str += "%e6%a8%8a";
break;
case 56553:
conv_str += "%e6%a8%92";
break;
case 56554:
conv_str += "%e6%ab%81";
break;
case 56555:
conv_str += "%e6%a8%a3";
break;
case 56556:
conv_str += "%e6%a8%93";
break;
case 56557:
conv_str += "%e6%a9%84";
break;
case 56558:
conv_str += "%e6%a8%8c";
break;
case 56559:
conv_str += "%e6%a9%b2";
break;
case 56560:
conv_str += "%e6%a8%b6";
break;
case 56561:
conv_str += "%e6%a9%b8";
break;
case 56562:
conv_str += "%e6%a9%87";
break;
case 56563:
conv_str += "%e6%a9%a2";
break;
case 56564:
conv_str += "%e6%a9%99";
break;
case 56565:
conv_str += "%e6%a9%a6";
break;
case 56566:
conv_str += "%e6%a9%88";
break;
case 56567:
conv_str += "%e6%a8%b8";
break;
case 56568:
conv_str += "%e6%a8%a2";
break;
case 56569:
conv_str += "%e6%aa%90";
break;
case 56570:
conv_str += "%e6%aa%8d";
break;
case 56571:
conv_str += "%e6%aa%a0";
break;
case 56572:
conv_str += "%e6%aa%84";
break;
case 56573:
conv_str += "%e6%aa%a2";
break;
case 56574:
conv_str += "%e6%aa%a3";
break;
case 56737:
conv_str += "%e6%aa%97";
break;
case 56738:
conv_str += "%e8%98%97";
break;
case 56739:
conv_str += "%e6%aa%bb";
break;
case 56740:
conv_str += "%e6%ab%83";
break;
case 56741:
conv_str += "%e6%ab%82";
break;
case 56742:
conv_str += "%e6%aa%b8";
break;
case 56743:
conv_str += "%e6%aa%b3";
break;
case 56744:
conv_str += "%e6%aa%ac";
break;
case 56745:
conv_str += "%e6%ab%9e";
break;
case 56746:
conv_str += "%e6%ab%91";
break;
case 56747:
conv_str += "%e6%ab%9f";
break;
case 56748:
conv_str += "%e6%aa%aa";
break;
case 56749:
conv_str += "%e6%ab%9a";
break;
case 56750:
conv_str += "%e6%ab%aa";
break;
case 56751:
conv_str += "%e6%ab%bb";
break;
case 56752:
conv_str += "%e6%ac%85";
break;
case 56753:
conv_str += "%e8%98%96";
break;
case 56754:
conv_str += "%e6%ab%ba";
break;
case 56755:
conv_str += "%e6%ac%92";
break;
case 56756:
conv_str += "%e6%ac%96";
break;
case 56757:
conv_str += "%e9%ac%b1";
break;
case 56758:
conv_str += "%e6%ac%9f";
break;
case 56759:
conv_str += "%e6%ac%b8";
break;
case 56760:
conv_str += "%e6%ac%b7";
break;
case 56761:
conv_str += "%e7%9b%9c";
break;
case 56762:
conv_str += "%e6%ac%b9";
break;
case 56763:
conv_str += "%e9%a3%ae";
break;
case 56764:
conv_str += "%e6%ad%87";
break;
case 56765:
conv_str += "%e6%ad%83";
break;
case 56766:
conv_str += "%e6%ad%89";
break;
case 56767:
conv_str += "%e6%ad%90";
break;
case 56768:
conv_str += "%e6%ad%99";
break;
case 56769:
conv_str += "%e6%ad%94";
break;
case 56770:
conv_str += "%e6%ad%9b";
break;
case 56771:
conv_str += "%e6%ad%9f";
break;
case 56772:
conv_str += "%e6%ad%a1";
break;
case 56773:
conv_str += "%e6%ad%b8";
break;
case 56774:
conv_str += "%e6%ad%b9";
break;
case 56775:
conv_str += "%e6%ad%bf";
break;
case 56776:
conv_str += "%e6%ae%80";
break;
case 56777:
conv_str += "%e6%ae%84";
break;
case 56778:
conv_str += "%e6%ae%83";
break;
case 56779:
conv_str += "%e6%ae%8d";
break;
case 56780:
conv_str += "%e6%ae%98";
break;
case 56781:
conv_str += "%e6%ae%95";
break;
case 56782:
conv_str += "%e6%ae%9e";
break;
case 56783:
conv_str += "%e6%ae%a4";
break;
case 56784:
conv_str += "%e6%ae%aa";
break;
case 56785:
conv_str += "%e6%ae%ab";
break;
case 56786:
conv_str += "%e6%ae%af";
break;
case 56787:
conv_str += "%e6%ae%b2";
break;
case 56788:
conv_str += "%e6%ae%b1";
break;
case 56789:
conv_str += "%e6%ae%b3";
break;
case 56790:
conv_str += "%e6%ae%b7";
break;
case 56791:
conv_str += "%e6%ae%bc";
break;
case 56792:
conv_str += "%e6%af%86";
break;
case 56793:
conv_str += "%e6%af%8b";
break;
case 56794:
conv_str += "%e6%af%93";
break;
case 56795:
conv_str += "%e6%af%9f";
break;
case 56796:
conv_str += "%e6%af%ac";
break;
case 56797:
conv_str += "%e6%af%ab";
break;
case 56798:
conv_str += "%e6%af%b3";
break;
case 56799:
conv_str += "%e6%af%af";
break;
case 56800:
conv_str += "%e9%ba%be";
break;
case 56801:
conv_str += "%e6%b0%88";
break;
case 56802:
conv_str += "%e6%b0%93";
break;
case 56803:
conv_str += "%e6%b0%94";
break;
case 56804:
conv_str += "%e6%b0%9b";
break;
case 56805:
conv_str += "%e6%b0%a4";
break;
case 56806:
conv_str += "%e6%b0%a3";
break;
case 56807:
conv_str += "%e6%b1%9e";
break;
case 56808:
conv_str += "%e6%b1%95";
break;
case 56809:
conv_str += "%e6%b1%a2";
break;
case 56810:
conv_str += "%e6%b1%aa";
break;
case 56811:
conv_str += "%e6%b2%82";
break;
case 56812:
conv_str += "%e6%b2%8d";
break;
case 56813:
conv_str += "%e6%b2%9a";
break;
case 56814:
conv_str += "%e6%b2%81";
break;
case 56815:
conv_str += "%e6%b2%9b";
break;
case 56816:
conv_str += "%e6%b1%be";
break;
case 56817:
conv_str += "%e6%b1%a8";
break;
case 56818:
conv_str += "%e6%b1%b3";
break;
case 56819:
conv_str += "%e6%b2%92";
break;
case 56820:
conv_str += "%e6%b2%90";
break;
case 56821:
conv_str += "%e6%b3%84";
break;
case 56822:
conv_str += "%e6%b3%b1";
break;
case 56823:
conv_str += "%e6%b3%93";
break;
case 56824:
conv_str += "%e6%b2%bd";
break;
case 56825:
conv_str += "%e6%b3%97";
break;
case 56826:
conv_str += "%e6%b3%85";
break;
case 56827:
conv_str += "%e6%b3%9d";
break;
case 56828:
conv_str += "%e6%b2%ae";
break;
case 56829:
conv_str += "%e6%b2%b1";
break;
case 56830:
conv_str += "%e6%b2%be";
break;
case 56993:
conv_str += "%e6%b2%ba";
break;
case 56994:
conv_str += "%e6%b3%9b";
break;
case 56995:
conv_str += "%e6%b3%af";
break;
case 56996:
conv_str += "%e6%b3%99";
break;
case 56997:
conv_str += "%e6%b3%aa";
break;
case 56998:
conv_str += "%e6%b4%9f";
break;
case 56999:
conv_str += "%e8%a1%8d";
break;
case 57000:
conv_str += "%e6%b4%b6";
break;
case 57001:
conv_str += "%e6%b4%ab";
break;
case 57002:
conv_str += "%e6%b4%bd";
break;
case 57003:
conv_str += "%e6%b4%b8";
break;
case 57004:
conv_str += "%e6%b4%99";
break;
case 57005:
conv_str += "%e6%b4%b5";
break;
case 57006:
conv_str += "%e6%b4%b3";
break;
case 57007:
conv_str += "%e6%b4%92";
break;
case 57008:
conv_str += "%e6%b4%8c";
break;
case 57009:
conv_str += "%e6%b5%a3";
break;
case 57010:
conv_str += "%e6%b6%93";
break;
case 57011:
conv_str += "%e6%b5%a4";
break;
case 57012:
conv_str += "%e6%b5%9a";
break;
case 57013:
conv_str += "%e6%b5%b9";
break;
case 57014:
conv_str += "%e6%b5%99";
break;
case 57015:
conv_str += "%e6%b6%8e";
break;
case 57016:
conv_str += "%e6%b6%95";
break;
case 57017:
conv_str += "%e6%bf%a4";
break;
case 57018:
conv_str += "%e6%b6%85";
break;
case 57019:
conv_str += "%e6%b7%b9";
break;
case 57020:
conv_str += "%e6%b8%95";
break;
case 57021:
conv_str += "%e6%b8%8a";
break;
case 57022:
conv_str += "%e6%b6%b5";
break;
case 57023:
conv_str += "%e6%b7%87";
break;
case 57024:
conv_str += "%e6%b7%a6";
break;
case 57025:
conv_str += "%e6%b6%b8";
break;
case 57026:
conv_str += "%e6%b7%86";
break;
case 57027:
conv_str += "%e6%b7%ac";
break;
case 57028:
conv_str += "%e6%b7%9e";
break;
case 57029:
conv_str += "%e6%b7%8c";
break;
case 57030:
conv_str += "%e6%b7%a8";
break;
case 57031:
conv_str += "%e6%b7%92";
break;
case 57032:
conv_str += "%e6%b7%85";
break;
case 57033:
conv_str += "%e6%b7%ba";
break;
case 57034:
conv_str += "%e6%b7%99";
break;
case 57035:
conv_str += "%e6%b7%a4";
break;
case 57036:
conv_str += "%e6%b7%95";
break;
case 57037:
conv_str += "%e6%b7%aa";
break;
case 57038:
conv_str += "%e6%b7%ae";
break;
case 57039:
conv_str += "%e6%b8%ad";
break;
case 57040:
conv_str += "%e6%b9%ae";
break;
case 57041:
conv_str += "%e6%b8%ae";
break;
case 57042:
conv_str += "%e6%b8%99";
break;
case 57043:
conv_str += "%e6%b9%b2";
break;
case 57044:
conv_str += "%e6%b9%9f";
break;
case 57045:
conv_str += "%e6%b8%be";
break;
case 57046:
conv_str += "%e6%b8%a3";
break;
case 57047:
conv_str += "%e6%b9%ab";
break;
case 57048:
conv_str += "%e6%b8%ab";
break;
case 57049:
conv_str += "%e6%b9%b6";
break;
case 57050:
conv_str += "%e6%b9%8d";
break;
case 57051:
conv_str += "%e6%b8%9f";
break;
case 57052:
conv_str += "%e6%b9%83";
break;
case 57053:
conv_str += "%e6%b8%ba";
break;
case 57054:
conv_str += "%e6%b9%8e";
break;
case 57055:
conv_str += "%e6%b8%a4";
break;
case 57056:
conv_str += "%e6%bb%bf";
break;
case 57057:
conv_str += "%e6%b8%9d";
break;
case 57058:
conv_str += "%e6%b8%b8";
break;
case 57059:
conv_str += "%e6%ba%82";
break;
case 57060:
conv_str += "%e6%ba%aa";
break;
case 57061:
conv_str += "%e6%ba%98";
break;
case 57062:
conv_str += "%e6%bb%89";
break;
case 57063:
conv_str += "%e6%ba%b7";
break;
case 57064:
conv_str += "%e6%bb%93";
break;
case 57065:
conv_str += "%e6%ba%bd";
break;
case 57066:
conv_str += "%e6%ba%af";
break;
case 57067:
conv_str += "%e6%bb%84";
break;
case 57068:
conv_str += "%e6%ba%b2";
break;
case 57069:
conv_str += "%e6%bb%94";
break;
case 57070:
conv_str += "%e6%bb%95";
break;
case 57071:
conv_str += "%e6%ba%8f";
break;
case 57072:
conv_str += "%e6%ba%a5";
break;
case 57073:
conv_str += "%e6%bb%82";
break;
case 57074:
conv_str += "%e6%ba%9f";
break;
case 57075:
conv_str += "%e6%bd%81";
break;
case 57076:
conv_str += "%e6%bc%91";
break;
case 57077:
conv_str += "%e7%81%8c";
break;
case 57078:
conv_str += "%e6%bb%ac";
break;
case 57079:
conv_str += "%e6%bb%b8";
break;
case 57080:
conv_str += "%e6%bb%be";
break;
case 57081:
conv_str += "%e6%bc%bf";
break;
case 57082:
conv_str += "%e6%bb%b2";
break;
case 57083:
conv_str += "%e6%bc%b1";
break;
case 57084:
conv_str += "%e6%bb%af";
break;
case 57085:
conv_str += "%e6%bc%b2";
break;
case 57086:
conv_str += "%e6%bb%8c";
break;
case 57249:
conv_str += "%e6%bc%be";
break;
case 57250:
conv_str += "%e6%bc%93";
break;
case 57251:
conv_str += "%e6%bb%b7";
break;
case 57252:
conv_str += "%e6%be%86";
break;
case 57253:
conv_str += "%e6%bd%ba";
break;
case 57254:
conv_str += "%e6%bd%b8";
break;
case 57255:
conv_str += "%e6%be%81";
break;
case 57256:
conv_str += "%e6%be%80";
break;
case 57257:
conv_str += "%e6%bd%af";
break;
case 57258:
conv_str += "%e6%bd%9b";
break;
case 57259:
conv_str += "%e6%bf%b3";
break;
case 57260:
conv_str += "%e6%bd%ad";
break;
case 57261:
conv_str += "%e6%be%82";
break;
case 57262:
conv_str += "%e6%bd%bc";
break;
case 57263:
conv_str += "%e6%bd%98";
break;
case 57264:
conv_str += "%e6%be%8e";
break;
case 57265:
conv_str += "%e6%be%91";
break;
case 57266:
conv_str += "%e6%bf%82";
break;
case 57267:
conv_str += "%e6%bd%a6";
break;
case 57268:
conv_str += "%e6%be%b3";
break;
case 57269:
conv_str += "%e6%be%a3";
break;
case 57270:
conv_str += "%e6%be%a1";
break;
case 57271:
conv_str += "%e6%be%a4";
break;
case 57272:
conv_str += "%e6%be%b9";
break;
case 57273:
conv_str += "%e6%bf%86";
break;
case 57274:
conv_str += "%e6%be%aa";
break;
case 57275:
conv_str += "%e6%bf%9f";
break;
case 57276:
conv_str += "%e6%bf%95";
break;
case 57277:
conv_str += "%e6%bf%ac";
break;
case 57278:
conv_str += "%e6%bf%94";
break;
case 57279:
conv_str += "%e6%bf%98";
break;
case 57280:
conv_str += "%e6%bf%b1";
break;
case 57281:
conv_str += "%e6%bf%ae";
break;
case 57282:
conv_str += "%e6%bf%9b";
break;
case 57283:
conv_str += "%e7%80%89";
break;
case 57284:
conv_str += "%e7%80%8b";
break;
case 57285:
conv_str += "%e6%bf%ba";
break;
case 57286:
conv_str += "%e7%80%91";
break;
case 57287:
conv_str += "%e7%80%81";
break;
case 57288:
conv_str += "%e7%80%8f";
break;
case 57289:
conv_str += "%e6%bf%be";
break;
case 57290:
conv_str += "%e7%80%9b";
break;
case 57291:
conv_str += "%e7%80%9a";
break;
case 57292:
conv_str += "%e6%bd%b4";
break;
case 57293:
conv_str += "%e7%80%9d";
break;
case 57294:
conv_str += "%e7%80%98";
break;
case 57295:
conv_str += "%e7%80%9f";
break;
case 57296:
conv_str += "%e7%80%b0";
break;
case 57297:
conv_str += "%e7%80%be";
break;
case 57298:
conv_str += "%e7%80%b2";
break;
case 57299:
conv_str += "%e7%81%91";
break;
case 57300:
conv_str += "%e7%81%a3";
break;
case 57301:
conv_str += "%e7%82%99";
break;
case 57302:
conv_str += "%e7%82%92";
break;
case 57303:
conv_str += "%e7%82%af";
break;
case 57304:
conv_str += "%e7%83%b1";
break;
case 57305:
conv_str += "%e7%82%ac";
break;
case 57306:
conv_str += "%e7%82%b8";
break;
case 57307:
conv_str += "%e7%82%b3";
break;
case 57308:
conv_str += "%e7%82%ae";
break;
case 57309:
conv_str += "%e7%83%9f";
break;
case 57310:
conv_str += "%e7%83%8b";
break;
case 57311:
conv_str += "%e7%83%9d";
break;
case 57312:
conv_str += "%e7%83%99";
break;
case 57313:
conv_str += "%e7%84%89";
break;
case 57314:
conv_str += "%e7%83%bd";
break;
case 57315:
conv_str += "%e7%84%9c";
break;
case 57316:
conv_str += "%e7%84%99";
break;
case 57317:
conv_str += "%e7%85%a5";
break;
case 57318:
conv_str += "%e7%85%95";
break;
case 57319:
conv_str += "%e7%86%88";
break;
case 57320:
conv_str += "%e7%85%a6";
break;
case 57321:
conv_str += "%e7%85%a2";
break;
case 57322:
conv_str += "%e7%85%8c";
break;
case 57323:
conv_str += "%e7%85%96";
break;
case 57324:
conv_str += "%e7%85%ac";
break;
case 57325:
conv_str += "%e7%86%8f";
break;
case 57326:
conv_str += "%e7%87%bb";
break;
case 57327:
conv_str += "%e7%86%84";
break;
case 57328:
conv_str += "%e7%86%95";
break;
case 57329:
conv_str += "%e7%86%a8";
break;
case 57330:
conv_str += "%e7%86%ac";
break;
case 57331:
conv_str += "%e7%87%97";
break;
case 57332:
conv_str += "%e7%86%b9";
break;
case 57333:
conv_str += "%e7%86%be";
break;
case 57334:
conv_str += "%e7%87%92";
break;
case 57335:
conv_str += "%e7%87%89";
break;
case 57336:
conv_str += "%e7%87%94";
break;
case 57337:
conv_str += "%e7%87%8e";
break;
case 57338:
conv_str += "%e7%87%a0";
break;
case 57339:
conv_str += "%e7%87%ac";
break;
case 57340:
conv_str += "%e7%87%a7";
break;
case 57341:
conv_str += "%e7%87%b5";
break;
case 57342:
conv_str += "%e7%87%bc";
break;
case 57505:
conv_str += "%e7%87%b9";
break;
case 57506:
conv_str += "%e7%87%bf";
break;
case 57507:
conv_str += "%e7%88%8d";
break;
case 57508:
conv_str += "%e7%88%90";
break;
case 57509:
conv_str += "%e7%88%9b";
break;
case 57510:
conv_str += "%e7%88%a8";
break;
case 57511:
conv_str += "%e7%88%ad";
break;
case 57512:
conv_str += "%e7%88%ac";
break;
case 57513:
conv_str += "%e7%88%b0";
break;
case 57514:
conv_str += "%e7%88%b2";
break;
case 57515:
conv_str += "%e7%88%bb";
break;
case 57516:
conv_str += "%e7%88%bc";
break;
case 57517:
conv_str += "%e7%88%bf";
break;
case 57518:
conv_str += "%e7%89%80";
break;
case 57519:
conv_str += "%e7%89%86";
break;
case 57520:
conv_str += "%e7%89%8b";
break;
case 57521:
conv_str += "%e7%89%98";
break;
case 57522:
conv_str += "%e7%89%b4";
break;
case 57523:
conv_str += "%e7%89%be";
break;
case 57524:
conv_str += "%e7%8a%82";
break;
case 57525:
conv_str += "%e7%8a%81";
break;
case 57526:
conv_str += "%e7%8a%87";
break;
case 57527:
conv_str += "%e7%8a%92";
break;
case 57528:
conv_str += "%e7%8a%96";
break;
case 57529:
conv_str += "%e7%8a%a2";
break;
case 57530:
conv_str += "%e7%8a%a7";
break;
case 57531:
conv_str += "%e7%8a%b9";
break;
case 57532:
conv_str += "%e7%8a%b2";
break;
case 57533:
conv_str += "%e7%8b%83";
break;
case 57534:
conv_str += "%e7%8b%86";
break;
case 57535:
conv_str += "%e7%8b%84";
break;
case 57536:
conv_str += "%e7%8b%8e";
break;
case 57537:
conv_str += "%e7%8b%92";
break;
case 57538:
conv_str += "%e7%8b%a2";
break;
case 57539:
conv_str += "%e7%8b%a0";
break;
case 57540:
conv_str += "%e7%8b%a1";
break;
case 57541:
conv_str += "%e7%8b%b9";
break;
case 57542:
conv_str += "%e7%8b%b7";
break;
case 57543:
conv_str += "%e5%80%8f";
break;
case 57544:
conv_str += "%e7%8c%97";
break;
case 57545:
conv_str += "%e7%8c%8a";
break;
case 57546:
conv_str += "%e7%8c%9c";
break;
case 57547:
conv_str += "%e7%8c%96";
break;
case 57548:
conv_str += "%e7%8c%9d";
break;
case 57549:
conv_str += "%e7%8c%b4";
break;
case 57550:
conv_str += "%e7%8c%af";
break;
case 57551:
conv_str += "%e7%8c%a9";
break;
case 57552:
conv_str += "%e7%8c%a5";
break;
case 57553:
conv_str += "%e7%8c%be";
break;
case 57554:
conv_str += "%e7%8d%8e";
break;
case 57555:
conv_str += "%e7%8d%8f";
break;
case 57556:
conv_str += "%e9%bb%98";
break;
case 57557:
conv_str += "%e7%8d%97";
break;
case 57558:
conv_str += "%e7%8d%aa";
break;
case 57559:
conv_str += "%e7%8d%a8";
break;
case 57560:
conv_str += "%e7%8d%b0";
break;
case 57561:
conv_str += "%e7%8d%b8";
break;
case 57562:
conv_str += "%e7%8d%b5";
break;
case 57563:
conv_str += "%e7%8d%bb";
break;
case 57564:
conv_str += "%e7%8d%ba";
break;
case 57565:
conv_str += "%e7%8f%88";
break;
case 57566:
conv_str += "%e7%8e%b3";
break;
case 57567:
conv_str += "%e7%8f%8e";
break;
case 57568:
conv_str += "%e7%8e%bb";
break;
case 57569:
conv_str += "%e7%8f%80";
break;
case 57570:
conv_str += "%e7%8f%a5";
break;
case 57571:
conv_str += "%e7%8f%ae";
break;
case 57572:
conv_str += "%e7%8f%9e";
break;
case 57573:
conv_str += "%e7%92%a2";
break;
case 57574:
conv_str += "%e7%90%85";
break;
case 57575:
conv_str += "%e7%91%af";
break;
case 57576:
conv_str += "%e7%90%a5";
break;
case 57577:
conv_str += "%e7%8f%b8";
break;
case 57578:
conv_str += "%e7%90%b2";
break;
case 57579:
conv_str += "%e7%90%ba";
break;
case 57580:
conv_str += "%e7%91%95";
break;
case 57581:
conv_str += "%e7%90%bf";
break;
case 57582:
conv_str += "%e7%91%9f";
break;
case 57583:
conv_str += "%e7%91%99";
break;
case 57584:
conv_str += "%e7%91%81";
break;
case 57585:
conv_str += "%e7%91%9c";
break;
case 57586:
conv_str += "%e7%91%a9";
break;
case 57587:
conv_str += "%e7%91%b0";
break;
case 57588:
conv_str += "%e7%91%a3";
break;
case 57589:
conv_str += "%e7%91%aa";
break;
case 57590:
conv_str += "%e7%91%b6";
break;
case 57591:
conv_str += "%e7%91%be";
break;
case 57592:
conv_str += "%e7%92%8b";
break;
case 57593:
conv_str += "%e7%92%9e";
break;
case 57594:
conv_str += "%e7%92%a7";
break;
case 57595:
conv_str += "%e7%93%8a";
break;
case 57596:
conv_str += "%e7%93%8f";
break;
case 57597:
conv_str += "%e7%93%94";
break;
case 57598:
conv_str += "%e7%8f%b1";
break;
case 57761:
conv_str += "%e7%93%a0";
break;
case 57762:
conv_str += "%e7%93%a3";
break;
case 57763:
conv_str += "%e7%93%a7";
break;
case 57764:
conv_str += "%e7%93%a9";
break;
case 57765:
conv_str += "%e7%93%ae";
break;
case 57766:
conv_str += "%e7%93%b2";
break;
case 57767:
conv_str += "%e7%93%b0";
break;
case 57768:
conv_str += "%e7%93%b1";
break;
case 57769:
conv_str += "%e7%93%b8";
break;
case 57770:
conv_str += "%e7%93%b7";
break;
case 57771:
conv_str += "%e7%94%84";
break;
case 57772:
conv_str += "%e7%94%83";
break;
case 57773:
conv_str += "%e7%94%85";
break;
case 57774:
conv_str += "%e7%94%8c";
break;
case 57775:
conv_str += "%e7%94%8e";
break;
case 57776:
conv_str += "%e7%94%8d";
break;
case 57777:
conv_str += "%e7%94%95";
break;
case 57778:
conv_str += "%e7%94%93";
break;
case 57779:
conv_str += "%e7%94%9e";
break;
case 57780:
conv_str += "%e7%94%a6";
break;
case 57781:
conv_str += "%e7%94%ac";
break;
case 57782:
conv_str += "%e7%94%bc";
break;
case 57783:
conv_str += "%e7%95%84";
break;
case 57784:
conv_str += "%e7%95%8d";
break;
case 57785:
conv_str += "%e7%95%8a";
break;
case 57786:
conv_str += "%e7%95%89";
break;
case 57787:
conv_str += "%e7%95%9b";
break;
case 57788:
conv_str += "%e7%95%86";
break;
case 57789:
conv_str += "%e7%95%9a";
break;
case 57790:
conv_str += "%e7%95%a9";
break;
case 57791:
conv_str += "%e7%95%a4";
break;
case 57792:
conv_str += "%e7%95%a7";
break;
case 57793:
conv_str += "%e7%95%ab";
break;
case 57794:
conv_str += "%e7%95%ad";
break;
case 57795:
conv_str += "%e7%95%b8";
break;
case 57796:
conv_str += "%e7%95%b6";
break;
case 57797:
conv_str += "%e7%96%86";
break;
case 57798:
conv_str += "%e7%96%87";
break;
case 57799:
conv_str += "%e7%95%b4";
break;
case 57800:
conv_str += "%e7%96%8a";
break;
case 57801:
conv_str += "%e7%96%89";
break;
case 57802:
conv_str += "%e7%96%82";
break;
case 57803:
conv_str += "%e7%96%94";
break;
case 57804:
conv_str += "%e7%96%9a";
break;
case 57805:
conv_str += "%e7%96%9d";
break;
case 57806:
conv_str += "%e7%96%a5";
break;
case 57807:
conv_str += "%e7%96%a3";
break;
case 57808:
conv_str += "%e7%97%82";
break;
case 57809:
conv_str += "%e7%96%b3";
break;
case 57810:
conv_str += "%e7%97%83";
break;
case 57811:
conv_str += "%e7%96%b5";
break;
case 57812:
conv_str += "%e7%96%bd";
break;
case 57813:
conv_str += "%e7%96%b8";
break;
case 57814:
conv_str += "%e7%96%bc";
break;
case 57815:
conv_str += "%e7%96%b1";
break;
case 57816:
conv_str += "%e7%97%8d";
break;
case 57817:
conv_str += "%e7%97%8a";
break;
case 57818:
conv_str += "%e7%97%92";
break;
case 57819:
conv_str += "%e7%97%99";
break;
case 57820:
conv_str += "%e7%97%a3";
break;
case 57821:
conv_str += "%e7%97%9e";
break;
case 57822:
conv_str += "%e7%97%be";
break;
case 57823:
conv_str += "%e7%97%bf";
break;
case 57824:
conv_str += "%e7%97%bc";
break;
case 57825:
conv_str += "%e7%98%81";
break;
case 57826:
conv_str += "%e7%97%b0";
break;
case 57827:
conv_str += "%e7%97%ba";
break;
case 57828:
conv_str += "%e7%97%b2";
break;
case 57829:
conv_str += "%e7%97%b3";
break;
case 57830:
conv_str += "%e7%98%8b";
break;
case 57831:
conv_str += "%e7%98%8d";
break;
case 57832:
conv_str += "%e7%98%89";
break;
case 57833:
conv_str += "%e7%98%9f";
break;
case 57834:
conv_str += "%e7%98%a7";
break;
case 57835:
conv_str += "%e7%98%a0";
break;
case 57836:
conv_str += "%e7%98%a1";
break;
case 57837:
conv_str += "%e7%98%a2";
break;
case 57838:
conv_str += "%e7%98%a4";
break;
case 57839:
conv_str += "%e7%98%b4";
break;
case 57840:
conv_str += "%e7%98%b0";
break;
case 57841:
conv_str += "%e7%98%bb";
break;
case 57842:
conv_str += "%e7%99%87";
break;
case 57843:
conv_str += "%e7%99%88";
break;
case 57844:
conv_str += "%e7%99%86";
break;
case 57845:
conv_str += "%e7%99%9c";
break;
case 57846:
conv_str += "%e7%99%98";
break;
case 57847:
conv_str += "%e7%99%a1";
break;
case 57848:
conv_str += "%e7%99%a2";
break;
case 57849:
conv_str += "%e7%99%a8";
break;
case 57850:
conv_str += "%e7%99%a9";
break;
case 57851:
conv_str += "%e7%99%aa";
break;
case 57852:
conv_str += "%e7%99%a7";
break;
case 57853:
conv_str += "%e7%99%ac";
break;
case 57854:
conv_str += "%e7%99%b0";
break;
case 58017:
conv_str += "%e7%99%b2";
break;
case 58018:
conv_str += "%e7%99%b6";
break;
case 58019:
conv_str += "%e7%99%b8";
break;
case 58020:
conv_str += "%e7%99%bc";
break;
case 58021:
conv_str += "%e7%9a%80";
break;
case 58022:
conv_str += "%e7%9a%83";
break;
case 58023:
conv_str += "%e7%9a%88";
break;
case 58024:
conv_str += "%e7%9a%8b";
break;
case 58025:
conv_str += "%e7%9a%8e";
break;
case 58026:
conv_str += "%e7%9a%96";
break;
case 58027:
conv_str += "%e7%9a%93";
break;
case 58028:
conv_str += "%e7%9a%99";
break;
case 58029:
conv_str += "%e7%9a%9a";
break;
case 58030:
conv_str += "%e7%9a%b0";
break;
case 58031:
conv_str += "%e7%9a%b4";
break;
case 58032:
conv_str += "%e7%9a%b8";
break;
case 58033:
conv_str += "%e7%9a%b9";
break;
case 58034:
conv_str += "%e7%9a%ba";
break;
case 58035:
conv_str += "%e7%9b%82";
break;
case 58036:
conv_str += "%e7%9b%8d";
break;
case 58037:
conv_str += "%e7%9b%96";
break;
case 58038:
conv_str += "%e7%9b%92";
break;
case 58039:
conv_str += "%e7%9b%9e";
break;
case 58040:
conv_str += "%e7%9b%a1";
break;
case 58041:
conv_str += "%e7%9b%a5";
break;
case 58042:
conv_str += "%e7%9b%a7";
break;
case 58043:
conv_str += "%e7%9b%aa";
break;
case 58044:
conv_str += "%e8%98%af";
break;
case 58045:
conv_str += "%e7%9b%bb";
break;
case 58046:
conv_str += "%e7%9c%88";
break;
case 58047:
conv_str += "%e7%9c%87";
break;
case 58048:
conv_str += "%e7%9c%84";
break;
case 58049:
conv_str += "%e7%9c%a9";
break;
case 58050:
conv_str += "%e7%9c%a4";
break;
case 58051:
conv_str += "%e7%9c%9e";
break;
case 58052:
conv_str += "%e7%9c%a5";
break;
case 58053:
conv_str += "%e7%9c%a6";
break;
case 58054:
conv_str += "%e7%9c%9b";
break;
case 58055:
conv_str += "%e7%9c%b7";
break;
case 58056:
conv_str += "%e7%9c%b8";
break;
case 58057:
conv_str += "%e7%9d%87";
break;
case 58058:
conv_str += "%e7%9d%9a";
break;
case 58059:
conv_str += "%e7%9d%a8";
break;
case 58060:
conv_str += "%e7%9d%ab";
break;
case 58061:
conv_str += "%e7%9d%9b";
break;
case 58062:
conv_str += "%e7%9d%a5";
break;
case 58063:
conv_str += "%e7%9d%bf";
break;
case 58064:
conv_str += "%e7%9d%be";
break;
case 58065:
conv_str += "%e7%9d%b9";
break;
case 58066:
conv_str += "%e7%9e%8e";
break;
case 58067:
conv_str += "%e7%9e%8b";
break;
case 58068:
conv_str += "%e7%9e%91";
break;
case 58069:
conv_str += "%e7%9e%a0";
break;
case 58070:
conv_str += "%e7%9e%9e";
break;
case 58071:
conv_str += "%e7%9e%b0";
break;
case 58072:
conv_str += "%e7%9e%b6";
break;
case 58073:
conv_str += "%e7%9e%b9";
break;
case 58074:
conv_str += "%e7%9e%bf";
break;
case 58075:
conv_str += "%e7%9e%bc";
break;
case 58076:
conv_str += "%e7%9e%bd";
break;
case 58077:
conv_str += "%e7%9e%bb";
break;
case 58078:
conv_str += "%e7%9f%87";
break;
case 58079:
conv_str += "%e7%9f%8d";
break;
case 58080:
conv_str += "%e7%9f%97";
break;
case 58081:
conv_str += "%e7%9f%9a";
break;
case 58082:
conv_str += "%e7%9f%9c";
break;
case 58083:
conv_str += "%e7%9f%a3";
break;
case 58084:
conv_str += "%e7%9f%ae";
break;
case 58085:
conv_str += "%e7%9f%bc";
break;
case 58086:
conv_str += "%e7%a0%8c";
break;
case 58087:
conv_str += "%e7%a0%92";
break;
case 58088:
conv_str += "%e7%a4%a6";
break;
case 58089:
conv_str += "%e7%a0%a0";
break;
case 58090:
conv_str += "%e7%a4%aa";
break;
case 58091:
conv_str += "%e7%a1%85";
break;
case 58092:
conv_str += "%e7%a2%8e";
break;
case 58093:
conv_str += "%e7%a1%b4";
break;
case 58094:
conv_str += "%e7%a2%86";
break;
case 58095:
conv_str += "%e7%a1%bc";
break;
case 58096:
conv_str += "%e7%a2%9a";
break;
case 58097:
conv_str += "%e7%a2%8c";
break;
case 58098:
conv_str += "%e7%a2%a3";
break;
case 58099:
conv_str += "%e7%a2%b5";
break;
case 58100:
conv_str += "%e7%a2%aa";
break;
case 58101:
conv_str += "%e7%a2%af";
break;
case 58102:
conv_str += "%e7%a3%91";
break;
case 58103:
conv_str += "%e7%a3%86";
break;
case 58104:
conv_str += "%e7%a3%8b";
break;
case 58105:
conv_str += "%e7%a3%94";
break;
case 58106:
conv_str += "%e7%a2%be";
break;
case 58107:
conv_str += "%e7%a2%bc";
break;
case 58108:
conv_str += "%e7%a3%85";
break;
case 58109:
conv_str += "%e7%a3%8a";
break;
case 58110:
conv_str += "%e7%a3%ac";
break;
case 58273:
conv_str += "%e7%a3%a7";
break;
case 58274:
conv_str += "%e7%a3%9a";
break;
case 58275:
conv_str += "%e7%a3%bd";
break;
case 58276:
conv_str += "%e7%a3%b4";
break;
case 58277:
conv_str += "%e7%a4%87";
break;
case 58278:
conv_str += "%e7%a4%92";
break;
case 58279:
conv_str += "%e7%a4%91";
break;
case 58280:
conv_str += "%e7%a4%99";
break;
case 58281:
conv_str += "%e7%a4%ac";
break;
case 58282:
conv_str += "%e7%a4%ab";
break;
case 58283:
conv_str += "%e7%a5%80";
break;
case 58284:
conv_str += "%e7%a5%a0";
break;
case 58285:
conv_str += "%e7%a5%97";
break;
case 58286:
conv_str += "%e7%a5%9f";
break;
case 58287:
conv_str += "%e7%a5%9a";
break;
case 58288:
conv_str += "%e7%a5%95";
break;
case 58289:
conv_str += "%e7%a5%93";
break;
case 58290:
conv_str += "%e7%a5%ba";
break;
case 58291:
conv_str += "%e7%a5%bf";
break;
case 58292:
conv_str += "%e7%a6%8a";
break;
case 58293:
conv_str += "%e7%a6%9d";
break;
case 58294:
conv_str += "%e7%a6%a7";
break;
case 58295:
conv_str += "%e9%bd%8b";
break;
case 58296:
conv_str += "%e7%a6%aa";
break;
case 58297:
conv_str += "%e7%a6%ae";
break;
case 58298:
conv_str += "%e7%a6%b3";
break;
case 58299:
conv_str += "%e7%a6%b9";
break;
case 58300:
conv_str += "%e7%a6%ba";
break;
case 58301:
conv_str += "%e7%a7%89";
break;
case 58302:
conv_str += "%e7%a7%95";
break;
case 58303:
conv_str += "%e7%a7%a7";
break;
case 58304:
conv_str += "%e7%a7%ac";
break;
case 58305:
conv_str += "%e7%a7%a1";
break;
case 58306:
conv_str += "%e7%a7%a3";
break;
case 58307:
conv_str += "%e7%a8%88";
break;
case 58308:
conv_str += "%e7%a8%8d";
break;
case 58309:
conv_str += "%e7%a8%98";
break;
case 58310:
conv_str += "%e7%a8%99";
break;
case 58311:
conv_str += "%e7%a8%a0";
break;
case 58312:
conv_str += "%e7%a8%9f";
break;
case 58313:
conv_str += "%e7%a6%80";
break;
case 58314:
conv_str += "%e7%a8%b1";
break;
case 58315:
conv_str += "%e7%a8%bb";
break;
case 58316:
conv_str += "%e7%a8%be";
break;
case 58317:
conv_str += "%e7%a8%b7";
break;
case 58318:
conv_str += "%e7%a9%83";
break;
case 58319:
conv_str += "%e7%a9%97";
break;
case 58320:
conv_str += "%e7%a9%89";
break;
case 58321:
conv_str += "%e7%a9%a1";
break;
case 58322:
conv_str += "%e7%a9%a2";
break;
case 58323:
conv_str += "%e7%a9%a9";
break;
case 58324:
conv_str += "%e9%be%9d";
break;
case 58325:
conv_str += "%e7%a9%b0";
break;
case 58326:
conv_str += "%e7%a9%b9";
break;
case 58327:
conv_str += "%e7%a9%bd";
break;
case 58328:
conv_str += "%e7%aa%88";
break;
case 58329:
conv_str += "%e7%aa%97";
break;
case 58330:
conv_str += "%e7%aa%95";
break;
case 58331:
conv_str += "%e7%aa%98";
break;
case 58332:
conv_str += "%e7%aa%96";
break;
case 58333:
conv_str += "%e7%aa%a9";
break;
case 58334:
conv_str += "%e7%ab%88";
break;
case 58335:
conv_str += "%e7%aa%b0";
break;
case 58336:
conv_str += "%e7%aa%b6";
break;
case 58337:
conv_str += "%e7%ab%85";
break;
case 58338:
conv_str += "%e7%ab%84";
break;
case 58339:
conv_str += "%e7%aa%bf";
break;
case 58340:
conv_str += "%e9%82%83";
break;
case 58341:
conv_str += "%e7%ab%87";
break;
case 58342:
conv_str += "%e7%ab%8a";
break;
case 58343:
conv_str += "%e7%ab%8d";
break;
case 58344:
conv_str += "%e7%ab%8f";
break;
case 58345:
conv_str += "%e7%ab%95";
break;
case 58346:
conv_str += "%e7%ab%93";
break;
case 58347:
conv_str += "%e7%ab%99";
break;
case 58348:
conv_str += "%e7%ab%9a";
break;
case 58349:
conv_str += "%e7%ab%9d";
break;
case 58350:
conv_str += "%e7%ab%a1";
break;
case 58351:
conv_str += "%e7%ab%a2";
break;
case 58352:
conv_str += "%e7%ab%a6";
break;
case 58353:
conv_str += "%e7%ab%ad";
break;
case 58354:
conv_str += "%e7%ab%b0";
break;
case 58355:
conv_str += "%e7%ac%82";
break;
case 58356:
conv_str += "%e7%ac%8f";
break;
case 58357:
conv_str += "%e7%ac%8a";
break;
case 58358:
conv_str += "%e7%ac%86";
break;
case 58359:
conv_str += "%e7%ac%b3";
break;
case 58360:
conv_str += "%e7%ac%98";
break;
case 58361:
conv_str += "%e7%ac%99";
break;
case 58362:
conv_str += "%e7%ac%9e";
break;
case 58363:
conv_str += "%e7%ac%b5";
break;
case 58364:
conv_str += "%e7%ac%a8";
break;
case 58365:
conv_str += "%e7%ac%b6";
break;
case 58366:
conv_str += "%e7%ad%90";
break;
case 58529:
conv_str += "%e7%ad%ba";
break;
case 58530:
conv_str += "%e7%ac%84";
break;
case 58531:
conv_str += "%e7%ad%8d";
break;
case 58532:
conv_str += "%e7%ac%8b";
break;
case 58533:
conv_str += "%e7%ad%8c";
break;
case 58534:
conv_str += "%e7%ad%85";
break;
case 58535:
conv_str += "%e7%ad%b5";
break;
case 58536:
conv_str += "%e7%ad%a5";
break;
case 58537:
conv_str += "%e7%ad%b4";
break;
case 58538:
conv_str += "%e7%ad%a7";
break;
case 58539:
conv_str += "%e7%ad%b0";
break;
case 58540:
conv_str += "%e7%ad%b1";
break;
case 58541:
conv_str += "%e7%ad%ac";
break;
case 58542:
conv_str += "%e7%ad%ae";
break;
case 58543:
conv_str += "%e7%ae%9d";
break;
case 58544:
conv_str += "%e7%ae%98";
break;
case 58545:
conv_str += "%e7%ae%9f";
break;
case 58546:
conv_str += "%e7%ae%8d";
break;
case 58547:
conv_str += "%e7%ae%9c";
break;
case 58548:
conv_str += "%e7%ae%9a";
break;
case 58549:
conv_str += "%e7%ae%8b";
break;
case 58550:
conv_str += "%e7%ae%92";
break;
case 58551:
conv_str += "%e7%ae%8f";
break;
case 58552:
conv_str += "%e7%ad%9d";
break;
case 58553:
conv_str += "%e7%ae%99";
break;
case 58554:
conv_str += "%e7%af%8b";
break;
case 58555:
conv_str += "%e7%af%81";
break;
case 58556:
conv_str += "%e7%af%8c";
break;
case 58557:
conv_str += "%e7%af%8f";
break;
case 58558:
conv_str += "%e7%ae%b4";
break;
case 58559:
conv_str += "%e7%af%86";
break;
case 58560:
conv_str += "%e7%af%9d";
break;
case 58561:
conv_str += "%e7%af%a9";
break;
case 58562:
conv_str += "%e7%b0%91";
break;
case 58563:
conv_str += "%e7%b0%94";
break;
case 58564:
conv_str += "%e7%af%a6";
break;
case 58565:
conv_str += "%e7%af%a5";
break;
case 58566:
conv_str += "%e7%b1%a0";
break;
case 58567:
conv_str += "%e7%b0%80";
break;
case 58568:
conv_str += "%e7%b0%87";
break;
case 58569:
conv_str += "%e7%b0%93";
break;
case 58570:
conv_str += "%e7%af%b3";
break;
case 58571:
conv_str += "%e7%af%b7";
break;
case 58572:
conv_str += "%e7%b0%97";
break;
case 58573:
conv_str += "%e7%b0%8d";
break;
case 58574:
conv_str += "%e7%af%b6";
break;
case 58575:
conv_str += "%e7%b0%a3";
break;
case 58576:
conv_str += "%e7%b0%a7";
break;
case 58577:
conv_str += "%e7%b0%aa";
break;
case 58578:
conv_str += "%e7%b0%9f";
break;
case 58579:
conv_str += "%e7%b0%b7";
break;
case 58580:
conv_str += "%e7%b0%ab";
break;
case 58581:
conv_str += "%e7%b0%bd";
break;
case 58582:
conv_str += "%e7%b1%8c";
break;
case 58583:
conv_str += "%e7%b1%83";
break;
case 58584:
conv_str += "%e7%b1%94";
break;
case 58585:
conv_str += "%e7%b1%8f";
break;
case 58586:
conv_str += "%e7%b1%80";
break;
case 58587:
conv_str += "%e7%b1%90";
break;
case 58588:
conv_str += "%e7%b1%98";
break;
case 58589:
conv_str += "%e7%b1%9f";
break;
case 58590:
conv_str += "%e7%b1%a4";
break;
case 58591:
conv_str += "%e7%b1%96";
break;
case 58592:
conv_str += "%e7%b1%a5";
break;
case 58593:
conv_str += "%e7%b1%ac";
break;
case 58594:
conv_str += "%e7%b1%b5";
break;
case 58595:
conv_str += "%e7%b2%83";
break;
case 58596:
conv_str += "%e7%b2%90";
break;
case 58597:
conv_str += "%e7%b2%a4";
break;
case 58598:
conv_str += "%e7%b2%ad";
break;
case 58599:
conv_str += "%e7%b2%a2";
break;
case 58600:
conv_str += "%e7%b2%ab";
break;
case 58601:
conv_str += "%e7%b2%a1";
break;
case 58602:
conv_str += "%e7%b2%a8";
break;
case 58603:
conv_str += "%e7%b2%b3";
break;
case 58604:
conv_str += "%e7%b2%b2";
break;
case 58605:
conv_str += "%e7%b2%b1";
break;
case 58606:
conv_str += "%e7%b2%ae";
break;
case 58607:
conv_str += "%e7%b2%b9";
break;
case 58608:
conv_str += "%e7%b2%bd";
break;
case 58609:
conv_str += "%e7%b3%80";
break;
case 58610:
conv_str += "%e7%b3%85";
break;
case 58611:
conv_str += "%e7%b3%82";
break;
case 58612:
conv_str += "%e7%b3%98";
break;
case 58613:
conv_str += "%e7%b3%92";
break;
case 58614:
conv_str += "%e7%b3%9c";
break;
case 58615:
conv_str += "%e7%b3%a2";
break;
case 58616:
conv_str += "%e9%ac%bb";
break;
case 58617:
conv_str += "%e7%b3%af";
break;
case 58618:
conv_str += "%e7%b3%b2";
break;
case 58619:
conv_str += "%e7%b3%b4";
break;
case 58620:
conv_str += "%e7%b3%b6";
break;
case 58621:
conv_str += "%e7%b3%ba";
break;
case 58622:
conv_str += "%e7%b4%86";
break;
case 58785:
conv_str += "%e7%b4%82";
break;
case 58786:
conv_str += "%e7%b4%9c";
break;
case 58787:
conv_str += "%e7%b4%95";
break;
case 58788:
conv_str += "%e7%b4%8a";
break;
case 58789:
conv_str += "%e7%b5%85";
break;
case 58790:
conv_str += "%e7%b5%8b";
break;
case 58791:
conv_str += "%e7%b4%ae";
break;
case 58792:
conv_str += "%e7%b4%b2";
break;
case 58793:
conv_str += "%e7%b4%bf";
break;
case 58794:
conv_str += "%e7%b4%b5";
break;
case 58795:
conv_str += "%e7%b5%86";
break;
case 58796:
conv_str += "%e7%b5%b3";
break;
case 58797:
conv_str += "%e7%b5%96";
break;
case 58798:
conv_str += "%e7%b5%8e";
break;
case 58799:
conv_str += "%e7%b5%b2";
break;
case 58800:
conv_str += "%e7%b5%a8";
break;
case 58801:
conv_str += "%e7%b5%ae";
break;
case 58802:
conv_str += "%e7%b5%8f";
break;
case 58803:
conv_str += "%e7%b5%a3";
break;
case 58804:
conv_str += "%e7%b6%93";
break;
case 58805:
conv_str += "%e7%b6%89";
break;
case 58806:
conv_str += "%e7%b5%9b";
break;
case 58807:
conv_str += "%e7%b6%8f";
break;
case 58808:
conv_str += "%e7%b5%bd";
break;
case 58809:
conv_str += "%e7%b6%9b";
break;
case 58810:
conv_str += "%e7%b6%ba";
break;
case 58811:
conv_str += "%e7%b6%ae";
break;
case 58812:
conv_str += "%e7%b6%a3";
break;
case 58813:
conv_str += "%e7%b6%b5";
break;
case 58814:
conv_str += "%e7%b7%87";
break;
case 58815:
conv_str += "%e7%b6%bd";
break;
case 58816:
conv_str += "%e7%b6%ab";
break;
case 58817:
conv_str += "%e7%b8%bd";
break;
case 58818:
conv_str += "%e7%b6%a2";
break;
case 58819:
conv_str += "%e7%b6%af";
break;
case 58820:
conv_str += "%e7%b7%9c";
break;
case 58821:
conv_str += "%e7%b6%b8";
break;
case 58822:
conv_str += "%e7%b6%9f";
break;
case 58823:
conv_str += "%e7%b6%b0";
break;
case 58824:
conv_str += "%e7%b7%98";
break;
case 58825:
conv_str += "%e7%b7%9d";
break;
case 58826:
conv_str += "%e7%b7%a4";
break;
case 58827:
conv_str += "%e7%b7%9e";
break;
case 58828:
conv_str += "%e7%b7%bb";
break;
case 58829:
conv_str += "%e7%b7%b2";
break;
case 58830:
conv_str += "%e7%b7%a1";
break;
case 58831:
conv_str += "%e7%b8%85";
break;
case 58832:
conv_str += "%e7%b8%8a";
break;
case 58833:
conv_str += "%e7%b8%a3";
break;
case 58834:
conv_str += "%e7%b8%a1";
break;
case 58835:
conv_str += "%e7%b8%92";
break;
case 58836:
conv_str += "%e7%b8%b1";
break;
case 58837:
conv_str += "%e7%b8%9f";
break;
case 58838:
conv_str += "%e7%b8%89";
break;
case 58839:
conv_str += "%e7%b8%8b";
break;
case 58840:
conv_str += "%e7%b8%a2";
break;
case 58841:
conv_str += "%e7%b9%86";
break;
case 58842:
conv_str += "%e7%b9%a6";
break;
case 58843:
conv_str += "%e7%b8%bb";
break;
case 58844:
conv_str += "%e7%b8%b5";
break;
case 58845:
conv_str += "%e7%b8%b9";
break;
case 58846:
conv_str += "%e7%b9%83";
break;
case 58847:
conv_str += "%e7%b8%b7";
break;
case 58848:
conv_str += "%e7%b8%b2";
break;
case 58849:
conv_str += "%e7%b8%ba";
break;
case 58850:
conv_str += "%e7%b9%a7";
break;
case 58851:
conv_str += "%e7%b9%9d";
break;
case 58852:
conv_str += "%e7%b9%96";
break;
case 58853:
conv_str += "%e7%b9%9e";
break;
case 58854:
conv_str += "%e7%b9%99";
break;
case 58855:
conv_str += "%e7%b9%9a";
break;
case 58856:
conv_str += "%e7%b9%b9";
break;
case 58857:
conv_str += "%e7%b9%aa";
break;
case 58858:
conv_str += "%e7%b9%a9";
break;
case 58859:
conv_str += "%e7%b9%bc";
break;
case 58860:
conv_str += "%e7%b9%bb";
break;
case 58861:
conv_str += "%e7%ba%83";
break;
case 58862:
conv_str += "%e7%b7%95";
break;
case 58863:
conv_str += "%e7%b9%bd";
break;
case 58864:
conv_str += "%e8%be%ae";
break;
case 58865:
conv_str += "%e7%b9%bf";
break;
case 58866:
conv_str += "%e7%ba%88";
break;
case 58867:
conv_str += "%e7%ba%89";
break;
case 58868:
conv_str += "%e7%ba%8c";
break;
case 58869:
conv_str += "%e7%ba%92";
break;
case 58870:
conv_str += "%e7%ba%90";
break;
case 58871:
conv_str += "%e7%ba%93";
break;
case 58872:
conv_str += "%e7%ba%94";
break;
case 58873:
conv_str += "%e7%ba%96";
break;
case 58874:
conv_str += "%e7%ba%8e";
break;
case 58875:
conv_str += "%e7%ba%9b";
break;
case 58876:
conv_str += "%e7%ba%9c";
break;
case 58877:
conv_str += "%e7%bc%b8";
break;
case 58878:
conv_str += "%e7%bc%ba";
break;
case 59041:
conv_str += "%e7%bd%85";
break;
case 59042:
conv_str += "%e7%bd%8c";
break;
case 59043:
conv_str += "%e7%bd%8d";
break;
case 59044:
conv_str += "%e7%bd%8e";
break;
case 59045:
conv_str += "%e7%bd%90";
break;
case 59046:
conv_str += "%e7%bd%91";
break;
case 59047:
conv_str += "%e7%bd%95";
break;
case 59048:
conv_str += "%e7%bd%94";
break;
case 59049:
conv_str += "%e7%bd%98";
break;
case 59050:
conv_str += "%e7%bd%9f";
break;
case 59051:
conv_str += "%e7%bd%a0";
break;
case 59052:
conv_str += "%e7%bd%a8";
break;
case 59053:
conv_str += "%e7%bd%a9";
break;
case 59054:
conv_str += "%e7%bd%a7";
break;
case 59055:
conv_str += "%e7%bd%b8";
break;
case 59056:
conv_str += "%e7%be%82";
break;
case 59057:
conv_str += "%e7%be%86";
break;
case 59058:
conv_str += "%e7%be%83";
break;
case 59059:
conv_str += "%e7%be%88";
break;
case 59060:
conv_str += "%e7%be%87";
break;
case 59061:
conv_str += "%e7%be%8c";
break;
case 59062:
conv_str += "%e7%be%94";
break;
case 59063:
conv_str += "%e7%be%9e";
break;
case 59064:
conv_str += "%e7%be%9d";
break;
case 59065:
conv_str += "%e7%be%9a";
break;
case 59066:
conv_str += "%e7%be%a3";
break;
case 59067:
conv_str += "%e7%be%af";
break;
case 59068:
conv_str += "%e7%be%b2";
break;
case 59069:
conv_str += "%e7%be%b9";
break;
case 59070:
conv_str += "%e7%be%ae";
break;
case 59071:
conv_str += "%e7%be%b6";
break;
case 59072:
conv_str += "%e7%be%b8";
break;
case 59073:
conv_str += "%e8%ad%b1";
break;
case 59074:
conv_str += "%e7%bf%85";
break;
case 59075:
conv_str += "%e7%bf%86";
break;
case 59076:
conv_str += "%e7%bf%8a";
break;
case 59077:
conv_str += "%e7%bf%95";
break;
case 59078:
conv_str += "%e7%bf%94";
break;
case 59079:
conv_str += "%e7%bf%a1";
break;
case 59080:
conv_str += "%e7%bf%a6";
break;
case 59081:
conv_str += "%e7%bf%a9";
break;
case 59082:
conv_str += "%e7%bf%b3";
break;
case 59083:
conv_str += "%e7%bf%b9";
break;
case 59084:
conv_str += "%e9%a3%9c";
break;
case 59085:
conv_str += "%e8%80%86";
break;
case 59086:
conv_str += "%e8%80%84";
break;
case 59087:
conv_str += "%e8%80%8b";
break;
case 59088:
conv_str += "%e8%80%92";
break;
case 59089:
conv_str += "%e8%80%98";
break;
case 59090:
conv_str += "%e8%80%99";
break;
case 59091:
conv_str += "%e8%80%9c";
break;
case 59092:
conv_str += "%e8%80%a1";
break;
case 59093:
conv_str += "%e8%80%a8";
break;
case 59094:
conv_str += "%e8%80%bf";
break;
case 59095:
conv_str += "%e8%80%bb";
break;
case 59096:
conv_str += "%e8%81%8a";
break;
case 59097:
conv_str += "%e8%81%86";
break;
case 59098:
conv_str += "%e8%81%92";
break;
case 59099:
conv_str += "%e8%81%98";
break;
case 59100:
conv_str += "%e8%81%9a";
break;
case 59101:
conv_str += "%e8%81%9f";
break;
case 59102:
conv_str += "%e8%81%a2";
break;
case 59103:
conv_str += "%e8%81%a8";
break;
case 59104:
conv_str += "%e8%81%b3";
break;
case 59105:
conv_str += "%e8%81%b2";
break;
case 59106:
conv_str += "%e8%81%b0";
break;
case 59107:
conv_str += "%e8%81%b6";
break;
case 59108:
conv_str += "%e8%81%b9";
break;
case 59109:
conv_str += "%e8%81%bd";
break;
case 59110:
conv_str += "%e8%81%bf";
break;
case 59111:
conv_str += "%e8%82%84";
break;
case 59112:
conv_str += "%e8%82%86";
break;
case 59113:
conv_str += "%e8%82%85";
break;
case 59114:
conv_str += "%e8%82%9b";
break;
case 59115:
conv_str += "%e8%82%93";
break;
case 59116:
conv_str += "%e8%82%9a";
break;
case 59117:
conv_str += "%e8%82%ad";
break;
case 59118:
conv_str += "%e5%86%90";
break;
case 59119:
conv_str += "%e8%82%ac";
break;
case 59120:
conv_str += "%e8%83%9b";
break;
case 59121:
conv_str += "%e8%83%a5";
break;
case 59122:
conv_str += "%e8%83%99";
break;
case 59123:
conv_str += "%e8%83%9d";
break;
case 59124:
conv_str += "%e8%83%84";
break;
case 59125:
conv_str += "%e8%83%9a";
break;
case 59126:
conv_str += "%e8%83%96";
break;
case 59127:
conv_str += "%e8%84%89";
break;
case 59128:
conv_str += "%e8%83%af";
break;
case 59129:
conv_str += "%e8%83%b1";
break;
case 59130:
conv_str += "%e8%84%9b";
break;
case 59131:
conv_str += "%e8%84%a9";
break;
case 59132:
conv_str += "%e8%84%a3";
break;
case 59133:
conv_str += "%e8%84%af";
break;
case 59134:
conv_str += "%e8%85%8b";
break;
case 59297:
conv_str += "%e9%9a%8b";
break;
case 59298:
conv_str += "%e8%85%86";
break;
case 59299:
conv_str += "%e8%84%be";
break;
case 59300:
conv_str += "%e8%85%93";
break;
case 59301:
conv_str += "%e8%85%91";
break;
case 59302:
conv_str += "%e8%83%bc";
break;
case 59303:
conv_str += "%e8%85%b1";
break;
case 59304:
conv_str += "%e8%85%ae";
break;
case 59305:
conv_str += "%e8%85%a5";
break;
case 59306:
conv_str += "%e8%85%a6";
break;
case 59307:
conv_str += "%e8%85%b4";
break;
case 59308:
conv_str += "%e8%86%83";
break;
case 59309:
conv_str += "%e8%86%88";
break;
case 59310:
conv_str += "%e8%86%8a";
break;
case 59311:
conv_str += "%e8%86%80";
break;
case 59312:
conv_str += "%e8%86%82";
break;
case 59313:
conv_str += "%e8%86%a0";
break;
case 59314:
conv_str += "%e8%86%95";
break;
case 59315:
conv_str += "%e8%86%a4";
break;
case 59316:
conv_str += "%e8%86%a3";
break;
case 59317:
conv_str += "%e8%85%9f";
break;
case 59318:
conv_str += "%e8%86%93";
break;
case 59319:
conv_str += "%e8%86%a9";
break;
case 59320:
conv_str += "%e8%86%b0";
break;
case 59321:
conv_str += "%e8%86%b5";
break;
case 59322:
conv_str += "%e8%86%be";
break;
case 59323:
conv_str += "%e8%86%b8";
break;
case 59324:
conv_str += "%e8%86%bd";
break;
case 59325:
conv_str += "%e8%87%80";
break;
case 59326:
conv_str += "%e8%87%82";
break;
case 59327:
conv_str += "%e8%86%ba";
break;
case 59328:
conv_str += "%e8%87%89";
break;
case 59329:
conv_str += "%e8%87%8d";
break;
case 59330:
conv_str += "%e8%87%91";
break;
case 59331:
conv_str += "%e8%87%99";
break;
case 59332:
conv_str += "%e8%87%98";
break;
case 59333:
conv_str += "%e8%87%88";
break;
case 59334:
conv_str += "%e8%87%9a";
break;
case 59335:
conv_str += "%e8%87%9f";
break;
case 59336:
conv_str += "%e8%87%a0";
break;
case 59337:
conv_str += "%e8%87%a7";
break;
case 59338:
conv_str += "%e8%87%ba";
break;
case 59339:
conv_str += "%e8%87%bb";
break;
case 59340:
conv_str += "%e8%87%be";
break;
case 59341:
conv_str += "%e8%88%81";
break;
case 59342:
conv_str += "%e8%88%82";
break;
case 59343:
conv_str += "%e8%88%85";
break;
case 59344:
conv_str += "%e8%88%87";
break;
case 59345:
conv_str += "%e8%88%8a";
break;
case 59346:
conv_str += "%e8%88%8d";
break;
case 59347:
conv_str += "%e8%88%90";
break;
case 59348:
conv_str += "%e8%88%96";
break;
case 59349:
conv_str += "%e8%88%a9";
break;
case 59350:
conv_str += "%e8%88%ab";
break;
case 59351:
conv_str += "%e8%88%b8";
break;
case 59352:
conv_str += "%e8%88%b3";
break;
case 59353:
conv_str += "%e8%89%80";
break;
case 59354:
conv_str += "%e8%89%99";
break;
case 59355:
conv_str += "%e8%89%98";
break;
case 59356:
conv_str += "%e8%89%9d";
break;
case 59357:
conv_str += "%e8%89%9a";
break;
case 59358:
conv_str += "%e8%89%9f";
break;
case 59359:
conv_str += "%e8%89%a4";
break;
case 59360:
conv_str += "%e8%89%a2";
break;
case 59361:
conv_str += "%e8%89%a8";
break;
case 59362:
conv_str += "%e8%89%aa";
break;
case 59363:
conv_str += "%e8%89%ab";
break;
case 59364:
conv_str += "%e8%88%ae";
break;
case 59365:
conv_str += "%e8%89%b1";
break;
case 59366:
conv_str += "%e8%89%b7";
break;
case 59367:
conv_str += "%e8%89%b8";
break;
case 59368:
conv_str += "%e8%89%be";
break;
case 59369:
conv_str += "%e8%8a%8d";
break;
case 59370:
conv_str += "%e8%8a%92";
break;
case 59371:
conv_str += "%e8%8a%ab";
break;
case 59372:
conv_str += "%e8%8a%9f";
break;
case 59373:
conv_str += "%e8%8a%bb";
break;
case 59374:
conv_str += "%e8%8a%ac";
break;
case 59375:
conv_str += "%e8%8b%a1";
break;
case 59376:
conv_str += "%e8%8b%a3";
break;
case 59377:
conv_str += "%e8%8b%9f";
break;
case 59378:
conv_str += "%e8%8b%92";
break;
case 59379:
conv_str += "%e8%8b%b4";
break;
case 59380:
conv_str += "%e8%8b%b3";
break;
case 59381:
conv_str += "%e8%8b%ba";
break;
case 59382:
conv_str += "%e8%8e%93";
break;
case 59383:
conv_str += "%e8%8c%83";
break;
case 59384:
conv_str += "%e8%8b%bb";
break;
case 59385:
conv_str += "%e8%8b%b9";
break;
case 59386:
conv_str += "%e8%8b%9e";
break;
case 59387:
conv_str += "%e8%8c%86";
break;
case 59388:
conv_str += "%e8%8b%9c";
break;
case 59389:
conv_str += "%e8%8c%89";
break;
case 59390:
conv_str += "%e8%8b%99";
break;
case 59553:
conv_str += "%e8%8c%b5";
break;
case 59554:
conv_str += "%e8%8c%b4";
break;
case 59555:
conv_str += "%e8%8c%96";
break;
case 59556:
conv_str += "%e8%8c%b2";
break;
case 59557:
conv_str += "%e8%8c%b1";
break;
case 59558:
conv_str += "%e8%8d%80";
break;
case 59559:
conv_str += "%e8%8c%b9";
break;
case 59560:
conv_str += "%e8%8d%90";
break;
case 59561:
conv_str += "%e8%8d%85";
break;
case 59562:
conv_str += "%e8%8c%af";
break;
case 59563:
conv_str += "%e8%8c%ab";
break;
case 59564:
conv_str += "%e8%8c%97";
break;
case 59565:
conv_str += "%e8%8c%98";
break;
case 59566:
conv_str += "%e8%8e%85";
break;
case 59567:
conv_str += "%e8%8e%9a";
break;
case 59568:
conv_str += "%e8%8e%aa";
break;
case 59569:
conv_str += "%e8%8e%9f";
break;
case 59570:
conv_str += "%e8%8e%a2";
break;
case 59571:
conv_str += "%e8%8e%96";
break;
case 59572:
conv_str += "%e8%8c%a3";
break;
case 59573:
conv_str += "%e8%8e%8e";
break;
case 59574:
conv_str += "%e8%8e%87";
break;
case 59575:
conv_str += "%e8%8e%8a";
break;
case 59576:
conv_str += "%e8%8d%bc";
break;
case 59577:
conv_str += "%e8%8e%b5";
break;
case 59578:
conv_str += "%e8%8d%b3";
break;
case 59579:
conv_str += "%e8%8d%b5";
break;
case 59580:
conv_str += "%e8%8e%a0";
break;
case 59581:
conv_str += "%e8%8e%89";
break;
case 59582:
conv_str += "%e8%8e%a8";
break;
case 59583:
conv_str += "%e8%8f%b4";
break;
case 59584:
conv_str += "%e8%90%93";
break;
case 59585:
conv_str += "%e8%8f%ab";
break;
case 59586:
conv_str += "%e8%8f%8e";
break;
case 59587:
conv_str += "%e8%8f%bd";
break;
case 59588:
conv_str += "%e8%90%83";
break;
case 59589:
conv_str += "%e8%8f%98";
break;
case 59590:
conv_str += "%e8%90%8b";
break;
case 59591:
conv_str += "%e8%8f%81";
break;
case 59592:
conv_str += "%e8%8f%b7";
break;
case 59593:
conv_str += "%e8%90%87";
break;
case 59594:
conv_str += "%e8%8f%a0";
break;
case 59595:
conv_str += "%e8%8f%b2";
break;
case 59596:
conv_str += "%e8%90%8d";
break;
case 59597:
conv_str += "%e8%90%a2";
break;
case 59598:
conv_str += "%e8%90%a0";
break;
case 59599:
conv_str += "%e8%8e%bd";
break;
case 59600:
conv_str += "%e8%90%b8";
break;
case 59601:
conv_str += "%e8%94%86";
break;
case 59602:
conv_str += "%e8%8f%bb";
break;
case 59603:
conv_str += "%e8%91%ad";
break;
case 59604:
conv_str += "%e8%90%aa";
break;
case 59605:
conv_str += "%e8%90%bc";
break;
case 59606:
conv_str += "%e8%95%9a";
break;
case 59607:
conv_str += "%e8%92%84";
break;
case 59608:
conv_str += "%e8%91%b7";
break;
case 59609:
conv_str += "%e8%91%ab";
break;
case 59610:
conv_str += "%e8%92%ad";
break;
case 59611:
conv_str += "%e8%91%ae";
break;
case 59612:
conv_str += "%e8%92%82";
break;
case 59613:
conv_str += "%e8%91%a9";
break;
case 59614:
conv_str += "%e8%91%86";
break;
case 59615:
conv_str += "%e8%90%ac";
break;
case 59616:
conv_str += "%e8%91%af";
break;
case 59617:
conv_str += "%e8%91%b9";
break;
case 59618:
conv_str += "%e8%90%b5";
break;
case 59619:
conv_str += "%e8%93%8a";
break;
case 59620:
conv_str += "%e8%91%a2";
break;
case 59621:
conv_str += "%e8%92%b9";
break;
case 59622:
conv_str += "%e8%92%bf";
break;
case 59623:
conv_str += "%e8%92%9f";
break;
case 59624:
conv_str += "%e8%93%99";
break;
case 59625:
conv_str += "%e8%93%8d";
break;
case 59626:
conv_str += "%e8%92%bb";
break;
case 59627:
conv_str += "%e8%93%9a";
break;
case 59628:
conv_str += "%e8%93%90";
break;
case 59629:
conv_str += "%e8%93%81";
break;
case 59630:
conv_str += "%e8%93%86";
break;
case 59631:
conv_str += "%e8%93%96";
break;
case 59632:
conv_str += "%e8%92%a1";
break;
case 59633:
conv_str += "%e8%94%a1";
break;
case 59634:
conv_str += "%e8%93%bf";
break;
case 59635:
conv_str += "%e8%93%b4";
break;
case 59636:
conv_str += "%e8%94%97";
break;
case 59637:
conv_str += "%e8%94%98";
break;
case 59638:
conv_str += "%e8%94%ac";
break;
case 59639:
conv_str += "%e8%94%9f";
break;
case 59640:
conv_str += "%e8%94%95";
break;
case 59641:
conv_str += "%e8%94%94";
break;
case 59642:
conv_str += "%e8%93%bc";
break;
case 59643:
conv_str += "%e8%95%80";
break;
case 59644:
conv_str += "%e8%95%a3";
break;
case 59645:
conv_str += "%e8%95%98";
break;
case 59646:
conv_str += "%e8%95%88";
break;
case 59809:
conv_str += "%e8%95%81";
break;
case 59810:
conv_str += "%e8%98%82";
break;
case 59811:
conv_str += "%e8%95%8b";
break;
case 59812:
conv_str += "%e8%95%95";
break;
case 59813:
conv_str += "%e8%96%80";
break;
case 59814:
conv_str += "%e8%96%a4";
break;
case 59815:
conv_str += "%e8%96%88";
break;
case 59816:
conv_str += "%e8%96%91";
break;
case 59817:
conv_str += "%e8%96%8a";
break;
case 59818:
conv_str += "%e8%96%a8";
break;
case 59819:
conv_str += "%e8%95%ad";
break;
case 59820:
conv_str += "%e8%96%94";
break;
case 59821:
conv_str += "%e8%96%9b";
break;
case 59822:
conv_str += "%e8%97%aa";
break;
case 59823:
conv_str += "%e8%96%87";
break;
case 59824:
conv_str += "%e8%96%9c";
break;
case 59825:
conv_str += "%e8%95%b7";
break;
case 59826:
conv_str += "%e8%95%be";
break;
case 59827:
conv_str += "%e8%96%90";
break;
case 59828:
conv_str += "%e8%97%89";
break;
case 59829:
conv_str += "%e8%96%ba";
break;
case 59830:
conv_str += "%e8%97%8f";
break;
case 59831:
conv_str += "%e8%96%b9";
break;
case 59832:
conv_str += "%e8%97%90";
break;
case 59833:
conv_str += "%e8%97%95";
break;
case 59834:
conv_str += "%e8%97%9d";
break;
case 59835:
conv_str += "%e8%97%a5";
break;
case 59836:
conv_str += "%e8%97%9c";
break;
case 59837:
conv_str += "%e8%97%b9";
break;
case 59838:
conv_str += "%e8%98%8a";
break;
case 59839:
conv_str += "%e8%98%93";
break;
case 59840:
conv_str += "%e8%98%8b";
break;
case 59841:
conv_str += "%e8%97%be";
break;
case 59842:
conv_str += "%e8%97%ba";
break;
case 59843:
conv_str += "%e8%98%86";
break;
case 59844:
conv_str += "%e8%98%a2";
break;
case 59845:
conv_str += "%e8%98%9a";
break;
case 59846:
conv_str += "%e8%98%b0";
break;
case 59847:
conv_str += "%e8%98%bf";
break;
case 59848:
conv_str += "%e8%99%8d";
break;
case 59849:
conv_str += "%e4%b9%95";
break;
case 59850:
conv_str += "%e8%99%94";
break;
case 59851:
conv_str += "%e8%99%9f";
break;
case 59852:
conv_str += "%e8%99%a7";
break;
case 59853:
conv_str += "%e8%99%b1";
break;
case 59854:
conv_str += "%e8%9a%93";
break;
case 59855:
conv_str += "%e8%9a%a3";
break;
case 59856:
conv_str += "%e8%9a%a9";
break;
case 59857:
conv_str += "%e8%9a%aa";
break;
case 59858:
conv_str += "%e8%9a%8b";
break;
case 59859:
conv_str += "%e8%9a%8c";
break;
case 59860:
conv_str += "%e8%9a%b6";
break;
case 59861:
conv_str += "%e8%9a%af";
break;
case 59862:
conv_str += "%e8%9b%84";
break;
case 59863:
conv_str += "%e8%9b%86";
break;
case 59864:
conv_str += "%e8%9a%b0";
break;
case 59865:
conv_str += "%e8%9b%89";
break;
case 59866:
conv_str += "%e8%a0%a3";
break;
case 59867:
conv_str += "%e8%9a%ab";
break;
case 59868:
conv_str += "%e8%9b%94";
break;
case 59869:
conv_str += "%e8%9b%9e";
break;
case 59870:
conv_str += "%e8%9b%a9";
break;
case 59871:
conv_str += "%e8%9b%ac";
break;
case 59872:
conv_str += "%e8%9b%9f";
break;
case 59873:
conv_str += "%e8%9b%9b";
break;
case 59874:
conv_str += "%e8%9b%af";
break;
case 59875:
conv_str += "%e8%9c%92";
break;
case 59876:
conv_str += "%e8%9c%86";
break;
case 59877:
conv_str += "%e8%9c%88";
break;
case 59878:
conv_str += "%e8%9c%80";
break;
case 59879:
conv_str += "%e8%9c%83";
break;
case 59880:
conv_str += "%e8%9b%bb";
break;
case 59881:
conv_str += "%e8%9c%91";
break;
case 59882:
conv_str += "%e8%9c%89";
break;
case 59883:
conv_str += "%e8%9c%8d";
break;
case 59884:
conv_str += "%e8%9b%b9";
break;
case 59885:
conv_str += "%e8%9c%8a";
break;
case 59886:
conv_str += "%e8%9c%b4";
break;
case 59887:
conv_str += "%e8%9c%bf";
break;
case 59888:
conv_str += "%e8%9c%b7";
break;
case 59889:
conv_str += "%e8%9c%bb";
break;
case 59890:
conv_str += "%e8%9c%a5";
break;
case 59891:
conv_str += "%e8%9c%a9";
break;
case 59892:
conv_str += "%e8%9c%9a";
break;
case 59893:
conv_str += "%e8%9d%a0";
break;
case 59894:
conv_str += "%e8%9d%9f";
break;
case 59895:
conv_str += "%e8%9d%b8";
break;
case 59896:
conv_str += "%e8%9d%8c";
break;
case 59897:
conv_str += "%e8%9d%8e";
break;
case 59898:
conv_str += "%e8%9d%b4";
break;
case 59899:
conv_str += "%e8%9d%97";
break;
case 59900:
conv_str += "%e8%9d%a8";
break;
case 59901:
conv_str += "%e8%9d%ae";
break;
case 59902:
conv_str += "%e8%9d%99";
break;
case 60065:
conv_str += "%e8%9d%93";
break;
case 60066:
conv_str += "%e8%9d%a3";
break;
case 60067:
conv_str += "%e8%9d%aa";
break;
case 60068:
conv_str += "%e8%a0%85";
break;
case 60069:
conv_str += "%e8%9e%a2";
break;
case 60070:
conv_str += "%e8%9e%9f";
break;
case 60071:
conv_str += "%e8%9e%82";
break;
case 60072:
conv_str += "%e8%9e%af";
break;
case 60073:
conv_str += "%e8%9f%8b";
break;
case 60074:
conv_str += "%e8%9e%bd";
break;
case 60075:
conv_str += "%e8%9f%80";
break;
case 60076:
conv_str += "%e8%9f%90";
break;
case 60077:
conv_str += "%e9%9b%96";
break;
case 60078:
conv_str += "%e8%9e%ab";
break;
case 60079:
conv_str += "%e8%9f%84";
break;
case 60080:
conv_str += "%e8%9e%b3";
break;
case 60081:
conv_str += "%e8%9f%87";
break;
case 60082:
conv_str += "%e8%9f%86";
break;
case 60083:
conv_str += "%e8%9e%bb";
break;
case 60084:
conv_str += "%e8%9f%af";
break;
case 60085:
conv_str += "%e8%9f%b2";
break;
case 60086:
conv_str += "%e8%9f%a0";
break;
case 60087:
conv_str += "%e8%a0%8f";
break;
case 60088:
conv_str += "%e8%a0%8d";
break;
case 60089:
conv_str += "%e8%9f%be";
break;
case 60090:
conv_str += "%e8%9f%b6";
break;
case 60091:
conv_str += "%e8%9f%b7";
break;
case 60092:
conv_str += "%e8%a0%8e";
break;
case 60093:
conv_str += "%e8%9f%92";
break;
case 60094:
conv_str += "%e8%a0%91";
break;
case 60095:
conv_str += "%e8%a0%96";
break;
case 60096:
conv_str += "%e8%a0%95";
break;
case 60097:
conv_str += "%e8%a0%a2";
break;
case 60098:
conv_str += "%e8%a0%a1";
break;
case 60099:
conv_str += "%e8%a0%b1";
break;
case 60100:
conv_str += "%e8%a0%b6";
break;
case 60101:
conv_str += "%e8%a0%b9";
break;
case 60102:
conv_str += "%e8%a0%a7";
break;
case 60103:
conv_str += "%e8%a0%bb";
break;
case 60104:
conv_str += "%e8%a1%84";
break;
case 60105:
conv_str += "%e8%a1%82";
break;
case 60106:
conv_str += "%e8%a1%92";
break;
case 60107:
conv_str += "%e8%a1%99";
break;
case 60108:
conv_str += "%e8%a1%9e";
break;
case 60109:
conv_str += "%e8%a1%a2";
break;
case 60110:
conv_str += "%e8%a1%ab";
break;
case 60111:
conv_str += "%e8%a2%81";
break;
case 60112:
conv_str += "%e8%a1%be";
break;
case 60113:
conv_str += "%e8%a2%9e";
break;
case 60114:
conv_str += "%e8%a1%b5";
break;
case 60115:
conv_str += "%e8%a1%bd";
break;
case 60116:
conv_str += "%e8%a2%b5";
break;
case 60117:
conv_str += "%e8%a1%b2";
break;
case 60118:
conv_str += "%e8%a2%82";
break;
case 60119:
conv_str += "%e8%a2%97";
break;
case 60120:
conv_str += "%e8%a2%92";
break;
case 60121:
conv_str += "%e8%a2%ae";
break;
case 60122:
conv_str += "%e8%a2%99";
break;
case 60123:
conv_str += "%e8%a2%a2";
break;
case 60124:
conv_str += "%e8%a2%8d";
break;
case 60125:
conv_str += "%e8%a2%a4";
break;
case 60126:
conv_str += "%e8%a2%b0";
break;
case 60127:
conv_str += "%e8%a2%bf";
break;
case 60128:
conv_str += "%e8%a2%b1";
break;
case 60129:
conv_str += "%e8%a3%83";
break;
case 60130:
conv_str += "%e8%a3%84";
break;
case 60131:
conv_str += "%e8%a3%94";
break;
case 60132:
conv_str += "%e8%a3%98";
break;
case 60133:
conv_str += "%e8%a3%99";
break;
case 60134:
conv_str += "%e8%a3%9d";
break;
case 60135:
conv_str += "%e8%a3%b9";
break;
case 60136:
conv_str += "%e8%a4%82";
break;
case 60137:
conv_str += "%e8%a3%bc";
break;
case 60138:
conv_str += "%e8%a3%b4";
break;
case 60139:
conv_str += "%e8%a3%a8";
break;
case 60140:
conv_str += "%e8%a3%b2";
break;
case 60141:
conv_str += "%e8%a4%84";
break;
case 60142:
conv_str += "%e8%a4%8c";
break;
case 60143:
conv_str += "%e8%a4%8a";
break;
case 60144:
conv_str += "%e8%a4%93";
break;
case 60145:
conv_str += "%e8%a5%83";
break;
case 60146:
conv_str += "%e8%a4%9e";
break;
case 60147:
conv_str += "%e8%a4%a5";
break;
case 60148:
conv_str += "%e8%a4%aa";
break;
case 60149:
conv_str += "%e8%a4%ab";
break;
case 60150:
conv_str += "%e8%a5%81";
break;
case 60151:
conv_str += "%e8%a5%84";
break;
case 60152:
conv_str += "%e8%a4%bb";
break;
case 60153:
conv_str += "%e8%a4%b6";
break;
case 60154:
conv_str += "%e8%a4%b8";
break;
case 60155:
conv_str += "%e8%a5%8c";
break;
case 60156:
conv_str += "%e8%a4%9d";
break;
case 60157:
conv_str += "%e8%a5%a0";
break;
case 60158:
conv_str += "%e8%a5%9e";
break;
case 60321:
conv_str += "%e8%a5%a6";
break;
case 60322:
conv_str += "%e8%a5%a4";
break;
case 60323:
conv_str += "%e8%a5%ad";
break;
case 60324:
conv_str += "%e8%a5%aa";
break;
case 60325:
conv_str += "%e8%a5%af";
break;
case 60326:
conv_str += "%e8%a5%b4";
break;
case 60327:
conv_str += "%e8%a5%b7";
break;
case 60328:
conv_str += "%e8%a5%be";
break;
case 60329:
conv_str += "%e8%a6%83";
break;
case 60330:
conv_str += "%e8%a6%88";
break;
case 60331:
conv_str += "%e8%a6%8a";
break;
case 60332:
conv_str += "%e8%a6%93";
break;
case 60333:
conv_str += "%e8%a6%98";
break;
case 60334:
conv_str += "%e8%a6%a1";
break;
case 60335:
conv_str += "%e8%a6%a9";
break;
case 60336:
conv_str += "%e8%a6%a6";
break;
case 60337:
conv_str += "%e8%a6%ac";
break;
case 60338:
conv_str += "%e8%a6%af";
break;
case 60339:
conv_str += "%e8%a6%b2";
break;
case 60340:
conv_str += "%e8%a6%ba";
break;
case 60341:
conv_str += "%e8%a6%bd";
break;
case 60342:
conv_str += "%e8%a6%bf";
break;
case 60343:
conv_str += "%e8%a7%80";
break;
case 60344:
conv_str += "%e8%a7%9a";
break;
case 60345:
conv_str += "%e8%a7%9c";
break;
case 60346:
conv_str += "%e8%a7%9d";
break;
case 60347:
conv_str += "%e8%a7%a7";
break;
case 60348:
conv_str += "%e8%a7%b4";
break;
case 60349:
conv_str += "%e8%a7%b8";
break;
case 60350:
conv_str += "%e8%a8%83";
break;
case 60351:
conv_str += "%e8%a8%96";
break;
case 60352:
conv_str += "%e8%a8%90";
break;
case 60353:
conv_str += "%e8%a8%8c";
break;
case 60354:
conv_str += "%e8%a8%9b";
break;
case 60355:
conv_str += "%e8%a8%9d";
break;
case 60356:
conv_str += "%e8%a8%a5";
break;
case 60357:
conv_str += "%e8%a8%b6";
break;
case 60358:
conv_str += "%e8%a9%81";
break;
case 60359:
conv_str += "%e8%a9%9b";
break;
case 60360:
conv_str += "%e8%a9%92";
break;
case 60361:
conv_str += "%e8%a9%86";
break;
case 60362:
conv_str += "%e8%a9%88";
break;
case 60363:
conv_str += "%e8%a9%bc";
break;
case 60364:
conv_str += "%e8%a9%ad";
break;
case 60365:
conv_str += "%e8%a9%ac";
break;
case 60366:
conv_str += "%e8%a9%a2";
break;
case 60367:
conv_str += "%e8%aa%85";
break;
case 60368:
conv_str += "%e8%aa%82";
break;
case 60369:
conv_str += "%e8%aa%84";
break;
case 60370:
conv_str += "%e8%aa%a8";
break;
case 60371:
conv_str += "%e8%aa%a1";
break;
case 60372:
conv_str += "%e8%aa%91";
break;
case 60373:
conv_str += "%e8%aa%a5";
break;
case 60374:
conv_str += "%e8%aa%a6";
break;
case 60375:
conv_str += "%e8%aa%9a";
break;
case 60376:
conv_str += "%e8%aa%a3";
break;
case 60377:
conv_str += "%e8%ab%84";
break;
case 60378:
conv_str += "%e8%ab%8d";
break;
case 60379:
conv_str += "%e8%ab%82";
break;
case 60380:
conv_str += "%e8%ab%9a";
break;
case 60381:
conv_str += "%e8%ab%ab";
break;
case 60382:
conv_str += "%e8%ab%b3";
break;
case 60383:
conv_str += "%e8%ab%a7";
break;
case 60384:
conv_str += "%e8%ab%a4";
break;
case 60385:
conv_str += "%e8%ab%b1";
break;
case 60386:
conv_str += "%e8%ac%94";
break;
case 60387:
conv_str += "%e8%ab%a0";
break;
case 60388:
conv_str += "%e8%ab%a2";
break;
case 60389:
conv_str += "%e8%ab%b7";
break;
case 60390:
conv_str += "%e8%ab%9e";
break;
case 60391:
conv_str += "%e8%ab%9b";
break;
case 60392:
conv_str += "%e8%ac%8c";
break;
case 60393:
conv_str += "%e8%ac%87";
break;
case 60394:
conv_str += "%e8%ac%9a";
break;
case 60395:
conv_str += "%e8%ab%a1";
break;
case 60396:
conv_str += "%e8%ac%96";
break;
case 60397:
conv_str += "%e8%ac%90";
break;
case 60398:
conv_str += "%e8%ac%97";
break;
case 60399:
conv_str += "%e8%ac%a0";
break;
case 60400:
conv_str += "%e8%ac%b3";
break;
case 60401:
conv_str += "%e9%9e%ab";
break;
case 60402:
conv_str += "%e8%ac%a6";
break;
case 60403:
conv_str += "%e8%ac%ab";
break;
case 60404:
conv_str += "%e8%ac%be";
break;
case 60405:
conv_str += "%e8%ac%a8";
break;
case 60406:
conv_str += "%e8%ad%81";
break;
case 60407:
conv_str += "%e8%ad%8c";
break;
case 60408:
conv_str += "%e8%ad%8f";
break;
case 60409:
conv_str += "%e8%ad%8e";
break;
case 60410:
conv_str += "%e8%ad%89";
break;
case 60411:
conv_str += "%e8%ad%96";
break;
case 60412:
conv_str += "%e8%ad%9b";
break;
case 60413:
conv_str += "%e8%ad%9a";
break;
case 60414:
conv_str += "%e8%ad%ab";
break;
case 60577:
conv_str += "%e8%ad%9f";
break;
case 60578:
conv_str += "%e8%ad%ac";
break;
case 60579:
conv_str += "%e8%ad%af";
break;
case 60580:
conv_str += "%e8%ad%b4";
break;
case 60581:
conv_str += "%e8%ad%bd";
break;
case 60582:
conv_str += "%e8%ae%80";
break;
case 60583:
conv_str += "%e8%ae%8c";
break;
case 60584:
conv_str += "%e8%ae%8e";
break;
case 60585:
conv_str += "%e8%ae%92";
break;
case 60586:
conv_str += "%e8%ae%93";
break;
case 60587:
conv_str += "%e8%ae%96";
break;
case 60588:
conv_str += "%e8%ae%99";
break;
case 60589:
conv_str += "%e8%ae%9a";
break;
case 60590:
conv_str += "%e8%b0%ba";
break;
case 60591:
conv_str += "%e8%b1%81";
break;
case 60592:
conv_str += "%e8%b0%bf";
break;
case 60593:
conv_str += "%e8%b1%88";
break;
case 60594:
conv_str += "%e8%b1%8c";
break;
case 60595:
conv_str += "%e8%b1%8e";
break;
case 60596:
conv_str += "%e8%b1%90";
break;
case 60597:
conv_str += "%e8%b1%95";
break;
case 60598:
conv_str += "%e8%b1%a2";
break;
case 60599:
conv_str += "%e8%b1%ac";
break;
case 60600:
conv_str += "%e8%b1%b8";
break;
case 60601:
conv_str += "%e8%b1%ba";
break;
case 60602:
conv_str += "%e8%b2%82";
break;
case 60603:
conv_str += "%e8%b2%89";
break;
case 60604:
conv_str += "%e8%b2%85";
break;
case 60605:
conv_str += "%e8%b2%8a";
break;
case 60606:
conv_str += "%e8%b2%8d";
break;
case 60607:
conv_str += "%e8%b2%8e";
break;
case 60608:
conv_str += "%e8%b2%94";
break;
case 60609:
conv_str += "%e8%b1%bc";
break;
case 60610:
conv_str += "%e8%b2%98";
break;
case 60611:
conv_str += "%e6%88%9d";
break;
case 60612:
conv_str += "%e8%b2%ad";
break;
case 60613:
conv_str += "%e8%b2%aa";
break;
case 60614:
conv_str += "%e8%b2%bd";
break;
case 60615:
conv_str += "%e8%b2%b2";
break;
case 60616:
conv_str += "%e8%b2%b3";
break;
case 60617:
conv_str += "%e8%b2%ae";
break;
case 60618:
conv_str += "%e8%b2%b6";
break;
case 60619:
conv_str += "%e8%b3%88";
break;
case 60620:
conv_str += "%e8%b3%81";
break;
case 60621:
conv_str += "%e8%b3%a4";
break;
case 60622:
conv_str += "%e8%b3%a3";
break;
case 60623:
conv_str += "%e8%b3%9a";
break;
case 60624:
conv_str += "%e8%b3%bd";
break;
case 60625:
conv_str += "%e8%b3%ba";
break;
case 60626:
conv_str += "%e8%b3%bb";
break;
case 60627:
conv_str += "%e8%b4%84";
break;
case 60628:
conv_str += "%e8%b4%85";
break;
case 60629:
conv_str += "%e8%b4%8a";
break;
case 60630:
conv_str += "%e8%b4%87";
break;
case 60631:
conv_str += "%e8%b4%8f";
break;
case 60632:
conv_str += "%e8%b4%8d";
break;
case 60633:
conv_str += "%e8%b4%90";
break;
case 60634:
conv_str += "%e9%bd%8e";
break;
case 60635:
conv_str += "%e8%b4%93";
break;
case 60636:
conv_str += "%e8%b3%8d";
break;
case 60637:
conv_str += "%e8%b4%94";
break;
case 60638:
conv_str += "%e8%b4%96";
break;
case 60639:
conv_str += "%e8%b5%a7";
break;
case 60640:
conv_str += "%e8%b5%ad";
break;
case 60641:
conv_str += "%e8%b5%b1";
break;
case 60642:
conv_str += "%e8%b5%b3";
break;
case 60643:
conv_str += "%e8%b6%81";
break;
case 60644:
conv_str += "%e8%b6%99";
break;
case 60645:
conv_str += "%e8%b7%82";
break;
case 60646:
conv_str += "%e8%b6%be";
break;
case 60647:
conv_str += "%e8%b6%ba";
break;
case 60648:
conv_str += "%e8%b7%8f";
break;
case 60649:
conv_str += "%e8%b7%9a";
break;
case 60650:
conv_str += "%e8%b7%96";
break;
case 60651:
conv_str += "%e8%b7%8c";
break;
case 60652:
conv_str += "%e8%b7%9b";
break;
case 60653:
conv_str += "%e8%b7%8b";
break;
case 60654:
conv_str += "%e8%b7%aa";
break;
case 60655:
conv_str += "%e8%b7%ab";
break;
case 60656:
conv_str += "%e8%b7%9f";
break;
case 60657:
conv_str += "%e8%b7%a3";
break;
case 60658:
conv_str += "%e8%b7%bc";
break;
case 60659:
conv_str += "%e8%b8%88";
break;
case 60660:
conv_str += "%e8%b8%89";
break;
case 60661:
conv_str += "%e8%b7%bf";
break;
case 60662:
conv_str += "%e8%b8%9d";
break;
case 60663:
conv_str += "%e8%b8%9e";
break;
case 60664:
conv_str += "%e8%b8%90";
break;
case 60665:
conv_str += "%e8%b8%9f";
break;
case 60666:
conv_str += "%e8%b9%82";
break;
case 60667:
conv_str += "%e8%b8%b5";
break;
case 60668:
conv_str += "%e8%b8%b0";
break;
case 60669:
conv_str += "%e8%b8%b4";
break;
case 60670:
conv_str += "%e8%b9%8a";
break;
case 60833:
conv_str += "%e8%b9%87";
break;
case 60834:
conv_str += "%e8%b9%89";
break;
case 60835:
conv_str += "%e8%b9%8c";
break;
case 60836:
conv_str += "%e8%b9%90";
break;
case 60837:
conv_str += "%e8%b9%88";
break;
case 60838:
conv_str += "%e8%b9%99";
break;
case 60839:
conv_str += "%e8%b9%a4";
break;
case 60840:
conv_str += "%e8%b9%a0";
break;
case 60841:
conv_str += "%e8%b8%aa";
break;
case 60842:
conv_str += "%e8%b9%a3";
break;
case 60843:
conv_str += "%e8%b9%95";
break;
case 60844:
conv_str += "%e8%b9%b6";
break;
case 60845:
conv_str += "%e8%b9%b2";
break;
case 60846:
conv_str += "%e8%b9%bc";
break;
case 60847:
conv_str += "%e8%ba%81";
break;
case 60848:
conv_str += "%e8%ba%87";
break;
case 60849:
conv_str += "%e8%ba%85";
break;
case 60850:
conv_str += "%e8%ba%84";
break;
case 60851:
conv_str += "%e8%ba%8b";
break;
case 60852:
conv_str += "%e8%ba%8a";
break;
case 60853:
conv_str += "%e8%ba%93";
break;
case 60854:
conv_str += "%e8%ba%91";
break;
case 60855:
conv_str += "%e8%ba%94";
break;
case 60856:
conv_str += "%e8%ba%99";
break;
case 60857:
conv_str += "%e8%ba%aa";
break;
case 60858:
conv_str += "%e8%ba%a1";
break;
case 60859:
conv_str += "%e8%ba%ac";
break;
case 60860:
conv_str += "%e8%ba%b0";
break;
case 60861:
conv_str += "%e8%bb%86";
break;
case 60862:
conv_str += "%e8%ba%b1";
break;
case 60863:
conv_str += "%e8%ba%be";
break;
case 60864:
conv_str += "%e8%bb%85";
break;
case 60865:
conv_str += "%e8%bb%88";
break;
case 60866:
conv_str += "%e8%bb%8b";
break;
case 60867:
conv_str += "%e8%bb%9b";
break;
case 60868:
conv_str += "%e8%bb%a3";
break;
case 60869:
conv_str += "%e8%bb%bc";
break;
case 60870:
conv_str += "%e8%bb%bb";
break;
case 60871:
conv_str += "%e8%bb%ab";
break;
case 60872:
conv_str += "%e8%bb%be";
break;
case 60873:
conv_str += "%e8%bc%8a";
break;
case 60874:
conv_str += "%e8%bc%85";
break;
case 60875:
conv_str += "%e8%bc%95";
break;
case 60876:
conv_str += "%e8%bc%92";
break;
case 60877:
conv_str += "%e8%bc%99";
break;
case 60878:
conv_str += "%e8%bc%93";
break;
case 60879:
conv_str += "%e8%bc%9c";
break;
case 60880:
conv_str += "%e8%bc%9f";
break;
case 60881:
conv_str += "%e8%bc%9b";
break;
case 60882:
conv_str += "%e8%bc%8c";
break;
case 60883:
conv_str += "%e8%bc%a6";
break;
case 60884:
conv_str += "%e8%bc%b3";
break;
case 60885:
conv_str += "%e8%bc%bb";
break;
case 60886:
conv_str += "%e8%bc%b9";
break;
case 60887:
conv_str += "%e8%bd%85";
break;
case 60888:
conv_str += "%e8%bd%82";
break;
case 60889:
conv_str += "%e8%bc%be";
break;
case 60890:
conv_str += "%e8%bd%8c";
break;
case 60891:
conv_str += "%e8%bd%89";
break;
case 60892:
conv_str += "%e8%bd%86";
break;
case 60893:
conv_str += "%e8%bd%8e";
break;
case 60894:
conv_str += "%e8%bd%97";
break;
case 60895:
conv_str += "%e8%bd%9c";
break;
case 60896:
conv_str += "%e8%bd%a2";
break;
case 60897:
conv_str += "%e8%bd%a3";
break;
case 60898:
conv_str += "%e8%bd%a4";
break;
case 60899:
conv_str += "%e8%be%9c";
break;
case 60900:
conv_str += "%e8%be%9f";
break;
case 60901:
conv_str += "%e8%be%a3";
break;
case 60902:
conv_str += "%e8%be%ad";
break;
case 60903:
conv_str += "%e8%be%af";
break;
case 60904:
conv_str += "%e8%be%b7";
break;
case 60905:
conv_str += "%e8%bf%9a";
break;
case 60906:
conv_str += "%e8%bf%a5";
break;
case 60907:
conv_str += "%e8%bf%a2";
break;
case 60908:
conv_str += "%e8%bf%aa";
break;
case 60909:
conv_str += "%e8%bf%af";
break;
case 60910:
conv_str += "%e9%82%87";
break;
case 60911:
conv_str += "%e8%bf%b4";
break;
case 60912:
conv_str += "%e9%80%85";
break;
case 60913:
conv_str += "%e8%bf%b9";
break;
case 60914:
conv_str += "%e8%bf%ba";
break;
case 60915:
conv_str += "%e9%80%91";
break;
case 60916:
conv_str += "%e9%80%95";
break;
case 60917:
conv_str += "%e9%80%a1";
break;
case 60918:
conv_str += "%e9%80%8d";
break;
case 60919:
conv_str += "%e9%80%9e";
break;
case 60920:
conv_str += "%e9%80%96";
break;
case 60921:
conv_str += "%e9%80%8b";
break;
case 60922:
conv_str += "%e9%80%a7";
break;
case 60923:
conv_str += "%e9%80%b6";
break;
case 60924:
conv_str += "%e9%80%b5";
break;
case 60925:
conv_str += "%e9%80%b9";
break;
case 60926:
conv_str += "%e8%bf%b8";
break;
case 61089:
conv_str += "%e9%81%8f";
break;
case 61090:
conv_str += "%e9%81%90";
break;
case 61091:
conv_str += "%e9%81%91";
break;
case 61092:
conv_str += "%e9%81%92";
break;
case 61093:
conv_str += "%e9%80%8e";
break;
case 61094:
conv_str += "%e9%81%89";
break;
case 61095:
conv_str += "%e9%80%be";
break;
case 61096:
conv_str += "%e9%81%96";
break;
case 61097:
conv_str += "%e9%81%98";
break;
case 61098:
conv_str += "%e9%81%9e";
break;
case 61099:
conv_str += "%e9%81%a8";
break;
case 61100:
conv_str += "%e9%81%af";
break;
case 61101:
conv_str += "%e9%81%b6";
break;
case 61102:
conv_str += "%e9%9a%a8";
break;
case 61103:
conv_str += "%e9%81%b2";
break;
case 61104:
conv_str += "%e9%82%82";
break;
case 61105:
conv_str += "%e9%81%bd";
break;
case 61106:
conv_str += "%e9%82%81";
break;
case 61107:
conv_str += "%e9%82%80";
break;
case 61108:
conv_str += "%e9%82%8a";
break;
case 61109:
conv_str += "%e9%82%89";
break;
case 61110:
conv_str += "%e9%82%8f";
break;
case 61111:
conv_str += "%e9%82%a8";
break;
case 61112:
conv_str += "%e9%82%af";
break;
case 61113:
conv_str += "%e9%82%b1";
break;
case 61114:
conv_str += "%e9%82%b5";
break;
case 61115:
conv_str += "%e9%83%a2";
break;
case 61116:
conv_str += "%e9%83%a4";
break;
case 61117:
conv_str += "%e6%89%88";
break;
case 61118:
conv_str += "%e9%83%9b";
break;
case 61119:
conv_str += "%e9%84%82";
break;
case 61120:
conv_str += "%e9%84%92";
break;
case 61121:
conv_str += "%e9%84%99";
break;
case 61122:
conv_str += "%e9%84%b2";
break;
case 61123:
conv_str += "%e9%84%b0";
break;
case 61124:
conv_str += "%e9%85%8a";
break;
case 61125:
conv_str += "%e9%85%96";
break;
case 61126:
conv_str += "%e9%85%98";
break;
case 61127:
conv_str += "%e9%85%a3";
break;
case 61128:
conv_str += "%e9%85%a5";
break;
case 61129:
conv_str += "%e9%85%a9";
break;
case 61130:
conv_str += "%e9%85%b3";
break;
case 61131:
conv_str += "%e9%85%b2";
break;
case 61132:
conv_str += "%e9%86%8b";
break;
case 61133:
conv_str += "%e9%86%89";
break;
case 61134:
conv_str += "%e9%86%82";
break;
case 61135:
conv_str += "%e9%86%a2";
break;
case 61136:
conv_str += "%e9%86%ab";
break;
case 61137:
conv_str += "%e9%86%af";
break;
case 61138:
conv_str += "%e9%86%aa";
break;
case 61139:
conv_str += "%e9%86%b5";
break;
case 61140:
conv_str += "%e9%86%b4";
break;
case 61141:
conv_str += "%e9%86%ba";
break;
case 61142:
conv_str += "%e9%87%80";
break;
case 61143:
conv_str += "%e9%87%81";
break;
case 61144:
conv_str += "%e9%87%89";
break;
case 61145:
conv_str += "%e9%87%8b";
break;
case 61146:
conv_str += "%e9%87%90";
break;
case 61147:
conv_str += "%e9%87%96";
break;
case 61148:
conv_str += "%e9%87%9f";
break;
case 61149:
conv_str += "%e9%87%a1";
break;
case 61150:
conv_str += "%e9%87%9b";
break;
case 61151:
conv_str += "%e9%87%bc";
break;
case 61152:
conv_str += "%e9%87%b5";
break;
case 61153:
conv_str += "%e9%87%b6";
break;
case 61154:
conv_str += "%e9%88%9e";
break;
case 61155:
conv_str += "%e9%87%bf";
break;
case 61156:
conv_str += "%e9%88%94";
break;
case 61157:
conv_str += "%e9%88%ac";
break;
case 61158:
conv_str += "%e9%88%95";
break;
case 61159:
conv_str += "%e9%88%91";
break;
case 61160:
conv_str += "%e9%89%9e";
break;
case 61161:
conv_str += "%e9%89%97";
break;
case 61162:
conv_str += "%e9%89%85";
break;
case 61163:
conv_str += "%e9%89%89";
break;
case 61164:
conv_str += "%e9%89%a4";
break;
case 61165:
conv_str += "%e9%89%88";
break;
case 61166:
conv_str += "%e9%8a%95";
break;
case 61167:
conv_str += "%e9%88%bf";
break;
case 61168:
conv_str += "%e9%89%8b";
break;
case 61169:
conv_str += "%e9%89%90";
break;
case 61170:
conv_str += "%e9%8a%9c";
break;
case 61171:
conv_str += "%e9%8a%96";
break;
case 61172:
conv_str += "%e9%8a%93";
break;
case 61173:
conv_str += "%e9%8a%9b";
break;
case 61174:
conv_str += "%e9%89%9a";
break;
case 61175:
conv_str += "%e9%8b%8f";
break;
case 61176:
conv_str += "%e9%8a%b9";
break;
case 61177:
conv_str += "%e9%8a%b7";
break;
case 61178:
conv_str += "%e9%8b%a9";
break;
case 61179:
conv_str += "%e9%8c%8f";
break;
case 61180:
conv_str += "%e9%8b%ba";
break;
case 61181:
conv_str += "%e9%8d%84";
break;
case 61182:
conv_str += "%e9%8c%ae";
break;
case 61345:
conv_str += "%e9%8c%99";
break;
case 61346:
conv_str += "%e9%8c%a2";
break;
case 61347:
conv_str += "%e9%8c%9a";
break;
case 61348:
conv_str += "%e9%8c%a3";
break;
case 61349:
conv_str += "%e9%8c%ba";
break;
case 61350:
conv_str += "%e9%8c%b5";
break;
case 61351:
conv_str += "%e9%8c%bb";
break;
case 61352:
conv_str += "%e9%8d%9c";
break;
case 61353:
conv_str += "%e9%8d%a0";
break;
case 61354:
conv_str += "%e9%8d%bc";
break;
case 61355:
conv_str += "%e9%8d%ae";
break;
case 61356:
conv_str += "%e9%8d%96";
break;
case 61357:
conv_str += "%e9%8e%b0";
break;
case 61358:
conv_str += "%e9%8e%ac";
break;
case 61359:
conv_str += "%e9%8e%ad";
break;
case 61360:
conv_str += "%e9%8e%94";
break;
case 61361:
conv_str += "%e9%8e%b9";
break;
case 61362:
conv_str += "%e9%8f%96";
break;
case 61363:
conv_str += "%e9%8f%97";
break;
case 61364:
conv_str += "%e9%8f%a8";
break;
case 61365:
conv_str += "%e9%8f%a5";
break;
case 61366:
conv_str += "%e9%8f%98";
break;
case 61367:
conv_str += "%e9%8f%83";
break;
case 61368:
conv_str += "%e9%8f%9d";
break;
case 61369:
conv_str += "%e9%8f%90";
break;
case 61370:
conv_str += "%e9%8f%88";
break;
case 61371:
conv_str += "%e9%8f%a4";
break;
case 61372:
conv_str += "%e9%90%9a";
break;
case 61373:
conv_str += "%e9%90%94";
break;
case 61374:
conv_str += "%e9%90%93";
break;
case 61375:
conv_str += "%e9%90%83";
break;
case 61376:
conv_str += "%e9%90%87";
break;
case 61377:
conv_str += "%e9%90%90";
break;
case 61378:
conv_str += "%e9%90%b6";
break;
case 61379:
conv_str += "%e9%90%ab";
break;
case 61380:
conv_str += "%e9%90%b5";
break;
case 61381:
conv_str += "%e9%90%a1";
break;
case 61382:
conv_str += "%e9%90%ba";
break;
case 61383:
conv_str += "%e9%91%81";
break;
case 61384:
conv_str += "%e9%91%92";
break;
case 61385:
conv_str += "%e9%91%84";
break;
case 61386:
conv_str += "%e9%91%9b";
break;
case 61387:
conv_str += "%e9%91%a0";
break;
case 61388:
conv_str += "%e9%91%a2";
break;
case 61389:
conv_str += "%e9%91%9e";
break;
case 61390:
conv_str += "%e9%91%aa";
break;
case 61391:
conv_str += "%e9%88%a9";
break;
case 61392:
conv_str += "%e9%91%b0";
break;
case 61393:
conv_str += "%e9%91%b5";
break;
case 61394:
conv_str += "%e9%91%b7";
break;
case 61395:
conv_str += "%e9%91%bd";
break;
case 61396:
conv_str += "%e9%91%9a";
break;
case 61397:
conv_str += "%e9%91%bc";
break;
case 61398:
conv_str += "%e9%91%be";
break;
case 61399:
conv_str += "%e9%92%81";
break;
case 61400:
conv_str += "%e9%91%bf";
break;
case 61401:
conv_str += "%e9%96%82";
break;
case 61402:
conv_str += "%e9%96%87";
break;
case 61403:
conv_str += "%e9%96%8a";
break;
case 61404:
conv_str += "%e9%96%94";
break;
case 61405:
conv_str += "%e9%96%96";
break;
case 61406:
conv_str += "%e9%96%98";
break;
case 61407:
conv_str += "%e9%96%99";
break;
case 61408:
conv_str += "%e9%96%a0";
break;
case 61409:
conv_str += "%e9%96%a8";
break;
case 61410:
conv_str += "%e9%96%a7";
break;
case 61411:
conv_str += "%e9%96%ad";
break;
case 61412:
conv_str += "%e9%96%bc";
break;
case 61413:
conv_str += "%e9%96%bb";
break;
case 61414:
conv_str += "%e9%96%b9";
break;
case 61415:
conv_str += "%e9%96%be";
break;
case 61416:
conv_str += "%e9%97%8a";
break;
case 61417:
conv_str += "%e6%bf%b6";
break;
case 61418:
conv_str += "%e9%97%83";
break;
case 61419:
conv_str += "%e9%97%8d";
break;
case 61420:
conv_str += "%e9%97%8c";
break;
case 61421:
conv_str += "%e9%97%95";
break;
case 61422:
conv_str += "%e9%97%94";
break;
case 61423:
conv_str += "%e9%97%96";
break;
case 61424:
conv_str += "%e9%97%9c";
break;
case 61425:
conv_str += "%e9%97%a1";
break;
case 61426:
conv_str += "%e9%97%a5";
break;
case 61427:
conv_str += "%e9%97%a2";
break;
case 61428:
conv_str += "%e9%98%a1";
break;
case 61429:
conv_str += "%e9%98%a8";
break;
case 61430:
conv_str += "%e9%98%ae";
break;
case 61431:
conv_str += "%e9%98%af";
break;
case 61432:
conv_str += "%e9%99%82";
break;
case 61433:
conv_str += "%e9%99%8c";
break;
case 61434:
conv_str += "%e9%99%8f";
break;
case 61435:
conv_str += "%e9%99%8b";
break;
case 61436:
conv_str += "%e9%99%b7";
break;
case 61437:
conv_str += "%e9%99%9c";
break;
case 61438:
conv_str += "%e9%99%9e";
break;
case 61601:
conv_str += "%e9%99%9d";
break;
case 61602:
conv_str += "%e9%99%9f";
break;
case 61603:
conv_str += "%e9%99%a6";
break;
case 61604:
conv_str += "%e9%99%b2";
break;
case 61605:
conv_str += "%e9%99%ac";
break;
case 61606:
conv_str += "%e9%9a%8d";
break;
case 61607:
conv_str += "%e9%9a%98";
break;
case 61608:
conv_str += "%e9%9a%95";
break;
case 61609:
conv_str += "%e9%9a%97";
break;
case 61610:
conv_str += "%e9%9a%aa";
break;
case 61611:
conv_str += "%e9%9a%a7";
break;
case 61612:
conv_str += "%e9%9a%b1";
break;
case 61613:
conv_str += "%e9%9a%b2";
break;
case 61614:
conv_str += "%e9%9a%b0";
break;
case 61615:
conv_str += "%e9%9a%b4";
break;
case 61616:
conv_str += "%e9%9a%b6";
break;
case 61617:
conv_str += "%e9%9a%b8";
break;
case 61618:
conv_str += "%e9%9a%b9";
break;
case 61619:
conv_str += "%e9%9b%8e";
break;
case 61620:
conv_str += "%e9%9b%8b";
break;
case 61621:
conv_str += "%e9%9b%89";
break;
case 61622:
conv_str += "%e9%9b%8d";
break;
case 61623:
conv_str += "%e8%a5%8d";
break;
case 61624:
conv_str += "%e9%9b%9c";
break;
case 61625:
conv_str += "%e9%9c%8d";
break;
case 61626:
conv_str += "%e9%9b%95";
break;
case 61627:
conv_str += "%e9%9b%b9";
break;
case 61628:
conv_str += "%e9%9c%84";
break;
case 61629:
conv_str += "%e9%9c%86";
break;
case 61630:
conv_str += "%e9%9c%88";
break;
case 61631:
conv_str += "%e9%9c%93";
break;
case 61632:
conv_str += "%e9%9c%8e";
break;
case 61633:
conv_str += "%e9%9c%91";
break;
case 61634:
conv_str += "%e9%9c%8f";
break;
case 61635:
conv_str += "%e9%9c%96";
break;
case 61636:
conv_str += "%e9%9c%99";
break;
case 61637:
conv_str += "%e9%9c%a4";
break;
case 61638:
conv_str += "%e9%9c%aa";
break;
case 61639:
conv_str += "%e9%9c%b0";
break;
case 61640:
conv_str += "%e9%9c%b9";
break;
case 61641:
conv_str += "%e9%9c%bd";
break;
case 61642:
conv_str += "%e9%9c%be";
break;
case 61643:
conv_str += "%e9%9d%84";
break;
case 61644:
conv_str += "%e9%9d%86";
break;
case 61645:
conv_str += "%e9%9d%88";
break;
case 61646:
conv_str += "%e9%9d%82";
break;
case 61647:
conv_str += "%e9%9d%89";
break;
case 61648:
conv_str += "%e9%9d%9c";
break;
case 61649:
conv_str += "%e9%9d%a0";
break;
case 61650:
conv_str += "%e9%9d%a4";
break;
case 61651:
conv_str += "%e9%9d%a6";
break;
case 61652:
conv_str += "%e9%9d%a8";
break;
case 61653:
conv_str += "%e5%8b%92";
break;
case 61654:
conv_str += "%e9%9d%ab";
break;
case 61655:
conv_str += "%e9%9d%b1";
break;
case 61656:
conv_str += "%e9%9d%b9";
break;
case 61657:
conv_str += "%e9%9e%85";
break;
case 61658:
conv_str += "%e9%9d%bc";
break;
case 61659:
conv_str += "%e9%9e%81";
break;
case 61660:
conv_str += "%e9%9d%ba";
break;
case 61661:
conv_str += "%e9%9e%86";
break;
case 61662:
conv_str += "%e9%9e%8b";
break;
case 61663:
conv_str += "%e9%9e%8f";
break;
case 61664:
conv_str += "%e9%9e%90";
break;
case 61665:
conv_str += "%e9%9e%9c";
break;
case 61666:
conv_str += "%e9%9e%a8";
break;
case 61667:
conv_str += "%e9%9e%a6";
break;
case 61668:
conv_str += "%e9%9e%a3";
break;
case 61669:
conv_str += "%e9%9e%b3";
break;
case 61670:
conv_str += "%e9%9e%b4";
break;
case 61671:
conv_str += "%e9%9f%83";
break;
case 61672:
conv_str += "%e9%9f%86";
break;
case 61673:
conv_str += "%e9%9f%88";
break;
case 61674:
conv_str += "%e9%9f%8b";
break;
case 61675:
conv_str += "%e9%9f%9c";
break;
case 61676:
conv_str += "%e9%9f%ad";
break;
case 61677:
conv_str += "%e9%bd%8f";
break;
case 61678:
conv_str += "%e9%9f%b2";
break;
case 61679:
conv_str += "%e7%ab%9f";
break;
case 61680:
conv_str += "%e9%9f%b6";
break;
case 61681:
conv_str += "%e9%9f%b5";
break;
case 61682:
conv_str += "%e9%a0%8f";
break;
case 61683:
conv_str += "%e9%a0%8c";
break;
case 61684:
conv_str += "%e9%a0%b8";
break;
case 61685:
conv_str += "%e9%a0%a4";
break;
case 61686:
conv_str += "%e9%a0%a1";
break;
case 61687:
conv_str += "%e9%a0%b7";
break;
case 61688:
conv_str += "%e9%a0%bd";
break;
case 61689:
conv_str += "%e9%a1%86";
break;
case 61690:
conv_str += "%e9%a1%8f";
break;
case 61691:
conv_str += "%e9%a1%8b";
break;
case 61692:
conv_str += "%e9%a1%ab";
break;
case 61693:
conv_str += "%e9%a1%af";
break;
case 61694:
conv_str += "%e9%a1%b0";
break;
case 61857:
conv_str += "%e9%a1%b1";
break;
case 61858:
conv_str += "%e9%a1%b4";
break;
case 61859:
conv_str += "%e9%a1%b3";
break;
case 61860:
conv_str += "%e9%a2%aa";
break;
case 61861:
conv_str += "%e9%a2%af";
break;
case 61862:
conv_str += "%e9%a2%b1";
break;
case 61863:
conv_str += "%e9%a2%b6";
break;
case 61864:
conv_str += "%e9%a3%84";
break;
case 61865:
conv_str += "%e9%a3%83";
break;
case 61866:
conv_str += "%e9%a3%86";
break;
case 61867:
conv_str += "%e9%a3%a9";
break;
case 61868:
conv_str += "%e9%a3%ab";
break;
case 61869:
conv_str += "%e9%a4%83";
break;
case 61870:
conv_str += "%e9%a4%89";
break;
case 61871:
conv_str += "%e9%a4%92";
break;
case 61872:
conv_str += "%e9%a4%94";
break;
case 61873:
conv_str += "%e9%a4%98";
break;
case 61874:
conv_str += "%e9%a4%a1";
break;
case 61875:
conv_str += "%e9%a4%9d";
break;
case 61876:
conv_str += "%e9%a4%9e";
break;
case 61877:
conv_str += "%e9%a4%a4";
break;
case 61878:
conv_str += "%e9%a4%a0";
break;
case 61879:
conv_str += "%e9%a4%ac";
break;
case 61880:
conv_str += "%e9%a4%ae";
break;
case 61881:
conv_str += "%e9%a4%bd";
break;
case 61882:
conv_str += "%e9%a4%be";
break;
case 61883:
conv_str += "%e9%a5%82";
break;
case 61884:
conv_str += "%e9%a5%89";
break;
case 61885:
conv_str += "%e9%a5%85";
break;
case 61886:
conv_str += "%e9%a5%90";
break;
case 61887:
conv_str += "%e9%a5%8b";
break;
case 61888:
conv_str += "%e9%a5%91";
break;
case 61889:
conv_str += "%e9%a5%92";
break;
case 61890:
conv_str += "%e9%a5%8c";
break;
case 61891:
conv_str += "%e9%a5%95";
break;
case 61892:
conv_str += "%e9%a6%97";
break;
case 61893:
conv_str += "%e9%a6%98";
break;
case 61894:
conv_str += "%e9%a6%a5";
break;
case 61895:
conv_str += "%e9%a6%ad";
break;
case 61896:
conv_str += "%e9%a6%ae";
break;
case 61897:
conv_str += "%e9%a6%bc";
break;
case 61898:
conv_str += "%e9%a7%9f";
break;
case 61899:
conv_str += "%e9%a7%9b";
break;
case 61900:
conv_str += "%e9%a7%9d";
break;
case 61901:
conv_str += "%e9%a7%98";
break;
case 61902:
conv_str += "%e9%a7%91";
break;
case 61903:
conv_str += "%e9%a7%ad";
break;
case 61904:
conv_str += "%e9%a7%ae";
break;
case 61905:
conv_str += "%e9%a7%b1";
break;
case 61906:
conv_str += "%e9%a7%b2";
break;
case 61907:
conv_str += "%e9%a7%bb";
break;
case 61908:
conv_str += "%e9%a7%b8";
break;
case 61909:
conv_str += "%e9%a8%81";
break;
case 61910:
conv_str += "%e9%a8%8f";
break;
case 61911:
conv_str += "%e9%a8%85";
break;
case 61912:
conv_str += "%e9%a7%a2";
break;
case 61913:
conv_str += "%e9%a8%99";
break;
case 61914:
conv_str += "%e9%a8%ab";
break;
case 61915:
conv_str += "%e9%a8%b7";
break;
case 61916:
conv_str += "%e9%a9%85";
break;
case 61917:
conv_str += "%e9%a9%82";
break;
case 61918:
conv_str += "%e9%a9%80";
break;
case 61919:
conv_str += "%e9%a9%83";
break;
case 61920:
conv_str += "%e9%a8%be";
break;
case 61921:
conv_str += "%e9%a9%95";
break;
case 61922:
conv_str += "%e9%a9%8d";
break;
case 61923:
conv_str += "%e9%a9%9b";
break;
case 61924:
conv_str += "%e9%a9%97";
break;
case 61925:
conv_str += "%e9%a9%9f";
break;
case 61926:
conv_str += "%e9%a9%a2";
break;
case 61927:
conv_str += "%e9%a9%a5";
break;
case 61928:
conv_str += "%e9%a9%a4";
break;
case 61929:
conv_str += "%e9%a9%a9";
break;
case 61930:
conv_str += "%e9%a9%ab";
break;
case 61931:
conv_str += "%e9%a9%aa";
break;
case 61932:
conv_str += "%e9%aa%ad";
break;
case 61933:
conv_str += "%e9%aa%b0";
break;
case 61934:
conv_str += "%e9%aa%bc";
break;
case 61935:
conv_str += "%e9%ab%80";
break;
case 61936:
conv_str += "%e9%ab%8f";
break;
case 61937:
conv_str += "%e9%ab%91";
break;
case 61938:
conv_str += "%e9%ab%93";
break;
case 61939:
conv_str += "%e9%ab%94";
break;
case 61940:
conv_str += "%e9%ab%9e";
break;
case 61941:
conv_str += "%e9%ab%9f";
break;
case 61942:
conv_str += "%e9%ab%a2";
break;
case 61943:
conv_str += "%e9%ab%a3";
break;
case 61944:
conv_str += "%e9%ab%a6";
break;
case 61945:
conv_str += "%e9%ab%af";
break;
case 61946:
conv_str += "%e9%ab%ab";
break;
case 61947:
conv_str += "%e9%ab%ae";
break;
case 61948:
conv_str += "%e9%ab%b4";
break;
case 61949:
conv_str += "%e9%ab%b1";
break;
case 61950:
conv_str += "%e9%ab%b7";
break;
case 62113:
conv_str += "%e9%ab%bb";
break;
case 62114:
conv_str += "%e9%ac%86";
break;
case 62115:
conv_str += "%e9%ac%98";
break;
case 62116:
conv_str += "%e9%ac%9a";
break;
case 62117:
conv_str += "%e9%ac%9f";
break;
case 62118:
conv_str += "%e9%ac%a2";
break;
case 62119:
conv_str += "%e9%ac%a3";
break;
case 62120:
conv_str += "%e9%ac%a5";
break;
case 62121:
conv_str += "%e9%ac%a7";
break;
case 62122:
conv_str += "%e9%ac%a8";
break;
case 62123:
conv_str += "%e9%ac%a9";
break;
case 62124:
conv_str += "%e9%ac%aa";
break;
case 62125:
conv_str += "%e9%ac%ae";
break;
case 62126:
conv_str += "%e9%ac%af";
break;
case 62127:
conv_str += "%e9%ac%b2";
break;
case 62128:
conv_str += "%e9%ad%84";
break;
case 62129:
conv_str += "%e9%ad%83";
break;
case 62130:
conv_str += "%e9%ad%8f";
break;
case 62131:
conv_str += "%e9%ad%8d";
break;
case 62132:
conv_str += "%e9%ad%8e";
break;
case 62133:
conv_str += "%e9%ad%91";
break;
case 62134:
conv_str += "%e9%ad%98";
break;
case 62135:
conv_str += "%e9%ad%b4";
break;
case 62136:
conv_str += "%e9%ae%93";
break;
case 62137:
conv_str += "%e9%ae%83";
break;
case 62138:
conv_str += "%e9%ae%91";
break;
case 62139:
conv_str += "%e9%ae%96";
break;
case 62140:
conv_str += "%e9%ae%97";
break;
case 62141:
conv_str += "%e9%ae%9f";
break;
case 62142:
conv_str += "%e9%ae%a0";
break;
case 62143:
conv_str += "%e9%ae%a8";
break;
case 62144:
conv_str += "%e9%ae%b4";
break;
case 62145:
conv_str += "%e9%af%80";
break;
case 62146:
conv_str += "%e9%af%8a";
break;
case 62147:
conv_str += "%e9%ae%b9";
break;
case 62148:
conv_str += "%e9%af%86";
break;
case 62149:
conv_str += "%e9%af%8f";
break;
case 62150:
conv_str += "%e9%af%91";
break;
case 62151:
conv_str += "%e9%af%92";
break;
case 62152:
conv_str += "%e9%af%a3";
break;
case 62153:
conv_str += "%e9%af%a2";
break;
case 62154:
conv_str += "%e9%af%a4";
break;
case 62155:
conv_str += "%e9%af%94";
break;
case 62156:
conv_str += "%e9%af%a1";
break;
case 62157:
conv_str += "%e9%b0%ba";
break;
case 62158:
conv_str += "%e9%af%b2";
break;
case 62159:
conv_str += "%e9%af%b1";
break;
case 62160:
conv_str += "%e9%af%b0";
break;
case 62161:
conv_str += "%e9%b0%95";
break;
case 62162:
conv_str += "%e9%b0%94";
break;
case 62163:
conv_str += "%e9%b0%89";
break;
case 62164:
conv_str += "%e9%b0%93";
break;
case 62165:
conv_str += "%e9%b0%8c";
break;
case 62166:
conv_str += "%e9%b0%86";
break;
case 62167:
conv_str += "%e9%b0%88";
break;
case 62168:
conv_str += "%e9%b0%92";
break;
case 62169:
conv_str += "%e9%b0%8a";
break;
case 62170:
conv_str += "%e9%b0%84";
break;
case 62171:
conv_str += "%e9%b0%ae";
break;
case 62172:
conv_str += "%e9%b0%9b";
break;
case 62173:
conv_str += "%e9%b0%a5";
break;
case 62174:
conv_str += "%e9%b0%a4";
break;
case 62175:
conv_str += "%e9%b0%a1";
break;
case 62176:
conv_str += "%e9%b0%b0";
break;
case 62177:
conv_str += "%e9%b1%87";
break;
case 62178:
conv_str += "%e9%b0%b2";
break;
case 62179:
conv_str += "%e9%b1%86";
break;
case 62180:
conv_str += "%e9%b0%be";
break;
case 62181:
conv_str += "%e9%b1%9a";
break;
case 62182:
conv_str += "%e9%b1%a0";
break;
case 62183:
conv_str += "%e9%b1%a7";
break;
case 62184:
conv_str += "%e9%b1%b6";
break;
case 62185:
conv_str += "%e9%b1%b8";
break;
case 62186:
conv_str += "%e9%b3%a7";
break;
case 62187:
conv_str += "%e9%b3%ac";
break;
case 62188:
conv_str += "%e9%b3%b0";
break;
case 62189:
conv_str += "%e9%b4%89";
break;
case 62190:
conv_str += "%e9%b4%88";
break;
case 62191:
conv_str += "%e9%b3%ab";
break;
case 62192:
conv_str += "%e9%b4%83";
break;
case 62193:
conv_str += "%e9%b4%86";
break;
case 62194:
conv_str += "%e9%b4%aa";
break;
case 62195:
conv_str += "%e9%b4%a6";
break;
case 62196:
conv_str += "%e9%b6%af";
break;
case 62197:
conv_str += "%e9%b4%a3";
break;
case 62198:
conv_str += "%e9%b4%9f";
break;
case 62199:
conv_str += "%e9%b5%84";
break;
case 62200:
conv_str += "%e9%b4%95";
break;
case 62201:
conv_str += "%e9%b4%92";
break;
case 62202:
conv_str += "%e9%b5%81";
break;
case 62203:
conv_str += "%e9%b4%bf";
break;
case 62204:
conv_str += "%e9%b4%be";
break;
case 62205:
conv_str += "%e9%b5%86";
break;
case 62206:
conv_str += "%e9%b5%88";
break;
case 62369:
conv_str += "%e9%b5%9d";
break;
case 62370:
conv_str += "%e9%b5%9e";
break;
case 62371:
conv_str += "%e9%b5%a4";
break;
case 62372:
conv_str += "%e9%b5%91";
break;
case 62373:
conv_str += "%e9%b5%90";
break;
case 62374:
conv_str += "%e9%b5%99";
break;
case 62375:
conv_str += "%e9%b5%b2";
break;
case 62376:
conv_str += "%e9%b6%89";
break;
case 62377:
conv_str += "%e9%b6%87";
break;
case 62378:
conv_str += "%e9%b6%ab";
break;
case 62379:
conv_str += "%e9%b5%af";
break;
case 62380:
conv_str += "%e9%b5%ba";
break;
case 62381:
conv_str += "%e9%b6%9a";
break;
case 62382:
conv_str += "%e9%b6%a4";
break;
case 62383:
conv_str += "%e9%b6%a9";
break;
case 62384:
conv_str += "%e9%b6%b2";
break;
case 62385:
conv_str += "%e9%b7%84";
break;
case 62386:
conv_str += "%e9%b7%81";
break;
case 62387:
conv_str += "%e9%b6%bb";
break;
case 62388:
conv_str += "%e9%b6%b8";
break;
case 62389:
conv_str += "%e9%b6%ba";
break;
case 62390:
conv_str += "%e9%b7%86";
break;
case 62391:
conv_str += "%e9%b7%8f";
break;
case 62392:
conv_str += "%e9%b7%82";
break;
case 62393:
conv_str += "%e9%b7%99";
break;
case 62394:
conv_str += "%e9%b7%93";
break;
case 62395:
conv_str += "%e9%b7%b8";
break;
case 62396:
conv_str += "%e9%b7%a6";
break;
case 62397:
conv_str += "%e9%b7%ad";
break;
case 62398:
conv_str += "%e9%b7%af";
break;
case 62399:
conv_str += "%e9%b7%bd";
break;
case 62400:
conv_str += "%e9%b8%9a";
break;
case 62401:
conv_str += "%e9%b8%9b";
break;
case 62402:
conv_str += "%e9%b8%9e";
break;
case 62403:
conv_str += "%e9%b9%b5";
break;
case 62404:
conv_str += "%e9%b9%b9";
break;
case 62405:
conv_str += "%e9%b9%bd";
break;
case 62406:
conv_str += "%e9%ba%81";
break;
case 62407:
conv_str += "%e9%ba%88";
break;
case 62408:
conv_str += "%e9%ba%8b";
break;
case 62409:
conv_str += "%e9%ba%8c";
break;
case 62410:
conv_str += "%e9%ba%92";
break;
case 62411:
conv_str += "%e9%ba%95";
break;
case 62412:
conv_str += "%e9%ba%91";
break;
case 62413:
conv_str += "%e9%ba%9d";
break;
case 62414:
conv_str += "%e9%ba%a5";
break;
case 62415:
conv_str += "%e9%ba%a9";
break;
case 62416:
conv_str += "%e9%ba%b8";
break;
case 62417:
conv_str += "%e9%ba%aa";
break;
case 62418:
conv_str += "%e9%ba%ad";
break;
case 62419:
conv_str += "%e9%9d%a1";
break;
case 62420:
conv_str += "%e9%bb%8c";
break;
case 62421:
conv_str += "%e9%bb%8e";
break;
case 62422:
conv_str += "%e9%bb%8f";
break;
case 62423:
conv_str += "%e9%bb%90";
break;
case 62424:
conv_str += "%e9%bb%94";
break;
case 62425:
conv_str += "%e9%bb%9c";
break;
case 62426:
conv_str += "%e9%bb%9e";
break;
case 62427:
conv_str += "%e9%bb%9d";
break;
case 62428:
conv_str += "%e9%bb%a0";
break;
case 62429:
conv_str += "%e9%bb%a5";
break;
case 62430:
conv_str += "%e9%bb%a8";
break;
case 62431:
conv_str += "%e9%bb%af";
break;
case 62432:
conv_str += "%e9%bb%b4";
break;
case 62433:
conv_str += "%e9%bb%b6";
break;
case 62434:
conv_str += "%e9%bb%b7";
break;
case 62435:
conv_str += "%e9%bb%b9";
break;
case 62436:
conv_str += "%e9%bb%bb";
break;
case 62437:
conv_str += "%e9%bb%bc";
break;
case 62438:
conv_str += "%e9%bb%bd";
break;
case 62439:
conv_str += "%e9%bc%87";
break;
case 62440:
conv_str += "%e9%bc%88";
break;
case 62441:
conv_str += "%e7%9a%b7";
break;
case 62442:
conv_str += "%e9%bc%95";
break;
case 62443:
conv_str += "%e9%bc%a1";
break;
case 62444:
conv_str += "%e9%bc%ac";
break;
case 62445:
conv_str += "%e9%bc%be";
break;
case 62446:
conv_str += "%e9%bd%8a";
break;
case 62447:
conv_str += "%e9%bd%92";
break;
case 62448:
conv_str += "%e9%bd%94";
break;
case 62449:
conv_str += "%e9%bd%a3";
break;
case 62450:
conv_str += "%e9%bd%9f";
break;
case 62451:
conv_str += "%e9%bd%a0";
break;
case 62452:
conv_str += "%e9%bd%a1";
break;
case 62453:
conv_str += "%e9%bd%a6";
break;
case 62454:
conv_str += "%e9%bd%a7";
break;
case 62455:
conv_str += "%e9%bd%ac";
break;
case 62456:
conv_str += "%e9%bd%aa";
break;
case 62457:
conv_str += "%e9%bd%b7";
break;
case 62458:
conv_str += "%e9%bd%b2";
break;
case 62459:
conv_str += "%e9%bd%b6";
break;
case 62460:
conv_str += "%e9%be%95";
break;
case 62461:
conv_str += "%e9%be%9c";
break;
case 62462:
conv_str += "%e9%be%a0";
break;
case 62625:
conv_str += "%e5%a0%af";
break;
case 62626:
conv_str += "%e6%a7%87";
break;
case 62627:
conv_str += "%e9%81%99";
break;
case 62628:
conv_str += "%e7%91%a4";
break;
case 62629:
conv_str += "%e5%87%9c";
break;
case 62630:
conv_str += "%e7%86%99";
break;


		}
	}
	return decodeURIComponent(conv_str);
};
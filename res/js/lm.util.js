function assert(cond,tag,str){
	if(cond)return;
	tag=tag||"<UNKNOWN>";
	str=str||"";
	var estr="["+tag+"]"+" Assert failed: "+str;
	console.log(estr);
	throw new Error(estr);
}
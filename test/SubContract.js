const symbolA = Symbol('SubContract.symbolMethod_A');
const symbolB = Symbol('SubContract.symbolMethod_B');
const symbolC = Symbol('SubContract.symbolMethod_C');

export class SubContract
{
	method4(a,b,c,d){}

	[ symbolA ]() {}
	[ symbolB ]() {}
	[ symbolC ]() {}
}

SubContract.symbolA = symbolA;
SubContract.symbolB = symbolB;
SubContract.symbolC = symbolC;

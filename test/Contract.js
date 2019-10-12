const symbolA = Symbol('Contract.symbolMethod_A');
const symbolB = Symbol('Contract.symbolMethod_B');
const symbolC = Symbol('Contract.symbolMethod_C');

export class Contract
{
	method0(){}
	method1(a){}
	method2(a,b){}
	method3(a,b,c){}

	[ symbolA ]() {}
	[ symbolB ]() {}
	[ symbolC ]() {}
}

Contract.symbolA = symbolA;
Contract.symbolB = symbolB;
Contract.symbolC = symbolC;

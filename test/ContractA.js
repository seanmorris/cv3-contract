const symbolA = Symbol('ContractA.symbolMethod_A');
const symbolB = Symbol('ContractA.symbolMethod_B');
const symbolC = Symbol('ContractA.symbolMethod_C');

export class ContractA
{
	method0(){}
	method1(a){}
	method2(a,b){}
	method3(a,b,c){}

	[ symbolA ]() {}
	[ symbolB ]() {}
	[ symbolC ]() {}
}

ContractA.symbolA = symbolA;
ContractA.symbolB = symbolB;
ContractA.symbolC = symbolC;

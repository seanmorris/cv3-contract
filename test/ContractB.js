const symbol1 = Symbol('ContractB.symbolMethod_1');
const symbol2 = Symbol('ContractB.symbolMethod_2');
const symbol3 = Symbol('ContractB.symbolMethod_3');

export class ContractB
{
	methodA(){}
	methodB(a){}
	methodC(a,b){}
	methodD(a,b,c){}

	[ symbol1 ]() {}
	[ symbol2 ]() {}
	[ symbol3 ]() {}
}

ContractB.symbol1 = symbol1;
ContractB.symbol2 = symbol2;
ContractB.symbol3 = symbol3;

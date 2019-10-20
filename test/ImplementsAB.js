import { Interface } from './Interface';
import { ContractA } from './ContractA';
import { ContractB } from './ContractB';

export class ImplementsAB extends Interface.implements(class{}, ContractA, ContractB)
{
	method0(){}
	method1(a){}
	method2(a,b){}
	method3(a,b,c){}

	[ ContractA.symbolA ](){}
	[ ContractA.symbolB ](){}
	[ ContractA.symbolC ](){}

	methodA(){}
	methodB(a){}
	methodC(a,b){}
	methodD(a,b,c){}

	[ ContractB.symbol1 ](){}
	[ ContractB.symbol2 ](){}
	[ ContractB.symbol3 ](){}
}

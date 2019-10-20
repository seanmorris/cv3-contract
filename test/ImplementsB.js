import { Interface } from './Interface';
import { ContractB } from './ContractB';

export class ImplementsB extends Interface.implements(class{}, ContractB)
{
	methodA(){}
	methodB(a){}
	methodC(a,b){}
	methodD(a,b,c){}

	[ ContractB.symbol1 ](){}
	[ ContractB.symbol2 ](){}
	[ ContractB.symbol3 ](){}
}

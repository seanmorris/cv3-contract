import { Interface } from './Interface';
import { ContractA } from './ContractA';

export class ImplementsA extends Interface.implements(class{}, ContractA)
{
	method0(){}
	method1(a){}
	method2(a,b){}
	method3(a,b,c){}

	[ ContractA.symbolA ](){}
	[ ContractA.symbolB ](){}
	[ ContractA.symbolC ](){}
}

# Learning Typescript

- las variblaes pueden ser de varios tipos, por ejemplo "let cosa: number | string | boolean = "hola" "
- Si no indicas el tipado, se auto indica,esto es llamado inferencia de tipos
- type asertion , si no sabemos el valor de un tipo podemos hacer un cast de la variable y tratarla como queremos

## type assertion

-En algunas ocasiones te encontraras en una situación en la cual tendrás mas información acerca de que tipo esperar que el propio TypeScript. Usualmente, esto pasa cuando sabes que el tipo de una entidad podría ser mas específica que el tipo que tiene en ese momento.

Los type assertions son una forma de decirle al compilador que debe confiar en ti, porque entiendes lo que estas haciendo. Un type assertion es como el type cast de otros lenguajes, pero se ejecuta sin verificar ninguna verificación o reestructurando datos. No tiene impacto durante la ejecución y es manejado exclusivamente por el compilador. TypeScript asume que el programador ha realizado las verificaciones necesarias para cerciorarse que el tipo corresponde al que dice ser.

Los type assertions tienen dos formas.

Uno es la sintaxis usando as.

let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;
En el ejemplo anterior si bien la variable algunValor no es string sino unknown. Le hemos indicado al compilador mediante algunValor as string que confíe que la variable es un string y que sea interpretada como esta.

let algunValor: unknown = "este es un string";
let longitudDelString: number = (<string>algunValor).length;

## Interfaces

- solo existen en tiempo de compilacion
- se usan para verifcar tipos

TypeScript tiene soporte incorporado para interfaces . Una interfaz define las especificaciones de una entidad. Establece el contrato que establece lo que se debe hacer, pero no especifica cómo se hará.

interface Book {
id: number;
title: string;
author: string;
coAuthor?: string; al tener el signo "?" esta propiedad es opcional
isLoan: (id:number) => void
}

## Clases

- existen en tiempo de compilacion y ejecucion
- crear instancias de dicha clase

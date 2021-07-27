import { Pipe, PipeTransform } from "@angular/core";
//Declaração do Pipe
@Pipe({
    /*
     Nome do Pipe => nome que sera utilizado na hora de chamar o pipe nas paginas component.html
     */
    name: 'replece'
})
export class ReplacePipe implements PipeTransform {
    // três parametros => string do campo, referencia do que ira ser substituido, valor que do que ira substituir
    transform(value: string, char: string, valueToReplace){
        return value.replace(char, valueToReplace);
    }
}
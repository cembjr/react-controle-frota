import { format } from "date-fns";

export default class FuncoesUtilitarias {
  public static removerCaracteresInvalidos(valor: string): string {
    return valor
      .replace(" ", "")  
      .replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .replace(".", "")
      .replace(" ", "");
  }

  public static removerCaracteresNaoNumericos(valor: string): string {
    return valor.replace(/\D/g, "");
  }

  public static formatarTelefone(telefone: string): string {
    return telefone.replace(/(\d{2})(\d)(\d{4})(\d{4})$/, "($1) $2 $3-$4");
  }

  public static formatarDataParaTela(data: Date | undefined): string {
    if(!data) return "";
    
    return format(
      new Date(data),
      "dd/MM/yyyy"
    )
  }
}

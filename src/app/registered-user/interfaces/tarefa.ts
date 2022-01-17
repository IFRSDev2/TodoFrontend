import { TipoTarefa } from "./tipoTarefa";

export interface Tarefa {
  id: number;
  nomeTarefa: string;
  tipoTarefa: TipoTarefa;
  local: string;
}

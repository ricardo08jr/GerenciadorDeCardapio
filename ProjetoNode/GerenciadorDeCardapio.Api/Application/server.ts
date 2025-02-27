import fastify from "fastify";
import { ProteinaController} from "./ProteinaController";
import { ProteinaPrismaRepository } from "../Infra/ProteinaPrismaRepository";
import { SaladaController } from "./SaladaController";
import { SaladaPrismaRepository } from "../Infra/SaladaPrismaRepository";
import { AcompanhamentoPrismaRepository } from "../Infra/AcompanhamentoPrismaRepository";
import { AcompanhamentoController } from "./AcompanhamentoController";
const app = fastify()
/* EndPoint Gets */

/* Proteina */
const proteinaRepository = new ProteinaPrismaRepository()
const proteinaController = new ProteinaController(proteinaRepository)
app.register(proteinaController.getProteina)

/* Salada */
const saladaRepository = new SaladaPrismaRepository()
const saladaController = new SaladaController(saladaRepository)
app.register(saladaController.getSalada)

/* Acompanhamento */
const acompanhamentoRepository = new AcompanhamentoPrismaRepository()
const acompanhamentoController = new AcompanhamentoController(acompanhamentoRepository)
app.register(acompanhamentoController.getSalada)


app.listen({port:8000}).then(() =>{
	console.log("Server is gone")
})


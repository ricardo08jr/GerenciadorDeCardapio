import fastify from "fastify";
import { ProteinaController} from "./ProteinaController";
import { ProteinaPrismaRepository } from "../Infra/ProteinaPrismaRepository";
import { SaladaController } from "./SaladaController";
import { SaladaPrismaRepository } from "../Infra/SaladaPrismaRepository";
import { AcompanhamentoPrismaRepository } from "../Infra/AcompanhamentoPrismaRepository";
import { AcompanhamentoController } from "./AcompanhamentoController";
import { PratoPrismaRepository } from "../Infra/PratoPrismaRepository";
import { PratoService } from "../Domain/Services/PratoService";
import { CardapioService } from "../Domain/Services/CardapioService";
import { PratoController } from "./PratoController";
import { CardapioController } from "./CardapioController";
// import cors from "@fastify/cors";
const app = fastify()
// /* EndPoint Gets */
// app.register(cors, {
// 	origin: "http://localhost:3000", // URL do seu frontend React
// 	methods: ["GET", "POST", "PUT", "DELETE"]
//   });
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
/* Prato */
const pratoRepository = new PratoPrismaRepository()
const pratoService = new PratoService(saladaRepository,pratoRepository,proteinaRepository,acompanhamentoRepository)
const pratoController = new PratoController(pratoRepository,pratoService)
app.register(pratoController.getPrato)
app.register(pratoController.createPrato)
/* Cardapio */
// const cardapioRepositorio = new Carda
// const cardapioService = new CardapioService(pratoRepository)
// const cardapioController = new CardapioController(pratoRepository,pratoService)
// app.register(pratoController.getPrato)

app.listen({port:8000}).then(() =>{
	console.log("Server is gone")
})

